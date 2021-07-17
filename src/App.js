import './App.css';
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import react, { useRef } from 'react';
import Home from './components/pages/Home/home'




function App() {


  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          {/* <Route path='/about' exact component={ } />

            <Route path='/services' exact component={ } />

            <Route path='/contact-us' exact component={ } />

            <Route path='/sign-up' exact component={ } /> */}

        </Switch>
      </Router>
    </>
  )
}

export default App;
