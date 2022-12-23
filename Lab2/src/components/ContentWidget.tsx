import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/ContentWidget.css";

interface WidgetProps {
  children: React.ReactNode
  title: string
}

const Widget = ({children, title}: WidgetProps) =>{
    return (
        <div className="widget-container">
            <div className="widget-header">
                <div className="widget-title">{title}</div>
            </div>
            <div className="widget-body">
                <div className="runs-list">    
                    {children}
                </div>
            </div>    
        </div>
    )
}

export default Widget;