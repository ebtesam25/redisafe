import React, { useState, useEffect } from "react";
import LightNav from "@/components/dashboard/LightNav";
import axios from "axios";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import LiveDataMetrics from "@/components/dashboard/LiveDataMetrics";
import Graph from "@/components/dashboard/Graph";

const Dashboard = () => {
  const [liveData, setLiveData] = useState(null);
  const [painData, setPainData] = useState(null);
  const [glucoseData, setGlucoseData] = useState(null);
  const [oxygenData, setOxygenData] = useState(null);
  const [pulseData, setPulseData] = useState(null);
  const [temperatureData, setTemperatureData] = useState(null);

  useEffect(() => {
    const fetchLiveReadings = async () => {
      try {
        const res = await axios.post("/api/proxy", {
          action: "getchaindata",
          eid: "4",
        });
        setLiveData(res.data);

        console.log(res.data);

        const { times, glucose, gsrDev, oxygen, pulse, temperature } = res.data;
        const formattedGlucoseData = [];
        const formattedPainData = [];
        const formattedOxygenData = [];
        const formattedPulseData = [];
        const formattedTemperatureData = [];

        times.forEach((time, idx) => {
          formattedGlucoseData.push({
            name: parseInt(time),
            glucose_level: glucose[idx],
          });

          formattedPainData.push({
            name: parseInt(time),
            pain_level: gsrDev[idx],
          });

          formattedOxygenData.push({
            name: parseInt(time),
            oxygen_level: oxygen[idx],
          });

          formattedPulseData.push({
            name: parseInt(time),
            pulse_level: pulse[idx],
          });

          formattedTemperatureData.push({
            name: parseInt(time),
            temperature_level: temperature[idx],
          });
        });

        setGlucoseData(formattedGlucoseData);
        setPainData(formattedPainData);
        setOxygenData(formattedOxygenData);
        setPulseData(formattedPulseData);
        setTemperatureData(formattedTemperatureData);
      } catch (error) {
        console.log(`Failed to fetch live data readings with error ${error}`);
      }
    };

    fetchLiveReadings();
  }, []);

  return (
    <React.Fragment className='overflow-hidden'>
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
                  Live Data
                </span>
              </div>
              <div className='mt-8'>
                {liveData && <LiveDataMetrics data={liveData} />}
                <Graph
                  title='Glucose Levels (mg/dL) vs. Time'
                  data={glucoseData}
                  data_key='glucose_level'
                />
              </div>
              <div className='mt-12'>
                <Graph
                  title='Galvanic Skin Response Deviation (μV) vs. Time'
                  data={painData}
                  data_key='pain_level'
                />
              </div>
              <div className='mt-12'>
                <Graph
                  title='Pulse (bpm) vs. Time'
                  data={pulseData}
                  data_key='pulse_level'
                />
              </div>
              <div className='mt-12'>
                <Graph
                  title='Oxygen Saturation (%) vs. Time'
                  data={oxygenData}
                  data_key='oxygen_level'
                />
              </div>
              <div className='mt-12'>
                <Graph
                  title='Body Temperature (°F) vs. Time'
                  data={temperatureData}
                  data_key='temperature_level'
                />
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-3'>
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
