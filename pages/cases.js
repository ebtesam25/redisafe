import React, { useState } from "react";
import LightNav from "@/components/dashboard/LightNav";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import Pins from "../components/dashboard/Pins";
import CityInfo from "../components/dashboard/CityInfo";

import CITIES from "../data/cities.json";

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const Cases = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 1,
  });

  return (
    <React.Fragment>
      <div className='py-3 md:py-4 xl:py-6 bg-header-dashboard'>
        <div className='mx-auto container px-4 xl:px-0'>
          <LightNav />
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto pt-12 px-4 md:px-12 lg:px-12 mb-12'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-9'>
            <div className='bg-white shadow rounded-sm p-4'>
              <div className='inline-flex flex-row space-x-1 items-center bg-red-100 py-1 px-2 rounded-full'>
                <div className='w-2 h-2 rounded-full bg-red-600 animate-pulse'></div>
                <span className='text-sm text-red-600 font-semibold'>
                  Live Cases
                </span>
              </div>
            </div>
            <MapGL
              mapStyle={"mapbox://styles/mapbox/dark-v8"}
              mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              {...viewport}
              width='100%'
              height='25vw'
              onViewportChange={setViewport}>
              <Pins data={CITIES} onClick={setPopupInfo} />

              {popupInfo && (
                <Popup
                  tipSize={5}
                  anchor='top'
                  longitude={popupInfo.longitude}
                  latitude={popupInfo.latitude}
                  closeOnClick={false}
                  onClose={setPopupInfo}>
                  <CityInfo info={popupInfo} />
                </Popup>
              )}

              <GeolocateControl style={geolocateStyle} />
              <FullscreenControl style={fullscreenControlStyle} />
              <NavigationControl style={navStyle} />
              <ScaleControl style={scaleControlStyle} />
            </MapGL>
          </div>
          <div className='col-span-12 md:col-span-3'>
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cases;
