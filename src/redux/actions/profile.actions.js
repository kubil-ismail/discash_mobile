/* eslint-disable prettier/prettier */
import { get } from '../../helper/http';

export const GET_PROFILE = (request) => ({
  type: 'GET_PROFILE',
  payload: get({
    url: `user/${request.id}`,
  }),
});
// EDIT PROFILE AND AVATAR
export const EDIT_PROFILE = (request) => ({
  type: 'EDIT_PROFILE',
  payload: patch({
    url: `user/${request.id}`,
    body: `request.body`
  }),
});
export const EDIT_AVATAR = (request) => ({
  type: 'EDIT_PROFILE',
  payload: patch({
    url: `user/avatar/${request.id}`,
    body: `request.body`
  }),
});
// DELETE PROFILE
export const DELETE_PROFILE = (request) => ({
  type: 'DELETE_PROFILE',
  payload: remove({
    url: `user/${request.id}`,
  }),
});
