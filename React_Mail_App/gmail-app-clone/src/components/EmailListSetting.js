import React from 'react'
import "./EmailList.css"
import { IconButton } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const EmailListSetting = () => {
  return (
      <div className='emailList_setting'>
          <div className='emailList_settingLeft'>
              <IconButton>
                <CheckBoxOutlineBlankIcon />
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
  )
}

export default EmailListSetting