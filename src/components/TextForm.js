import React, {useState} from "react";



export default function TextForm(props) {
 const [text, setText] = useState('');
 const handleUpClick = (event)=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
 }
 const handleLoClick = (event)=>{
    console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
 }
 const handleClearClick = (event)=>{
    console.log("clear was clicked"+text);
    let newText = '';
    setText(newText);
    props.showAlert("All the text are removed!","warning");
 }
//  const handleCamelClick = (event)=>{
//     console.log("camel was clicked"+text);
//     let newText = text.toLocaleLowerCase().split(" ").reduce((s, c) => s
//     + (c.charAt(0).toUpperCase() + c.slice(1)));
//     setText(newText);
//  }
const handleCamelClick = (event) => {
  console.log("camel was clicked" + text);
  let newText = text.toLowerCase().split(" ").map((word, index) => {
      if (index === 0) {
          return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  setText(newText);
  props.showAlert("Converted to camelcase!","success");
}
 const handleOnChange = (event)=>{
    console.log("Onchange");
    setText(event.target.value);
 }

 const handleExtraSpaces = ()=>{
 let newText= text.split(/[ ]+/);
 setText(newText.join(" "))
 props.showAlert("Spaces are removed!","success");
}
const handleCopy =()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!","success");
}
//  setText('New Text');
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      {/* style={{ backgroundColor: props.mode === 'teal' ? '#1fb11f' : '' }}//change bg of bootstrap button */}
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleCopy}>Copy to Clipboard</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleCamelClick}>Convert to CamelCase</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode==='light' || props.mode ==='blue')?'primary':'dark'} mx-2 my-1`} onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(Boolean).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(Boolean).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  );
}
