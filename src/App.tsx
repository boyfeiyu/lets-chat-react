import React, { memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import Login from './pages/login/Login'

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  )
})

export default App