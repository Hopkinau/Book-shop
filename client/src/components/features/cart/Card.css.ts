import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';
export const group = style({
  position: 'absolute',
  top: '250px',
  right: '20px',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '20%',
  padding: vars.space['1x'],
  paddingRight: vars.space['2x'],
  marginLeft: 'auto',
});
export const title = style({
  backgroundColor: vars.colors.primary,
});
export const topic = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '250px',
  left: '30%',

  marginTop: '100px',
  alignContent: 'center',
  justifyContent: 'center',
  width: '40%',

  padding: vars.space['2x'],
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  paddingRight: vars.space['2x'],
});
export const btn = style({
  cursor: 'pointer',
  width: '30%',
  display: 'inline-block',
  background: vars.colors.blue,
  alignContent: 'center',
  justifyContent: 'center',
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
export const btndiv = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecorationLine: 'none',
});
