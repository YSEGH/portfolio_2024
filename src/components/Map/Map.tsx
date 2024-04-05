import React, { useEffect, useRef, useState } from "react";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import * as maptilersdk from "@maptiler/sdk";

const Map: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 6.05562, lat: 46.22665 };
  const [zoom] = useState(10.5);
  maptilersdk.config.apiKey = "";

  useEffect(() => {
    if (map.current) return;

    // @ts-expect-error
    map.current = new maptilersdk.Map({
      // @ts-expect-error
      container: mapContainer.current,
      style: maptilersdk.MapStyle.WINTER,
      center: [center.lng, center.lat],
      zoom: zoom,
    });
  }, [center.lng, center.lat, zoom]);

  return (
    <>
      <div className={styles["map-container"]}>
        <div className={styles["map"]} ref={mapContainer}></div>
      </div>
      <div className={styles["map-title"]}>
        <h3>Saint-Genis-Pouilly, 01630</h3>
        <h3>France</h3>
      </div>
    </>
  );
};

export default Map;
