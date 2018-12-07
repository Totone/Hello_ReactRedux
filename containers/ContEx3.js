import { connect } from 'react-redux';
import CompEx3 from '../components/CompEx3';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        value: state.redEx3.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectChanged: (event) => {
            dispatch(actions.selectChanged(event));
        },
    };
};

const ContEx3 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CompEx3);

export default ContEx3;
