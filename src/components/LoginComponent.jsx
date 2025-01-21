import { signInWithPopup } from "firebase/auth"
import { auth, googleAuthProvider } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
const LoginComponent = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const userData = localStorage.getItem('userLogin');
    const data = JSON.parse(userData);
    if(data)navigate('/blog')
  },[])
  const signIn = async ()=>{
   try{
      const res = await signInWithPopup(auth , googleAuthProvider);
      console.log(res);
      const user = {
        name:res.user.displayName,
        email:res.user.email,
      }
      localStorage.setItem("userLogin",JSON.stringify(user))
      navigate("/blog")
   }
   catch(err){
    console.log(err);
    
   }
    
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
        <div className="w-screen h-[100%] absolute z-[-1]">
            <img className="w-[100%] h-[100%] bg-cover bg-no-repeat" src="https://wallpapers.com/images/hd/logo-background-4qw2zvdnvdx3a1xp.jpg" alt="" />
        </div>
        <div>
            <button onClick={signIn} className="py-2 hover:bg-blue-900 px-4 bg-blue-700 text-white text-xl font-bold rounded-lg">Login with Google</button>
        </div>
    </div>
  )
}

export default LoginComponent