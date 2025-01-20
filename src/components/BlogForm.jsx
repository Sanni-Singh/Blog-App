import { useRef } from "react"
import { collection, addDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { fireStore } from "../../firebase";
const BlogForm = ({setAddPost}) => {

  const titleVal = useRef();
  const paraVal = useRef();
  const postValue = collection(fireStore , "blogs");
  const submitPost = async()=>{
    const postdata = {
      title : titleVal.current.value,
      body : paraVal.current.value,
    }
    try{
      await addDoc(postValue , postdata)
    }
    catch(err){
      console.log(err);
    }

    setAddPost(false)
    
  }
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center bg-black z-30 backdrop-blur-sm">
        <div className="text-white sm:w-[500px] w-[95%] flex flex-col items-center gap-3">
            <p className="text-4xl font-bold text-center">Fill The Form</p>
            <input ref={titleVal} className="px-4 py-2 w-[100%] rounded-md text-black text-xl outline-none" type="text" placeholder="Enter Your Title"/>
            <textarea ref={paraVal} className="px-4 w-[100%] h-[200px] rounded-md text-black text-xl outline-none" placeholder="Enter Your Content"/>
            <div className="flex gap-4">
            <button onClick={submitPost} className="bg-blue-900 hover:bg-blue-700 w-fit py-2 px-8 rounded-xl text-xl font-bold">Add</button>
            <button onClick={()=>setAddPost(false)} className="bg-red-900 hover:bg-red-700 w-fit py-2 px-8 rounded-xl text-xl font-bold">Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default BlogForm