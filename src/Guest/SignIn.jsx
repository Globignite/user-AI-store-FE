import React, { useState } from 'react'
import './SignUp.scss'
export default function SignIn() {
   // const [fillEmail, setFillEmail] = useState("");
   // const [fillPassword, setFillPassword] = useState(""); 
   const [success, setSuccess] = useState("")
   const [formData,setFormData] = useState({
      email:'',
      password:''
   })

   const handleChange = (e)=>{
      setFormData({...formData, 
      [e.target.name]: e.target.value
      })
   }

   const handleClick = async(e) =>{
      e.preventDefault();
     
      try {
         // const res = await axios.post("http://localhost/5173", formData);
         // console.log("response:", res.data);
         console.log(formData);
         setSuccess(<span className="success"><img src="./success.png" alt="success" />SignUp successfull!</span>)
         setFormData({
            email:'',
            password:''
         })
      } catch (error) {
         setSuccess(<span className="error"><img src="./error.png" alt="error" />Error</span>)
         console.error("onsubmiting error", error);
         
      }
   }


   
   return (
      <>
         <div className="bodyContainer">
            <div className="bodyContainerchild">
               <div className="signup">
                  <div className="left">
                     <div>
                        <div className="top">
                           <h2>Sign In</h2>
                        </div>
                        <hr />
                        <form onSubmit={handleClick}>
                              <div className='inputField' >
                                 <input
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                 />
                              </div>
                              <div className='inputField' >
                                 <input
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                 />
                              </div>
                           <p>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                           <button >Sign In</button>
                           {success? <span>{success}</span>: ""}
                           <div className="line1">
                              <div className="line1-child"></div>
                              <div>or</div>
                              <div className="line1-child"></div>
                           </div>
                           <div className='signupgoogle'>
                              <img srcSet="./google.png" alt="google" />
                              Signup with Google
                              </div>
                           <p>Already Have Account ? <b style={{cursor:'pointer'}}>Sign Up</b></p>
                        </form>
                     </div>
                  </div>
                  <div className="right">
                  <div className="wrapper">
                        <span>A</span>
                        <span>i</span>
                        <span>-</span>
                        <span>T</span>
                        <span>o</span>
                        <span>o</span>
                        <span>l</span>
                        <span>s</span>
                     </div>
                     {/* <img src="https://cdn.pixabay.com/photo/2017/09/14/11/14/water-2748660_1280.png" alt="Your GIF" /> */}

                     {/* <span className="AiToolTitle">Ai Tools</span> */}
                  </div>


               </div>
            </div>
         </div>
      </>
   )
}
