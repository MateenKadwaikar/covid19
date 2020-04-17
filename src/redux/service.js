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
        lastUpdate
      };
      country ?
        dispatch(Actions.getByCountryAction(modifiedData)) :
        dispatch(Actions.getWorldDataAction(modifiedData));
    } catch (error) {
      console.log(error)
    }
  }
}

export const getDropDownListService = () => {
  return async (dispatch) => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);

      dispatch(Actions.getDropDownListAction(countries));
    } catch (err) {
      console.log(err)
    }
  }

}
