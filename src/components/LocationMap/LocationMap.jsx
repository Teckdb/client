import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Map, APIProvider } from '@vis.gl/react-google-maps';


function LocationMap({ location }) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDV_9ec33TNnCVnAz8wBPp-QgwJcFk-oGs"
    })

    const [map, setMap] = useState(null)

    const onLoad = (map) => console.log('Aquí haz lo que necesites tras la carga del mapa')
    const onUnmount = () => setMap(null)

    return isLoaded && (
        <APIProvider apiKey={'AIzaSyDV_9ec33TNnCVnAz8wBPp-QgwJcFk-oGs'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                style={{ width: '100%', height: '100vh' }}
                defaultZoom={13}
                defaultCenter={{ lat: location.lat, lng: location.lng }}
                mapId='3f602527cf7d8d55'
                onCameraChanged={(MapCameraChangedEvent) =>
                    console.log('camera changed:', MapCameraChangedEvent.detail.center, 'zoom:', MapCameraChangedEvent.detail.zoom)
                }>
            </Map>
        </APIProvider>
    )
}

export default LocationMap