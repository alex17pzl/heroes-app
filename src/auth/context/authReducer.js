import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      console.log(`action.payload: ${action.payload.name}`);
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
