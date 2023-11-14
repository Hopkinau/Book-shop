import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

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
