import React from 'react'
import { css, jsx } from '@emotion/react'
const Sidebar = css`
  width: 10vw;
  height: 83vh;
  background-color: #eee;
  border-right: 1px solid #858585;
`
export default function sidebar () {
  return (
    <div css={Sidebar}>
      <div>Sidebar</div>
    </div>
  )
}
