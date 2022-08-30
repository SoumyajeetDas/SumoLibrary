import { useNavigate } from 'react-router-dom'

export default function SevItem(props) {

    const navigate = useNavigate();

    const deleteSev = async (mino, id) => {

        let res = await fetch(`https://flightops.vercel.app/api/v1/fops/sevs/${id}`, {
            method: "DELETE"
        });

        if (res.status === 200) {

            props.FetchData();

            // showDelAlert comes from Sev. used to show the delete alert coming from right
            props.showDelAlert(mino, true);


            setTimeout(() => {

                // Here showdelalert telling to remove the alert after 4sec
                props.showDelAlert(undefined, false);
            }, 4000);
        }
        else {
            alert("Error");
        }

    }

    return (
        <>
            <div className="card">

                <div className="card-body" style={props.cardColor}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.title}</h1>

                    <span className="material-symbols-rounded" style={{ cursor: "pointer", position: 'absolute', right: "41px", bottom: "16px", color: "#41f1b6" }} onClick={() => navigate("/updatesev", { state: props.data })}>
                        edit_square
                    </span>

                    <span className="material-symbols-rounded text-danger" style={{ cursor: "pointer", position: 'absolute', right: "10px", bottom: "14px" }} onClick={() => deleteSev(props.data.miNos, props.data._id)}>
                        delete
                    </span>

                    <h3 className="text-center ticknos mb-4" >

                        <div>
                            <strong>Ticket Number : </strong>
                            <span className="card-text">{props.data.tickNos}</span>
                        </div>

                        <div>
                            <strong>MI Number : </strong>
                            <span className="card-text">{props.data.miNos}</span>
                        </div>


                    </h3>

                    <div style={{ color: "#FFC300" }} className="mb-4">
                        <strong style={{ fontSize: "1.1rem" }}>Description : </strong>
                        <span className="card-text description"><><i>{props.data.description}</i></></span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>

                        <div>


                            <div style={{ color: "#FFC300" }} className="mb-4">
                                <strong style={{ fontSize: "1.1rem" }}>Application : </strong>
                                <span className="card-text description"><><i>{props.data.applications}</i></></span>
                            </div>

                            <div style={{ color: "#FFC300" }} className="mb-4">
                                <strong style={{ fontSize: "1.1rem" }}>Severity : </strong>
                                <span className="card-text description"><><i>{props.data.ticketType}</i></></span>
                            </div>

                            <div style={{ color: "#FFC300" }} className="mb-4">
                                <strong className="my-4" style={{ fontSize: "1.1rem" }}>Date of Occurence : </strong>
                                <span className="card-text description my-4"><strong>{new Date(props.data.timeOccured).toDateString()}</strong></span> <br></br>
                            </div>

                        </div>


                        {/* If link is provided then only the button will be active otherwise disabled */}
                        {props.data.link.length === 0 ?
                            <a target="_blank" rel="noreferrer" href={props.data.link} className="btn my-2 disabled" style={{ borderRadius: "10px", color: "white", backgroundColor: "#A569BD" }}>Check Details</a>
                            :
                            <a target="_blank" rel="noreferrer" href={props.data.link} className="btn my-2" style={{ borderRadius: "10px", color: "white", backgroundColor: "#A569BD" }}>Check Details</a>
                        }

                    </div>


                </div>
            </div>
        </>
    )
}
