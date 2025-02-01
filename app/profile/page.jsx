

function Profile(){

  let information={
    name:'Mahdi',
    last_name:'Zamanian',
    age:24,
    country:'Iran',
    
  }

  return(<>
  
      <div className="[w-100%] h-[60px] text-[30px] text-center text-white  bg-blue-500">Profile</div>


      <div className=" flex flex-row w-[90%]  m-auto text-[20px] text-center bg-green-400 my-[25px]">
        <div className="w-[25%]"><h1>{information.name}</h1></div>
        <div className="w-[25%]"> {information.last_name}</div>
        <div className="w-[25%]"><h3>{information.age} years old</h3></div>
        <div className="w-[25%]"><h3>{information.country}</h3></div>
        
        
        
        
        
        </div>
      </> )
}

export default Profile