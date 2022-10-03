import React, { useState, useEffect } from 'react'
import SaveSevSpinner from './SaveSevSpinner';
import { useLocation } from "react-router-dom";


const isEmpty = value => value.trim() === '';

export default function UpdateSev(props) {

    const [formData, setFormData] = useState({
        title: '',
        ticketNo: '',
        miNo: '',
        appType: '',
        tickType: '',
        timeOccured: '',
        description: '',
        link: ''
    });

    const [formValididty, setFormValididty] = useState({
        title: true,
        ticketNo: true,
        miNo: true,
        appType: true,
        tickType: true,
        timeOccured: true,
        description: true,
        link: true
    });


    const handleForm = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.id]: e.target.value
            }

        })
    }

    const [save, setSave] = useState(false);

    const [error, setError] = useState(false);

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);


    // This hook will get all the data passed from useNavigate used in Sev.js
    const location = useLocation();



    const updateTicket = async () => {

        setLoading(true);
        setError(false);

        let data = {
            title: formData.title,
            tickNos: formData.ticketNo,
            miNos: formData.miNo,
            applications: formData.appType,
            ticketType: formData.tickType,
            timeOccured: formData.timeOccured,
            description: formData.description,
            link: formData.link
        }

        let res = await fetch(`https://flightops.vercel.app/api/v1/fops/sevs/${location.state._id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        setLoading(false)

        if (res.status === 200) {
            setSave(true); //setting the Success message
            setError(false); // Removing the Error Message if present

            setTimeout(() => {
                setSave(false) //Removing the Success message
            }, 3000);
        }
        else {
            let { message } = await res.json();
            setMessage(message);  // Setting the error msg that should be shown for error
            setError(true); //setting the Error message
        }
    }




    /*************** The submit function is called by the omSubmit event of form ***************/

    const submit = (e) => {

        e.preventDefault();

        window.scrollTo(0, 0); // Scroll to the top

        const isTitleValid = !isEmpty(formData.title);
        const isTicketNoValid = !isEmpty(formData.ticketNo);
        const isMiNoValid = !isEmpty(formData.miNo);
        const isAppTypeValid = !isEmpty(formData.appType);
        const isTickTypeValid = !isEmpty(formData.tickType);
        const isTimeOccuredValid = !isEmpty(formData.timeOccured);

        setFormValididty({
            title: isTitleValid,
            ticketNo: isTicketNoValid,
            miNo: isMiNoValid,
            appType: isAppTypeValid,
            tickType: isTickTypeValid,
            timeOccured: isTimeOccuredValid,
        })

        const formValid = isTitleValid && isTicketNoValid && isMiNoValid && isAppTypeValid && isTickTypeValid && isTimeOccuredValid


        if (!formValid) {
            return;
        }

        updateTicket();
    }



    // This function will load the data into text fields that is coming from the SevComponents with the help of useNavigate() and
    // useLocation hook.
    useEffect(() => {

        // location.state.timeOccured = 2021-06-19T00:00:00.000Z
        let date = location.state.timeOccured.split("T"); // ['2021-06-19', '00:00:00.000Z']


        setFormData({
            title: location.state.title,
            ticketNo: location.state.tickNos,
            miNo: location.state.miNos,
            appType: location.state.applications,
            tickType: location.state.ticketType,
            timeOccured: date[0],
            description: location.state.description,
            link: location.state.link
        })


    }, // eslint-disable-next-line
        [])

    return (
        <>
            <div className="container my-5 ">
                <div className="row ">

                    {loading && <SaveSevSpinner />}

                    <div className="col-md-8 m-auto ">



                        {/* Update Message */}
                        {save && <div className="alert alert-success text-center" role="alert">
                            <b>Updated Successfully!!</b>
                        </div>}



                        {/* Alert Message */}
                        {error && <div className="alert alert-danger text-center" role="alert">
                            <b>{message}</b>
                        </div>}


                        <form onSubmit={submit}>
                            <div className="card p-4" style={props.cardColor}>
                                <h2 className="text-center formHeading m-4">Severity Tickets Form</h2>
                                <div className="m-4">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input value={formData.title} type="text" className="form-control" id="title" placeholder="Enter the title of the Ticket" onChange={handleForm} />
                                    {!formValididty.title && <b className="text-danger">Please enter the title</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="ticketNo" className="form-label">Ticket Number</label>
                                    <input value={formData.ticketNo} type="text" className="form-control" id="ticketNo" placeholder="Enter the Ticket Number if not present provide N/A" onChange={handleForm} />
                                    {!formValididty.ticketNo && <b className="text-danger">Please enter the Ticket No.</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="miNo" className="form-label">Major Incident Number</label>
                                    <input value={formData.miNo} type="text" className="form-control" id="miNo" placeholder="Enter the MI Number if not present provide N/A" onChange={handleForm} />
                                    {!formValididty.miNo && <b className="text-danger">Please enter the Mi No.</b>}
                                </div>
                                <div className="m-4">
                                    <label className="form-label">Application Type</label>
                                    <select value={formData.appType} className="form-select" id="appType" onChange={handleForm}>
                                        <option value="">Select the type of Application</option>
                                        <option value="ACARS">ACARS</option>
                                        <option value="Aircraft Performance">Aircraft Performance</option>
                                        <option value="FOGS">FOGS</option>
                                        <option value="Jetplan">Jetplan</option>
                                        <option value="Pilot Briefing">Pilot Briefing</option>
                                        <option value="QXEFB">QXEFB</option>
                                        <option value="S4A">S4A</option>
                                        <option value="VisOps">VisOps</option>
                                        <option value="VisOps DB">VisOps DB</option>
                                        <option value="WAM">WAM</option>
                                        <option value="Weather">Weather</option>
                                        <option value="WebSendTimes">WebSendTimes</option>
                                        <option value="Related to other Team">Related to other Team</option>
                                        <option value="Related to other Team">Multiple System Down</option>
                                    </select>
                                    {!formValididty.appType && <b className="text-danger">Please enter the App Type</b>}
                                </div>
                                <div className="m-4">
                                    <label className="form-label">Ticket Type</label>
                                    <select value={formData.tickType} className="form-select" id="tickType" onChange={handleForm}>
                                        <option value="">Select the type of Ticket</option>
                                        <option value="Sev1">Sev1</option>
                                        <option value="Sev2">Sev2</option>
                                    </select>
                                    {!formValididty.tickType && <b className="text-danger">Please enter the Ticket Type</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="timeOccured" className="form-label">Occuernce Date</label>
                                    <input value={formData.timeOccured} id="timeOccured" type="date" className="form-control" onChange={handleForm} />
                                    {!formValididty.timeOccured && <b className="text-danger">Please enter the Data Occured</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea value={formData.description} className="form-control" id="description" rows="4" placeholder="Enter the description of ticket or write N/A" onChange={handleForm}></textarea>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="link" className="form-label">Url Link</label>
                                    <input value={formData.link} type="text" className="form-control" id="link" placeholder="Enter the url of the document" onChange={handleForm} />
                                </div>
                                <div className="m-4">
                                    <button className="btn btn-success" type='submit'>Update</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>

    )
}
