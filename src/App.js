import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/main/main-page.component';
import RegistrosPage from './pages/registros/registros-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged} from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ({ setCurrentUser, currentUser }) => {
  
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        onSnapshot(userRef, (doc) => {
          setCurrentUser({
            id: doc.id,
            ...doc.data()
          });          
        });

      } else {
        setCurrentUser(userAuth);
      }
      
    });
    
    return () => {
      unsubscribeFromAuth();
    }
    
  }, []);
  
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/main' component={MainPage} />
        <Route path='/registros' component={RegistrosPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage/> } />
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
