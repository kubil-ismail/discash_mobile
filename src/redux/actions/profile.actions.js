/* eslint-disable prettier/prettier */
import { get } from '../../helper/http';

export const GET_PROFILE = (request) => ({
  type: 'GET_PROFILE',
  payload: get({
    url: `user/${request.id}`,
  }),
});
export const EDIT_PROFILE = (request) => ({
  type: 'EDIT_PROFILE',
  payload: get({
    url: `user/${request.id}`,
    body: `request.body`
  }),
});
export const EDIT_AVATAR = (request) => ({
  type: 'EDIT_PROFILE',
  payload: get({
    url: `user/avatar/${request.id}`,
    body: `request.body`
  }),
});
