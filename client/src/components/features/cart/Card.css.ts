import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';
export const group = style({
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  padding: vars.space['1x'],
  paddingRight: vars.space['2x'],
  marginLeft: 'auto',
});
