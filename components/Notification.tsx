import React from 'react'

type NotificationProps = {
  message: string
  type: 'success' | 'error' | 'info'
}

const Notification = ({ message, type }: NotificationProps) => {
  let backgroundColor
  switch (type) {
    case 'success':
      backgroundColor = 'green'
      break
    case 'error':
      backgroundColor = 'red'
      break
    case 'info':
    default:
      backgroundColor = 'blue'
  }

  return <div style={{ backgroundColor }}>{message}</div>
}

export default Notification
