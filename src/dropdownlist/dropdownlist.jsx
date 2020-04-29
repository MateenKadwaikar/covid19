import React, { useEffect } from 'react'
import { getDropDownListService, getGeoLocationService } from '../redux/service';
import Actions from '../redux/action';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux'
import "./dropdown.css"

const DropDownList = ({ handleCountryEvent }) => {
  const dispatch = useDispatch();
  let { dropDownList } = useSelector((state) => {
    return state.getDropDownListReducer
  });
  let { country } = useSelector((state) => state.userCurrentLocationReducer);

  useEffect(() => {
    dispatch(getDropDownListService());
    if (navigator.geolocation) {
      _getUserCurrentLocation();
    }
    if (country) {
      _onCountryEvent(country)
    }
  }, [dispatch, country])

  const _getUserCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    dispatch(getGeoLocationService(position.coords));
  }

  const _onCountryEvent = (e) => {
    handleCountryEvent(e);
    dispatch(Actions.getUserCurrentLocationAction(e));
  }

  return (
    dropDownList && dropDownList.length ?
      <div className="mainDiv">
        <FormControl className="formControl">
          <NativeSelect value={country} onChange={(e) => { _onCountryEvent(e.target.value) }}>
            <option value="" disabled>None</option>
            {dropDownList.map((data, i) =>
              <option
                key={i}
                value={data.iso}>
                {data.value}
              </option>
            )}
          </NativeSelect>
        </FormControl>
      </div>
      : null
  )
}

export default DropDownList;