import React, { useEffect, useState } from 'react'
import logo from './hom.jpg'
import './style.css';
import Typed from 'react-typed';
import reading from './reading.jpg';
import writing from './writing.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {  Link } from "react-router-dom";

const Home = () => {
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
    <>
      <div className="Home" style={{ backgroundImage: `url(${logo})` }}>

        <div className='typee'>
          <Typed
            strings={[
              'Welcome To CuriousCanvas',
              'Read Daily Trending Blog  ',
              'Build Your Profile Add Blogs ']}
            typeSpeed={40}
            backSpeed={50}
            loop >
            <div className="type"></div>
          </Typed></div>
        <div className="b">
          <button className="btn2">Trending Blog</button></div>



      </div>
      <div className="container">
        <div className="contain">

          <div className="img">

            <LazyLoadImage
              alt={"reading image"}
              src={reading} // use normal <img> attributes as props
              effect="blur"
            />
          </div>
          <div className="content">
            <h3>Read Blog</h3>
            <p>Reading a blog is akin to embarking on a captivating journey of knowledge and insights. As one's eyes traverse the lines of carefully curated words, a world of information and perspectives unfolds. Each paragraph is a stepping stone that leads to a deeper understanding of the subject at hand, while vivid imagery and anecdotes paint a mental landscape that engages the imagination. The experience is personal and intimate, as the author's voice resonates through the screen, creating a connection that transcends physical distance. With each scroll, the reader absorbs not just information, but the writer's passion, </p>
          </div>
        </div>
        <div className="contain">

          <div className="img">
            <LazyLoadImage
              alt={"Writing  image"}
              src={writing} // use normal <img> attributes as props
              effect="blur"
            />
          </div>
          <div className="content">
            <h3>Write  Blogs</h3>
            <p>Writing a blog is akin to embarking on a creative odyssey, where thoughts and ideas become the brushstrokes that paint a canvas of digital expression. The process begins with introspection, as the writer delves into their passions and expertise to unearth the perfect topic. With every keystroke, words transform into a tapestry of meaning, carefully woven to inform, entertain, or inspire the reader. It's a dance between structure and spontaneity, as paragraphs take shape and ideas find their rhythm. Through anecdotes, insights, and a distinctive voice, the author forges a connection with their audience, inviting them to share in the journey of discovery. Crafting a blog is a labor of love, where concepts evolve, sentences refine, and the final piece stands as a testament to the power of the written word in an interconnected world. </p>
          </div>
        </div>
      </div>

      <h2 className="trnd">Trending Blogs </h2>
      <div className="blogs">
        {blogs.map((e,i) => {
          if( i <=2){
            return(
              <div className="blog" key={e._id}>
                <div className="img2">  <img src={`http://localhost:3000/${e.filename}`} alt="" /> </div>
                <div className="author">
                  <h6>{e.AuthorName}</h6>
                  <p>{e.date} {i} </p>
                </div>
                <div className="blogcontent">
                  <h5> {e.title} </h5>
                  <p>{e.article.slice(0,350)}...</p>
                </div>
                <button className="btn3"> <Link to={`/blog?q=${e._id}`} className="text-white" > Read More  </Link> </button>
              </div>)
          }
         
        })}




      </div>


    </>
  )
}

export default Home