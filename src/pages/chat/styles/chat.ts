import styled from 'styled-components'
import bgc1Img from '@/assets/image/bgc-chat.jpg'
import bgc2Img from '@/assets/image/login-bgc.jpeg'
export const ChatWrapper = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${bgc1Img});
    background-size: 100% 100%;
  }

  .main-content {
    width: 70vw;
    height: 70vh;
  }
  .wh {
    width: 100%;
    height: 100%;
  }
  .layout {
    background: rgba(0, 0, 0, 0);
  }

  .sider {
    background-color: #ffffffaa;
  }
  .userlist {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0 !important;
    }

    li {
      flex-shrink: 0;
      width: 100%;
      height: 10vh;
      background-color: rgba(0.5, 0.2, 0.5, 0.2);

      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
      color: #fff;
      font-size: 22px;
    }
  }
`

export const ChatContentWrapper = styled.div`
  & {
    height: 100%;
    width: 100%;
  }
  .layout {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .chat-mask {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 26px;
      background: url(${bgc2Img}) no-repeat 0 0;
      background-size: 100% 100%;
    }
  }

  .chat-header {
    color: #fff;
    background-color: orange;
  }
  .content {
    overflow: hidden;
  }
  .messages {
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    height: 100%;
    overflow: auto;
    padding: 20px;
  }

  .message {
    margin-bottom: 2px;
    line-height: 1.5;
    font-size: 18px;
    color: orange;
    /* background-color: #ffffffcc; */
  }
  .message-left {
    text-align: left;
  }
  .message-right {
    text-align: right;
  }

  .chat-send {
    text-align: right;
  }
`
