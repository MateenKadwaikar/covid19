import React, { useEffect } from 'react'
import { getDropDownListService } from '../redux/service';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DropDownList = ({ handleCountryEvent }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  let dropDownList = useSelector((state) => state.getDropDownListReducer.dropDownList);
  useEffect(() => {
    dispatch(getDropDownListService())
  }, [dispatch])

  return (
    dropDownList && dropDownList.length ?
      <div>
        <FormControl className={classes.formControl}>
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