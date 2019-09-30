import React, { Component } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import TableRow from './Table/TableRow.js';
import Search from './Table/Search.js';

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            showAddForm: false,
            showEditForm: false,
            userlist: [],
        }
    }
    addStatus = () => {
        this.setState({
            showAddForm: true,
            showEditForm: false,   
        })
    }
    editStatus = () => {
        this.setState({
            showAddForm:false,
            showEditForm: true,
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false,
        })
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('userlist')){
            var userlist = JSON.parse(localStorage.getItem('userlist'));
            this.setState({
                userlist: userlist,
            });
        }
    }
    AddUser = (newUser) => {
        var userlist = this.state.userlist;
        userlist.push(newUser);
        this.setState({
            userlist: userlist,
        });
        localStorage.setItem('userlist', JSON.stringify(userlist));
       
    }
    deleteUser=(id)=>{
       
        var userlist=this.state.userlist;
        var index =this.findIndex(id);
        if(index !== -1){
            userlist.splice(index,1);
            this.setState({
                userlist: userlist
            });
            localStorage.setItem('userlist',JSON.stringify(userlist));
        }
    }
    preEditUser=(id)=>{
        var index =this.findIndex(id);
        var useredit = this.state.userlist[index];
        this.setState({
            useredit : useredit
        });
        this.editStatus();
    }
    editUser=(user)=>{
        var index =this.findIndex(user.id);
        var userlist = this.state.userlist;
        userlist[index] = user;
        this.setState({
            userlist : userlist
        }) ;
        localStorage.setItem('userlist',JSON.stringify(userlist));
    }

    findIndex=(id)=>{
        var userlist = this.state.userlist;
        var value = -1;
        userlist.forEach((userlist,index)=>{
            if(userlist.id === id){
                value = index;
            }
        });
        return value;
    }
    searchUser=(filter,value)=>{
        if(filter == 0){
            var userlist =JSON.parse(localStorage.getItem('userlist'));
            this.setState({
                userlist:userlist
            });
        }
        else if(filter == 1){
            this.searchName(value);
        }
        else if(filter == 2){
            this.searchEmail(value);
        }
        else if(filter == 3){
            this.searchDate(value);
        }

    }
    searchName(name){
        var value = [];
        var userlist =this.state.userlist;
        if(name ===''){
            var userlist =JSON.parse(localStorage.getItem('userlist'));
            this.setState({
                userlist:userlist
            });
        }
        else{
            for( let i=0;i<userlist.length;i++){
                if(userlist[i].name.indexOf(name) !== -1)
                    value.push(userlist[i]);
            }
            this.setState({
                userlist:value
            });
        }
    }
    searchEmail(email){
        var value = [];
        var userlist =this.state.userlist;
        if(email===''){
            var userlist =JSON.parse(localStorage.getItem('userlist'));
            this.setState({
                userlist:userlist
            });
        }
        else{
            for( let i=0;i<userlist.length;i++){
                if(userlist[i].email.indexOf(email) !== -1)
                    value.push(userlist[i]);
            }
            this.setState({
                userlist:value
            });
        }
    }
    searchDate(date){
        var value = [];
        var userlist =this.state.userlist;
        if(date===''){
            var userlist =JSON.parse(localStorage.getItem('userlist'));
            this.setState({
                userlist:userlist
            });
        }
        else{
            for( let i=0;i<userlist.length;i++){
                if(userlist[i].date.indexOf(date) !== -1)
                    value.push(userlist[i]);
            }
            this.setState({
                userlist:value
            });
        }
    }
    render() {
        var userlist = this.state.userlist;
        if (this.state.showEditForm === true) {
            return (
                <EditUser useredit={this.state.useredit} editUser = {this.editUser}  deleteUser={this.deleteUser} closeForm={this.closeForm} />
            )
        }
        if (this.state.showAddForm === true) {
            return (
                <AddUser AddUser={this.AddUser} closeForm={this.closeForm} />
            )
        }
        else
        return (
            <div className="container">
                <br />
                <br />
                <button  type="button" className="btn btn-primary col-xs-1" onClick={this.addStatus} >Add User</button>
                <Search searchUser={this.searchUser}/>
                <br />
                <h2>User List</h2>
                <TableRow 
                    deleteUser={this.deleteUser}
                    preEditUser={this.preEditUser} 
                    userlist={userlist}
                 />
            </div>
        );
    }
   
}
export default UserList;