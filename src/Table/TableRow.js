import React from 'react';
import List from './List.js';

class TableRow extends React.Component {

    renderUser() {
        return  this.props.userlist.map((user,index,userlist) =>{

            return( 
                <List key={user.id} user={user} 
                    deleteUser={this.props.deleteUser} preEditUser={this.props.preEditUser}  />
            );
        })
     
    };
    
    render(){
        return (
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
                            <th>Option</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUser()}
                    </tbody>
             </table>
        );
    }
}
export default TableRow;