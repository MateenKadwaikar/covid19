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

const Actions = {
  getWorldDataAction,
  getByCountryAction,
  getDropDownListAction
}

export default Actions;