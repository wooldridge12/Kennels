import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "../customers/customerProvider"
import "./customers.css"
import { useHistory } from 'react-router-dom';

export const CustomerForm = () => {
    const { addCustomer } = useContext(CustomerContext)


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  
    Define the intial state of the form inputs with useState()
    */
    const [customer, setCustomers] = useState({
        name: "",
        address: "",
        locationId: 0,
        customerId: 0
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */


    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newCustomer = { ...customer }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newCustomer[event.target.id] = event.target.value
        // update state
        setCustomers(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        // created vars for the if statement below
        const customerAddress = parseInt(customer.address)
        const customerName = parseInt(customer.name)

        if (customerAddress === 0 || customerName === 0) {
            window.alert("Please select a location and a customer")
        } else {
            //Invoke addCustomer passing the new animal object as an argument
            //Once complete, change the url and display the customer list

            const newCustomer = {
                name: customer.name,
                address: customer.address
            }
            addCustomer(newCustomer)
                .then(() => history.push("/customers"))
        }
    }

    return (
        <form className="CustomerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Customer name" value={customer.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer Address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="Customer Address" value={customer.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveCustomer}>
                Save Customer
          </button>
        </form>
    )
}
