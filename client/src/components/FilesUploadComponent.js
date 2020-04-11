import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import currency from 'currency.js';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: '',
            transactions: []
        }
    }

    onFileChange(e) {
        this.setState({file: e.target.files[0]})
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.file)
        axios.post("http://localhost:8000/api/services/import/upload", formData, {}).then(res => {
            const transactions = res.data.transactions;
            this.setState({transactions});
        })
    }

    toCurrency(value) {
        return currency(value, { symbol:"$", separator: ",", decimal: "." }).format(true)
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <h3>Import Transactions</h3>
                <div className="form-group">
                    <input type="file" onChange={this.onFileChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Upload</button>
                </div>
            </form>

            {(this.state.transactions.length > 0) && (
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.transactions.map((transaction, i) =>
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{moment(Date.parse(transaction.date)).format("DD/MM/YYY")}</td>
                            <td>{transaction.description}</td>
                            <td className="text-right">{this.toCurrency(transaction.amount)}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>;
    }
}