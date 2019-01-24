 import {
     GET_USER_DATA,USER_LOAD_DATA
 } from "./UserTypes";

const initialState = {
    //define the common states only
    user:[]

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                user : action.payload
            };
        case USER_LOAD_DATA:
            return {
                ...state,
                modalOpen: action.payload
            };


    }
    return state;
}

