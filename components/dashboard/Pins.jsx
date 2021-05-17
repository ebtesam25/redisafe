import * as React from "react";
import { Marker } from "react-map-gl";

const ICON = `M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`;

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const { data, onClick } = props;

  return data.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}>
      <svg
        className='opacity-50'
        height={SIZE}
        viewBox='0 0 24 24'
        style={{
          cursor: "pointer",
          fill: "#d00",
          stroke: "none",
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
        }}
        onClick={() => onClick(city)}>
        <path d={ICON} />
      </svg>
    </Marker>
  ));
}

export default React.memo(Pins);
