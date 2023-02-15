import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import "./EmailList.css"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';

import ReplyIcon from '@material-ui/icons/Reply';
import StarBorder from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
import { selectsMail } from '../features/mailSlice';
import { useSelector } from 'react-redux';
const EmailDetail = () => {
    const history=useHistory()
    const Mail=useSelector(selectsMail)
    console.log(Mail)
    return (
        <div className='emailDetail'>
            <div className='emailList_setting'>
                <div className='emailList_settingLeft'>
                    <IconButton>
                        <ArrowBackIcon onClick={()=>history.push("/")}/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList_settingRight'>
                    <p>1-50 of 10,234</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emailDetail_msg'>

                <div className='emailDetail_header'>
                    <div className='emailDetail_headerLeft'>
                        <h4>{Mail.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                    </div>
                    <div className='emailDetail_headerRight'>
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emailDetail_middle'>
                    <div className='emailDetail_middleLeft'>
                        <IconButton>
                            <Avatar />
                        </IconButton>

                        <h4>{Mail.name}</h4>
                        <p>{Mail.email}</p>
                    </div>
                    <div className='emailDetail_middleRight'>
                        <p>{Mail.time}</p>
                        <IconButton>
                            <StarBorder />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="emailDetal_body">
                    <p>{Mail.content}</p>
                </div>
            </div>
        </div>
    )
}

export default EmailDetail