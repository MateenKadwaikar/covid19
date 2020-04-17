import React, { useEffect } from 'react'
import { getDropDownListService } from '../redux/service';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux'
import "./dropdown.css"

const DropDownList = ({ handleCountryEvent }) => {
  const dispatch = useDispatch();

  let dropDownList = useSelector((state) => state.getDropDownListReducer.dropDownList);

  useEffect(() => {
    dispatch(getDropDownListService())
  }, [dispatch])

  return (
    dropDownList && dropDownList.length ?
      <div className="mainDiv">
        <FormControl className="formControl">
          <NativeSelect defaultValue="" onChange={(e) => { handleCountryEvent(e.currentTarget.value) }}>
            <option value="">Global</option>
            {dropDownList.map((data, i) =>
              <option
                key={i}
                value={data.value}>
                {data.value}
              </option>
            )}
          </NativeSelect>
        </FormControl>
      </div>
      : null
  )
}

export default DropDownList