import { LOGIN, LOGOUT } from "../types/type";

let initialState = {
    isUserLogin: false,
    user: null
}

export default function AuthReducer(state=initialState, action) {
    
    switch (action.type) {
        case LOGIN:
          return {
              ...state,
              isUserLogin: true,
              user: action.payload
          };
        case LOGOUT:
          return {
              ...state,
              isUserLogin: false,
              user: null          
            };
    
        default:
           return state;
    }

}
