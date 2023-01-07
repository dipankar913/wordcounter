import React,{useState} from 'react'



export default function Textform(props) {


  
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
    
  }

  const handleUpClick = ()=>{
    console.log(/*"Uppercase was Clicked"*/ + text );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success");
  }

  const handleLowClick = ()=>{
    console.log(/*"Uppercase was Clicked"*/ + text );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }


  const handleClearClick = ()=>{
    let newText = " ";
    setText(newText);
    props.showAlert("Textbox cleared successfully","success");
  }

  const handleCopyClick =() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Successfully copy all text on your clipboard", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed extra spaces", "success");
  }

  
  const [text, setText] = useState("Enter your text");
  
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'#0d0b16'}}>
        <h1 className="mb-5" >{props.heading} </h1>
        <div className="mb-3">
       <textarea className= "form-control" value={text} onChange={handleOnChange} 
       style={{backgroundColor: props.mode === 'light'?'white':'#0d0b16', color: props.mode === 'dark'? 'white':'#0d0b16'}}
       id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to upper case 
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Convert to lower case 
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
            Clear All
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
            Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>
        
    </div>
    <div className= "container my-3" style={{color: props.mode === 'dark'? 'white':'#0d0b16'}}>
      <h2>Your text summery</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
        <p>{.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>  
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Nothing to preview"}</p>
    </div>

    </>
  )
}

