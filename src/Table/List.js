import React,{Component} from 'react';
class List extends React.Component{
    deleteUser =() => {
        this.props.deleteUser(this.props.user.id);
    }
   preEditUser =() =>{
        this.props.preEditUser(this.props.user.id);
    }
    convertSex(sex){
        if(sex === '1') 
            return 'Male';
        else if(sex === '2') 
            return 'Female';
        else 
            return '';
    }
    render(){ 
        var user = this.props.user;
      
        return (
            
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td><p>{this.convertSex(user.sex)}</p></td>
                    <td>{user.username}</td>
                    <td >{user.password}</td>
                    <td><textarea readOnly value={user.general_introduction}></textarea></td>
                    <td>
                        <button type="button" style={{ marginRight: 5 + 'px' }} className="btn btn-info" 
                            onClick={(e)=>{this.preEditUser(e)}}
                        >Edit
                        </button> 

                        <button type="button" className="btn btn-danger" 
                            onClick={
                           
                                (e) => { 
                                    if(window.confirm('Bạn có muốn xóa user : '+ user.username)){
                                            this.deleteUser(e);
                                    }
                                } 
        }
                        >Delete
                        </button>
                    </td>
                </tr>
                
 
            
        );
    }
}

export default List;