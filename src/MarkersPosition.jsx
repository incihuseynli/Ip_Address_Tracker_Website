/* eslint-disable react/prop-types */
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import icon from "/icon-location.svg";
import { useEffect } from "react";
const customIcon = new L.Icon({
  iconSize: [38, 46],
  iconAnchor: [12, 42],
  popupAnchor: [2, -40],
  iconUrl: icon,
});
const MarkersPosition = ({ address }) => {
  const map = useMap();
  const position = (address.location && [
    address.location.lat,
    address.location.lng,
  ]) || [51.505, -0.09];
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <>
      <Marker icon={customIcon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default MarkersPosition;
