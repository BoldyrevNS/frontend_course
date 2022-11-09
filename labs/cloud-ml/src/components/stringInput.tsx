import React from 'react';
import '../css/inputElementStyle.css';
import InputData from '../inputData';

function StringInput(props: InputData) {

    return (
        <React.Fragment>
            <div>
                <div><label>{props.mainLabel}</label></div>
                <div><input type="text" className="w-100 input-window"  name={props.fieldName} placeholder={props.defaultValue} onChange={event=>props.onChangeHandle(event)}/></div>
                {props.tipLabel !== undefined && 
                <div className='tip'>
                    { props.tipLabelLink !== undefined &&
                        < label className='tip' htmlFor={props.fieldName}>
                            <a href={props.tipLabelLink} className='tip-link'>
                            {props.tipLabel}
                            </a>
                        </label>
                    }
                    {props.tipLabelLink === undefined &&
                        <label className='tip' htmlFor={props.fieldName}>
                            {props.tipLabel}
                        </label>
                    }
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default StringInput;