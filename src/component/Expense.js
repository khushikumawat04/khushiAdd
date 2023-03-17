import React, { useState }  from 'react'

const Expense = () => {


    const [text1,setText1] = useState("");
    const [text2,setText2] = useState("");
    const [text3,setText3] = useState("");
    const[list,setList] = useState([]);


    const submit = (e)=>{
        const toggle = {text1,text2,text3}
        if(text1 && text2 && text3){
          setList([...list,toggle] )
          setText1("")
           setText2("")
             setText3("")
        }
    
      }
      const deleteItem = (id)=>{
      setList([...list].filter((arrE,indexn) => {
        return id !== indexn;

      }

      ))
    
      };
      const remove =()=>{
        setList([]);

      }


  return (
    <div>

<form className='container w-75  bg-light mt-5' style={{height:"400px", width:"100%"}}>
          <div className="row">
  <h1 style={{marginTop:50}}className='text-center'>Add Expenses App</h1>
  </div>
<div class="row" >


    <div className="offset-md-3 col-md-3 mt-5">
      <div className="form-outline">
      <label className="form-label" htmlFor="form3Example1">Title</label>
        <input type="text" id="form3Example1" value={text1} onChange={(event) => { setText1(event.target.value); }} className="form-control" />
        
      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div className="form-outline">
      <label className="form-label" htmlFor="form3Example2">Amount</label>
        <input type="text" id="form3Example2" className="form-control" value={text2} onChange={ (event) => { setText2(event.target.value); }}  />
       
      </div>
    </div>
  </div>

  <div className="row" >


    <div className="offset-md-3 col-md-3 mt-5">
      <div className="form-outline">
      <label className="form-label" htmlFor="form3Example1">Date</label>
        <input type="date" id="form3Example1" className="form-control" value={text3} onChange={(event) => { setText3(event.target.value); }} />
       
      </div>
    </div>
    <div className=" col-md-3 mt-5">
      <div className="form-outline">
         <button style={{marginTop:32}} onClick={submit} type="button" id="form3Example2" className="form-control btn btn-success" >
        AddExpenses </button>
      </div>
    </div>
  </div>
  </form>
  <button type="button" className=" offset-7 btn btn-danger mt-5" onClick={remove}>Remove All</button>




   {
    list.map((a,index)=>{
      return(
      <>

      <div className='mt-5 shadow-none bg-light rounded container w-75 d-flex justify-content-start '>
      
<div className='col-md-3 mt-4 mx-1'> <div className=''>Title</div>
 <div className="shadow-lg p-2 mt-1  bg-white rounded"> {a.text1} </div></div>

          <div className='col-md-3 mt-4 mx-1'> <div className=''>Amount</div>
          <div className="shadow-lg p-2 mt-1  bg-white rounded"> ₹{a.text2} </div></div>

          <div className='col-md-3 mt-4 mx-1'> <div className=''>Date</div>
          <div className="shadow-lg p-2 mt-1   bg-white rounded"> {a.text3} </div></div>

 <div className='btn-group mx-5 mt-1'>
   <button type="button" className="btn btn-warning my-5">Edit</button>
   <button type="button" className="btn btn-danger my-5 " onClick={()=>{deleteItem(index)}}>Delete</button>
   </div>
   </div>
   </>
      )
   })
  } 



      
    </div>
  )
}

export default Expense
