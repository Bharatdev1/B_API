import React from 'react';
import Api_Filter from './Api_Filter';
import Myerror2 from '../NotFound/Myerror2'

const Api_main = ({MyData,myFilterFunction ,myFilterData}) => {
  return (
    <div className="container">
      <h1 className='text-center'>User Data</h1>
  <div className="row gx-1  ">

    <div className="col-md-6 ">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  {
    MyData.map(data=>
      <tbody className=' list-group-item-action' key={data.id} onMouseOver={myFilterFunction.bind(this,data)}>
      <tr id={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </tr>
  </tbody>
      )
  }
</table>
    </div>

    <div className="col-md-6">
       {myFilterData? <Api_Filter Final_List={myFilterData}/>:<Myerror2/>}
    </div>

  </div>
</div>
  )
}

export default Api_main 