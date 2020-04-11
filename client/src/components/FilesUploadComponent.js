import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: ''
        }
    }

    onFileChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.file)
        axios.post("http://localhost:8000/api/services/import/upload", formData, {}).then(res => {
            console.log(res)
        })
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <h3>Upload File</h3>
            <div className="form-group">
                <input type="file" onChange={this.onFileChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Upload</button>
            </div>
        </form>;
    }
}