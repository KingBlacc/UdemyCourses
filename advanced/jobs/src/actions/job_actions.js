import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';
import JOB_DATA from './IndeedJobData.json';

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const JOB_SEARCH_URL = 'http://api.indeed.com/ads/apisearch?';

const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
    return `${JOB_SEARCH_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch =>{
    try {
        const data = JOB_DATA;
        // let zip = await reverseGeocode(region);
        // const url = buildJobsUrl(zip);
        // let {data} = await axios.get(url);
        dispatch({type: FETCH_JOBS, payload: data});
        callback();
    } catch (error) {
        console.log(error);
    }
};

export const likeJob = (job) => {
    return {type: LIKE_JOB,payload: job};
};

export const clearLikedJobs = () => {
    return {type: CLEAR_LIKED_JOBS};
}