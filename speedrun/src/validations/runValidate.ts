import { FormikErrors } from "formik";
import { MyFormValues } from "../components/CreateRun";

function validURL(str:string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !pattern.test(str);
  }


const runValidate = (values:MyFormValues) => {
    const errors:FormikErrors<MyFormValues> = {};

    if (!values.link.length) {
      errors.link = 'Empty link';
    }else if(validURL(values.link)){
        errors.link = 'Valid URL';
    }
    if(isNaN(values.hour)){
        errors.hour = "It's not number"
    }else if(values.hour < 0){
        errors.hour = "So funny"
    }
    if(isNaN(values.minutes)){
        errors.minutes = "It's not number"
    }else if(values.minutes > 60 || values.minutes < 0){
        errors.minutes = "So funny"
    }
    if(isNaN(values.seconds)){
        errors.seconds = "It's not number"
    }else if(values.seconds > 60 || values.seconds < 0){
        errors.seconds = "So funny"
    }
    return errors;
};

export default runValidate;