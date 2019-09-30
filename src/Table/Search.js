import React,{Component} from 'react';
class Search extends React.Component{
  constructor(props) {
    super(props)
      this.state = {
          filter: '0',
          valuesearch:'' 
    };
  }
  isChangedInfo = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
       [name]: value
    });
  }
  searchUser = (event) => {
    event.preventDefault();
    var filter = this.state.filter;
    var value = this.state.valuesearch;
    this.props.searchUser(filter,value);
}
  render(){ 
      return (
              <div className="col-xs-5 col-xs-offset-2">
                <div className="input-group">
                  <div className="input-group-btn search-panel">
                      <select style={{width: 65}} name="filter" className="form-control" value={this.state.filter} onChange={this.isChangedInfo}>
                          <option value="0" selected>All</option>
                          <option value="1">Name</option>
                          <option value="2">Email</option>
                          <option value="3">Date of birth</option>
                      </select>
                  </div>      
                  <input type="text" className="form-control" name="valuesearch" placeholder="Search term..."
                    value={this.state.valuesearch} 
                    onChange={this.isChangedInfo}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" 
                      onClick={this.searchUser} 
                    />
                    </button>
                  </span>
                </div>
              </div>
      );
  }
}

export default Search;