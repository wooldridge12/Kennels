//PART 3
//After the Nashville Kennels company information, we want to list all of the animals. We could hard code them inside the Kennel component, but as professional software developers, we will adhere to the Single Responsibility Principle, and create a separate component for displaying an animal.

import React from "react"
import "./Animal.css"

export const Animal = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)
//now go back to kennel.js