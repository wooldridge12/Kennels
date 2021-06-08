import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    // Update this line of code to include releaseAnimal(Part 3/4 of DELETE)
    const { animals, getAnimalById, releaseAnimal } = useContext(AnimalContext)
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();


    useEffect(() => {
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }

        setAnimal(thisAnimal)
    }, [animalId])
//part 4/4 of DELETE
    const history = useHistory()
    //handleRelease is a function using releaseAnimal from AnimalProvider.js releasing the specific animal.id / then pushing /animals to the end of the URL. so remember that history just rerenders the page and pushes the /animals to the end of the url.
    const handleRelease = () => {
        releaseAnimal(animal.id)
          .then(() => {
            history.push("/animals")
          })
        }
    return (
        <section className="animal">
        <h3 className="animal__name">{ animal.name }</h3>
        <div className="animal__breed">Breed: { animal.breed }</div>
        <div className="animal__location">Location: { animal.location.name }</div>
        <div className="animal__owner">Customer: { animal.customer.name }</div>
        <button onClick={handleRelease}>Release Animal</button>
        <button onClick={() => {
            history.push(`/animals/edit/${animal.id}`)
        }}>Edit</button>
    </section>
    )
}



