import './App.css';
import './styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/barracks" component={Profile}></Route>
        <Route path="/gold-mine" component={Profile}></Route>
        <Route path="/notifications" component={Profile}></Route>
      </Switch>
    </Router>
  )
}

export default App;
