import React,{useState,useEffect} from 'react'
import "./style.css"
import {  Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [loginn, setloginn] = useState(false)
  const [query, setquery] = useState('')
  let navigate = useNavigate();

  const listen = ()=>{
    localStorage.clear(); 
    toast('Log Out Successfully !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      window.location.href = '/'
  }
  useEffect(()=>{
    let item = localStorage.getItem('auth-token'); 
    if (item!=null) {
      setloginn(true)
    }
   
  },[])

  const handleClick = (e)=>{
    e.preventDefault(); 
    console.log(query)
    navigate(`/search/?t=${query}`)
  }
  
  const handleChange = (e)=>{
    setquery(e.target.value)
  }
  return (
    <>
    <nav className="head">
      <ToastContainer/>
        <div className="logo">CuriousCanvas</div>
        <ul className="Navbar">

            <li>  <Link to='/'>Home</Link>  </li>
            <li>  <Link to='/blogs'>Blog</Link>  </li>
            {loginn && <li>  <Link to='/addblog'>Add a Blog </Link>  </li>}
            {loginn && <li> <Link to='/myblog' >Myblog</Link> </li>}
            {loginn && <li>  <button type="button" className="btn" id="btn" onClick={listen}>Logout</button>  </li> }
            {!loginn &&  <div className="flex"> <li> <Link to='/login'>Login</Link>   </li>   <li> <Link to='/signup'>Signup</Link>   </li>  </div>}
        </ul>

        <div className="SearchBar">
            <form>

                <input type="text" placeholder="Enter your query " value={query} onChange={handleChange}/>
                <button type="submits" className="btn" onClick={handleClick}>Search</button>
            </form>
        </div>


    </nav>
    </>
  )
}

export default Navbar ; 
