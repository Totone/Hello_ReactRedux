import { connect } from 'react-redux';
import CompEx2 from '../components/CompEx2';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        hasTickedBox: state.redEx2.hasTickedBox,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        boxTicked: (event) => {
            dispatch(actions.boxTicked(event));
        },
    };
};

const ContEx2 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CompEx2);

export default ContEx2;
