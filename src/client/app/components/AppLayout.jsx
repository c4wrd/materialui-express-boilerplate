import {AppBar, IconMenu, MenuItem, IconButton, LeftNav} from 'material-ui';
import { RouteHandler } from 'react-router';
import HistoryContainer from '../services/HistoryContainer';

let menuItems = [
    {
        route: "/home",
        text: 'Home'
    },
    {
        route: "/chat",
        text: 'Chat'
    }
];

class AppLayout extends React.Component {

    constructor() {
        super();
        console.log("in constructor");
        this._handleClick = this._handleClick.bind(this);
        this._getIndex = this._getIndex.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
    }

    _handleClick(e) {
        e.preventDefault();
        this.refs.left_nav.toggle();    // toggle our left nav menu
    }

    _getIndex() {
        let currentItem;

        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) {
                return i;
            }
        }
    }

    _onLeftNavChange(e, key, payload) {
        this.props.history.push(payload.route);
    }

    render() {
        return(
            <div id="app-container">

                <LeftNav
                    ref="left_nav"
                    docked={false}
                    menuItems={menuItems}
                    selectedIndex={this._getIndex()}
                    onChange={this._onLeftNavChange}/>

                <AppBar title="Cory's Server Panel"
                        onLeftIconButtonTouchTap={this._handleClick}/>

                <section className="app">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

AppLayout.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default AppLayout;