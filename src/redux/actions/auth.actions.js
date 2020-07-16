/* eslint-disable prettier/prettier */
import {post} from '../../helper/http';

export const login = (body) => {
  const url = 'auth/login';
  return {
    type: 'LOGIN',
    payload: post({url, body}),
  };
};

export const pin = (request) => {
  return {
    type: 'SET_PIN',
    payload: request,
  };
};

export const pay = (request) => {
  return {
    type: 'SET_PAYMENT',
    payload: request,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

