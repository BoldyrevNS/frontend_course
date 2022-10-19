import React from 'react';
import {Hearts} from "react-loader-spinner";

export function Loading() {
    return (
        <div>
            <Hearts
                height={180}
                width={180}
                color="#969"
            />
        </div>
    )
}

export default Loading