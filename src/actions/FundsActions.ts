import axiosInstance, { URLS } from "../AxiosInstance/axiosInstance";
import { GainersService } from "../services/GainersService";

export const REQUEST_GAINERS = 'REQUEST_GAINERS';
export const REQUEST_GAINERS_SUCCESS = 'REQUEST_GAINERS_SUCCESS';
export const REQUEST_GAINERS_ERROR = 'REQUEST_GAINERS_ERROR';
export const CHANGE_CHART_FUND = 'CHANGE_CHART_FUND';

export const REQUEST_FUND_DETAIL = 'REQUEST_FUND_DETAIL';
export const REQUEST_FUND_DETAIL_SUCCESS = 'REQUEST_FUND_DETAIL_SUCCESS';
export const REQUEST_FUND_DETAIL_ERROR = 'REQUEST_FUND_DETAIL_ERROR';

const gainersService = GainersService;

export function requestGainers() {
    return function (dispatch: Function): any {
        dispatch({ type: REQUEST_GAINERS });

        return axiosInstance.get(URLS.GAINERS).then(response => {
            dispatch({
                type: REQUEST_GAINERS_SUCCESS,
                payload: response.data
            });

            gainersService.publish();

        }).catch(err => {
            console.error(err);
            dispatch({
                type: REQUEST_GAINERS_ERROR,
                payload: err
            });

        })
    }
}

export function requestFundDetail(id: number) {
    return function (dispatch: Function): any {
        dispatch({ type: REQUEST_FUND_DETAIL });

        return axiosInstance.get(URLS.FUNDS_DETAIL + id).then(response => {
            dispatch({
                type: REQUEST_FUND_DETAIL_SUCCESS,
                payload: response.data
            });
        }).catch(err => {
            console.error(err);
            dispatch({
                type: REQUEST_FUND_DETAIL_ERROR,
                payload: err
            });

        })
    }
}
