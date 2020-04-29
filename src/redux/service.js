import axios from 'axios'
import Actions from './action'
import { apiKey } from './apikey'

let url = "https://covid19.mathdro.id/api";

export const getDataService = (country = '') => {
  return async (dispatch) => {
    let changeableUrl = url;
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
    try {
      let data = await axios.get(changeableUrl);
      const { data: { deaths, confirmed, recovered, lastUpdate } } = data;
      let modifiedData = {
        deaths,
        confirmed,
        recovered,
        lastUpdate,
        isLoading: false
      };
      country ?
        dispatch(Actions.getByCountryAction(modifiedData)) :
        dispatch(Actions.getWorldDataAction(modifiedData));
    } catch (err) {
      dispatch(Actions.errorMessageAction(err.response.data.error.message))
    }
  }
}

export const getDropDownListService = () => {
  return async (dispatch) => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
      let modifiedData = {
        isLoading: false,
        countries
      };
      dispatch(Actions.getDropDownListAction(modifiedData));
    } catch (err) {
      dispatch(Actions.errorMessageAction(err.response.data.error.message))
    }
  }
}

export const getDailyRecordService = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${url}/daily`);
      const modifiedData = {
        isLoading: false,
        data: data.data
      }
      dispatch(Actions.getDailyRecordsAction(modifiedData));
    } catch (err) {
      dispatch(Actions.errorMessageAction(err.response.data.error.message))
    }
  }

}

export const getGeoLocationService = ({ latitude, longitude }) => {
  return async (dispatch) => {
    try {
      const key = apiKey;
      const { data: { results } } = await axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${latitude},${longitude}&includeRoadMetadata=false&includeNearestIntersection=false`);
      dispatch(Actions.getUserCurrentLocationAction(results[0].locations[0].adminArea1));
    } catch (err) {
      dispatch(Actions.errorMessageAction("Fetching from map quest api failed"));
    }
  }
}
