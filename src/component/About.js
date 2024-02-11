import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
      let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
      }
   
  return (
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong> Analyze your Text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
      "Unlock the power of words with our Text Analysis tool, delving deep into your content to reveal insights and nuances.Empower your communication by harnessing the Analyze Your Text feature on our website, offering a comprehensive examination of your written content."
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      "Analyze Your Text for Free: Uncover the potential of your words without spending a dime, with our accessible and intuitive platform.Empower Your Words, Free of Charge: Dive into our Text Analysis tool and enhance your content at no cost, because great insights shouldn't come with a price tag."
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        "Seamless Text Analysis Across Browsers: Experience our platform's full functionality with impeccable browser compatibility.Your Text, Your Browser: Enjoy our Text Analysis tools hassle-free, as we ensure compatibility across all major web browsers."
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
