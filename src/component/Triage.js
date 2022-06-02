import React, { useEffect, useState } from 'react'
import LinkItems from './LinkItems';

export default function TriageContent(props) {

  const [query, setQuery] = useState([])

  async function FetchData() {
    let data = await fetch('./triageLink.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    let dataJson = await data.json();

    setQuery(dataJson.links);
  }

  useEffect(() => {
    FetchData();
  },[])


  return (
    <>

      <div className="container">
        <div className="row">

          {query.map((data) =>
            <div key={data.name} className="col-md-4 my-5">
              <LinkItems data={data} cardColor={props.cardColor} />
            </div>
          )}

        </div>
      </div>
    </>
  )
}
