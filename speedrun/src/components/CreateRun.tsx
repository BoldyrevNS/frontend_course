import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/CreateRun.css";
import RunShort from '../models/RunShort';
import { postRun } from '../apis/runApi';
import runValidate from '../validations/runValidate';

interface CreateRunProps{
    game_id: number,
    onAdd: (data: RunShort) => void
}

export interface MyFormValues {
    link: string,
    hour: number,
    minutes: number,
    seconds: number,
}

const initialValues: MyFormValues = { 
    link: '',
    hour: 0,
    minutes: 0,
    seconds: 0, 
}
const CreateRun = (props:CreateRunProps) =>{
    
    const onSubmit = (values:MyFormValues)=>{
        postRun(props.onAdd, values, props.game_id);
    }

    return (
        <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validate={runValidate}
         >
        {({ errors, touched }) => (
         <Form className='run-form'>
            <div className='form-input'>
                    <div className='form-label'><label htmlFor="link">Link</label></div>
                    <Field id="link" name="link" placeholder="Input link"/>
                    {errors.link && touched.link && <div className='text-danger'>{errors.link}</div>}   
                    
                    <div className='form-label'><label htmlFor="hour">Hour</label></div>   
                    <Field id="hour" name="hour" placeholder="Input hour" />
                    {errors.hour && touched.hour && <div className='text-danger'>{errors.hour}</div>} 

                    <div className='form-label'><label htmlFor="minutes">Minutes</label></div>    
                    <Field id="minutes" name="minutes" placeholder="Input minutes" />
                    {errors.minutes && touched.minutes && <div className='text-danger'>{errors.minutes}</div>} 

                    <div className='form-label'><label htmlFor="seconds">Seconds</label></div>    
                    <Field id="seconds" name="seconds" placeholder="Input seconds" />
                    {errors.seconds && touched.seconds && <div className='text-danger'>{errors.seconds}</div>} 
            </div>
            <div className='form-button'>
                <button type="submit">Add run</button>
            </div>
         </Form>
        )}
       </Formik>
      )
}

export default CreateRun;