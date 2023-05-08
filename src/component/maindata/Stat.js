import { Bar } from 'react-chartjs-2'

// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto" // This import is imp for the graph to work evn if it is not used anywhere in the
import useDBData from '../../Hooks/useDBData';
// code.


export default function Stat() {

    // useDBData is a Custom Hook
    const [query, apiStatus] = useDBData('https://flightops.vercel.app/api/v1/fops/sevs/stats');

    return (

        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 m-auto">


                    {/* Status 400 when there is no data and any other status other than 200 and 400 will be during Internal Server Error*/}
                    {apiStatus === 400 ?

                        <div className="alert alert-info text-center" role="alert">
                            <strong>No Data in the DB</strong>
                        </div>

                        :

                        apiStatus !== 200 ?

                            <div className="alert alert-danger text-center" role="alert">
                                <strong>Something went wrong in the backend !! Please reload the webpage.</strong>
                            </div>

                            :

                            <div id="stat" className="p-2">
                                <Bar
                                    data={{
                                        labels: query.map((data) => data._id), // Data for x axis
                                        datasets: [{
                                            label: 'Applications',
                                            data: query.map((data) => data.sumTotal), // Data for Y axis
                                            backgroundColor: [
                                                'rgba(213, 47, 165, 0.2)' // Background Colour for each bar
                                            ],
                                            borderColor: [
                                                'rgba(213, 47, 165, 1)'  // Border Colour for each bar
                                            ],
                                            borderWidth: 1, // Border width for each bar.


                                        }]
                                    }}

                                    // Height and weight of the whole graph
                                    height={300}
                                    width={450}


                                    options={{
                                        plugins: {  // 'legend' now within object 'plugins {}'
                                            legend: {

                                                // Design of the label of the graph
                                                labels: {
                                                    color: "#B986AA", // Colour of the label

                                                    font: {  // font of the label
                                                        size: 18,
                                                        weight: 'bold'
                                                    },

                                                }
                                            }
                                        },

                                        // Design of the x and Y axis Labels
                                        scales: {
                                            y: {  // not 'yAxes: [{' anymore (not an array anymore)
                                                ticks: {
                                                    color: "#B986AA", // colour of the label of Y axis
                                                    font: { // font style of the label of Y axis
                                                        size: 14,
                                                        style: 'italic'
                                                    },
                                                    stepSize: 1, // Interval of the y-axis
                                                    beginAtZero: true
                                                },

                                                grid: { // The grids for the x-axis can be hidden by making display to false
                                                    display: false
                                                }
                                            },
                                            x: {  // not 'xAxes: [{' anymore (not an array anymore)
                                                ticks: {
                                                    color: "#B986AA",  // colour of the label of X axis
                                                    //fontSize: 14,
                                                    font: { // font style of the label of X axis
                                                        size: 14, // 'size' now within object 'font {}'
                                                        style: 'italic'
                                                    },
                                                    stepSize: 1, // Interval of the x-axis
                                                    beginAtZero: true
                                                },

                                                grid: { // The grids for the x-axis can be hidden by making display to false
                                                    display: false
                                                }
                                            }
                                        }
                                    }}

                                />
                            </div>}
                </div>
            </div>
        </div>

    )
}
