import React, {useState} from 'react'

export default function TextForm(prop) {
    const handleUpClick =  ()=>{
      // console.log('upper case click' + text);
      let newText = text.toUpperCase();
      setText(newText);
      prop.showAlert("Converted to Uppercase "," Success ");
    }
    const handleLoClick =  ()=>{
      // console.log('upper case click' + text);
      let newText = text.toLowerCase();
      setText(newText);
      prop.showAlert("Converted to Lowercase "," Success ");
    }
    const handleClearClick =  ()=>{
      // console.log('upper case click' + text);
      let newText = '';
      setText(newText);
      prop.showAlert("Clear Text Successfully "," Success ");
    }
    const handleCopyClick =  ()=>{
      // console.log('upper case click' + text);
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      prop.showAlert("Copy to Clipboard!"," Success ");
     
    }
    const speak = () => {
      // let msg = new SpeechSynthesisUtterance();
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      prop.showAlert("Speak function is Working "," Success ");
    }
      const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloadedText.txt';
        document.body.appendChild(a);
        a.click();
    
        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        prop.showAlert("Download Text Successfully "," Success ");
      };
    
    const handleonChange =  (event)=>{
        console.log('on Change');
      setText(event.target.value);
      }
    const[text,setText] = useState ('');
  return (
    <>
    <div className='container' style={{color: prop.mode==='dark'?'white':'#042743'}}>
    <h1>{prop.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleonChange} style={{backgroundColor: prop.mode==='dark'?'gray':'white',
    color: prop.mode==='dark'?'white':'#042743'}}></textarea>
    </div>
    <button className='btn btn-warning mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-warning mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-warning mx-1' onClick={handleClearClick}>Clear</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-2">Speak</button>
    <button className='btn btn-warning mx-1' onClick={handleCopyClick}>Copy</button>
    <button className='btn btn-warning mx-1' onClick={handleDownload}>Download Text</button>



    </div>
    <div className="container my-3" style={{color: prop.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to prieview it here"}</p>
    </div>
    </>
  )
}