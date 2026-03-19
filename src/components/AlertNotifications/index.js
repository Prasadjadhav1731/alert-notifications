import Notification from '../Notification'
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

const AlertNotifications = () => {
  return (
    <div className="app-container">
      <h1>Alert Notifications</h1>

      <Notification>
        <AiFillCheckCircle className="icon success" />
        <div>
          <h1>Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>

      <Notification>
        <RiErrorWarningFill className="icon error" />
        <div>
          <h1>Error</h1>
          <p>Sorry, you are not authorized to delete the file</p>
        </div>
      </Notification>

      <Notification>
        <MdWarning className="icon warning" />
        <div>
          <h1>Warning</h1>
          <p>Viewers can see comments and suggestions</p>
        </div>
      </Notification>

      <Notification>
        <MdInfo className="icon info" />
        <div>
          <h1>Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </div>
  )
}

export default AlertNotifications