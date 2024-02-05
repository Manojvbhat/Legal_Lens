
import Heading from './components/Heading';
import Cards from './components/cards';
import {Route,Routes} from "react-router-dom";
import Judge from './screen/Judge';
import Lawyer from './screen/Lawyer';
import People from './screen/People';

function App() {

  return (
    <div className=" h-screen bg-gradient-to-r from-cyan-500 to-blue-500" >
      
      {/* <Heading></Heading>
      <Cards></Cards> */}
      <Routes>
        <Route path='/' element={<Cards></Cards>}></Route>
        <Route path='/Judge' Component={Judge}></Route>
        <Route path='/Lawyer' Component={Lawyer}></Route>
        <Route path='/People' Component={People}></Route>
      </Routes>
    </div>
  );
}

export default App;
