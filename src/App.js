import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/main/main-page.component';
import RegistrosPage from './pages/registros/registros-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged} from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore'

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
    
  }, [])
  console.log('user App', currentUser);
  return (
    <div className='App'>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/main' component={MainPage} />
        <Route path='/registros' component={RegistrosPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );

}

export default App;
