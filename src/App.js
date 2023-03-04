import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/aboutus/About';
import Overview from './components/overview/Overview';
import Services from './components/services/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Overview/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
