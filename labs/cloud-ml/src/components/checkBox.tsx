import React from 'react';
import '../css/checkBox.css';

export interface CheckBoxData{
    name: string;
    onChangeHandle: any;
    text: string;
}

export function CheckBox(props: CheckBoxData) {
    return (
        <React.Fragment>
            <div>
                <label className="checkbox-box">
                    <div><input className="checkbox" type="checkbox" name={props.name} onChange={evt => props.onChangeHandle(evt)} /></div>
                    <div className="checkbox-label">{props.text}</div>
                </label>
            </div>
        </React.Fragment>
    );
}


export default CheckBox;