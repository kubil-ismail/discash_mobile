/* eslint-disable prettier/prettier */
import { get, patch, remove } from '../../helper/http';

export const GET_PROFILE = (request) => ({
  type: 'GET_PROFILE',
  payload: get({
    url: `user/${request.id}`,
  }),
});
// GET INBOX
export const GET_INBOX = (request) => ({
  type: 'GET_INBOX',
  payload: get({
    url: `user/inbox/${request.id}`,
  }),
});
// GET INBOX
export const GET_HISTORY = (request) => ({
  type: 'GET_INBOX',
  payload: get({
    url: `user/inbox/${request.id}`,
  }),
});
// EDIT PROFILE AND AVATAR
export const EDIT_PROFILE = (request) => ({
  type: 'EDIT_PROFILE',
  payload: patch({
    url: `user/${request.id}`,
    body: `request.body`
  })
});
export const EDIT_AVATAR = (request) => ({
  type: 'EDIT_AVATAR',
  payload: request,
});
// EDIT PIN
export const EDIT_PIN = (request) => ({
  type: 'EDIT_PROFILE',
  payload: patch({
    url: `user/${request.id}`,
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
