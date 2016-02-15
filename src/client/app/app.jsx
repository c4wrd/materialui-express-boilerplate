import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from './components/Index';
import Chat from './components/Chat';
import Login from './components/Login';
import Signup from './components/Signup';
import AppLayout from './components/AppLayout';
import LoginActions from './actions/LoginActions';
import { Router, Route, IndexRoute } from 'react-router';
import HistoryContainer from './services/HistoryContainer';

injectTapEventPlugin();

let routes = (
    <Route path="/" component={AppLayout}>
        <IndexRoute name="home" component={Index}/>
        <Route name="login" component={Login}/>
        <Route name="signup" component={Signup}/>
        <Route name="chat" component={Chat}/>
    </Route>
);

let jwt = localStorage.getItem('jwt');

if (jwt) {
    LoginActions.loginUser(jwt);
}

ReactDOM.render(<Router history={HistoryContainer}>{routes}</Router>, document.getElementById('app-target'));