import React ,{useState} from 'react'
import "./style.css"; 
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const preventDefault1 = (e)=>{
    e.preventDefault(); 
    let Name2 = document.getElementById('username')
    let Email2 = document.getElementById('email')
    let Pass11 = document.getElementById('pass1')
    let Pass2 = document.getElementById('pass2')
    console.log(Pass2.value,Pass11.value)
    if(Pass11.value != Pass2.value){
      setName("Your passwords are not matching ")
      console.log(Pass11,Pass2)
      setInterval(()=>{
        setName('')
      },3000)
    }
      else{
          
          const data = { name:Name2.value,email:Email2.value,password:Pass11.value };
          console.log(data)

          fetch("http://localhost:3000/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then(response => response.json())
          .then((data) => {console.log(data); 
          
            localStorage.setItem('auth-token' , data.auth);
            toast('Account Created Successfully !', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          } 
          );

          Name2.value=''; 
          Email2.value=''; 
          Pass11.value=''; 
          Pass2.value=''; 
          
          console.log(Name2.value,Email2,Pass11,Pass2)

      }
    }

  

  return (
    <>
    <p className="name2">{name}</p>
    <div className="signup">
        <form  onSubmit={preventDefault1}>
                    <h2>Sign Up CuriousCanvas </h2>

        
           <input type="text" id="username" name="username" placeholder="Enter Your Username"  required/>

            <input type="email" id="email" name="email" placeholder="Enter Your Email  "  required/>
            <input type="password" id="pass1" name="pass1" placeholder="Enter Your PassWord" required/>
            <input type="password" id="pass2" name="pass2" placeholder="Confirm PassWord" id="pass2"  required/>
            <button>SignUp</button>
        </form>
    </div>
    </>
  )
}

export default Signup