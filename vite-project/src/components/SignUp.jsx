import { auth } from "../firebase/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";

function SignUp(){


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const SendEmailPassword = ()=>{
    console.log(
     ' email =>',email,
     'password =>',password
    )
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }

  return(
        <>
   {/* <div className="flex flex-col">
   <input
          type="email"
          className="mx-3"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
            <input
          type="password"
          className="mx-3"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
         /> 
          <button onClick={SendEmailPassword}>sign in</button>

   </div>  */}




   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
       </h2>

       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

       <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
           </label>
           <div className="mt-2 mb-2">
             <input
               id="email"
               name="email"
               type="email"
               onChange={(e) => setEmail(e.target.value)}
               required
               autoComplete="email"
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             /> 
<div className="flex items-center justify-between">
             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
               Password
             </label>
             <div className="text-sm">
               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                 Forgot password?
               </a>
             </div>
           </div>
           <div className="mt-2">
             <input
              id="password"
              name="password"
              type="password"
          onChange={(e) => setPassword(e.target.value)}
              

              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button

            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={SendEmailPassword}>sign in
          
          </button>
        </div>
    </div> 
    </div> 

  
    </>
  )



}




// import {  getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";

// function Signin(){
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
 


// const SendEmailPassword = ()=>{
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// }

//   return (
//     <>
//    <div className="flex flex-col">
//    <input
//           type="text"
//           className="mx-3"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="text"
//         />
//             <input
//           type="text"
//           className="mx-3"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="text"
//         />    <button onClick={SendEmailPassword}>sign up</button>
//    </div> 
//    {console.log(email)}
//     </>
//   )
// }


export default SignUp
