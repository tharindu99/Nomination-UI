import {USER_LOAD_DATA,GET_USER_DATA} from './UserTypes'

function userLoadSuccess(user) {
    return {
        type: USER_LOAD_DATA,
        payload: user
    };
}

export function loadUser() {

    return function (dispatch) {

        // axios.get(
        //     `${API_BASE_URL}/user`
        // ).then(response => {
        //     dispatch(userLoadSuccess(response))
        // });


        const user = {
            user_id: "8ed2e77d-db11-4e69-83a2-3c005ebb3d40",
            userName: "Kamal Silva",
            user_type: "admin", // admin/IG/PS
        };


        setTimeout(() => {
            dispatch(userLoadSuccess(user));
        }, 1000);
    };
}



