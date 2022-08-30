import React, { useState, useEffect } from 'react'
import SaveSevSpinner from './SaveSevSpinner';
import { useLocation } from "react-router-dom";

export default function AddSev(props) {

    const [title, setTitle] = useState("");
    const [ticketNo, setTicketNo] = useState("");
    const [miNo, setMINo] = useState("");
    const [appType, setAppType] = useState("");
    const [tickType, setTickType] = useState("");
    const [timeOccured, setTimeOccured] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    const [titleError, setTitleError] = useState(undefined);
    const [ticketError, setTicketError] = useState(undefined);
    const [miError, setMiError] = useState(undefined);
    const [appTypeError, setAppTypeError] = useState(undefined);
    const [ticketTypeError, setTicketTypeError] = useState(undefined);
    const [dateOccurError, setDateOccurError] = useState(undefined);

    const [flag, setFlag] = useState(undefined);

    const [save, setSave] = useState(false);

    const [error, setError] = useState(false);

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);


    // This hook will get all the data passed from useNavigate used in Sev.js
    const location = useLocation();

    const handleTitle = () => {
        if (title.length === 0) {
            setFlag(1)
            setTitleError("Please provide a Ticket Number")
        }
        else {
            setFlag(0)
            setTitleError('')
        }
    }

    const handleTicketNumber = () => {
        if (ticketNo.length === 0) {
            setFlag(1)
            setTicketError("Please provide a Ticket Number or write N/A")
        }
        else {
            setFlag(0)
            setTicketError("")
        }
    }

    const handleMi = () => {
        if (miNo.length === 0) {
            setFlag(1)
            setMiError("Please provide a MI or write N/A")
        }
        else {
            setFlag(0)
            setMiError("")
        }
    }

    const handleAppType = () => {

        // For the first time when nothing is givem for select tag the appType will be "" while if we select a option and 
        // again change it back to Select the type of application the value of appType returned will be none() as given in the option.
        // <option selected value="none">Select the type of Application</option>

        if (appType.length === 0 || appType === "none") {
            setFlag(1)
            setAppTypeError("Please provide a App type")
        }
        else {
            setFlag(0)
            setAppTypeError("")
        }
    }

    const handleTicketType = () => {
        // For the first time when nothing is givem for select tag the tickType will be "" while if we select a option and 
        // again change it back to Select the type of application the value of tickType returned will be none() as given in the option.
        // <option selected value="none">Select the type of Ticket</option>
        if (tickType.length === 0 || tickType === "none") {
            setFlag(1)
            setTicketTypeError("Please provide a Ticket Type")
        }
        else {
            setFlag(0)
            setTicketTypeError("")
        }
    }

    const handleTimeOccured = () => {
        if (timeOccured.length === 0) {
            setFlag(1)
            setDateOccurError("Please provide the date sev occured")
        }
        else {
            setFlag(0)
            setDateOccurError("")
        }
    }

    const checking = () => {

        window.scrollTo(0, 0); // Scroll to the top

        // I kept all these functions inside submit but if I do that I have to press 2 times submit button. So I need to make a 
        // separate function to execute the function when submit button is clicked and if all ok the flag will be 0 and submit 
        // will work.
        handleTitle();
        handleTicketNumber();
        handleMi();
        handleAppType();
        handleTicketType();
        handleTimeOccured();
    }

    const updateTicket = async () => {

        setLoading(true);
        setError(false);

        let data = {
            title,
            tickNos: ticketNo,
            miNos: miNo,
            applications: appType,
            ticketType: tickType,
            timeOccured,
            description,
            link
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

    const submit = (e) => {

        if (titleError==="" && ticketError===""  && miError===""  && appTypeError==="" && ticketTypeError===""  && dateOccurError===""  &&flag === 0) {

            updateTicket();
        }

        e.preventDefault();
    }


    // This function will load the data into text fields that is coming from the SevComponents with the help of useNavigate() and
    // useLocation hook.
    const LoadData = () => {

        setTitle(location.state.title);


        setTicketNo(location.state.tickNos)


        setMINo(location.state.miNos)

        setAppType(location.state.applications)

        if (location.state.ticketType)
            setTickType(location.state.ticketType)



        // location.state.timeOccured = 2021-06-19T00:00:00.000Z
        let date = location.state.timeOccured.split("T"); // ['2021-06-19', '00:00:00.000Z']
        setTimeOccured(date[0]);


        setDescription(location.state.description);


        setLink(location.state.link);
    }

    useEffect(() => {

        LoadData();


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
                                    <input value={title} type="text" className="form-control" id="title" placeholder="Enter the title of the Ticket" onChange={(e) => setTitle(e.target.value)} />
                                    <b className="text-danger">{titleError}</b>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="ticketNo" className="form-label">Ticket Number</label>
                                    <input value={ticketNo} type="text" className="form-control" id="ticketNo" placeholder="Enter the Ticket Number if not present provide N/A" onChange={(e) => setTicketNo(e.target.value)} />
                                    <b className="text-danger">{ticketError}</b>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="miNo" className="form-label">Major Incident Number</label>
                                    <input value={miNo} type="text" className="form-control" id="miNo" placeholder="Enter the MI Number if not present provide N/A" onChange={(e) => setMINo(e.target.value)} />
                                    <b className="text-danger">{miError}</b>
                                </div>
                                <div className="m-4">
                                    <label className="form-label">Application Type</label>
                                    <select value={appType} className="form-select" id="appType" onChange={(e) => setAppType(e.target.value)}>
                                        <option value="none">Select the type of Application</option>
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
                                    </select>
                                    <b className="text-danger">{appTypeError}</b>
                                </div>
                                <div className="m-4">
                                    <label className="form-label">Ticket Type</label>
                                    <select value={tickType} className="form-select" id="tickType" onChange={(e) => setTickType(e.target.value)}>
                                        <option value="none">Select the type of Ticket</option>
                                        <option value="Sev1">Sev1</option>
                                        <option value="Sev2">Sev2</option>
                                    </select>
                                    <b className="text-danger">{ticketTypeError}</b>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="timeOccured" className="form-label">Occuernce Date</label>
                                    <input value={timeOccured} id="timeOccured" type="date" className="form-control" onChange={(e) => setTimeOccured(e.target.value)} />
                                    <b className="text-danger">{dateOccurError}</b>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea value={description} className="form-control" id="description" rows="4" placeholder="Enter the description of ticket or write N/A" onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="link" className="form-label">Url Link</label>
                                    <input value={link} type="text" className="form-control" id="link" placeholder="Enter the url of the document" onChange={(e) => setLink(e.target.value)} />
                                </div>
                                <div className="m-4">
                                    <button className="btn btn-success" onClick={checking}>Update</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>

    )
}
