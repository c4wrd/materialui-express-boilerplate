import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from './pages/Index';
import HomeAppBar from './components/HomeAppBar.jsx'

injectTapEventPlugin();

ReactDOM.render(<HomeAppBar title="TitleBar"/>, document.getElementById('title-bar'));
ReactDOM.render(<Index />, document.getElementById('page-target'));