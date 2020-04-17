import React, { useEffect } from 'react';
import './App.css';
import { getDataService } from './redux/service.js'
import Cards from './card/card.js';
import DropDownList from './dropdownlist/dropdownlist.js'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  let responseData = useSelector((state) => ({
    recovered: state.getWorldDataReducer?.recovered,
    confirmed: state.getWorldDataReducer?.confirmed,
    lastUpdate: state.getWorldDataReducer?.lastUpdate,
    deaths: state.getWorldDataReducer?.deaths
  })
  )
  useEffect(() => {
    dispatch(getDataService());
  }, [dispatch])

  const handleCountryEvent = async (e) => {
    dispatch(getDataService(e))
  }

  return (
    <div className="App">
      <DropDownList handleCountryEvent={handleCountryEvent} />
      <Cards data={responseData} />
    </div>
  );
}

export default App;
