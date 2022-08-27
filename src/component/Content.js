import React, { useEffect, useState } from 'react'
import QueryItem from './QueryItem.js'
import Spinner from './Spinner.js';


export default function Content(props) {

  const [query, setQuery] = useState([]);
  const [apiStatus, setApiStatus] = useState(200);
  const [loading, setLoading] = useState(true);

  async function FetchData() {

    /*****************************File System*****************************/
    // let data = await fetch('./data.json'
    //   , {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   }
    // );



    /*****************************DB System*****************************/

    let data = await fetch('https://flightops.vercel.app/api/v1/fops/contents/adelesumoquery')

    if (data.status === 200) {
      let dataJson = await data.json();

      setQuery(dataJson.data.adeleSumo);

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

  async function copyQuery(id1, id2) {

    await navigator.clipboard.writeText(document.getElementById(id1).innerText)

    document.getElementById(id2).innerText = "Copied!!";

    setTimeout(() => {
      document.getElementById(id2).innerText = "Copy Query";
    }, 2000);

  }


  return (
    <>

      <div className="container my-3">
        <div className="row">


          {loading && <Spinner />}


          {/* First check if the array is empty or not and as well check if the status is 200 or not. If the array is emplty and the 
            status is also different other than 200 then only alert will be shown*/}

          {query.length === 0 && apiStatus !== 200 ?

            <div className="alert alert-danger text-center" role="alert">
              <strong>Something went wrong in the backend !! Please reload the webpage.</strong>
            </div>

            :

            query.map((data) =>
              <div key={data.name} className="col-12 my-5">
                <QueryItem data={data} copyQuery={copyQuery} cardColor={props.cardColor} />
              </div>
            )}

        </div>
      </div>
    </>
  )
}
