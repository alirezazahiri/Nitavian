import './App.css';
import './styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  )
}

export default App;
