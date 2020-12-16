import React from 'react';
import { Field, reduxForm} from 'redux-form';
import Field_Input from './Field_Input';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

const validate = values => {
    // validations from the form 
    const errors = {}
    if (!values.nombre) {
        errors.nombre = 'Required'
    } else if (values.nombre.length > 15) {
        errors.nombre = 'Must be 15 characters or less'
    }
    if (!values.apellido) {
        errors.apellido = 'Required'
    } else if (values.apellido.length > 15) {
        errors.apellido = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (Number(values.telefono) < 1000000) {
        errors.telefono = 'Sorry, this is not a Telephone valid'
    } else if ((Number(values.cedula) > 9999999999)) {
        errors.telefono = 'Sorry, this is not a Telephone valid'
    }
    if (!values.cedula) {
        errors.cedula = 'Required'
    } else if (Number(values.cedula) < 1000000000) {
        errors.cedula = 'Sorry, this is not a DNI valid'
    } else if ((Number(values.cedula) > 9999999999)) {
        errors.cedula = 'Sorry, this is not a DNI valid'
    }
    return errors
}
  
const warn = values => {
const warnings = {}
if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
}
return warnings
}


let Form_ = props => {
  const { handleSubmit } = props
  return (
  <form onSubmit={handleSubmit}>
        <div>
            <label className="m-2" htmlFor="nombre">Nombre:</label>
            <Field name="nombre" component="input" type="text" component={Field_Input} />
        </div>
        <div>
            <label className="m-2" htmlFor="apellido">Apellido:</label>
            <Field name="apellido" component="input" type="text" component={Field_Input} />
        </div>
        <div>
            <label className="m-2" htmlFor="cedula">Cedula:</label>
            <Field name="cedula" component="input" type="number" component={Field_Input} />
        </div>
        <div>
            <label className="m-2" htmlFor="telefono">Telefono:</label>
            <Field name="telefono" component="input" type="number" component={Field_Input} />
        </div>
        <div>
            <label className="m-2" htmlFor="email">Email:</label>
            <Field name="email" component="input" type="email" component={Field_Input} />
        </div>
        <Button className="mt-2" type="submit">Submit</Button>
  </form>
  )
}
const mapStateToProps = (state) => {
    // initial values brought from reducer user 
    return {
      initialValues: {
        nombre: state.updateUser.nombre,
        apellido: state.updateUser.apellido,
        email: state.updateUser.email,
        telefono: state.updateUser.telefono,
        cedula: state.updateUser.cedula
      }
    }
  }
Form_ = connect(mapStateToProps) (reduxForm({
  // a unique name for the form
  form: 'users',
  // validations
  validate,
  warn,
  /* enable reinitialize beacause 
  use in update form a initial values*/
  endableREinitialize: true
})(Form_))

export default Form_