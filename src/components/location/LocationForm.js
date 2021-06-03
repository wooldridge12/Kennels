import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/locationProvider"
import "./location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
  const { locations, getLocations, addLocation } = useContext(LocationContext)

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [location, setLocation] = useState({
    name: "",
    address: ""
  });

  const history = useHistory();

  
  useEffect(() => {
    getLocations()
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }

    newLocation[event.target.id] = event.target.value
    // update state
    setLocation(newLocation)
  }

  const handleClickSaveLocation = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationAddress = parseInt(location.address)
    const locationName = parseInt(location.name)

    if (locationAddress === 0 || locationName === 0) {
      window.alert("Please select a location and a customer")
    } else {
      

      const newLocation = {
        name: location.name,
        locationAddress: location.address
      }
      addLocation(newLocation)
        .then(() => history.push("/locations"))
    }
  }

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location Address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      
      
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
          </button>
    </form>
  )
}
