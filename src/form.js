import React from 'react'
import { reduxForm, Field } from 'redux-form'


const Row = props => (
  <div style={{ marginTop: '0.5em', marginBottom: '1em'}} {...props} />
)

function caretPositioning(event, value, previousValue, name) {



    // positioning
    const element = event.target
    let caret = element.selectionStart




    if(previousValue) {
      const rawValue = value.replace(/[^0-9]/g, '')
      const rawPreviousValue = previousValue.replace(/[^0-9]/g, '')

      const pvLength = rawPreviousValue.length
      const vLength = rawValue.length

      console.log('caretPositioning', { value, previousValue, caret, pvLength, vLength })

      if(pvLength <= vLength && value.substring(caret, caret + 1) === '-') { // start to type in
        console.log('ez')
        caret = Math.min(caret + 1, value.length)
      }
    }




    window.requestAnimationFrame(function() {
      element.selectionStart = caret
      element.selectionEnd = caret
    })

}

const renderTextField = ({ input, ...rest }) => (
  <div {...rest}>
    <input type="text" {...input}/>
  </div>
)

function normalizeDate(value, previousValue) {
  // console.log('normalizeDate', { value, previousValue })
  if(!value) {
    return ''
  }
  const blocks = [4, 2, 2]
  const delimiter = '-'


  if(previousValue && previousValue.length > value.length) { // delete
    return value
  } else {
    let result = ''
    let rawValue = value.replace(/[^0-9]/g, '')


    blocks.forEach(function (length, index) {
      if (rawValue.length > 0) {
        var sub = rawValue.slice(0, length),
            rest = rawValue.slice(length);

        result += sub;

        if (sub.length === length && index < blocks.length - 1) {
            result += delimiter;
        }

        // update remaining string
        rawValue = rest;
      }
    });
    return result;
  }
}



const MyForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <Field
        component={renderTextField}
        name="date"
        normalize={normalizeDate}
        onChange={caretPositioning}
      />
    </Row>





    <button type="submit">Mentés</button>
  </form>
)



export default reduxForm({
  form: 'test_form',
})(MyForm)
