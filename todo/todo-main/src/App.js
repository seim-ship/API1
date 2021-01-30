import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from './actions/todo.actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.users = [
      {id: 1, name: 'john'},
      {id: 2, name: 'paul'},
      {id: 3, name: 'richard'}
    ];
    this.clickUser = this.clickUser.bind(this); 
  }
  
  clickUser(e){
    alert(e.target.value);
  }
  
  render(){
    return (
      <div>
        {this.users.map((user) => {
           return (
             <li
               key={user.id}
               value={user.name}
               onClick={this.clickUser}>{user.name}</li>
           );
         })}
       </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);