import React from 'react';
import List from './List.js';
import '../index.css';

class TableRow extends React.Component {

    renderUser() {
        return  this.props.userlist.map((user,index,userlist) =>{

            return( 
                <List key={user.id} user={user} 
                    deleteUser={this.props.deleteUser} preEditUser={this.props.preEditUser}  />
            );
        })
     
    };
    //   isChangeID=(event)=>{
    //     var value = event.target.value;
    //       this.props.searchID(value);
    //   }
      isChangeName=(event)=>{
        var value = event.target.value;
          this.props.searchName(value);
      }
      isChangeEmail=(event)=>{
        var value = event.target.value;
          this.props.searchEmail(value);
      }
      isChangeDate=(event)=>{
        var value = event.target.value;
          this.props.searchDate(value);
      }
    
    render(){
        return (
            <div className="divover">
                <table  className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date of birth</th>
                                <th>Sex</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>General introduction</th>
                                <th style={{width: 80}}>Option</th>
                                
                            </tr>
                            <tr>
                                <th><input type="text" className="tex" onChange={this.isChangeId} ></input></th>
                                <th><input type="text" className="tex" onChange={this.isChangeName} ></input></th>
                                <th><input type="text" className="tex" onChange={this.isChangeEmail}></input></th>
                                <th><input type="text" className="tex" onChange={this.isChangeDate}></input></th>
                                <th><input type="text" className="tex" ></input></th>
                                <th><input type="text" className="tex" ></input></th>
                                <th><input type="text" className="tex" ></input></th>
                                <th><input type="text" className="tex" ></input></th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUser()}
                        </tbody>
                </table>
             </div>
        );
    }
}
export default TableRow;