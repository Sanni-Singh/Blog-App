import { signInWithPopup } from "firebase/auth"
import { auth, googleAuthProvider } from "../../firebase"
import { useNavigate } from "react-router-dom"
const LoginComponent = () => {
  const navigate = useNavigate();
  const signIn = async ()=>{
   try{
      const res = await signInWithPopup(auth , googleAuthProvider);
      console.log(res);
      
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