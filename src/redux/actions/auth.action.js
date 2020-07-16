import { get, post, patch, remove } from '../../helper/http'

export const login = (body)=>{
    const url = 'auth/login'
  return {
    type: 'LOGIN',
    payload: post({url, body})
  }
}