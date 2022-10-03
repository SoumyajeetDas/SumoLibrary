import React, { useState } from 'react'
import SaveSevSpinner from './SaveSevSpinner';

const isEmpty = value => value.trim() === '';

export default function AddSev(props) {

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
    })

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

    const saveTicket = async () => {

        setLoading(true);
        setError(false);

        let data = {
            title : formData.title,
            tickNos: formData.ticketNo,
            miNos: formData.miNo,
            applications: formData.appType,
            ticketType: formData.tickType,
            timeOccured : formData.timeOccured,
            description : formData.description,
            link : formData.link
        }

        let res = await fetch('https://flightops.vercel.app/api/v1/fops/sevs', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        setLoading(false)

        if (res.status === 201) {
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


        if(!formValid){
            return;
        }
        
        saveTicket();
    }


    return (
        <>
            <div className="container my-5 ">
                <div className="row ">

                    {loading && <SaveSevSpinner />}

                    <div className="col-md-8 m-auto ">



                        {/* Save Message */}
                        {save && <div className="alert alert-success text-center" role="alert">
                            <b>Saved Successfully!!</b>
                        </div>}



                        {/* Alert Message for any error */}
                        {error && <div className="alert alert-danger text-center" role="alert">
                            {message}
                        </div>}


                        <form onSubmit={submit}>
                            <div className="card p-4" style={props.cardColor}>
                                <h2 className="text-center formHeading m-4">Severity Tickets Form</h2>
                                <div className="m-4">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" placeholder="Enter the title of the Ticket" onChange={handleForm} />
                                    {!formValididty.title && <b className="text-danger">Please enter the title</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="ticketNo" className="form-label">Ticket Number</label>
                                    <input type="text" className="form-control" id="ticketNo" placeholder="Enter the Ticket Number if not present provide N/A" onChange={handleForm} />
                                    {!formValididty.ticketNo && <b className="text-danger">Please enter the Ticket No</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="miNo" className="form-label">Major Incident Number</label>
                                    <input type="text" className="form-control" id="miNo" placeholder="Enter the MI Number if not present provide N/A" onChange={handleForm} />
                                    {!formValididty.miNo && <b className="text-danger">Please enter the Mi No</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="appType" className="form-label">Application Type</label>
                                    <select defaultValue="none" className="form-select" id="appType" onChange={handleForm}>
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
                                    <label htmlFor="tickType" className="form-label">Ticket Type</label>
                                    <select defaultValue="none" className="form-select" id="tickType" onChange={handleForm}>
                                        <option value="">Select the type of Ticket</option>
                                        <option value="Sev1">Sev1</option>
                                        <option value="Sev2">Sev2</option>
                                    </select>
                                    {!formValididty.tickType && <b className="text-danger">Please enter the Ticket Type</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="timeOccured" className="form-label">Occuernce Date</label>
                                    <input id="timeOccured" type="date" className="form-control" onChange={handleForm} />
                                    {!formValididty.timeOccured && <b className="text-danger">Please enter the Date Occuerence</b>}
                                </div>
                                <div className="m-4">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" rows="4" placeholder="Enter the description of ticket or write N/A" onChange={handleForm}></textarea>
                                </div>
                                <div className="m-4">
                                    <label htmlFor="link" className="form-label">Url Link</label>
                                    <input type="text" className="form-control" id="link" placeholder="Enter the url of the document" onChange={handleForm} />
                                </div>
                                <div className="m-4">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>

    )
}
