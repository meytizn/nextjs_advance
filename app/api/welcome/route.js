
// // 3tips is here 
// use api folder , foldername , route.js   
// the func name should be http method 
// return new response with code 

export async function GET() {

  try{
    // throw new Error('eeeerrooorrr')    //to jump up and test catch we use throw
    return new Response(
    
      JSON.stringify({message:'welcome from api route '}),
      {status:200}
    )
  }


  catch(error){
    console.log(error)
    return new Response(
      JSON.stringify({message:'there is something wrong . try again later '}),
      {status:500}
    )
  }


}
