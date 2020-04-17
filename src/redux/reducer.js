import Types from './types'

const initialState = {
  deaths: {},
  confirmed: {},
  recovered: {},
  lastUpdate: ''
}
const DropDownInitialState = {
  dropDownList: []
}

export const getWorldDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_WORLD_DATA:
      return {
        ...state,
        deaths: action.payload.deaths,
        confirmed: action.payload.confirmed,
        recovered: action.payload.recovered,
        lastUpdate: action.payload.lastUpdate
      }
    case Types.GET_BY_COUNTRY:
      return {
        ...state,
        deaths: action.payload.deaths,
        confirmed: action.payload.confirmed,
        recovered: action.payload.recovered,
        lastUpdate: action.payload.lastUpdate
      }
    default:
      return state;
  }
}

export const getDropDownListReducer = (state = DropDownInitialState, action) => {
  switch (action.type) {
    case Types.GET_DROP_DOWN_LIST:
      return {
        ...state,
        dropDownList: action.payload.map(x => ({ value: x.name }))
      }
    default:
      return state
  }
}