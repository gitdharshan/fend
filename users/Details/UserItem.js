import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Element/Avatar';
import Card from '../Element/Card';
import './UserItem.css';

const UserItem = (props) =>{
 return(
  <li className='user-item'>
  <Card className='user-item__content'>
  <Link to={`/${props.id}/movies`}>
   <div className='user-item__image'> 
   <Avatar image={props.image} name={props.name}/>
   
   </div>

   <div className='user-item__info'>
   <h2>{props.name}</h2>
   <h3>{props.from}</h3>
   
   </div>
  
  </Link>
  
  </Card>
  
  </li>
 )
}

export default UserItem;