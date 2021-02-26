import {useState,useRef,useEffect} from 'react';
import D3Chart from "../components/D3Chart";

function ChartWrapper() {
    //reference area where we display charts
    const chartArea = useRef(null);

    //setting anything on chart we need a state
    const [chart, setChart] = useState(null);

    //assing value to chartArea
    useEffect(()=>{
        if(!chart){
            setChart(new D3Chart(chartArea.current));
        }else{
            //chart.update();
        }
    },[chart])

    return (
        <div className='chart' ref={chartArea}></div>
    )
}

export default ChartWrapper
