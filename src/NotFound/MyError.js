import React from 'react'
import './MyError.css'
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const MyError = () => {
  return (
    <div className='Main_Div'>
        <div>
          <img src='https://c.tenor.com/8M-qrRMjlhMAAAAC/thaggedhe-le-allu-arjun.gif'/>
          <h1 className='font'>404 Not Found <NewReleasesIcon color="primary" fontSize="40px"/></h1>
          <h3>Sorry we weren't able to get data,Please try again later</h3>
        </div>
    </div>
  ) 
}

export default MyError