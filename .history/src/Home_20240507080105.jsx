import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
    <main className='main-container'>  {/* Main container element */}
      <div className='main-title'>  {/* Title section */}
        <h3>DASHBOARD</h3>  {/* Title text */}
      </div>

      <div className='main-cards'>  {/* Container for cards */}
        <div className='card'>  {/* Individual card */}
          <div className='card-inner'>  {/* Inner container for card content */}
            <h3>PRODUCTS</h3>  {/* Card title */}
            <BsFillArchiveFill className='card_icon' />  {/* Archive icon */}
          </div>
          <h1>300</h1>  {/* Card value */}
        </div>
        {/* ... (other cards omitted for brevity) */}
      </div>

      <div className='charts'>  {/* Container for charts */}
        <ResponsiveContainer width="100%" height="100%">  {/* Responsive container for charts */}
          <BarChart  {/* Bar chart component */}
            width={500}  {/* Width of the chart */}
            height={300}  {/* Height of the chart */}
            data={data}  {/* Data for the chart */}
            margin={{  {/* Margins around the chart */}
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />  {/* Gridlines with custom styling */}
            <XAxis dataKey="name" />  {/* X-axis with labels from "name" property in data */}
            <YAxis />  {/* Y-axis */}
            <Tooltip />  {/* Tooltip for data points */}
            <Legend />  {/* Legend for identifying data series */}
            <Bar dataKey="pv" fill="#8884d8" />  {/* Blue bar for "pv" series */}
            <Bar dataKey="uv" fill="#82ca9d" />  {/* Green bar for "uv" series */}
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">  {/* Another responsive container for charts */}
          <LineChart  {/* Line chart component */}
            width={500}  {/* Width of the chart */}
            height={300}  {/* Height of the chart */}
            data={data}  {/* Data for the chart */}
            margin={{  {/* Margins around the chart */}
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />  {/* Gridlines with custom styling */}
            <XAxis dataKey="name" />  {/* X-axis with labels from "name" property in data */}
            <YAxis />  {/* Y-axis */}
            <Tooltip />  {/* Tooltip for data points */}
            <Legend />  {/* Legend for identifying data series */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />  {/* Blue line for "pv" series */}
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />  {/* Green line for "uv" series */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Home