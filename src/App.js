import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <ToastContainer position='top-center'></ToastContainer>
    <Route exact path="/" component={Home} />
<Route path="/add" component={AddEdit} />
<Route path="/AddEdit/:id" component={AddEdit} />
<Route path="/about" component={About} />
    </div>



  
     </BrowserRouter>
    
  );
}

export default App;
