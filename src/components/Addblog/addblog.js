import React, { useEffect, useState } from 'react'
import "./style.css"
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addblog = () => {
  const [file, setFile] = useState(null);

  const [author, setauthor] = useState('')
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const navigate = useNavigate();

  const Checkuser = () => {
    let item = localStorage.getItem('auth-token')
    console.log(item)
    if (item == null) {
      console.log("null is here ")
      navigate('/login')
    }

  }

  

 const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = async(e) => {
    e.preventDefault(); 
    
    if (!file) {
      alert('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('author' , author); 
      formData.append('title' , title); 
      formData.append('content' , content); 
      formData.append('auth',localStorage.getItem('auth-token'))

      const response = await fetch('http://localhost:3000/addblog', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log(data)
        toast('Your Blog is Added !', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setauthor(''); 
          setFile(null); 
          settitle(''); 
          setcontent('')
      } else {
        toast.error('Your blog is not added ',{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name == 'author') {
      setauthor(e.target.value)
    }

    else if (e.target.name == 'tblog') {
      settitle(e.target.value)
    }
    else if (e.target.name == 'cblog') {
      setcontent(e.target.value)
    }
  }
  useEffect(() => {
    Checkuser();

  }, [])

  return (
    <div className="signup">

      <form   enctype="multipart/form-data" onSubmit={handleClick} onChange={handleChange} >
        <h1>Add Your Blog  </h1>


        <input type="text" name="author" placeholder="Enter Author Name" value={author} required />

        <input type="text" name="tblog" placeholder="Enter the title of Blog   " value={title} required />
        <input id='img' type="file" name="img" onChange={handleFileChange} />

        <textarea name="cblog" rows="25" placeholder="Enter blog content " value={content}> </textarea>
        <button className="btn3" >Add your blog </button>
      </form>
    </div>
  )
}

export default Addblog