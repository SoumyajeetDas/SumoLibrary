import React, { useEffect, useState } from 'react'
import LinkItems from './LinkItems';
import Spinner from './Spinner';


export default function TriageContent(props) {

  const [query, setQuery] = useState([]);
  const [apiStatus, setApiStatus] = useState(200);
  const [loading, setLoading] = useState(true);


  async function FetchData() {

    /*****************************File System*****************************/
    // let data = await fetch('./opsCentralLinks.json'
    //   , {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   }
    // );


    
    /*****************************DB System*****************************/


    let data = await fetch('https://flightops.vercel.app/api/v1/fops/contents/opsCentral');

    if (data.status === 200) {
      let dataJson = await data.json();

      setQuery(dataJson.data.opsCentral);
    }
    else {

      // If the status is anything other than 200 like 500, 404 504 then status state will be updated and accordingly the 
      // alert will also be shown and the logic is written in the down JSX part.
      setApiStatus(data.status);
    }


    // setLoading() can't be kept after FetchData() in use Effcet. As the fetchData() is async after calling out the api the control
    // comes out of the function and thus making setLoading(false) and hence we will not be able to see the spinner.
    setLoading(false);


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


          {loading && <Spinner/>}



          {/* First check if the array is empty or not and as well check if the status is 200 or not. If the array is emplty and the 
          status is also different other than 200 then only alert will be shown*/}

          {query.length === 0 && apiStatus !== 200 ?

            <div className="alert alert-danger text-center" role="alert">
              <strong>Something went wrong in the backend !! Please reload the webpage.</strong>
            </div>

            :

            query.map((data) =>
              <div key={data.name} className="col-md-4 my-5">
                <LinkItems data={data} cardColor={props.cardColor} />
              </div>
            )}

        </div>
      </div>
    </>
  )
}
