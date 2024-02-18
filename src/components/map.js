// import { useState, useEffect } from "react"
// import Map, { Marker } from 'react-map-gl';
// import './index.css'


// function Glmap() {

//     const [location, setLocation] = useState()
//     const [viewState, setViewState] = useState({
//         longitude: -100,
//         latitude: 40,
//         zoom: 3.5
//     });
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((location) => {
//             console.log(location)
//             const { latitude, longitude } = location.coords
//             setLocation({ latitude, longitude })
//         })
//     }, [])

//     console.log(location)

//     return <div className='container' >
//        {location && <Map
//             mapboxAccessToken="AIzaSyBl04UUueYoBmsiMXgvVgFI6Yn_I1JDsvU"
//             initialViewState={{
//                 longitude: location.longitude,
//                 latitude: location.latitude,
//                 zoom: 16
//             }}
//             style={{ width: 600, height: 400, overflow: 'hidden' }}
//             mapStyle="mapbox://styles/muzammil144/ckth155c31as017qfkormprrh"
//         >
//             <Marker
//                 draggable={true}
//                 onDragEnd={e => console.log(e)}
//                 offsetLeft={-20}
//                 offsetTop={-10}
//                 longitude={location.longitude} latitude={location.latitude} anchor="bottom" >
//                 <p
//                         role="img"
//                         className="cursor-pointer text-2xl animate-bounce"
//                         aria-label="pin"
//                       >
//                         📍
//                       </p>
//             </Marker>
//         </Map>}
//         </div>
// }

// export default Glmap