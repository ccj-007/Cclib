import React from 'react'
import { css, jsx } from '@emotion/react'
const Footer = css`
  color: #fff;
  height: 13vh;
  width: 100vw;
  background-color: #000;
`
export default function footer () {
  return (
    <div css={Footer}>
      <div>footer</div>
    </div>
  )
}
