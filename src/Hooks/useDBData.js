/*================================================================================================
    useDBData is a custom Hook used by all the components under the maindata folder
    except the Spinner related and Sev Related.
================================================================================================== */




import { useState, useEffect } from "react";

const useDBData = (url) => {
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
    
        let data = await fetch(url)
    
        if (data.status === 200) {
          let dataJson = await data.json();
    
          setQuery(dataJson.data.dbData);
    
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

        // eslint-disable-next-line
      }, []);


      return [query, apiStatus, loading];
}


export default useDBData