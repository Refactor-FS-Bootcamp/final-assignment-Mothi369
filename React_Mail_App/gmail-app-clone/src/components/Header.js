import React from 'react'
import "./header.css"
import ReorderIcon from '@material-ui/icons/Reorder';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';

const Header = () => {
    const user =useSelector(selectUser)
    //console.log("User",user)
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <ReorderIcon/>
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt='logo'/>
        </div>
        <div className='header_middle'>
              <div className='search_mail'>
                  <IconButton>
                      <SearchIcon />
                  </IconButton>
                  <input type="input" placeholder='search mails' />
                  <IconButton>
                      <ExpandMoreIcon />
                  </IconButton>
              </div>
        </div>
        <div className='header_right'>
            <IconButton>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}/>
        </div>
    </div>
  )
}

export default Header