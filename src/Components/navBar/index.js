import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'
const NavBar = ()=>{

    return(
        <div className="container-fluid navBar" >
            <div className="row navRow">
                <div className="col-md-2"></div>
                <div className="col-md-2 bg-info text-light">
                    <h2 className='name'>Brett Rushing</h2>
                    </div>
                <div className="col-md-3"></div>
                <div className="col-md-4">
                    <div className="row h-100">
                        <div className="col-4 linkStyle"><Link className='text-info' to='/'>About</Link></div>
                        <div className="col-4 linkStyle"><Link className='text-info' to='/portfolio'>Portfolio</Link></div>
                        <div className="col-4 linkStyle"><Link className='text-info'to='/contact'>Contact</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar