const PreviewCard = ({popup,setPopup,allData}) => {

  const {name="",email=""} = allData || {};
  return (
    <div>
    {
      popup && ( <div style={{
      width:"250px",
      background:"rgb(89, 83, 83)",
      color:'white',
      borderRadius:"7%",
      padding:"12px 12px",
      boxShadow:"2px 2px 2px 0px",
      position:'absolute',
      top:"90px",
      left:"120px"
    }}>
    <p>
    Hey Welcome Mr {name}
    </p>
    <p>email-:{email}</p>
    <button onClick={()=>setPopup(false)}>Close</button>
    </div>)
    }
   
    </div>
  )
}

export default PreviewCard