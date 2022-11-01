import "./App.css";
// import Button from "./components/Button";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Main from "./components/mainbody/Main";


function App() {
  return (
    <div className=" ">

      <Router>
        
        <Routes>
          <Route exact path='/' element={<Main />} />
       

      {/* <Button text="click me" /> <br />
      <Button text="submit" type="secondary size=large" />
      <Button text="delete" type="tertiary" size="large" /> */}

    </Routes >
    
    </Router>
    </div>
  );
}

export default App;
