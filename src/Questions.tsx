import { useState } from "react"


export default function Questions() {

  let [next,Setnext]=useState<number>(0)
  let [score,setscore]=useState<number>(0)


  interface QuestionInterface {
    number:string,
    title:string,
    answer:string,
    options:string[]

  }

  let questions:QuestionInterface[] =[
    {number:"A",title:"what is js ?" , answer:"javascript",options:["javascript","js","vs","jsx"]},
    {number:"B",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
    {number:"C",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
    {number:"D",title:"what is py ?" , answer:"python",options:["ts","js","vs","python"]},
  ]




  function answerhandler(option:string):void{

    Setnext(next+=1)


    if(next<questions.length){



      if (option==questions[next].answer) {
        alert("correct")
        setscore(score+=1)
        }
        else {      
          setscore(score-=1)
        }



    }



    else{
      return (alert(`questions finished and you've scored ${score} scores `),location.reload())
    }




  


    
    

  }

  return (
    <>
    <div className="flex flex-col w-[95%] m-auto bg-blue-500 text-[25px] text-white my-3 p-5 rounded-md">
     

      <div className=""> {questions[next].number} ) - {questions[next].title}</div>

      <div className="flex flex-col justify-around items-center content-center md:flex-row md:justify-around   ">{questions[next].options.map((Option,index?:number)=><button className={`my-3 p-3 w-[55%] bg-white text-black border `}  onClick={()=>answerhandler(Option)}  key={index}>{Option}</button>)}</div>

    </div>



<div className="flex flex-row justify-around w-[95%] m-auto bg-blue-500 text-[25px] text-white my-3 p-5 rounded-md">
<div>questions :  {next}</div>
<div>score :  {score}</div>
<div>len :  {questions.length}</div>
</div>
    
    </>
  )
}
