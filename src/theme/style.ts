import { css } from 'styled-components'

export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}

export const rippleEffect = (
  backgroundColorOnHover: string,
  backgroundColorOnRippleWave: string
) => {
  return css`
    background-position: center;
    transition: background 1s;
    &:hover {
      background: ${backgroundColorOnHover}
        radial-gradient(circle, transparent 1%, ${backgroundColorOnHover} 1%)
        center/15000%;
    }
    &:active {
      background-color: ${backgroundColorOnRippleWave};
      background-size: 100%;
      transition: background 0s;
    }
  `
}

export const heightWidthOneRem = () => {
  return css`
    height: 1rem;
    width: 1rem;
  `
}
