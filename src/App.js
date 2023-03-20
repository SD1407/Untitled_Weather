
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs"; // this import is important
import TimeAndLocation from './components/TimeAndLocation';
import TemparetureAndDetails from './components/TemparetureAndDetails';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation/>
      <TemparetureAndDetails/>
      {/* <h1 className="text-2xl font-bold text-red-500">Hello world!</h1>
      <UilReact size={50}/> */}
    </div> 
  );
}

export default App;
