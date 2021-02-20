import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react'
import { getUsers } from './redux/actions/users'
import { useDispatch } from 'react-redux'
import './App.css';
import Header from './components/header/Header';
import RegisterationForm from './components/registration-form/RegisterationForm';
import Users from './components/users/Users';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <div className="container">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={RegisterationForm} />
          <Route exact path="/registration" component={RegisterationForm} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
