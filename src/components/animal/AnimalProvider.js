//This code imports the main React library, and two functions that it exports. 
//We will useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data

export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(response => response.json())
    }

    //part 1/4 of DELETE
    //going into API/animals/ and creating a parameter of animalId
    //method of delete and then getAnimals
    //Then returning get add then releaseAnimal.
    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    const getAnimalById = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}?_expand=customer&_expand=location&_sort=location.id`)
        .then(response => response.json())
    }
        //part 1 of edit animals next on applicationVeiw.js and adding the edit portition to it
        //PUT requests are used to send data to the API to update or create a resource.calling the same PUT request multiple times will always produce the same result.
        //next is in animaldetail.js you need to add the button to the section.
    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
        .then(getAnimals)
    }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
   //part 2/4 is to add releaseAnimals to the value of AnimalContext.Provider
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, releaseAnimal, updateAnimal, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )


}
