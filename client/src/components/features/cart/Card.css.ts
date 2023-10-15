import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';
export const card = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  margin: '1.5rem',
});
