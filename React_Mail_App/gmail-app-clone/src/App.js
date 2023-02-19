import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compose from './components/Compose';
import EmailDetail from './components/EmailDetail';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectsendMessageIsOpen } from './features/mailSlice';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/Login';
import { selectUser, signin, signout } from './features/userSlice';
import { auth } from './firebase';




function App() {
  const isComposeOpen=useSelector(selectsendMessageIsOpen);
  const user= useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
        }))
      }else{
        dispatch(signout())
      }
    })
  },[])
  return (
    <Router>
      {
        user ? (
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
            <EmailList />
            </Route>
            
            <Route path="/mail">
              <EmailDetail />
            </Route>
           
          </Switch>

        </div>
        {
          isComposeOpen && <Compose />
        }
      </div>
      ):(
        <Login/>
      
      )}
    </Router>
  );
}

export default App;
