import React, { useEffect, useState } from 'react'
import db from '../firebase'

import Compose from './Compose'
import EmailBody from './EmailBody'
import "./EmailList.css"
import EmailListSetting from './EmailListSetting.js'
import EmailType from './EmailType'


const EmailList = () => {
  const [emails,setEmails]=useState([])

  useEffect(()=>{
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snap=>{
      setEmails(snap.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])
  console.log(emails)

  return (
    <div className='emailList'>
       <EmailListSetting/>
       <EmailType/>
       {
        emails.map(({id,data})=>{
          return <EmailBody key={id} name={data.to} subject={data.subject} content={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
        })
       }
       <EmailBody name="Mothi" subject="Accpet Invitation" content=" This is my first react app to develop gmail clone. Please accept this invitation gives free of cost enrollment" time="10:10 PM" />
       
       <EmailBody name="Royal" subject="Unlimited Package lorem lklgffg" content="enjoy unlimited offer" time="11:00 PM"/>
        
    </div>
  )
}

export default EmailList