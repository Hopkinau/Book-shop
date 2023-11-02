import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const bgImage = style({
  position: 'relative',

  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
});
