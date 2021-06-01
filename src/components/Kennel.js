//PART 1
//This is simply another way of defining a component function that returns an HTML representation of a kennel.
import React from "react"
// import { Animal } from "./animal/Animal"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/customerProvider"
import { CustomerList } from "./customers/customerList"
import { EmployeeProvider } from "./employees/employeeProvider"
import { EmployeeList } from "./employees/employeeList" 
import { LocationProvider } from "./location/locationProvider"
import { LocationList } from "./location/locationList"

//It's called JSX, and it basically allows us to write JavaScript that looks like HTML in our code. With JSX, we can better visualize the eventual rendered HTML structure.


export const Kennel = () => (
    //What is <> and </>?
    //Remember, a function can only return one thing. This is a React.Fragment which gives us the ability to wrap the content, and return one item.
    <> 
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
               <CustomerList />
            </CustomerProvider>
        </article>

    </>
)
//After this go to index.js


//Focus on DATAFLOW!!!