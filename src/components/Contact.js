const Contact = ()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl m-2 p-2">Contact us</h1>
           <form>
           <input type="text" placeholder="name" className="border m-4 p-2" />
           <input type="text" placeholder="message" className="border m-4 p-2"/>
           <button className="border border-black bg-gray-200 p-2 rounded-sm">Submit</button>
           </form>
        </div>
    )
}
export default Contact