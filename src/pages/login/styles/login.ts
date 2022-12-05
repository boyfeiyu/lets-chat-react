import styled from 'styled-components'
import imgUrl from '@/assets/image/login-bgc.jpeg'

export const LoginWrapper = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    overflow: hidden;
    background: url(${imgUrl}) no-repeat;
    background-size: 100% 100%;
  }
  h2 {
    margin-top: 50px;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    padding: 100px;
    width: 500px;
    flex-wrap: wrap;
    background-color: #ffffff88;
  }
  .ant-form-item {
    /* width: 500px; */
  }
`
