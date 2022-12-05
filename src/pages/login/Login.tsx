import React, { memo, useCallback } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { LoginWrapper } from './styles/login'
import { useNavigate } from 'react-router-dom';


import { accountLoginRequest, accountRegisterRequest } from '@/service/login/login';
import { useLocalStorage } from '@/hooks/useLocalTtorage';
import fyRequest from '@/service';

const Login: React.FC = memo(() => {
  const navigate = useNavigate()

  const { setAvatorUrl, setUserid, setName, setToken } = useLocalStorage()


  const onFinish = async (user: any) => {
    const registerRes = await accountRegisterRequest(user)
    if (registerRes.code === 0 || registerRes.code === -1002) {
      const loginRes = await accountLoginRequest(user)
      if (loginRes.code === 0) {
        setAvatorUrl(loginRes.avatar_url)
        setUserid(loginRes.userId)
        setName(loginRes.name)
        setToken(loginRes.token)
        navigate('/chat')
      }
      else {
        console.log('登录错误~')
      }
      // console.log(loginRes)
    }

  };
  return (
    <LoginWrapper className='login'>
      <h2>欢迎回家~</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className='form'
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {/* 
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
          <Checkbox>记住我</Checkbox>
        </Form.Item> */}

        <Form.Item >
          <Button type="primary" htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
        <p>未注册用户将自动登录~</p>
      </Form>
    </LoginWrapper>
  )
})

export default Login