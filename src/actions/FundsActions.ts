import axiosInstance, { URLS } from "../AxiosInstance/axiosInstance";

export const REQUEST_GAINERS = 'REQUEST_GAINERS';
export const REQUEST_GAINERS_SUCCESS = 'REQUEST_GAINERS_SUCCESS';
export const REQUEST_GAINERS_ERROR = 'REQUEST_GAINERS_ERROR';
export const CHANGE_CHART_FUND = 'CHANGE_CHART_FUND';

export function requestGainers() {
    return function (dispatch: Function): any {
        dispatch({ type: REQUEST_GAINERS });

        return axiosInstance.get(URLS.GAINERS).then(response => {
            dispatch({
                type: REQUEST_GAINERS_SUCCESS,
                payload: response.data
            });

        }).catch(err => {
            console.error(err);
            dispatch({
                type: REQUEST_GAINERS_ERROR,
                payload: err
            });

        })
    }
}
