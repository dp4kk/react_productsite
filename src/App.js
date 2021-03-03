import React  from 'react'
import { CssBaseline } from '@material-ui/core';
import FrontPage from './Components/FrontPage'
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import ProductPageOne from './Pages/ProductPageOne';
import ProductPageTwo from './Pages/ProductPageTwo';
import ProductPageThree from './Pages/ProductPageThree';
import Contact from './Pages/Contact';
import About from './Pages/About';
import {AuthProvider} from './Providers/UserProviders'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignupPage';
import PrivateRoute from './Providers/PrivateRoute'
import Reviews from './Pages/Reviews';
function App() {
  return (
    <React.Fragment>
   
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={FrontPage} />
          <PrivateRoute path="/One" component={ProductPageOne} />
          <PrivateRoute path="/Two" component={ProductPageTwo} />
          <PrivateRoute path="/Three" component={ProductPageThree} />
          <PrivateRoute path="/Contact" component={Contact} />
          <PrivateRoute path="/About" component={About} />
          <PrivateRoute path='/review' component={Reviews}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </AuthProvider>
      </Router>
      
      
      <CssBaseline />
    </React.Fragment>
  );
}

export default App;
