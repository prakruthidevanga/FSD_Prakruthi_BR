







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return <h1>Pragathi</h1>
   
// }

// export default App;
//  import React from 'react';
import "./styles.css"
// export default function Head(){
//   return <div>
// //     {/* <h1>Hiii</h1>
// //     <h2>keee</h2> */}
// {/* //     <h1>Employee Details</h1>
// //     <p>Employee id: 203</p>
// //     <p>Employee Name: Prakruthi BR</p>
// //     <p>Employee company: Google</p>
// //     <p>Employee Salary: 250000</p>
// //     <p>Employee Location: Banglore</p>
// //     <p>Employee Phone Number: +91 8845697101</p> */}
//   </div>
// };

// import React from "react";

// function App(){
//   return <h1>Hellooo</h1>
// }
// export default App;

// import React from "react";

// function Parent(props) {
//   return <h1>Hello,{props.name}</h1>
// }
// export default Child;
// function Child() {
//   return (
//     <Parent name = "Bhumii"/>
//   )
// }

// import React from "react";

// function Parent(props) {
//   return <h1 className="ab">About Mee:  {props.name}</h1>
// }
// export default Child;
// function Child() {
//   return (
//     <Parent name="My name is Prakruthi BR. I am a student with a strong interest in computer science and cloud technologies. I enjoy learning new concepts, especially in areas like software engineering, data management, and cloud platforms. I am always eager to improve my skills and gain practical knowledge. Thank you." />
//   )
// }


// import React,{useState} from "react";

// function State(){

//   const[message,setMeassage] = useState("Hello");
//   return <div className="div">
//     <h1>{message}</h1>

//     <button 
//      onClick = {()=> setMeassage(<span>Prakruthi</span>)}
//      >Change Text</button>
//   </div>

// };

// export default State

import React, {useState} from 'react';

function Counter()
{
  const[count,setCount]= useState(0);

  return <div class="box">
    <p>{count}</p>
    <button className="butt1"
    onClick = {()=> setCount(count+1)}>Increment</button><br></br>
    <button className="butt2"
    onClick={()=>setCount(count-1)}
    >Decrement</button><br></br>
    <button className="butt3"
    onClick={()=>setCount(0)}>Reset</button><br></br>
  </div>
};
export default Counter

// import React from 'react';
// import "./styles.css"
// // export default function Head(){
// //   return <div></div>
// export default function Head(){

//   return <div>
//       <form>
//             <fieldset>
//                 <h1>Youtube</h1>
//                 <img src="https://tse1.mm.bing.net/th/id/OIP.aZh6zTqj6gJ42-s2d1d-RQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"></img>
//                 <p class="username">👤 Your user name</p><hr></hr>
//                 <p class="password">🔒Password</p><hr></hr>
//                 <div class="options">
//                     <label>
//                       <input type='checkbox'/> Remember me
//                     </label>
//                     <span class="forget-password">Forgot Password?</span><br></br><br></br>
//                 </div>
//                 <button>Log In</button>
//                 <p>Don't have an account?Sign Up</p>
                
               
//             </fieldset>
//         </form>
//       </div>
//  };

