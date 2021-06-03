import React, {useState, useContext, useEffect } from "react"
// import { Animal } from "./Animal"
import "./Animal.css"
import { AnimalContext } from "./AnimalProvider"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'

// export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  // const { animals, getAnimals } = useContext(AnimalContext)
  // Invoke the useHistory() hook function
  // const history = useHistory()

  //useEffect - reach out to the world for something
  // useEffect(() => {
  //   console.log("AnimalList: useEffect - getAnimals")
  //   getAnimals()
  // }, [])


  // return (
  //   <>
      {/* Adding button part 1 also dont forget line 9 const history = useHistory() and import*/}
      {/* <h2>Animals</h2>
      <button onClick={
        () => history.push("/animals/create")
      }>
        Add Animal
      </button>
      <section className="animals">
        {console.log("AnimalList: Render", animals)}
        {
          animals.map(animal => {
            return (
              <div className="animal" id={`animal--${animal.id}`}>
                <div className="animal__name">
                  Name: {animal.name}
                </div>
                <div className="animal__breed">
                  Breed: {animal.breed}
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  )
} */}

// Invoke the useHistory() hook function
export const AnimalList = () => {
  const history = useHistory()
  const { getAnimals, animals } = useContext(AnimalContext)

  // Initialization effect hook -> Go get animal data
  useEffect(()=>{
      getAnimals()
  }, [])

  return (
      <>
          <h1>Animals</h1>

          <button onClick={() => history.push("/animals/create")}>
              Make Reservation
          </button>

          <div className="animals">
              {
                  animals.map(animal => <Link className="animal" to={`/animals/detail/${animal.id}`}>
                        { animal.name }
                      </Link>
                  )
              }
          </div>
      </>
  )
}