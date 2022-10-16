
import React, {useState} from 'react'
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import "./MapStyles.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css"; 
import "./br.css"

const Maps = () => {


 let [viewport, setViewport] = useState({
    latitude: 6.591947,
    longitude: 3.289574,
    zoom: 11,
    height: window.innerHeight,
    width:  "80vw",    
    pitch: 50,
    center: [6.591947, 3.289574] 
 });


  return ( 
    <>

       <div className='cool static'> 
       <ReactMapGL  mapStyle="mapbox://styles/mapbox/streets-v8" mapboxApiAccessToken= {"pk.eyJ1Ijoib2ZlaW11biIsImEiOiJjbDdocDBia2cwZ2xuM3dzYWI2OGFyZmp1In0.rr7Z0vJJRAA6Wund5yDKdw"} 
         
       {...viewport}
       onViewportChange={(newView) => setViewport(newView)}  
      
       >
        <NavigationControl />


         <Marker latitude={6.5916} longitude={3.2911} offsetTop={(-viewport.zoom * 5) / 2}>
            <img src="https://img.favpng.com/20/24/7/map-drawing-pin-clip-art-png-favpng-Kun5RxqQpnjJhamZ9aztsSGh2.jpg" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="maps" />
            </Marker>
       </ReactMapGL>
       </div>

    </>
  )
}

export default Maps


















