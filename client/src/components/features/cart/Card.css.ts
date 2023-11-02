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
  width: '30%',
  padding: vars.space['1x'],
  backgroundColor: vars.colors.success,
  color: vars.colors.primary,
});
export const btn = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '10%',
  left: '40%',
  marginTop: '100px',
});
