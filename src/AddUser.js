import React, { Component } from 'react';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            date: '',
            username: '',
            password: '',
            sex: '1',
            general_introduction: '',
        };
    }

    linkList = () => {
        this.props.closeForm()
    }
    handleAddUser = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.AddUser(this.state);
        this.linkList();
    }
    isChangedInfo = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
           [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleAddUser}>
                <div className="container">
                    <h2>Add New User</h2>
                    <div className="form-group">
                        <label>Id</label>
                        <input name="id" type="text" className="form-control" value={this.state.id} onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="text" className="form-control" value={this.state.name}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" className="form-control" value={this.state.email}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Date of birth</label>
                        <input name="date" type="date"  className="form-control" value={this.state.date}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" type="text" className="form-control" value={this.state.username}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" value={this.state.password}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Sex</label>
                        <select name="sex" value={this.state.sex} className="form-control" onChange={this.isChangedInfo}>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>General introduction</label>
                        <input name="general_introduction" type="text" value={this.state.general_introduction} className="form-control"  onChange={this.isChangedInfo} />
                    </div>

                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-primary" >Add</button>
                    <button type="button" className="btn btn-danger" onClick={this.linkList} >Back</button>
                </div>
                
            </form>

        );
    }
}
// }

export default AddUser;