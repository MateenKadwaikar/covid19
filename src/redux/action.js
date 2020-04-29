import Types from './types'

const getWorldDataAction = (data) => {
  return {
    type: Types.GET_WORLD_DATA,
    payload: data
  }
}

const getByCountryAction = (data) => {
  return {
    type: Types.GET_BY_COUNTRY,
    payload: data
  }
}

const getDropDownListAction = (data) => {
  return {
    type: Types.GET_DROP_DOWN_LIST,
    payload: data
  }
}

const errorMessageAction = (data) => {
  return {
    type: Types.ERROR_MESSAGE,
    payload: data
  }
}

const getDailyRecordsAction = (data) => {
  return {
    type: Types.DAILY_RECORDS,
    payload: data
  }
}

const getUserCurrentLocationAction = (data) => {
  return {
    type: Types.USER_LOCATION,
    payload: data
  }
}

const Actions = {
  getWorldDataAction,
  getByCountryAction,
  getDropDownListAction,
  getDailyRecordsAction,
  errorMessageAction,
  getUserCurrentLocationAction
}

export default Actions;