import React from 'react';
import { Field, reduxForm} from 'redux-form';
import Field_Input from './Field_Input';
import {Button} from 'react-bootstrap'

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

Form_ = reduxForm({
  // a unique name for the form
  form: 'users'
})(Form_)

export default Form_