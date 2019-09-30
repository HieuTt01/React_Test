import React, { Component } from 'react';
import UserList from './UserList';

class EditUser extends Component {
    constructor(props) {
        super(props)
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
    componentWillMount(){
        if(this.props.useredit){
            this.setState({
                id : this.props.useredit.id,
                name:this.props.useredit.name,
                email:this.props.useredit.email,
                date:this.props.useredit.date,
                username:this.props.useredit.username,
                password:this.props.useredit.password,
                sex:this.props.useredit.sex,
                general_introduction:this.props.useredit.general_introduction
            });
        }
    }
    deleteUser =() => {
        this.props.deleteUser(this.props.useredit.id);
    }
    
    handleEditUser = (event) => {
        event.preventDefault();
        this.props.editUser(this.state);
        this.linkList()
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
            <form onSubmit={this.handleEditUser}>
                <div className="container">
                    <h2>Edit Info User</h2>
                    <div className="form-group">
                        <label>Id</label>
                        <input name="id" type="text" className="form-control" value={this.state.id} onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name"  type="text" value={this.state.name}className="form-control"  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" value={this.state.email}className="form-control"  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Date of birth</label>
                        <input name ="date" type="date" value={this.state.date}className="form-control"  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" type="text" className="form-control" value={this.state.username}  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" value={this.state.password} className="form-control"  onChange={this.isChangedInfo} />
                    </div>
                    <div className="form-group">
                        <label>Sex</label>
                        <select name="sex"  value={this.state.sex} className="form-control" onChange={this.isChangedInfo}>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select> 
                    </div>
                    <div className="form-group">
                        <label>General introduction</label>
                        <input name="general_introduction" type="text" value={this.state.general_introduction} className="form-control"  onChange={this.isChangedInfo} />
                    </div>
                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-primary" >Edit</button>
                    <button type="button" style={{ marginRight: 850 + 'px' }} className="btn btn-default" onClick={this.linkList}>Back</button>
                    <button type="button" className="btn btn-danger" 
                        onClick={
                            (e) => { 
                                if(window.confirm('Bạn có muốn xóa user : '+ this.state.username)){
                                        this.deleteUser(e);
                                        this.linkList();
                                }
                            } 
                        } 
                    >Delete
                    </button>
                   
                </div>
            </form>
        );
    }
}


export default EditUser;