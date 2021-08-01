import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard'
import Newtrip from './components/Newtrip/Newtrip'
import Assigndriver from './components/Assigndriver/Assigndriver'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
function App() {
  return (
    <Router>
      <div className="App">


        <div>

          <Switch>
            <Route path="/dashboard">
              <Sidebar></Sidebar>
              <Header></Header>
              <Dashboard></Dashboard>

            </Route>
            <Route path="/newtrip">
              <Sidebar></Sidebar>
              <Header></Header>
              <Newtrip></Newtrip>
            </Route>
            <Route path="/assigndriver">
              <Sidebar></Sidebar>
              <Header></Header>
              <Assigndriver></Assigndriver>
            </Route>
            <Route path="/login">
            <Header></Header>
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
