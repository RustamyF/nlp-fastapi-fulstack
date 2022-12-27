import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Front from './components/front';
import MovingText from './components/moving'

function App() {

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"900px", "height":"800px", "backgroundColor":"white", "marginTop":"15px"}} >
      <Header />
      <MovingText />
      <Front />
      <Footer />
    </div>
  );
}

export default App;
