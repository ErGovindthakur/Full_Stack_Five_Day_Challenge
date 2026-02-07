
const PropsTesting = (props) => {
     const {name="Guest" , role, isOnline, getDataBack} = props;

  return (
    <div className=' w-full px-2 py-1 bg-gray-700'>
    <p>Name -: {name}</p>
    <p>Role -: {role}</p>
    <p className={`${isOnline ? "text-green-500 font-bold" : "text-red-500"}`}>{isOnline ? "Online" : "Offline"}</p>

    <h2>Sending data from Child to Parent</h2>
    {
     getDataBack && (
    <button className="bg-gray-300 rounded-md border-none px-2 py-1 text-black" onClick={()=>getDataBack("Hello, Mr Govind")}>Send Data</button>
     )
    }
    </div>

    
  )
}

export default PropsTesting