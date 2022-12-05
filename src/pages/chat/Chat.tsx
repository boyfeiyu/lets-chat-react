import React, { memo, useEffect, useRef, useState } from 'react'
import { Layout, Input, Button } from 'antd';
import { ChatWrapper, ChatContentWrapper } from './styles/chat'
import { useLocalStorage } from '@/hooks/useLocalTtorage';
import fyRequest from '@/service';

import { io } from "socket.io-client";
import { SOCKET_BASE_URL } from '@/global/socket.config';

const { Header, Footer, Sider, Content } = Layout;

const { TextArea } = Input;



const Chat = memo(() => {

  const socket = io(SOCKET_BASE_URL)


  const { userId, name, avatorUrl, token } = useLocalStorage()
  const [userList, setUserList] = useState<Array<any>>([])

  const [currentToUser, setCurrentToUser] = useState({
    name: '',
    id: -1
  })

  // 获取消息列表
  async function fetchMessages() {
    const messagesRes = await fyRequest.get(
      {
        url: `/message?sender=${userId}&receiver=${currentToUser.id}`
      }
    )
    setMessages(messagesRes.messageList)
  }

  // currentTouser变化后，更新消息列表
  useEffect(() => {
    fetchMessages()
  }, [currentToUser])

  // 监听用户列表的点击
  const handleUserClick = (user: any) => {
    setCurrentToUser(user)
    setIsFirst(false)
  }

  const [messages, setMessages] = useState([
    {
      "id": -1,
      "message": '',
      "d": "left"
    },
  ])

  // 获取用户列表
  const getUserList = async () => {
    const userListRes = await fyRequest.get({
      url: '/user'
    })
    setUserList(userListRes.userList)
  }

  useEffect(() => {
    getUserList()
  }, [])

  // 监听聊天数据的变化，改变聊天容器元素的 scrollTop 值让页面滚到最底部
  const messageListRef = useRef(null)
  useEffect(() => {
    const current = messageListRef.current! as any
    //scrollHeight是页面的高度
    current.scrollTop = current.scrollHeight
  }, [messages])

  // 发送消息
  const handleSendBtnClick = async () => {
    await fyRequest.post({
      url: '/message',
      data: {
        "sender": userId,
        "receiver": currentToUser.id,
        "message": currentInputValue
      }
    })
    socket.emit('sendMessage', userId, currentToUser.id)

    fetchMessages()
    setCurrentInputValue('')
  }
  // 输入框
  const [currentInputValue, setCurrentInputValue] = useState('')
  const onChange = (e: any) => {
    setCurrentInputValue(e.target.value)
  }
  // socket
  useEffect(() => {
    socket.on('showMessage', (sender, receiver) => {
      if (receiver === userId && sender === currentToUser.id) {
        fetchMessages()
      }
    })
    return () => {
      socket.off('showMessage')
    }
  }, [currentToUser, userId])

  // 遮罩层，
  const [isFirst, setIsFirst] = useState(true)

  return (
    <ChatWrapper>
      <div className="main-content">
        <Layout className='wh layout' >
          <Sider className='sider'>
            <ul className="userlist">
              {
                userList.
                  filter(item => item.id != userId).
                  sort((a, b) => a.id - b.id).
                  map((item) => (<li key={item.name} onClick={e => handleUserClick(item)}>{item.name}</li>))
              }

            </ul>
          </Sider>
          <Layout>
            <Content>
              <ChatContentWrapper>
                <Layout className='layout'>
                  <div className="chat-mask" style={{ "display": isFirst ? 'flex' : 'none' }}>
                    <p>点击左侧用户列表开始聊天~</p>
                  </div>
                  <Header className='chat-header'>
                    正在和{currentToUser.name}对话
                  </Header>
                  <Content className='content'>
                    <ul className='messages' ref={messageListRef}>
                      {messages.map(message => {
                        return (
                          <li
                            className={`message ${message.d === 'left' ? 'message-left' : 'message-right'}`}
                            key={message.id}
                          >
                            {message.message}
                          </li>
                        )
                      })}
                    </ul>
                  </Content>
                  <Footer>
                    <div className="chat-send">
                      <TextArea
                        rows={4}
                        value={currentInputValue}
                        onChange={onChange}
                      />
                      <Button
                        className='send-btn'
                        onClick={handleSendBtnClick}
                      >
                        发送消息
                      </Button>
                    </div>
                  </Footer>
                </Layout>
              </ChatContentWrapper>
            </Content>
          </Layout>
        </Layout>
      </div>
    </ChatWrapper >
  )
})

export default Chat