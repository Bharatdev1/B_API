import React,{useEffect,useState,Fragment} from 'react';
import Axios from 'axios';
// App Import
import Api_main from './main/Api_main';
import MyError from './NotFound/MyError';
const App = () => {

const [datavisibe , SetDatavisibe]=useState();
const [Data , SetData]=useState();
const [filterData , SetFilterData]=useState();

// filter 
let filterMydata = (data)=>{
  SetFilterData(data)
}
// console.log(filterData);

useEffect(()=>{
  Axios.get("https://jsonplaceholder.typicode.com/users").then(
    (apidata)=>{
      const {data}=apidata
      SetData(data);
      SetDatavisibe(true)
    }
  ).catch((err)=>{
    console.error(err);
    SetDatavisibe(false)})
},[]);



// console.log(Data);


  return (
    <Fragment>
      {datavisibe?<Api_main MyData={Data} filterData={filterData}
      myFilterFunction={filterMydata}  myFilterData={filterData}
      />:<MyError/>}
    </Fragment>
  )
}

export default App