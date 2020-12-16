import React from 'react'
import { Message } from 'semantic-ui-react'
/*
  message when something was worng in the redux form
  you can pass the msg and the title
*/
const MessageExampleNegative = ({msg, title}) => (
  <Message negative>
    <Message.Header>{title}</Message.Header>
    <p>{msg}</p>
  </Message>
)

export default MessageExampleNegative