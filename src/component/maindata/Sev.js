import React, { useEffect, useState } from 'react'
import SevItem from '../item/SevItem';
import Spinner from '../maindata/Spinner';
import { useNavigate } from 'react-router-dom'


export default function Sev(props) {

    const [query, setQuery] = useState([]);
    const [apiStatus, setApiStatus] = useState(200);
    const [loading, setLoading] = useState(true);

    const [miNo, setMINo] = useState("");
    const [show, setShow] = useState(false);


    // Used to show the alert for any delete. The component mounting and unmounting is controlled from SevItem
    const showDelAlert = (miNo, status) => {
        setMINo(miNo);
        setShow(status);
    }

    const navigate = useNavigate();

    const FetchData = async () => {
        let data = await fetch('https://flightops.vercel.app/api/v1/fops/sevs');

        if (data.status === 200) {
            let dataJson = await data.json();

            setQuery(dataJson.data.sevs)
        }

        else {
            setApiStatus(data.status)
        }

        // setLoading() can't be kept after FetchData() in use Effcet. As the fetchData() is async after calling out the api the control
        // comes out of the function and thus making setLoading(false) and hence we will not be able to see the spinner.
        setLoading(false)



        // If the status is other than 200 then automatically the query array will be an empty array

    }


    useEffect(() => {
        FetchData();

        // setLoading(false);
    }, [])

    return (
        <>
            <div className="container my-3">
                <div className="row">

                    {loading && <Spinner />}


                    {/* On deleting any sev the deleted successfully option is showing */}
                    {show && <div className="alert alert-danger deletealert text-center" role="alert">
                        <b>Deleted MI {miNo} Successfully!!</b>
                    </div>}




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

                            query.map((data) =>
                    
                                    <div key={data._id} className="col-md-8 m-auto my-5">
                                        <SevItem FetchData={FetchData} showDelAlert={showDelAlert} data={data} cardColor={props.cardColor} />
                                    </div>

                            )
                    }
                </div>

            </div>


            {/* Adding the Add Ticket Button at the right side */}
            <button className="addTicket" onClick={() => navigate("/addsev")}>
                <span className="material-symbols-outlined">
                    add
                </span>
                <span>Add Ticket</span>
            </button>

            <button className="btnStat" onClick={() => navigate("/stat")}>
                <span className="material-symbols-rounded">
                    monitoring
                </span>
                <span>Check Graph</span>
            </button>


        </>

    )
}
