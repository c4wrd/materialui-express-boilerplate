import {AppBar, IconMenu, MenuItem, IconButton} from 'material-ui';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import PageTabSelector from './PageTabSelector.jsx'

class PageLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: '/', open: false};
    }

    navigate(page) {
        this.props.history.push(page);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    setStateWrapper(state) {
        this.setState({open: state});
    }

    render() {
        return(
            <div id="app-container">
                <AppBar title="Welcome."
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
                <PageTabSelector
                    open={this.state.open}
                    setStateWrapper={this.setStateWrapper.bind(this)}
                    navigate={this.navigate.bind(this)}/>
                {this.props.children}
            </div>
        );
    }
}

export default PageLayout;