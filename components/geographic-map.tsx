"use client";

import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, divIcon } from "leaflet";
import { useTranslations } from "@/hooks/use-translations";

interface GeographicMapProps {
  data: {
    country: string;
    value: number;
  }[];
}

const countryCoordinates: { [key: string]: [number, number] } = {
  Libya: [26.3351, 17.2283],
  Syria: [34.8021, 38.9968],
  Sudan: [15.7129, 30.2176],
  Egypt: [26.8206, 30.8025],
  Jordan: [30.5852, 36.2384],
  "Saudi Arabia": [23.8859, 45.0792],
  Yemen: [15.5527, 48.5164],
  Palestine: [31.9522, 35.2332],
  Iraq: [33.2232, 43.6793],
  Morocco: [31.7917, 7.0926],
  Algeria: [28.0339, 1.6596],
  Tunisia: [33.8869, 9.5375],
};

export function GeographicMap({ data }: GeographicMapProps) {
  const t = useTranslations();
  const position: LatLngExpression = [27, 30]; // Centered around MENA region

  return (
    <MapContainer
      center={position}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {data.map((item) => {
        const coords = countryCoordinates[item.country];

        if (coords) {
          const icon = divIcon({
            html: `<div class="flex flex-col items-center gap-y-1">
                      <div class="flex items-center justify-center w-8 h-8 bg-primary/90 text-primary-foreground rounded-full font-bold text-sm shadow-lg">${item.value}</div>
                      <div class="w-0.5 h-3 bg-primary/90"></div>
                    </div>`,
            className: "bg-transparent border-0",
            iconSize: [32, 44],
            iconAnchor: [16, 44],
          });

          return (
            <Marker key={item.country} position={coords} icon={icon}>
              <Popup>
                {t(
                  `statistics.geographic.${item.country.toLowerCase()}` as any
                )}
                : {item.value.toLocaleString()}
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
}
