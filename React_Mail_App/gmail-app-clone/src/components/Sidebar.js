
import { Button } from '@material-ui/core'
import React from 'react'
import "./sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import ReportIcon from '@material-ui/icons/Report';
import { useDispatch } from 'react-redux';
import { openSendMsg } from '../features/mailSlice';

const Sidebar = () => {
  const dispatch= useDispatch()
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon/>} className="compose_btn" onClick={()=>dispatch(openSendMsg())   }>Compose</Button>
        <SidebarOptions Icon={InboxIcon} title="Inbox" number="232" isactive={true}/>
        <SidebarOptions Icon={StarOutlineIcon} title="starred" number="22" />
        <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number="2" />
        <SidebarOptions Icon={SendIcon} title="Sent" number="12" />
        <SidebarOptions Icon={DraftsIcon} title="Drafts" number="3" />
        <SidebarOptions Icon={ReportIcon} title="Spam" number="52" />
        <SidebarOptions Icon={DeleteIcon} title="Bin" number="32" />
        <SidebarOptions Icon={LabelIcon} title="Categories" number="3" />
    </div>
  )
}

export default Sidebar