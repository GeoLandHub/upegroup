// src/GeoLandHubMockup.jsx
import React, { useEffect, useState } from "react";
import L from "leaflet";

// โหลด CSS ของ Leaflet แค่ครั้งเดียว
function useLeafletCss() {
  useEffect(() => {
    if (document.getElementById("leaflet-css")) return;
    const l = document.createElement("link");
    l.id = "leaflet-css";
    l.rel = "stylesheet";
    l.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(l);
  }, []);
}

// แผนที่พื้นหลัง OSM (ฟรี)
function OSMBlock() {
  useLeafletCss();
  useEffect(() => {
    const map = L.map("map", {
      center: [13.7563, 100.5018], // Bangkok
      zoom: 12,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
}

export default function GeoLandHubMockup() {
  return (
    <div>
      <OSMBlock />
    </div>
  );
}
