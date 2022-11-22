import React, { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../../../interfaces/job';
import L, { LatLngLiteral } from 'leaflet';
import marker from '../../../public/map-marker.svg';


interface Props {
  location: Location;
  name: string;
}


const Map: FC<Props> = ({location, name}) => {
  const myIcon = new L.Icon({
    iconUrl: marker.src,
    iconRetinaUrl: marker.src,
    iconSize: [26, 36],
  });
  const position: LatLngLiteral = {lat: location.lat, lng: location.long};
  return (
    <MapContainer className="h-full" center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon} />
    </MapContainer>
  );
};

export default Map;
