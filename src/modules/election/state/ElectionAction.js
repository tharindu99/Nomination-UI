import {
    GET_ACTIVE_ELECTION_DATA
} from "./ElectionTypes";

//import { API_URL } from "../config.js";
//import axios from "axios";

function activeElectionsLoadSuccess(activeElections) {
    return {
        type: GET_ACTIVE_ELECTION_DATA,
        payload: activeElections
    };
}

        //axios.get(
        //     `${API_BASE_URL}/elections`
        // ).then(response => {
        //     dispatch(activeElectionsLoadSuccess(response))
        // });

export function getActiveElections() {
    return function (dispatch) {
        const activeElections = [{
            
                summary: "Parliamentary Election 2018 ",
                details:
                  "All Island Parlimentary election 2018 ",
                disabled: false
              },
              {
                summary: "Cricket Council 2018",
                details:
                  "Sri Lanka Cricket Counsil election 2018",
                disabled: false
              
        }];
    
        setTimeout(() => {
            dispatch(activeElectionsLoadSuccess(activeElections));
        }, 1000);
    }
}





