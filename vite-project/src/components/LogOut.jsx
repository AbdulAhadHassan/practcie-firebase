import { getAuth, signOut } from "firebase/auth";
import { Button } from "antd";

 function LogOut(){

const signout =  ()=>{
    
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

    return(
        <Button  onClick={signout}>Log out</Button>
    )
 }
 export default LogOut