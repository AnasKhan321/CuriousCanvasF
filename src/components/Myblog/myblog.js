import React, { useState, useEffect } from 'react';
import "./style.css";
import {  Link } from "react-router-dom";

const MyBlogs = () => {
    const [blogs, setblogs] = useState([])
    const fetchdata = () => {
        const token = localStorage.getItem('auth-token')
        fetch(`http://localhost:3000/myblog?q=${token}`).then(response => response.json()).then((data) => {
            setblogs(data.blogs)
            console.log(data.blogs.length)
             
        })
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="blogggs">
            {blogs.length == 0 && <div className="text"> You Don't Have any Blogs </div>}
            {blogs.map((e) => {

                return (

                    <div className="blogss" key={e._id  }>

                        <div className="img-section">
                            <img src={`http://localhost:3000/${e.filename}`}alt="" />
                        </div>

                        <div className="content-section">
                            <h1>{e.title}</h1>
                            <p>{e.article.slice(0,150)}....   <Link to={`/blog?q=${e._id}`} className="text-black" > Read More  </Link>  </p>
                        </div>
                    </div>

                )

            })}



        </div>
    )
}

export default MyBlogs