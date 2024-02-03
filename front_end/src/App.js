
import Heading from './components/Heading';
import Cards from './components/cards';
function App() {
  console.log(__dirname);
  return (
    <div className=" h-full bg-gradient-to-r from-cyan-500 to-blue-500" >
      <Heading></Heading>
      <Cards></Cards>
    </div>
  );
}

export default App;
