import React from 'react';
import { useSelector } from 'react-redux';
import Compose from './components/Compose';
import EmailDetail from './components/EmailDetail';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectsendMessageIsOpen } from './features/mailSlice';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/Login';
import { selectUser } from './features/userSlice';



function App() {
  const isComposeOpen=useSelector(selectsendMessageIsOpen);
  const user= useSelector(selectUser);
  return (
    <Router>
      {
        user && (
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
      )}:{
        <Login/>
      
    }
    </Router>
  );
}

export default App;
