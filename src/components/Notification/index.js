import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-card">
      <div className="content">
        {children}
      </div>
      <button className="close-btn">
        <GrFormClose />
      </button>
    </div>
  )
}

export default Notification