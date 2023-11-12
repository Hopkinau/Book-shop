import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';
export const carousel = style({
  width: '800px',
  margin: '100px auto',
  backgroundColor: vars.colors.primary,
  padding: '32px 48px 32px 86px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '86px',
  position: 'relative',
});
export const testimonialText = style({
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '1.5',
  marginBottom: '32px',
  color: vars.colors.brand,
});
export const testimonialAuthor = style({
  fontSize: '14px',
  marginBottom: '12px',
  color: vars.colors.brandLight,
});
export const testimonialJob = style({
  fontSize: '12px',

  color: vars.colors.brandLight,
});

export const btnLeft = style({
  backgroundColor: vars.colors.white,
  border: 'none',
  height: '40px',
  width: '40px',
  position: 'absolute',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.25)',
  left: '0',
  top: '50%',
  transform: 'translate(-50%,-50%)',
});
export const btnRight = style({
  backgroundColor: vars.colors.white,
  border: 'none',
  height: '40px',
  width: '40px',
  position: 'absolute',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.25)',
  right: '0',
  top: '50%',
  transform: 'translate(50%,-50%)',
});
export const btnIcon = style({
  height: '24px',
  width: '24px',
  stroke: vars.colors.brandDark,
});
export const dots = style({
  display: 'flex',
  position: 'absolute',
  left: '50%',
  bottom: '0',
  gap: '12px',
  transform: 'translate(-50%,32px)',
});
export const dot = style({
  height: '12px',
  width: '12px',
  backgroundColor: vars.colors.white,
  border: '2px solid vars.colors.brandDark',
  borderRadius: '50%',
  cursor: 'pointer',
});

export const carouselImg = style({
  height: '200px',
  borderRadius: '8px',
  transform: 'scale(1.5)',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.25)',
});
