import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';   
import Home from './components/Home/Home';
import Footer from './components/Footer/footer'
import Login from './components/login/login'
import Signup from './components/signup/Signup'; 
import Blog from './components/blog/blog'; 
import Addblog from './components/Addblog/addblog'; 
import Blogs from './components/Blogs/page'; 
import Myblogs from './components/Myblog/myblog';
import Search from './components/Search/Search'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
        <div className="App">
     

          <BrowserRouter>
             <Navbar/>
          <ToastContainer/>


              <Routes>
              <Route exact path='/' element={<Home  key="Home" />} />
              <Route exact path='/login' element={<Login  key="Login" />}  />
              <Route exact path='/signup' element={<Signup  key="signup" />} />
              <Route exact path='/blogs' element={<Blogs  key="blogs" />} />
              <Route exact path='/blog' element={<Blog  key="blog" />} />
              <Route exact path='/myblog' element={<Myblogs  key="myblog" />} />
              <Route exact path='/search' element={<Search  key="Search" />} />



              <Route exact path='/addblog' element={<Addblog  key="addblog" />} />
              

              </Routes>
          <Footer/>


             </BrowserRouter>
        </div>
    </>

  );
}

export default App;
