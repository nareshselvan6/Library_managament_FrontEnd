import React, { useState } from 'react';
import"./Pages.css";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as YUP from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
    const[newdata,setNewDate]=useState()
    const navigate=useNavigate();

    const datafetch=async(values)=>{
        try {
            await axios.post("https://library-managament-backend.onrender.com/api/createdetails",values)
            .then(res=>setNewDate(res.data))
            .catch(err=>console.log(err))
            navigate("/")
            
        } catch (error) {
            console.log(error);
        }
    }

    const data={
        title:"",
        author:"", 
        isbnnumber: "",  
        publicationdate: "",
        authorname:"",
        birthdate:"",
        biography:""
    }

    const handlesubmit=(values)=>{
        datafetch(values)
               
    }
    
    const Schema=YUP.object().shape({
        title:YUP.string().required("Title must be added"),
        author:YUP.string().required("Author must be added"), 
        isbnnumber: YUP.string().required("ISBN number must be added"),  
        publicationdate: YUP.string().required("Publication must be added"),
        authorname:YUP.string().required("author_name must be added"), 
        birthdate: YUP.string().required("birth_date must be added"),  
        biography: YUP.string().required("biography must be added"),

    })

    return (
        <div className='pagescontent createbook'>
              <div className='createbookpage'>
          
            <Formik initialValues={data} validationSchema={Schema} onSubmit={handlesubmit}>
                <Form>
                    <div className='book-and-author'>
                    <div className='bookdetails'>
                <div className='innerlabel'>
                <h1>Create Book</h1>

                        <label>Title</label>
                        <Field type="text" name="title"  className="inputbox"/>
                        <ErrorMessage name="title" component='h5' className='color' />
                    </div>
                    <br />
                    <div className='innerlabel'>
                        <label>Author</label>
                        <Field type="text" name="author"  className="inputbox"/>
                        <ErrorMessage name="author" component='h5' className='color' />
                    </div>
                    <br />
                    <div className='innerlabel'>
                        <label>ISBNNumber</label>
                        <Field type="text" name="isbnnumber"  className="inputbox"/>
                        <ErrorMessage name="isbnnumber" component='h5' className='color' />
                    </div>
                    <br />
                    <div className='innerlabel'>
                        <label>PublicationDate</label>
                        <Field type="text" name="publicationdate"  className="inputbox"/>
                        <ErrorMessage name="publicationdate" component='h5' className='color' />
                    </div>
                    
                    </div>
                    <div className='author-details'>
                    <h1>Author Details</h1>

                    <div className='innerlabel'>
                        <label>AuthorName</label>
                        <Field type="text" name="authorname"  className="inputbox"/>
                        <ErrorMessage name="authorname" component='h5' className='color' />
                    </div>
                    <br />

                    <div className='innerlabel'>
                        <label>DateOfBirth</label>
                        <Field type="date" name="birthdate"  className="inputbox"/>
                        <ErrorMessage name="birthdate" component='h5' className='color' />
                    </div>
                    <br />

                    <div className='innerlabel'>
                        <label>Biography</label>
                        <Field type="text" name="biography"  className="inputbox"/>
                        <ErrorMessage name="biography" component='h5' className='color' />
                    </div>
                    <br />

                    <div className='submitbtn'>
                        <button type='submit' className='create btn btn-primary'>Create</button>

                    </div>
                        
                    </div>
                    </div>
                    </Form>              
            </Formik>
            </div>
      


        </div>
    );
};

export default CreateBook;