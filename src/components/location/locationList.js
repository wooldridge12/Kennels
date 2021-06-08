import React, { useContext, useEffect } from "react"
// import { CustomerList } from "../customers/customerList"
import "./location.css"
import { LocationContext } from "./locationProvider"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



// export const LocationList = () => {
//     const { locations, getLocations } = useContext(LocationContext)
//     useEffect(() => {
//         console.log("LocationList: useEffect - getLocations")
//         getLocations()
//     }, [])

//     const history = useHistory()

    
    
//     return (
//         <>
//         {/* Button part 1 */}
//         <h2>Locations</h2>
//       <button onClick={
//         () => history.push("/locations/create")
//       }>
//             Add Location
//       </button>
//         <section className="locations">
//             {console.log("LocationList: Render", locations)}
//             {
//                 locations.map(location => {
//                     return (
//                         <div className="location" id={`location--${location.id}`}>
//                             <div className="location__name">
//                                 Name: { location.name }
//                             </div>
//                             <div className="location__Address">
//                                 Address: { location.address }
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </section>
//         </>
//     )
// }


export const LocationList = () => {
    const history = useHistory()
    const { getLocations, locations } = useContext(LocationContext)
  
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getLocations()
    }, [])
  
    return (
        <>
            <h1>Locations</h1>
  
            <button onClick={() => history.push("/locations/create")}>
                Make Reservation
            </button>
            <div className="locations">
                {
                    locations.map(location => <div className="location"> <Link className="" to={`/locations/detail/${location.id}`}>
                          { location.name } <br/>
                        </Link>
                        </div>
                    )
                }
            </div>
            {/* <div className="oneTwo">
            <Link className="image__link">BUDGET MEALS</Link>
            College student 
            </div> */}
            
        </>
    )
  }
  //Link is creating a link to click on 