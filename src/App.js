import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Teams from './components/Teams/Teams';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route exact path="/home">
          <Home></Home>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="/services">
           <Services></Services>
         </Route>
         <Route exact path="/team">
         <Teams></Teams>
         </Route>
         <Route exact path='*'>
          <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
