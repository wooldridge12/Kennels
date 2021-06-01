import React, { useContext, useEffect } from "react"
import "./employees.css"
import { EmployeeContext } from "./employeeProvider"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getEmployees()
    }, [])

    return (
        <section className="employees">
            {console.log("EmployeeList: Render", employees)}
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: { employee.name }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}