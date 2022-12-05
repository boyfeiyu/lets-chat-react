import type { IAccount } from '@/types'
import fyRequest from '..'

export function accountLoginRequest(account: IAccount) {
  return fyRequest.post({
    url: '/user/login',
    data: {
      ...account,
    },
  })
}

export function accountRegisterRequest(account: IAccount) {
  return fyRequest.post({
    url: '/user/register',
    data: account,
  })
}
