import React from 'react';
import "./style.css"

const Footer =()=>{
  return(
    <div className="bg-dark text-center border-info "
    style={{"borderWidth": 3}}>
        <div className="text-white-50 pt-3">&copy;2020 Bret Rushing</div>
        <p className="text-muted pb-2">
           <a className="ghlink" href="https://github.com/brushing1215" target="_blank"  rel="noopener noreferrer"> Brett Rushing</a>
            
        </p>
    </div>
  )   
}

export default Footer