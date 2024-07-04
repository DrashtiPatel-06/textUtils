import React from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color:'black',
  //     backgroundColor:'white'
  // });
  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  console.log(props.mode);
  let myStyle = {
    color: props.mode ==='dark'||props.mode ==='blue'?'white':'black',
    backgroundColor:  props.mode ==='dark'?'#29292d':props.mode ==='pink'?'#df6fa7':props.mode === 'purple'?'#d662d6':props.mode === 'teal'?'#2ba9a9':props.mode === 'blue'?'#6363d3':'#fff',
    border:'1px solid',
    borderColor: props.mode ==='dark'?'white':'black'
  }
  

  return (
    <div className="container my-3" style={{color: props.mode ==='light'?'black':'white'}}>
        <h2 className="my-3">About Us</h2>
        <p style={{color: props.mode ==='light'?'black':'white'}}><b>TextUtils</b> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
<br/>The most eminent features of the website are as follows :</p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is a <i></i> , which mutilates your text, but in a tender way
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             It is completely <i>free</i> to use. No credit cards required. Use as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            It is compatible with all of your <i>favorite</i> browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
