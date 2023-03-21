import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { useStateContext } from '../contexts/ContextProvider';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis } from '../data/dummy.js'
import { read_analytics } from '../firebase/analytics';

const Graphs = () => {

    const { currentColor, currentMode } = useStateContext();
    const [id, setId] = useState()
    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(async () => {
        const user = auth.currentUser;
		if(!user){  
			navigate('/login')
		}else{
            setId(user.uid)
              const response = await read_analytics(id)
              const dataArray = Object.entries(response).map(([key, value]) => ({
                type: 'Line',
                dataSource: value,
                xName: 'date',
                yName: 'value',
                name: key,
                marker: { visible: true },
            }));
            const yoyo =[]
            dataArray.map((item) =>{yoyo.push(item.dataSource)})
            console.log(yoyo)
            setData(yoyo)
        }
    },[id])

    return (
        <div className="flex gap-10 m-4 flex-wrap justify-center">  
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-10/12 ">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Analysis Graph</p>
            </div>
            <div className="w-full overflow-auto">
            <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {data.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
            </div>
          </div>  
       </div>
    );
};

export default Graphs;

// <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker}/>