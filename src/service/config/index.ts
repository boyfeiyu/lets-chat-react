let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'https://api.chat.boyfeiyu.com'
} else {
  BASE_URL = 'http://localhost:3050'
}
export const TIME_OUT = 10000
export { BASE_URL }
