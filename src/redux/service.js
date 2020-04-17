import axios from 'axios'
import Actions from './action'

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
      const { response: { data } } = err;
      console.error(data)
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
