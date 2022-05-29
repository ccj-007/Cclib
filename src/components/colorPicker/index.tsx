import * as React from 'react';
import { HexColorPicker } from "react-colorful";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
export const ColorPicker = () => {
  const [color, setColor] = React.useState("#aabbcc");
  const dispatch = useDispatch()
  const changePrimary = () => {
    dispatch({ type: 'modify', payload: { primary: { main: color } } })
  }

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <div className='u-flex-center mt10'>
        <input type="text" disabled style={{ width: '60px', height: '30px' }} value={color} />
        <div className='ml20'>
          <Button variant="contained" onClick={changePrimary}>改变主题</Button>
        </div>
      </div>
    </div>
  )
};