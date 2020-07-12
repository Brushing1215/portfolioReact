import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/home'
import Footer from './Components/footer'
import Contact from './Components/contact';
import Portfolio from  './Components/portfolio'
import NavBar from './Components/navBar'
function App() {

    return (
      

        <div className='App'>
          {/* <Navigation /> */}
          {/* the bellow was comented out because it is what changes all stiles of all the pages */}
          {/* <div className='container mainCon'> */}
          <NavBar/>
          <div className='mainCon'>
          

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact}/>
              <Route path='*' component={Home} />
            </Switch>
            
          </div>
          <Footer/>
        </div>
   
      
    );
}

export default App;
