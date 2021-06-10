import './App.css';
import './styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Barracks from './components/Barracks';
import GoldMine from './components/GoldMine';
import Notifications from './components/Notifications';

const App = (props) => {

  const requireAuth = () => {
    if(localStorage.getItem('token') === ''){
      props.history.push('/')
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard} onEnter={() => console.log('Entered!')}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/barracks" component={Barracks}></Route>
        <Route path="/gold-mine" component={GoldMine}></Route>
        <Route path="/notifications" component={Notifications}></Route>
      </Switch>
    </Router>
  )
}

export default App;
