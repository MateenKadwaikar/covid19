import Types from './types'

const WorldDataInitialState = {
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
const DailyRecordInitialState = {
  dailyRecordList: [],
  isLoading: true
}

const UserLocationIntitialState = {
  country: '',
}

const ErrorIntitialState = {
  errorMessage: '',
}

export const getWorldDataReducer = (state = WorldDataInitialState, action) => {
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
        dropDownList: action.payload.countries.map(x => ({ value: x.name, iso: x.iso2 })),
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}

export const getDailyRecordReducer = (state = DailyRecordInitialState, action) => {
  switch (action.type) {
    case Types.DAILY_RECORDS:
      return {
        ...state,
        dailyRecordList: action.payload.data,
        isLoading: action.payload.isLoading
      }
    default:
      return state;
  }
}

export const userCurrentLocationReducer = (state = UserLocationIntitialState, action) => {
  switch (action.type) {
    case Types.USER_LOCATION:
      return {
        ...state,
        country: action.payload
      }
    default:
      return state;
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

