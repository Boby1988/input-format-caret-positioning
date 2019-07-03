export default function Formatter(opts) {
  const { re, blocks, delimiter, type } = opts
  const method = type || 'parse'
  const transformValue = method === 'format' ? formatter : normalizer

  const insertionPoints = []
  blocks.forEach(function(length, index) {
    insertionPoints[index] = length + index ? insertionPoints[index-1] : 0
  })


  function normalizer(value, previousValue) {
    // delete
    if(previousValue && previousValue.length > value.length) {
      return value
    } else {
      return formatter(value)
    }
  }

  function formatter(value) { // used on format or parse
    if(!value) {
      return ''
    }

    let result = ''
    let rawValue = getRawValue(value)

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

  function getRawValue(value) {
    if(!value) {
      return ''
    }
    return re ? value.replace(re, '') : value
  }

  function positioner(event, value, previousValue) {
      // positioning
    const element = event.target
    let caret = element.selectionStart

    if(previousValue) {
      const pvLength = transformValue(previousValue).length
      const formattedValue = transformValue(value)
      const vLength = formattedValue.length
      const searchString = method === 'format' ? formattedValue : value
      const nextChar = searchString.substr(caret, 1)
      const currChar = searchString.substr(caret - 1, 1)

      if(pvLength <= vLength && (nextChar === delimiter || currChar === delimiter)) {
        caret = Math.min(caret + 1, searchString.length)
      }
    }

    window.requestAnimationFrame(function() {
      element.selectionStart = caret
      element.selectionEnd = caret
    })
  }

  return {
    formatter,
    positioner,
    normalizer,
    getRawValue,
  }
}
