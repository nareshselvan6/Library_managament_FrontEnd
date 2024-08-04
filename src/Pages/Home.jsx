import React, { useEffect, useState } from "react";
import"./Pages.css";
import axios from "axios";

const Home = () => {

  const[data,setDate]=useState()
  

  useEffect(()=>{
    fetchdata()
   
  },[])
const fetchdata = async()=>{
  await axios.get("https://library-managament-backend.onrender.com/api/getdetails")
  .then(res=>setDate(res.data))
  .catch(err=>console.log(err))
}
  return (
    <div className='pagescontent'>

      <div className="display-card overflow-scroll overflow-x-hidden">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data?.getdetails?.map((ele,index)=>{
        return(
        <div className="col" key={index}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><b>Title: </b>{ele.title}</h5>
        <p className="card-text"><b>Author: </b>{ele.author}</p>
        <p className="card-text"><b>ISBNNO: </b>{ele.isbnnumber}</p>
        <p className="card-text"><b>PublicationDate: </b>{ele.publicationdate}</p>
        <p className="card-text"><b>AuthorName: </b>{ele.authorname}</p>
        <p className="card-text"><b>DOB: </b>{ele.birthdate}</p>
        <p className="card-text"><b>Biography: </b>{ele.biography}</p>

      </div>
    </div>
  </div>)

      })}

</div>

      </div>
    </div>
  );
};

export default Home;
