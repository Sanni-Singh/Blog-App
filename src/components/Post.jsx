
const Post = ({title,para}) => {
  return (
    <div className="md:w-[50%] w-[100%] h-[100%] m-auto border border-white p-4 rounded-lg">
        <div className="flex flex-col gap-3 items-center">
            <p className="text-2xl font-bold">{title}</p>
            <hr className="border border-white w-[100%]"/>
            <p className="text-center">{para}</p>
        </div>
    </div>
  )
}

export default Post