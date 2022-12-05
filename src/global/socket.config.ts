let SOCKET_BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  SOCKET_BASE_URL = 'wss://api.chat.boyfeiyu.com'
} else {
  SOCKET_BASE_URL = 'ws://localhost:3050'
}
export { SOCKET_BASE_URL }
