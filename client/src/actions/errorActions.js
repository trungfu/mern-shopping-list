import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const returnErrors = (msg, status, id = null) => {
    return {
        types: GET_ERRORS,
        payload: { msg, status, id }
    }
}

export const clearErrors = () => {
    return {
        types: CLEAR_ERRORS
    }
}