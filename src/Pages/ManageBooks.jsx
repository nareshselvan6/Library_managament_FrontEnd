import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageBooks = () => {
    const[data,setDate]=useState();
    const[delet,setDelet]=useState();
    
console.log(delet);

    const navigate=useNavigate();

    const fetchdata=async()=>{
       await axios.get("https://library-managament-backend.onrender.com/api/getdetails")
    .then(res=>setDate(res.data))
    .catch(err=>console.log(err))}

    useEffect(()=>{
        fetchdata()
       
      },[delet])


       const del=async(id)=> {
        console.log(id);
        
        await axios.delete(`https://library-managament-backend.onrender.com/api/deletedetails/${id}`)
        .then(res=>setDelet(res.data))
        .catch(err=>console.log(err))
    }


      const edit=(id)=>{
        
      navigate(`/editbooks/${id}`)
      }


    return (
        <div>
            <div className='table-content  table-css table-responsive overflow-scroll '>
            <table className='table table-responsive table-striped'>
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">ISBN_Number</th>
                        <th scope="col">Publication_Date</th>
                        <th scope="col">Authorname</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Biography</th>
                        <th scope="col">Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {data?.getdetails?.map((ele,index)=>{
                        return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.title}</td>
                        <td>{ele.author}</td>
                        <td>{ele.isbnnumber}</td>
                        <td>{ele.publicationdate}</td>
                        <td>{ele.authorname}</td>
                        <td>{ele.birthdate}</td>
                        <td className='biograph '>{ele.biography}</td>
                        <td><button type='button' className='btn btn-primary m-1' onClick={()=>edit(ele._id)} >Edit</button> <button  type='button'  className='btn btn-danger' onClick={()=>del(ele._id)} >Delete</button></td>
                    </tr>

                        )

                    })}

                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ManageBooks;