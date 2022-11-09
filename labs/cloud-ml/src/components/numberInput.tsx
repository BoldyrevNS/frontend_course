import React from 'react';
import '../css/inputElementStyle.css';
import InputData from '../inputData';

function NumberInput(props: InputData) {
    let input: JSX.Element =<input type="number" className="w-100 input-window" name={props.fieldName} placeholder={props.defaultValue} onChange={event=>props.onChangeHandle(event)}/>;
    if(props.min !== undefined && props.max === undefined){
        input = <input type="number" min={props.min} className="w-100 input-window" name={props.fieldName} placeholder={props.defaultValue} onChange={event=>props.onChangeHandle(event)}/>;
    }else if(props.min === undefined && props.max !== undefined){
        input = <input type="number" max={props.max} className="w-100 input-window" name={props.fieldName} placeholder={props.defaultValue} onChange={event=>props.onChangeHandle(event)}/>;
    }else if(props.min !== undefined && props.max !== undefined){
        input = <input type="number" max={props.max} min={props.min} className="w-100 input-window" name={props.fieldName} placeholder={props.defaultValue} onChange={event=>props.onChangeHandle(event)}/>;
    }
    return (
        <React.Fragment>
            <div>
                <div><label>{props.mainLabel}</label></div>
                <div>
                    {input}
                </div>
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

export default NumberInput;