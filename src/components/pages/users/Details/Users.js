import React from 'react';
import UserList from './UserList';

const Users =  () =>{
  const USERS =[
    {
      id: 1,
      name:'Dharshan',
      image:'https://instagram.fcjb5-2.fna.fbcdn.net/v/t51.2885-19/473547173_2026039327809199_186025215535181004_n.jpg?_nc_ht=instagram.fcjb5-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=DVyxFqgiDBQQ7kNvgG4VpFt&_nc_gid=936028f0503045ed84918d67e14514c0&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYB_9me9YSNXB_VPt_0Khgb53NqEYo80Qmu90xNNUpNbag&oe=67A578C7&_nc_sid=7a9f4b',
      from:'CBE'
    }
  ];

  return <UserList items={USERS}/>
}

export default Users;