import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS for styling

const MapWithMarker = () => {
  const position = [55.1765, -1.68]; // Latitude and longitude for the center of the map

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <iframe
        title="Northumberland Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622429.6710049023!2d-2.572949140518492!3d55.20873147916769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c8c5df1a9c5b3%3A0x72d579fb6e8b8188!2sNorthumberland%2C%20UK!5e0!3m2!1sen!2suk!4v1691223459401!5m2!1sen!2suk"
        className="w-full h-full border-0 rounded-lg shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapWithMarker;
