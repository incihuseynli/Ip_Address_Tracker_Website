import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import MarkersPosition from "./MarkersPosition";
import Axios from "axios";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
function App() {
  const [address, setAddress] = useState({});
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    Axios.get(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_vfqEeKh1I0rHo7Ey2ziBO0KC7FSGj&ipAddress=8.8.8.8"
    ).then(({ data }) => {
      setAddress(data);
    });
  }, []);

  const ipAddressRgx =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const getIpAddress = () => {
    Axios.get(
      `
      https://geo.ipify.org/api/v2/country,city?apiKey=at_vfqEeKh1I0rHo7Ey2ziBO0KC7FSGj&
      ${ipAddressRgx.test(ipAddress) ? `ipAddress=${ipAddress}` : ""}
      `
    ).then(({ data }) => {
      setAddress(data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getIpAddress();
    setIpAddress("");
  };
  return (
    <>
      <SearchBox
        handleSubmit={handleSubmit}
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
      />
      <SearchResults address={address} />
      <MapContainer
        center={
          (address.location && [
            address.location.lat,
            address.location.lng,
          ]) || [51.505, -0.09]
        }
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "800px", width: "100vw", marginTop: "-200px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkersPosition address={address} />
      </MapContainer>
    </>
  );
}
export default App;
