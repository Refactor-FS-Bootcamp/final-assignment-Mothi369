import Inbox from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React from 'react'
import "./EmailList.css"

const EmailType = () => {
  return (
    <div className='emailType'>
        <div className='emailType_options emailType_options--active'>
            <Inbox/>
            <p>Primary</p>
        </div>
        <div className='emailType_options'>
            <PeopleIcon/>
            <p>Social</p>
        </div>
        <div className='emailType_options'>
            <LocalOfferIcon/>
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default EmailType