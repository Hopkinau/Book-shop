import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const button = style({
  ':hover': {
    color: vars.colors.complementary,
    backgroundColor: vars.colors.primary,
    border: `2px ${vars.colors.complementary} solid`,
  },
});

export const stage = style({
  display: 'flex',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',

  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.violet300,
  boxSizing: 'border-box',
  // box-sizing: border-box,
  // position: absolute,
  // left: 0,
  // top: 0,
  // width: 100vw,
  // height: 100vh,
  // overflow: hidden,
  // display: flex,
  // align-items: center,
  // justify-content: center,
  // background-color: #65799b,
});
