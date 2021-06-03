//PART 1
//This is simply another way of defining a component function that returns an HTML representation of a kennel.
import React from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

//It's called JSX, and it basically allows us to write JavaScript that looks like HTML in our code. With JSX, we can better visualize the eventual rendered HTML structure.


export const Kennel = () => (
    
    //What is <> and </>?
    //Remember, a function can only return one thing. This is a React.Fragment which gives us the ability to wrap the content, and return one item.
    <> 
    {/* HTML rep of NavBar  next step is on index.js */}
        <NavBar />
        <ApplicationViews />
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
    </>
)
//After this go to index.js


//Focus on DATAFLOW!!!