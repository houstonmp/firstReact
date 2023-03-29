import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //... Pulls out the 12 values of the array
    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;