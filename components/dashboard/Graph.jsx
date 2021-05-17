import React from "react";

import {
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import moment from "moment";

const Graph = ({ title, data, data_key }) => {
  return (
    <React.Fragment>
      <h5 className='font-extrabold text-red-600 text-center mb-2'>{title}</h5>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={data}>
          <XAxis
            dataKey='name'
            type='number'
            domain={["auto", "auto"]}
            scale='time'
          />
          <YAxis />
          <Tooltip labelFormatter={(name) => moment(name).format("h:mm a")} />
          <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
          <Line type='monotone' dataKey={data_key} stroke='#D64545' />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Graph;
