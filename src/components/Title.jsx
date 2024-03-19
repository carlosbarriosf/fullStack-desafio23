
import { createElement } from 'react'

function Title({renderAs, content}) {
  return (
    createElement(renderAs, null, content)
  )
}

export default Title