import React, { useState } from 'react'
import "./Compose.css"
import MinimizeIcon from '@material-ui/icons/Minimize';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMsg } from '../features/mailSlice';

import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import db from '../firebase';

const Compose = () => {
    const disp =useDispatch()
    const [to,setTo]=useState("")
    const [subject,setSubject]=useState("")
    const [message,setMessage]=useState(" ")

    const user=useSelector(selectUser)

    const formSubmit=(e)=>{
        e.preventDefault()
        if (to === "")
        {
            return alert("Recipient Name is required ")
        }
        if (subject === "")
        {
            return alert("subject is required ")
        }
        if (message === "")
        {
            return alert("message is required ")
        }
        db.collection("emails").add({
            to,
            subject,
            from:user.email,
            fromName:user.displayName,
            message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setTo("")
        setMessage("")
        setSubject("")
        disp(closeSendMsg())
        alert("Email sent successfully")
    }

    return (
        <div className='compose'>
            <div className='compose_header'>
                <div className='compose_headerLeft'>
                    <span>New Message</span>
                </div>
                <div className='compose_headerRight'>
                    <MinimizeIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => disp(closeSendMsg())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className='compose_body'>
                    <div className='compose_bodyForm'>
                        <input type='email' placeholder='Recipients' value={to} onChange={(e)=>setTo(e.target.value)}/>
                        <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                        <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
                    </div>
                </div>
                <div className='compose_footer'>
                    <div className='compose_footerLeft'>
                        <button type='submit'>Send <ArrowDropDownIcon /></button>
                    </div>
                    <div className='compose_footerRight'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <InsertLinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <InsertPhotoOutlinedIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose