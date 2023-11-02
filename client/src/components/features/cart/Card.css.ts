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
