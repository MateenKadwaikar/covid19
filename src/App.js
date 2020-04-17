import React, { useEffect } from 'react';
import './App.css';
import { getDataService } from './redux/service.js'
import Cards from './card/card.js';
import DropDownList from './dropdownlist/dropdownlist.js'
import { useDispatch, useSelector } from 'react-redux'
import image from './image/image.jpg'

function App() {
  const dispatch = useDispatch();
  let responseData = useSelector((state) => ({
    recovered: state.getWorldDataReducer?.recovered,
    confirmed: state.getWorldDataReducer?.confirmed,
    lastUpdate: state.getWorldDataReducer?.lastUpdate,
    deaths: state.getWorldDataReducer?.deaths,
    isLoading: state.getWorldDataReducer?.isLoading
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
      <div>
        <img src={image} alt="COVID-19" height="100" width="auto" />
      </div>
      <DropDownList handleCountryEvent={handleCountryEvent} />
      <Cards data={responseData} />
    </div>
  );
}

export default App;
