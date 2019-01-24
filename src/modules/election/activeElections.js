import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from 'components/common/ExpansionPanel';
import {getActiveElections} from './state/ElectionAction';
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


class ActiveElections extends React.Component {
    state = {
        activeElections : []
    };

    componentDidMount() {
        const {getActiveElections} = this.props;
        getActiveElections();
    };

    blockPropagation(event) {
        event.stopPropagation();
    };




    render() {
        const {classes,activeElections} = this.props;
        const {} = this.state;

        return (
          <ExpansionPanel data={activeElections}></ExpansionPanel>
        );
    }
}

ActiveElections.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({Election}) => {
    const {activeElections} = Election;
    return {activeElections};
};

const mapActionsToProps = {
  getActiveElections
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ActiveElections));




