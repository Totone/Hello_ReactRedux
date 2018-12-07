import React, { PropTypes } from 'react';

const propTypes = {
    // eslint-disable-next-line react/require-default-props
    hasTickedBox: PropTypes.bool,
    boxTicked: PropTypes.func.isRequired,
};

// This component should stay "dumb" (i.e. stateless)
// It should not have it's own state and should only use props
const CompEx2 = ({ hasTickedBox, boxTicked }) => (
    <div>
        <h1>Exercise 2</h1>
        <div style={{ marginBottom: '5px' }}>Instructions: I want to know if the checkbox has been ticked or not.</div>
        <div style={{ marginBottom: '10px' }}><i>TODO: Implement the reducer for this Redux cycle</i></div>
        <div style={{ marginBottom: '5px' }}>
            {hasTickedBox ? 'Kewl!' : 'I need you to tick this box'}
        </div>
        <div>
            <label htmlFor="checkbox-box">
                <input
                    id="checkbox-box"
                    type="checkbox"
                    name="box"
                    checked={hasTickedBox}
                    onChange={boxTicked}
                /> box
            </label>
        </div>
    </div>
);

CompEx2.propTypes = propTypes;

export default CompEx2;
