import React from 'react';

const Api_Filter = ({Final_List}) => {
  return (
    <ul className="list-group ">
  <li className="list-group-item active">Personal Details</li>
  <li className="list-group-item">Username : {Final_List.username}</li>
  <li className="list-group-item">Phone : {Final_List.phone}</li>
  <li className="list-group-item">Website : {Final_List.website}</li>
  <li className="list-group-item">Name : {Final_List.company.name}</li>
  <li className="list-group-item">City : {Final_List.address.city}</li>
    </ul>
  )
}

export default Api_Filter