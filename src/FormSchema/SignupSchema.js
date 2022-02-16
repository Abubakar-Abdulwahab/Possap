import helper from "../utils/helper";
import NaijaStates from 'naija-state-local-government';

const selectTypes = ['state', 'lga', 'gender']
const textareaTypes = ['address']
const labelTransform = {
    fullName: 'Full Name',
    lga: 'LGA',
    confirmPassword: 'Confirm Password'
}
console.log(NaijaStates.all());
console.log(NaijaStates.states());
console.log(NaijaStates.lgas("Oyo"))
const options = {
    gender: ['Male', 'Female'],
    state: NaijaStates.states(),
    lga: NaijaStates.lgas(NaijaStates.states()[0]),
}
const  initialValues =  {
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    lga: "",
    address: "",
    password: "",
    confirmPassword: "",
  }

const objectToFormSchema =(obj) =>{
   return Object.keys(obj).map(key =>{
        return {
            label: labelTransform[key] ? labelTransform[key] :  helper.capitalizeFirstLetter(key),
            required: true,
            name: key,
            type: selectTypes.includes(key) ? 'select' : textareaTypes.includes(key) ? 'textarea' :  'text',
            options: options[key] ? options[key]: null,
            col:  'col-md-6'
        }
    })
}
console.log(objectToFormSchema(initialValues))
export const SignupSchema = objectToFormSchema(initialValues)
