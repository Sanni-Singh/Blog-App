import { useEffect, useState } from "react"
import Post from "./Post"
import BlogForm from "./BlogForm";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { fireStore } from "../../firebase";
const BlogHomePage = () => {
    const [addPost , setAddPost] = useState(false);
    const [arr , setArr] = useState([])
    const navigate = useNavigate()
    const userData = localStorage.getItem('userLogin');
    const data = JSON.parse(userData);
    useEffect(()=>{
        if(!data) navigate("/")
    },[])
    
    useEffect(()=>{
        const getItem = async ()=>{
            const postArr =await getDocs(collection(fireStore,'blogs'));
            const postToShow = postArr.docs.map(post => ({...post.data()}))
            setArr(postToShow)
        }
        getItem();
        
    },[addPost])
    
    if(addPost) return <BlogForm setAddPost={setAddPost}/>
    const signOuter = async()=>{
        const auth = getAuth()
        await signOut(auth);
        localStorage.removeItem('userLogin')
        navigate("/");

    }
  return (
    <div className={`w-[100%] ${arr.length === 0 ? "h-[100vh]" : "h-[100%]"} bg-black text-white relative`}>

        <header className="w-[100%] flex justify-between  sm:px-12 px-2 py-3 backdrop-blur-sm fixed top-0 left-0">
            <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 items-center">
                <p className="md:text-3xl text-xl font-bold">Blog App</p>
                <button onClick={()=> setAddPost(true)} className="border border-white  py-1 md:text-xl text-sm  font-bold px-3 rounded-lg">Create New Blog</button>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-12 gap-2 items-center ">
                <p className=" font-bold text-center">Welcome {data.name}</p>
                <button onClick={signOuter} className="bg-red-900 py-1 px-3 rounded-md md:text-xl text-sm text-white font-bold">Sign out</button>
            </div>
        </header>
        <div>
            <div className="w-[100%] h-[100%] flex flex-col gap-3 p-4 pt-[100px]">
                {
                    arr.map((ele,idx)=> <Post key={idx} title={ele.title} para={ele.body}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default BlogHomePage