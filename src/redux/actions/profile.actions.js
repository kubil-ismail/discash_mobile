/* eslint-disable prettier/prettier */
import { get } from '../../helper/http';

export const GET_PROFILE = (request) => ({
  type: 'GET_PROFILE',
  payload: get({
    url: `user/${request.id}`,
  }),
});
