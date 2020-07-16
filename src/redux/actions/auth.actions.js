/* eslint-disable prettier/prettier */
import {post} from '../../helper/http';

export const login = (body) => {
  const url = 'auth/login';
  return {
    type: 'LOGIN',
    payload: post({url, body}),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

