import React from 'react';
import UserItem from './UserItem';
import Card from '../Element/Card';
import './UserList.css';
const UserList = (props) =>{
  if(props.items.length === 0){
    return(
      <div className='center'>
      <Card>
      <h2>No users found...</h2>
      </Card>
      </div>
    )
  }
  return <ul className='users-list'>
  {props.items.map(user =>{
    return <UserItem key={user.id}
     id  = {user.id}
     image = {user.image}
     name=  {user.name} 
     from = {user.from}
     />
  })}
  </ul>
}
export default UserList;