import { useState } from "react"
import Post from "./Post"
import BlogForm from "./BlogForm";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const BlogHomePage = () => {
    const [addPost , setAddPost] = useState(false);
    const navigate = useNavigate()
    if(addPost) return <BlogForm setAddPost={setAddPost}/>
    const signOuter = async()=>{
        const auth = getAuth()
        await signOut(auth);
        navigate("/");

    }
  return (
    <div className="w-[100%] h-[100%] bg-black text-white relative">

        <header className="w-[100%] flex justify-between  sm:px-12 px-2 py-3 backdrop-blur-sm fixed top-0 left-0">
            <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 items-center">
                <p className="md:text-3xl text-xl font-bold">Blog App</p>
                <button onClick={()=> setAddPost(true)} className="border border-white  py-1 md:text-xl text-sm  font-bold px-3 rounded-lg">Create New Blog</button>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-12 gap-2 items-center ">
                <p className=" font-bold text-center">Welcome Sanni Singh</p>
                <button onClick={signOuter} className="bg-red-900 py-1 px-3 rounded-md md:text-xl text-sm text-white font-bold">Sign out</button>
            </div>
        </header>
        <div>
            <div className="w-[100%] flex flex-col gap-3 p-4 pt-[100px]">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </div>
  )
}

export default BlogHomePage