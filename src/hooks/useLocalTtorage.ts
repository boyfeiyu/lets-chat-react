import { LOGIN_TOKEN } from '@/global/constants'
import { useLocalStorageState } from 'ahooks'

export const useLocalStorage = () => {
  const [avatorUrl, setAvatorUrl] = useLocalStorageState<string | undefined>(
    'avatorUrl',
    {
      defaultValue: '',
    }
  )
  const [userId, setUserid] = useLocalStorageState<number | undefined>(
    'userId',
    {
      defaultValue: -1,
    }
  )
  const [name, setName] = useLocalStorageState<string | undefined>('name', {
    defaultValue: '',
  })
  const [token, setToken] = useLocalStorageState<string | undefined>(
    LOGIN_TOKEN,
    {
      defaultValue: '',
    }
  )

  return {
    avatorUrl,
    setAvatorUrl,
    userId,
    setUserid,
    name,
    setName,
    token,
    setToken,
  }
}
