let express = require('express');
let multer = require('multer');
let Excel = require('exceljs');
let moment = require('moment');
let currency = require('currency.js');

let router = module.exports = express.Router();
let upload = multer();

function getTransactions(worksheet) {
    let transactions = [];
    worksheet.eachRow(row => {
        if (row.actualCellCount === 4) {
            let date = row.findCell(1).value
            let description = row.findCell(2).value
            let expenseCell = row.findCell(3)
            let incomeCell = row.findCell(4)
            let amount = (expenseCell) ? expenseCell.value : (incomeCell) ? incomeCell.value : 0
            if (date !== null) {
                transactions.push({
                    date: moment(date, "DD/MM/YYY").toDate(),
                    description: description.replace(/ +(?= )/g, ''),
                    amount: currency(amount)
                })
            }
        }
    })
    return transactions
}

/* POST upload file to import. */
router.post('/upload', upload.single('file'), function (req, res) {
    let workbook = new Excel.Workbook();
    workbook.xlsx.load(req.file.buffer)
        .then(function() {
            res.json({
                transactions: getTransactions(workbook.worksheets[0])
            });
        });
});