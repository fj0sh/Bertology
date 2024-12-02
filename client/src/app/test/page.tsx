"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
const Test = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GMAP_APIKEY as string,
        version: "weekly",
      });

      // Load the Google Maps library
      const { Map } = await loader.importLibrary("maps");

      // Set map options
      const options = {
        lat: 10.33054285589682,
        lng: 123.90366833554491,
      };

      const mapOptions: google.maps.MapOptions = {
        center: options,
        zoom: 15,
        mapId: "google",
      };

      // Render the map
      if (mapRef.current) {
        new Map(mapRef.current, mapOptions);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default Test;
