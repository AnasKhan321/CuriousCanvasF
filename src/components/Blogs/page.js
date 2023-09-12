import React, { useState, useEffect } from 'react';
import "./style.css";
import {  Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const fetchdata = () => {
        fetch("http://localhost:3000/allblog").then(response => response.json()).then((data) => {
            console.log(data.blogs)
            setblogs(data.blogs)
        })
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="blogggs">
            {blogs.map((e) => {

                return (

                    <div className="blogss" key={e._id }>

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

export default Blogs