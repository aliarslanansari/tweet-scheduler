import { css } from 'styled-components'

export const rippleEffect = (
  backgroundColorOnHover: string,
  backgroundColorOnRippleWave: string
) => {
  return css`
    background-position: center;
    transition: background 0.8s;
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

// export const hoverBackgroundColor = () => {}
