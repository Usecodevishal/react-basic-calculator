import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [takeInputs, setTakeInputs] = useState({ Num1: "", Num2: "" });
  
  let indicatorEle = document.querySelector(".indicator");
  let resultEle = document.querySelector(".result");

  function implimentOperation(e){
    let indicatorEle = document.querySelector(".indicator");
    let resultEle = document.querySelector(".result");
    
   let checkInputs =  checkValidation();
   if(checkInputs){
    // indicatorEle.style.color = "green";
    indicatorEle.style.color = "blue";
    indicatorEle.innerText = "Success!";
    let result;
    let operation = e.target.name;
    if(operation == "add"){
      result = Number(takeInputs.Num1) + Number(takeInputs.Num2);
      console.log(result);
    }else if(operation == "sub"){
      result = Number(takeInputs.Num1) - Number(takeInputs.Num2);
    }else if(operation == "multi"){
      result = Number(takeInputs.Num1) * Number(takeInputs.Num2);
    }else if(operation == "division"){
      result = Number(takeInputs.Num1) / Number(takeInputs.Num2);
    }
    console.log(result);
    resultEle.innerText = result;
   }else{
    indicatorEle.style.color = "red";
    indicatorEle.innerText = "Error!";
   }


  }

  function checkValidation(){
    //let resultEle = document.querySelector(".result");
    let indicatorEle = document.querySelector(".indicator");

    let resultEle = document.querySelector(".result");
    // resultEle.innerText = "";
    let checkNum1;
    let checkNum2;
    if(takeInputs.Num1){
      checkNum1 = true;
    }else{
      checkNum1 = false;
    }
    if(takeInputs.Num2){
      checkNum2 = true;
    }else{
      checkNum2 = false;
    }

    if(checkNum1 == true && checkNum2 == false){
    //  
    indicatorEle.style.color = "red";
    indicatorEle.innerText = "Error!";
    resultEle.innerText = "Num2 cannot be empty";
    }
    if(checkNum2 == true && checkNum1 == false){
      //alert("Num1 is emptu of invalid");
      indicatorEle.style.color = "red";
    indicatorEle.innerText = "Error!"
    resultEle.innerText = "Num1 cannot be empty";
    // indicatorEle.style.color = "red";
    

    }
     if(!checkNum1 && !checkNum2){
      resultEle.innerText = "Both Num1 and Num2 cannot be empty";
    indicatorEle.style.color = "red";

      indicatorEle.innerText = "Error!"
     }else if(checkNum1 && checkNum2){
      return true;
     }
      
    }


  return (
    <>
      <div className="container">
        <h1>React Calculator</h1>
        <input className="input_num" 
        type="text" 
        placeholder="Num 1"
        value = {takeInputs.Num1}
        onChange = {(e) => setTakeInputs({...takeInputs, Num1:e.target.value})}
        ></input>
        <input className="input_num" 
        type="text" 
        placeholder="Num 2" 
        value={takeInputs.Num2}
        onChange = {(e) => setTakeInputs({...takeInputs, Num2:e.target.value})}
        ></input>

        <div className="arithmatic_div">
          <button className="arithmatic_btn"
          onClick={implimentOperation}
          name="add"
          >+</button>
          <button className="arithmatic_btn"
           onClick={implimentOperation}
           name="sub"
          >-</button>
          <button className="arithmatic_btn"
           onClick={implimentOperation}
           name="multi"
          >*</button>
          <button className="arithmatic_btn"
           onClick={implimentOperation}
           name="division"
          >/</button>
        </div>

          <p className="indicator"></p>
          <h2 className="result"></h2>
        
      </div>
    </>
  );
}

export default App;
