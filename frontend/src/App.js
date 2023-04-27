import React, { useState } from 'react'
import ChatList from './components/ChatList'
import ChatForm from './components/ChatForm'
import Header from './components/Header'
import Card from './components/shared/Card'
import BtnSubmit from './components/BtnSubmit'
import {ChatProvider} from "./context/ChatContext"

function App() {
  const [chat, setChat] = useState('') //ChatData

  return (
    <ChatProvider>
    </ChatProvider>
  )
}

export default App
