import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./locationProvider"
import "./location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [location, setLocation] = useState({ employees: [], animals: [] })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();


    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId))
        setLocation(thisLocation)
    }, [locationId])

    //you need to look at provider to grab the embeds of this stuff and grab employees of locations andd animals of location. Then interate through locations to get the employees of that location.
    return (
        <section className="location">
            <h1 className="location__name">{location.name}</h1>
            <h3>Employees</h3>
            <div className="location__employees">
                {location.employees.map((employee) => (
                    <div>{employee.name}</div>))}
            </div>
            <div>
                <h3>Animals</h3>
                {location.animals.map((animals) => (
                    <div>{animals.name}</div>))}
            </div>
        </section>
    )
}
