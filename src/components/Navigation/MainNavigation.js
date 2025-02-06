import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';

const MainNavigation = (props) =>{
  const[drawerIsOpen,setDrawersIsOpen] = useState(false);

  const openDrawerHandler = () =>{
    setDrawersIsOpen(true);
  }
  const closeDrawerHandler = () =>{
    setDrawersIsOpen(false);
  }
  return(
    <React.Fragment>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
    {drawerIsOpen && (

       <SideDrawer 
       show={drawerIsOpen}
       onClick={closeDrawerHandler}
       >
       <nav className='main-navigation__drawer-nav'>
       <NavLinks />
       
       </nav>
       
       </SideDrawer>
    )}

    <MainHeader>
    
    <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
    <span />
    <span />
    <span />
    
    </button>
     <h1 className='main-navigation__title'>
     <Link to="/">IMDB APP</Link>
     </h1>
     <nav>
     <NavLinks />
     
     </nav>
    </MainHeader>
    
    
    </React.Fragment>
  )
}

export default MainNavigation;