import React from 'react';
import {FormControl} from 'react-bootstrap';

const FieldInput = ({ input,  meta: { touched, error, warning }, type, placeholder, min, max }) => {
    return (
        <>
            <FormControl
                type={type}
                placeholder={placeholder}
                min={min}
                max={max}
                value={input.value}
                onChange={input.onChange} />
            {((error && <span style={{color: "red"}}>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </>
    )
}

export default FieldInput;