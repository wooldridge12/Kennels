import React, { useContext, useEffect } from "react"
import "./employees.css"
import { EmployeeContext } from "./employeeProvider"
import { useHistory } from "react-router-dom"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getEmployees()
    }, [])
    //Dont forget to import history
    const history = useHistory()

    return (
        <>
           <h2>Employees</h2>
      <button onClick={
        () => history.push("/employees/create")
      }>
            Add Employee
      </button>
        <section className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: {employee.name}
                            </div>
                        </div>
                        
                    )
                })
            }
        </section>
        </>
    )
}