import * as React from 'react';
import { experimentalStyled as styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

//@ts-ignore
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  //@ts-ignore
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    //@ts-ignore
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: '20px',
  width: '100%',
  height: '60%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

//@ts-ignore
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

//@ts-ignore
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '1ch',
      '&:focus': {
        width: '8ch',
      },
    },
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder=""
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}