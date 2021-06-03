import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/locationProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { CustomerContext } from "../customers/customerProvider"
import { EmployeeContext } from "./employeeProvider"
import "./employees"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const { addEmployee, getEmployees } = useContext(EmployeeContext)
  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */
  const [employee, setEmployees] = useState({
    name: "",
    locationId: 0
  });

  const history = useHistory();

  useEffect(() => {
    getEmployees().then(getLocations)
  }, [])

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */


  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployees(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId)
    const employeeName = parseInt(employee.name)
    // const customerId = parseInt(employee.customerId)

    if ( employeeName === 0 || locationId === 0) {
      window.alert("Please select a location and a customer")
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

      const newEmployee = {
        name: employee.name,
        locationId: locationId,
      }
      addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
          </button>
    </form>
  )
}
