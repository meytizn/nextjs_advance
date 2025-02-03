

let products=[
  {name:"iphone" , price:800},
  {name:"samsung" , price:600},
]




// GET Method

export async function GET(request) {
  try{
    // throw console.error();
    return new Response(
      JSON.stringify(products),
      {status:200}
    )
  }

  catch(errror){
    return new Response(
      JSON.stringify({"alert":"not found"}),
      {status:500}
    )
  }
}





// POST Method

export async function POST(request) {

  try{
    let newproduct = await request.json()
    products.push(newproduct)

    return new Response(
      JSON.stringify(products),
      {status:201 , headers:{"Content-Type":"application/json"}}
    )

  }

  catch(errror){
    return new Response(
      JSON.stringify({"alert":"posting failed "}),
      {status:400,headers:{"Content-Type":"application/json"}}
    )
  }

}





// PUT Method

export async function PUT(request) {
  try{
    let updatedproduct = await request.json()
    let index = products.findIndex((product)=>product.name==updatedproduct.name)  //map in list to get index by name 

    if (index==-1){  //there is no name in index 
      return new Response(
        JSON.stringify({"alert":"product not found by the name  "}),
        {status:404,headers:{"Content-Type":"application/json"}}
      )
    }

    products[index] = updatedproduct     //changing objects
    return new Response(
      JSON.stringify(products) , 
      {status:200 , }
      
    )


  }


  catch(errror){
    return new Response(
      JSON.stringify({"alert":"put failed "}),
      {status:400,headers:{"Content-Type":"application/json"}}
    )
  }
}






// DELETE Method

// DELETE Method

export async function DELETE(request) {
  try {
    let deleteproduct = await request.json();
    products = products.filter((product) => product.name !== deleteproduct.name); //retuen all products name its name not equal to deleted product.name 

    return new Response(
      JSON.stringify(products),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "deleting faild" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
