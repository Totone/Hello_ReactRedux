import React, { PropTypes } from 'react';

const propTypes = {
    value: PropTypes.string.isRequired,
    selectChanged: PropTypes.func.isRequired,
};

const CompEx3 = ({ value, selectChanged }) => (
    <div>
        <h1>Exercise 3</h1>
        <div style={{ marginBottom: '10px' }}>
            <i>
                Build me from scratch!<br />
                I need to be a select field which will display the new selected value<br />
                BONUS POINT: and the previous selected value
            </i>
        </div>
        <div>
            <p>{value}</p>
            <select value={value} onChange={selectChanged}>
                <option value="">Chose value</option>
                <option value="value1">Value1</option>
                <option value="value2">Value2</option>
                <option value="value3">Value3</option>
                <option value="value4">Value4</option>
                <option value="value5">Value5</option>
            </select>
        </div>
    </div>
);

CompEx3.propTypes = propTypes;

export default CompEx3;
