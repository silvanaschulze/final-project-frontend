import {useState} from "react"
import { SVGMap } from "react-svg-map";
import Germany from "@svg-maps/germany"
import "react-svg-map/lib/index.css";

const Maps = () => {
  const [selectedRegion, setSelectedRegion] = useState('')
 const selectLocation = (e)=>{
  setSelectedRegion(e.target.getAttribute('name'))
 }
  
 // http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true&key=AIzaSyC4ryU67ix-aczbiLOutj0ddk8cgpZH2G8
    return(
      <div className= "Maps">
        <p>{selectedRegion ? selectedRegion: 'No selected location'}</p>
     <SVGMap map={Germany}  className='svg-map-custom' onLocationClick={selectLocation}/>
    </div>
    )
  }

export default Maps