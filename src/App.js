import logo from './logo.svg';
import './App.css';
import BasicGrid from './component/TestFile1';
import Grid1 from './component/TestFile2';
// import Sample3 from './component/Sample3'
import Countdown from "./Countdown"
import './back.css';
function App() {
  return (
    
    <div className="App" >
        {/* <BasicGrid/> */}
        {/* <Grid1/> */}
        
        <Countdown timeTillDate="04 05 2022, 9:00 pm" timeFormat="MM DD YYYY, h:mm a" />
      
    </div>
  );
}

export default App;
