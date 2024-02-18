import { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const MyComponent = () => {
    const [map, setMap] = useState(null);
    const [location, setLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBl04UUueYoBmsiMXgvVgFI6Yn_I1JDsvU",
    });

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error(error.message);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []); // Empty dependency array ensures the effect runs only once when component mounts

    console.log(location)
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={location || { lat: 4.15, lng: 23.46 }} // Default to a center if location is not available
            zoom={location ? 15 : 8} // Zoom in if location is available, otherwise use a default zoom
        >
            {location && <Marker position={location} />}
        </GoogleMap>
    ) : (
        <>Map Loading</>
    );
};

export default MyComponent;
