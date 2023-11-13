import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';
export const buynowbtn = style({
  cursor: 'pointer',
  width: '100%',
  display: 'inline-block',
  background: vars.colors.blue,
  padding: '15px',
  fontFamily: 'inherit',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  textDecorationLine: 'none',

  fontWeight: vars.fontWeights.bolder,
  letterSpacing: '0.1em',
});
export const logoutbtn = style({
  cursor: 'pointer',
  width: '100%',
  display: 'inline-block',
  background: vars.colors.blue,
  padding: '15px',
  fontFamily: 'inherit',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  marginTop: '1rem',
  textDecorationLine: 'none',
  fontWeight: vars.fontWeights.bolder,
  letterSpacing: '0.1em',
});
