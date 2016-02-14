import {AppBar} from 'material-ui';

class HomeAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return(
            <AppBar
                title={this.title}
            />
        );
    }
}

export default HomeAppBar;