import React, { useEffect, useState } from 'react'
import "./style.css";
import { AiOutlineEye } from "react-icons/ai";
const Blog = () => {
  const [blog, setblog] = useState({});
  const [comments, setcomments] = useState([])
  const [comment, setcomment] = useState('');
  const [loginn, setloginn] = useState(false)
  let query = window.location.search.split('=')[1];
  const checkuser = () => {
    let item = localStorage.getItem('auth-token');
    if (item != null) {
      setloginn(true)
    }
  }
  const fetchdata = () => {
    fetch(`http://localhost:3000/getblog?q=${query}`).then(response => response.json()).then((data) => {
      setblog(data.blogs)
      setcomments(data.comment)
    })
  }

  const handleChange = (e) => {
    setcomment(e.target.value)
  }

  useEffect(()=>{
    checkuser(); 
  },[])

  const handleClick = () => {
    const token = localStorage.getItem('auth-token')
    let id = blog._id
    const data = { comment: comment, token: token, blogid: id };
    console.log(data)
    console.log(token)

    fetch("http://localhost:3000/postcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json()).then((data) => {
      fetchdata();

    })

    setcomment('');
  }

  useEffect(() => {
    fetchdata();
  }, [])
  return (
    <>
      <hr />
      <div className="flex1">
        <div className="section" id="blog">

          <h2>{blog.title}</h2>
          <p id="article">{blog.article} </p>
          <div className="img3">  <img src={`http://localhost:3000/${blog.filename}`} alt="" /> </div>


        </div>
        <div className="section" id="author">
          <h3>{blog.AuthorName}</h3>
          <p>{blog.date}</p>
          <p>Category</p>
          <p className="views"> <AiOutlineEye className="font-bold " /> {(blog.views) / 2}</p>
        </div>
      </div>

      {loginn &&
        <div className="comment">
          <input type="text" placeholder="Add a Comment " value={comment} onChange={handleChange} />
          <button onClick={handleClick}>Add Coment </button>
        </div>}
        {!loginn && <div className="center"> Login to Add Comment  </div>}

      <div className="commentsss">

        {comments.map((e) => {

          return (
            <div className="commentt">
              <div className="immggg">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="" />
              </div>

              <div className="content23">
                <div className="user">@{e.username} </div>
                <div> {e.comment}  </div>
              </div>
            </div>

          )
        })}

      </div>

    </>
  )
}

export default Blog; 