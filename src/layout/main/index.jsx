import React from 'react'
import { css, jsx } from '@emotion/react'
const Main = css`
  height: 83vh;
  width: 90vw;
  background-color: #fff;
`
export default function main () {
  return (
    <div css={Main}>
      <div>main</div>
    </div>
  )
}
