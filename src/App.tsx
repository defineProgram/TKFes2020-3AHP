import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import Story1 from './Story1'
import Story2 from './Story2'
import TimeTable from './TimeTable'

function App() {
  const [isLoaded,setisLoaded]=useState(false);
  const onLoad=(()=>{
    console.log("Load complete!");
    setisLoaded(true);
  });
  useEffect(()=>{
    window.addEventListener("load",onLoad);
    return (): void => {
      window.removeEventListener("load",onLoad);
		}
  });
  return (
    <div className="App">
      <div className={"loading"+(isLoaded?" inactive":" active")}>
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Story1' component={Story1} />
          <Route exact path='/Story2' component={Story2} />
          <Route exact path='/TimeTable' component={TimeTable} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
