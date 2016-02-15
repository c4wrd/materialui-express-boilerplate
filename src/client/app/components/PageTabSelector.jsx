import { LeftNav, MenuItem} from 'material-ui';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    }
};

class PageTabSelector extends React.Component {

    createNav(page) {
        return function() {
            console.log(this.props);
            this.props.setStateWrapper(false);
            this.props.navigate(page);
        };
    }

    render() {
        return(
            <LeftNav
                docked={false}
                width={200}
                open={this.props.open}
                onRequestChange={open => this.props.setStateWrapper(open)}
            >
                <MenuItem onTouchTap={this.createNav('/').bind(this)}>Home</MenuItem>
                <MenuItem onTouchTap={this.createNav('chat').bind(this)}>Chat</MenuItem>
            </LeftNav>
        );
    }
}

export default PageTabSelector;