import React from 'react';
import '../css/inputElementStyle.css';
import OutputData from '../models/outputData';

function StringOutput(props: OutputData) {

    return (
        <React.Fragment>
            <div>
                <div><label>{props.mainLabel}</label></div>
                <div>
                    { props.value === null && <input type="text" className="w-100 input-window" placeholder={props.defaultValue} disabled/> }
                    { props.value !== null &&<input type="text" className="w-100 input-window" value={props.value} disabled/>}
                </div>
                {props.tipLabel !== undefined && 
                <div className='tip'>
                    { props.tipLabelLink !== undefined &&
                        < label className='tip'>
                            <a href={props.tipLabelLink} className='tip-link'>
                            {props.tipLabel}
                            </a>
                        </label>
                    }
                    {props.tipLabelLink === undefined &&
                        <label className='tip'>
                            {props.tipLabel}
                        </label>
                    }
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default StringOutput;