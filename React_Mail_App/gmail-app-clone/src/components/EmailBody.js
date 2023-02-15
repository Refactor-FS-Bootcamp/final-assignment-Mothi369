import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import StarOutline from '@material-ui/icons/StarOutline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { openMsg } from '../features/mailSlice'

const EmailBody = ({name,subject,content,time}) => {
    const history=useHistory()
    const dispatch=useDispatch()

    const openMail=()=>{
        dispatch(openMsg({
            name,
            subject,
            content,
            time
        }))
        history.push("/mail")
    }
  return (
    <div className='emailBody' onClick={openMail}>
        <div className='emailBody_left'>
            <CheckBoxOutlineBlank/>
            <StarOutline/>
            <h4>{name}</h4>

        </div>
        <div className='emailBody_middle'>
            <div className='emailBody_middle_msg' >
                <p><b>{subject}</b> {content}</p>
            </div>
        </div>
        <div className='emailBody_right'>
            <p>{time}</p>
        </div>
    </div>
  )
}

export default EmailBody