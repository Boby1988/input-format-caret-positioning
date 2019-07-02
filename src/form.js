import React from 'react'
import { reduxForm, Field } from 'redux-form'
import Formatter from './utils/format'


const Row = props => (
  <div style={{ marginTop: '0.5em', marginBottom: '1em'}} {...props} />
)

const renderTextField = ({ input, label, meta, ...rest }) => (
  <div {...rest}>
    {label && (<label style={{ display: 'block' }}>{label}</label>)}
    <input type="text" {...input}/>
  </div>
)


const dateFormatter = new Formatter({ delimiter: '-', re: /[^0-9]/g, blocks: [4,2,2] })
const taxFormatter = new Formatter({ delimiter: '-', re: /[^0-9]/g, blocks: [8,1,2], type: 'format' })


const MyForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <Field
        component={renderTextField}
        label="Created at"
        name="created_at"
        normalize={dateFormatter.normalizer}
        onChange={dateFormatter.positioner}
      />
    </Row>

    <Row>
      <Field
        component={renderTextField}
        label="Fulfilled at"
        name="fulfilled_at"
        normalize={dateFormatter.normalizer}
        onChange={dateFormatter.positioner}
      />
    </Row>

    <Row>
      <Field
        component={renderTextField}
        label="Tax number"
        name="tax_number"
        format={taxFormatter.formatter}
        normalize={taxFormatter.getRawValue}
        onChange={taxFormatter.positioner}
      />
    </Row>

    <button type="submit">Mentés</button>
  </form>
)



export default reduxForm({
  form: 'test_form',
  onSubmit: function(values) { console.log('Submit form values: ', values )}
})(MyForm)
