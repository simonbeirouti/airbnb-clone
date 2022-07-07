import { useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapBox() {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <Map
      mapStyle="mapbox://styles/besimon/cl5au7mdm008p17p881tss7f8"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewPort(viewport)}
    ></Map>
  );
}
