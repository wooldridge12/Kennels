// Route is for you to import proper imports
import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/locationProvider"
import { LocationList } from "./location/locationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/customerProvider"
import { CustomerList } from "./customers/customerList"
import { EmployeeProvider } from "./employees/employeeProvider"
import { EmployeeList } from "./employees/employeeList"
import { AnimalForm } from "../components/animal/AnimalForm"
import { CustomerForm } from "./customers/CustomerForm"
import { EmployeeForm } from "./employees/EmployeeForm"

//This is providing a route to the http:// api 
//next part in kennels.js
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render Customers http://localhost:8088/customers */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>

                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/customers/create">
                            <CustomerForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </CustomerProvider>



            {/* Render Employees  http://localhost:8088/employees */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>

                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}
