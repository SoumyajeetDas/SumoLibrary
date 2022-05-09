import React, { useState, useEffect } from 'react'
import PathItem from './PathItem.js'

export default function PathContent(props) {

  const [query, setQuery] = useState([]);

  async function Fetchdata() {
    let data = await fetch('./Paths.json'
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
    Fetchdata();
  },[])


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
              <PathItem data={data} copyQuery={copyQuery} cardColor={props.cardColor} />
            </div>
          )}

        </div>
      </div>
    </>
  )

}
