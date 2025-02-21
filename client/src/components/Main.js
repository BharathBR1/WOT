import React from 'react'
import { FaRegCalendarMinus, FaEllipsisV,FaLightbulb, FaTemperatureHigh, FaCloud, FaCloudMoon, FaCloudflare } from "react-icons/fa"
// import { IoIosLightbulbOutline } from "react-icons/io"

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

import PieComponent from './PieComponent';
import { Progress } from 'antd';
import error from "../assets/error.png"


// import { Button } from "@material-tailwind/react";
 


// const datas = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

const distanceData = [
    // Replace this sample data with actual data from your ultrasonic IoT sensor
    { name: 'Time 1', distance: 50 }, // Example data point
    { name: 'Time 2', distance: 18 }, // Example data point
    { name: 'Time 3', distance: 15 }, // Example data point
    // Add more data points as needed
];




const Main = () => {



    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Dashboard</h1>

                {/* <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>Generate Report</button> */}
            </div>
            <div className='grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        {/* <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2> */}
                        {/* <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1> */}
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] mb-[10px]'>LED Controller</h1>
                        <div>
                        <button  className="bg-blue-500 hover:bg-blue-700 text-white sm font-bold py-1 px-2 mx-1 rounded">ON</button>
                        <button  className="bg-red-500 hover:bg-red-700 text-white sm font-bold py-1 px-2 rounded">OFF</button>
                        </div>
                    </div>
                    {/* <FaRegCalendarMinus fontSize={28} color="" /> */}
                    <FaLightbulb size={28} color="yellow" />
                  
                      
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[19px] leading-[17px] font-bold'>
                            Temperature</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>21<span className='px-1'><sup>0</sup>C</span></h1>
                    </div>
                    <FaTemperatureHigh fontSize={28}/>
                    {/* <FaRegCalendarMinus fontSize={28} /> */}
                    {/* <FontAwesomeIcon  fontSize={28} icon="fa-solid fa-temperature-three-quarters" /> */}
                    {/* <i className="fa-solid fa-temperature-quarter"></i> */}
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[19px] leading-[17px] font-bold'>Humidity </h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>33 <span>%</span></h1>
                    </div>
                    {/* <FaRegCalendarMinus fontSize={28} /> */}
                    <FaCloudflare fontSize={28}/>
                </div>
                {/* <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div> */}

            </div>
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] w-5 border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Ultra Sonic Sensor Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>

                    <div className="">
                        {/* <canvas id="myAreaChart"></canvas> */}
                        {/* <Line options={options} data={data} /> */}

                        {/* <LineChart
                width={850}
                height={500}
                data={distanceData}
                margin={{
                    top: 5,
                    right: 50,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Distance (cm)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart> */}
             <LineChart
                width={850}
                height={500}
                data={distanceData}
                margin={{
                    top: 5,
                    right: 50,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Distance (cm)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
                    </div>

                </div>
                <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Revenue Resources</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px]'>

                        <PieComponent />

                        {

                        }
                    </div>
                </div>
            </div>
            {/* <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Projects Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='px-[25px] space-y-[15px] py-[15px]'>
                        <div>
                            <h2>Server Migration</h2>
                            <Progress percent={30} strokeColor="#E74A3B" />
                        </div>
                        <div>
                            <h2>Sales Tracking</h2>
                            <Progress percent={50} status="active" strokeColor="#F6C23E" />
                        </div>
                        <div>
                            <h2>Customer Database</h2>
                            <Progress percent={70} status="active" strokeColor="#4E73DF" />
                        </div>
                        <div>
                            <h2>Payout Details</h2>
                            <Progress percent={100} strokeColor="#36B9CC" />
                        </div>
                        <div>
                            <h2>Account Setup</h2>
                            <Progress percent={50} status="exception" strokeColor="#1CC88A" />
                        </div>
                    </div>





                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Resources</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px] flex items-center justify-center h-[100%]'>
                        <div>
                            <img src={error} alt="" className='transform scale-[135%]' />
                            <p className='mt-[15px] text-semibold text-gray-500'>No data available</p>
                        </div>
                    </div>
                </div>
            </div> */}


        </div >
    )
}

export default Main   