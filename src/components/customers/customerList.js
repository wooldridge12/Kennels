import React, { useContext, useEffect } from "react"
import "./customers.css"
import { CustomerContext } from "./customerProvider"
import { useHistory } from "react-router"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    // Invoke the useHistory() hook function
    const history = useHistory()
    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    }, [])

    return (
        <>
        {/* Button part 1 */}
        <h2>Customers</h2>
      <button onClick={
        () => history.push("/customers/create")
      }>
            Add Customer
      </button>
        <section className="customers">
            {console.log("CustomerList: Render", customers)}
            {
                customers.map(customer => {
                    return (
                        <div className="customer" id={`customer--${customer.id}`}
                        >
                            <div className="customer__name">
                                Name: { customer.name }
                            </div>
                            <div className="customer__address">
                                Address: { customer.address }
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}