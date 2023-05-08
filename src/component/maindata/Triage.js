import React from 'react'
import LinkItems from '../item/LinkItems';
import Spinner from './Spinner';
import { motion } from 'framer-motion'
import useDBData from '../../Hooks/useDBData';

export default function TriageContent(props) {

  // useDBData is a Custom Hook
  const [query, apiStatus, loading] = useDBData('https://flightops.vercel.app/api/v1/fops/contents/triage');


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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

                key={data.name} className="col-md-4 my-5">
                <LinkItems data={data} cardColor={props.cardColor} />
              </motion.div>
            )}

        </div>
      </div>
    </>
  )
}
