import Types from './types'

const initialState = {
  deaths: {},
  confirmed: {},
  recovered: {},
  lastUpdate: '',
  isLoading: true
}
const DropDownInitialState = {
  dropDownList: [],
  isLoading: true
}

const ErrorIntitialState = {
  errorMessage: '',
}

export const getWorldDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_WORLD_DATA:
      return {
        ...state,
        deaths: action.payload.deaths,
        confirmed: action.payload.confirmed,
        recovered: action.payload.recovered,
        lastUpdate: action.payload.lastUpdate,
        isLoading: action.payload.isLoading
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
        dropDownList: action.payload.countries.map(x => ({ value: x.name })),
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}

export const errorMessageReducer = (state = ErrorIntitialState, action) => {
  switch (action.type) {
    case Types.ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}