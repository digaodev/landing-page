import styled, { css } from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBg};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: 100%;
    margin: auto;
    margin-bottom: ${theme.spacings.xsmall};

    height: 12.5rem;
    width: 12.5rem;
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const Role = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.white};
  `}
`
