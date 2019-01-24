import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminMenu from 'components/AdminMenu/AdminMenu';
import {loadUser} from './state/UserAction';
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'


const styles = () => ({
    root: {
        padding: 24,
        paddingLeft: 264,
    },
    heading: {
        padding: 24,
    },
    dropDown: {
        paddingBottom: 10,
        paddingTop: 24,
    },
    container: {
        // padding: 10
    }
});

class UserProfile extends React.Component {
    state = {
        user:{}
    };


    componentDidMount() {
        const {loadUser} = this.props;
        loadUser();
    }

    blockPropagation(event) {
        event.stopPropagation();
    };


    render() {
        const {classes} = this.props;
        const {} = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AdminMenu title="Elections Commission of Sri Lanka"></AdminMenu>
                <Typography variant="h5" component="h2">
                    User Profile
                </Typography>

                <div className={classes.container}>

                </div>
            </div>
        );
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({User}) => {
    const {user} = User;
    return {user};
};

const mapActionsToProps = {
   loadUser
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(UserProfile));




