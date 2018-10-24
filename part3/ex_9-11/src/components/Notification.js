import React from 'react'
import '../stylesheets/notification.css'

const Notification = ({success}) => {

  if (success) {
    return(
      <div id="message">{success}</div>
    )
  } else {
    return null
  }

}

export default Notification