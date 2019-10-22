import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_JOBS } from './types';

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

export const fetchJobs = (region) => async dispatch =>{

        let zip = await reverseGeocode(region).catch(console.log('reverse geocoords'));
        const url = buildJobsUrl(zip);
        let {data} = await axios.get(url).catch(console.log('Axios'));
        dispatch({type: FETCH_JOBS, payload: data});
};