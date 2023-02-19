import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import StarOutline from '@material-ui/icons/StarOutline'
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { openMsg } from '../features/mailSlice'

const EmailBody = ({name,subject,content,email,time}) => {
    const history=useHistory()
    const dispatch=useDispatch()
    const dis=useDispatch()

    const openMail=()=>{
        dispatch(openMsg({
            name,
            subject,
            content,
            email,
            time
        }))
        history.push("/mail")
    }

    const deleteMail=()=>{
        dis(openMsg({
            name,
            subject,
            content,
            email,
            time
        }))
        history.push("/bin")
    }
  return (
    <div className='emailBody' onClick={openMail}>
        <div className='emailBody_left'>
            <CheckBoxOutlineBlank/>
            <StarOutline/>
            <h4>{name}</h4>

        </div>
        <div className='emailBody_middle'>
            <div className='emailBody_middle_msg'>
                <p><b>{subject}</b> {content}</p>
            </div>
        </div>
        <div className='emailBody_icons'>
            <DeleteIcon onClick={deleteMail}/>
            <DraftsOutlinedIcon/>
        </div>
        <div className='emailBody_right'>
            <p>{time}</p>
        </div>
    </div>
  )
}

export default EmailBody