
import SignUp from '../../components/SignUp'
import LogIn from '../../components/LogIn'
import LogOut from '../../components/LogOut'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Spin } from "antd"
import {Link} from "react-router-dom"

import { useEffect, useState } from 'react';





function SignIn() {

  const [user, setUser] = useState({ isLogin: false });
  const [loader, setLoader] = useState(true)
  const [changeLog, setChangeLog] = useState(false)


  console.log(user.isLogin, loader)


  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // const docRef = doc(db, "user", auth)

        // const userInfo = (await getDoc(docRef)).data();
        // console.log("userInfo=>",userInfo);
        setUser({
          isLogin: true,
          // ...userInfo,

        })
        setLoader(false)
      } else {
        setUser({ isLogin: false })
        setLoader(false);
      }
    })
    return subcribe;

  }, [])

  return (
    <div>
      {loader ? (
        <div className="flex h-screen justify-center items-center">
          <Spin />{" "}

        </div>
      ) : (
        user.isLogin ? <LogOut />
          : (
            changeLog ? (
              <div>
                
                <SignUp />
              <button
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={()=>setChangeLog(false)}>LogIn</button>

                </div>
            ) : (
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center" >
                <LogIn />
                <button 
                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>setChangeLog(true)}>sign up</button>
              </div>
              
            )))}
    </div>
  )
}


//     {
//       user?(

//         <Spin/>


// ): (

//     <>
//       <div>






//         <SignUp />

//         <LogIn />


//         <LogOut />






//       </div>
//     </>
//   )

// }





export default SignIn
