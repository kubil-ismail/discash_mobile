/* eslint-disable prettier/prettier */
import { get } from '../../helper/http';

// GET USER HISTORY
export const GET_HISTORY = (request) => ({
  type: 'GET_HISTORY',
  payload: get({
    url: `transactions/history/${request.id}`,
  }),
});