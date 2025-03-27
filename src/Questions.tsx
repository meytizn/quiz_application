import { useEffect, useState } from "react"


export default function Questions() {
  interface QuestionInterface {
    number:string,
    title:string,
    answer:string,
    options:string[]

  }

  let questions:QuestionInterface[] =[
    {number:"A",title:"what is js ?" , answer:"js",options:["ts","js","vs","jsx"]},
    {number:"B",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
    {number:"C",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
    {number:"D",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
  ]


   let [next,Setnext]=useState<number>(0)
  //  let [checker,Setchecker]=useState<boolean>(false)


  function answerhandler(option:string):void{

   
    if (option==questions[next].answer) {
      // alert("correct")
      Setnext(next+=1)
      // Setchecker(true)

      
    }
    return (
      Setnext(next+=1)
      // Setchecker(false),
     
    )
  
    

  }

  return (
    <>
    <div className="flex flex-col w-[95%] m-auto bg-blue-500 text-[25px] text-white my-3 p-5 rounded-md">
     

      <div className=""> {questions[next].number} ) - {questions[next].title}</div>

      <div className="flex flex-col justify-around items-center content-center md:flex-row md:justify-around  content-center  gap-3 ">{questions[next].options.map((Option,index?:number)=><button className={`my-5 p-5 w-[55%] bg-white text-black border `}  onClick={()=>answerhandler(Option)}  key={index}>{Option}</button>)}</div>

    </div>

    
    </>
  )
}
