import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
    }

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}