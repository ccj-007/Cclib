import React from 'react'
import Button from '@mui/material/Button';

import { css, jsx } from '@emotion/react'
const Header = css`
  width: 100%;
  color: #fff;
  height: 7vh;
  background-color: #000;
`
export default function header () {
  return (
    <div css={Header}>
      <div>
        header
      </div>
    </div>
  )
}
