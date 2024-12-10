import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS for styling

const MapWithMarker = () => {
  const position = [55.3, -1.68]; // Latitude and longitude for the center of the map

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>A sample popup with information!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithMarker;
