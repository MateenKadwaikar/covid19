import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import image from './image/image.jpg'
import { getDataService } from './redux/service.js'
import Cards from './card/card';
import DropDownList from './dropdownlist/dropdownlist.jsx'
import Graph from './graph/graph';


function App() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState(undefined);
  let responseData = useSelector((state) => ({
    recovered: state.getWorldDataReducer?.recovered,
    confirmed: state.getWorldDataReducer?.confirmed,
    lastUpdate: state.getWorldDataReducer?.lastUpdate,
    deaths: state.getWorldDataReducer?.deaths,
    isLoading: state.getWorldDataReducer?.isLoading,
    country
  })
  )
  useEffect(() => {
    dispatch(getDataService());
  }, [dispatch])

  const handleCountryEvent = (e) => {
    setCountry(e);
    dispatch(getDataService(e))
  }

  return (
    <div className="App">
      <div>
        <img src={image} alt="COVID-19" height="100" width="auto" />
      </div>
      <DropDownList handleCountryEvent={handleCountryEvent} />
      <Cards data={responseData} country={country} />
      <Graph data={responseData} />
    </div>
  );
}

export default App;
