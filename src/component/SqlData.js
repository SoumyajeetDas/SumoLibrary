import React, { useEffect, useState } from 'react'
import PathItem from './PathItem.js'
export default function SqlContent(props) {

  const [query, setQuery] = useState([]);

  async function FetchData() {
    let data = await fetch('./DBQuery.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    let dataJson = await data.json();

    setQuery(dataJson.paths);
  }


  useEffect(() => {
    FetchData();
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

      <div className="container">
        <div className="row">

          {query.map((data) =>

            <div key={data.name} className="col-12 my-5">
              <PathItem key={data.name} data={data} copyQuery={copyQuery} cardColor={props.cardColor} />
            </div>
          )}
        </div>
      </div>
    </>
  )

}
