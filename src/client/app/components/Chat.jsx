import { Paper, Card, CardHeader, CardText } from 'material-ui';
import AuthCompnent from './AuthComponent'

const style = {
    height: '20%',
    margin: '20px auto',
    padding: '5px',
    textAlign: 'center',
    display: 'block'
};

class Chat extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Paper
                style={style}
                zDepth={5}>

                <h1>Chat</h1>

                <Card>
                    <CardHeader
                        title="Without Avatar"
                        subtitle="Subtitle"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>

                </Paper>
        );
    }
}

export default AuthComponent(Chat);
