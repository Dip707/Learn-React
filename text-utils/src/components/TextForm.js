import React, {useState} from 'react'


export default function TextForm(props) {
      const [text , setText] = useState("");
      // console.log(text);
      //text = 'sfkjadf'; //wrong way to set text
      // setText('sdhalsjd'); // correct way
      // console.log(text);
      const handleUpClick =  ()=>{
            console.log("click kar diya")
            let newText = text.toUpperCase();
            setText(newText);
      }
      const handleLoClick =  ()=>{
            console.log("click kar diya")
            let newText = text.toLowerCase();
            setText(newText);
      }
      const handleOnChange = (event) =>{
            setText(event.target.value);
      }
      return (
            <div className = "container my-3">
                  <h1>{props.heading}</h1>
                  <div className="mb-3">
                        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" cols="30" rows="8"></textarea>
                  </div>

                  <button className="btn btn-primary mx-1" onClick ={handleUpClick}>Convert to Upper Case</button>
                  <button className="btn btn-primary mx-1" onClick ={handleLoClick}>Convert to Lower Case</button>

                  <h2 className="container my-4">Info</h2>
                  <div className="container">
                        {text.split(' ').length} words and {text.length} characters
                  </div>
            </div>
      )
}
