import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// custom css
// const useStyles = makeStyles(() => ({
//   chartArea: {
//     marginTop: "150px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   charts: {
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

const Graph = () => {
  const data = [
    {
      name: "MERN",
      uv: 4000,
      pv: 8900,
      amt: 2400,
    },
    {
      name: "JS",
      uv: 3000,
      pv: 6398,
      amt: 2210,
    },
    {
      name: "MONGO",
      uv: 2000,
      pv: 5600,
      amt: 2290,
    },
    {
      name: "REACT",
      uv: 2780,
      pv: 9808,
      amt: 2000,
    },
    {
      name: "NODE",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "EXPRESS",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "HTML CSS",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //   const classes = useStyles();
  return (
    <Grid container>
      <Grid item justifyContent={"center"} xs={12}>
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Total Students In Individual Course
        </Typography>
      </Grid>

      <Grid container item>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} md={5}>
          <div>
            {" "}
            <AreaChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#37474f"
                fill="#78909c"
              />
            </AreaChart>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <BarChart
              width={800}
              height={420}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#78909c" background={{ fill: "#eee" }} />
            </BarChart>
          </div>
        </Grid>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Graph;
