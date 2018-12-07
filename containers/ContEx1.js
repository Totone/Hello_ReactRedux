import { connect } from 'react-redux';
import CompEx1 from '../components/CompEx1';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        name: state.redEx1.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buttonClicked: (event) => {
            dispatch(actions.buttonClicked(event));
        },
    };
};

const ContEx1 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CompEx1);

export default ContEx1;
