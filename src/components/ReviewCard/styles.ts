import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBg};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 1.2rem;
    min-height: 26rem;
  `}
`

export const User = styled.div`
  align-items: center;
  display: flex;
`

export const Image = styled.img`
  border-radius: 100%;

  height: 5rem;
  width: 5rem;
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const Text = styled.blockquote`
  ${({ theme }) => css`
    display: grid;
    justify-items: end;

    position: relative;

    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xsmall};

    input {
      opacity: 0;
      position: absolute;
      pointer-events: none;

      &:checked + p {
        -webkit-line-clamp: unset;
      }
    }

    input:not(:checked) ~ p:not(.truncated) ~ label {
      display: none;
    }

    label {
      cursor: pointer;
      color: ${theme.colors.primary};
      float: right;
      margin-top: ${theme.spacings.xxsmall};
    }

    &::before {
      content: '“';
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.secondary};
      position: absolute;
      top: ${theme.spacings.xsmall};
      left: 0;
    }

    > p {
      padding-top: ${theme.spacings.small};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}
`
