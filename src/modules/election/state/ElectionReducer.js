import {
    GET_ACTIVE_ELECTION_DATA
} from "./ElectionTypes";

const initialState = {

    activeElections : []

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVE_ELECTION_DATA:
            return {
                ...state,
                activeElections: action.payload
            };
    }
    return state;
}

