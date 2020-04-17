const getWorldDataAction = (data) => {
  return {
    type: "GET_WORLD_DATA",
    payload: data
  }
}

const getByCountryAction = (data) => {
  return {
    type: "GET_BY_COUNTRY",
    payload: data
  }
}

const getDropDownListAction = (data) => {
  return {
    type: "GET_DROP_DOWN_LIST",
    payload: data
  }
}

const Actions = {
  getWorldDataAction,
  getByCountryAction,
  getDropDownListAction
}

export default Actions;