import { UPDATE_EMPLOYEE } from "./types";

 export const employeeUpdate = ({prop, value}) => {
    return {
        type: UPDATE_EMPLOYEE,
        payload: {prop, value}
    };
 };