// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
function App() {
  return (
    <>
    <Navbar title = "Text Utils" aboutText = "About Us"/>
    {/* <Navbar/> */}
    <TextForm heading = "Text Area to analyze"/>
    </>
  );
}

export default App;
