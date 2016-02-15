import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from './components/Index';
import Chat from './components/Chat';
import Login from './components/Login';
import Signup from './components/Signup';
import PageLayout from './components/PageLayout';
import LoginActions from './actions/LoginActions';
import { Router, Route } from 'react-router';
import RouterContainer from './services/RouterContainer';

injectTapEventPlugin();

var routes = (
    <Route handler={PageLayout}>
        <Route name="login" handler={Login}/>
        <Route name="signup" handler={Signup}/>
        <Route name="home" path="/" handler={Index}/>
        <Route name="chat" handler={Chat}/>
    </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
    React.render(<Handler />, document.getElementById('app-target'));
});