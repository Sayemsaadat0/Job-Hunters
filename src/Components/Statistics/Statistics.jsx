import React from 'react';
import Banner from '../Banner/Banner';
import { PieChart, Pie, Cell,Tooltip,  } from 'recharts';

const Statistics = () => {

    const data = [
        { name: 'assignment-1', value: 55 },
        { name: 'assignment-2', value: 58 },
        { name: 'assignment-3', value: 60 },
        { name: 'assignment-4', value: 51 },
        { name: 'assignment-5', value: 45 },
        { name: 'assignment-6', value: 47 },
        { name: 'assignment-7', value: 54 },
        { name: 'assignment-8', value: 58 }      
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#cc90c0', '#a0d4cd', '#282B34', '#e42313'];

const RADIAN = [];
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) ;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
};



    return (
        <div>
            <Banner>Statistics</Banner>
            <div className='flex justify-center'>
            <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={data}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
            </div>
            <h1 className='text-3xl text-center'>Assignments Marks</h1>
            
        </div>
    );
};

export default Statistics;
