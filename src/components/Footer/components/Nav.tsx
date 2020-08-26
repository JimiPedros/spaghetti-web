import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://github.com/SpaghettiIsMoney">Github</StyledLink>
      <StyledLink href="https://twitter.com/SpaghettiMoney">Twitter</StyledLink>
      <StyledLink href="https://discord.gg/ThEm36R">Discord</StyledLink>
      <StyledLink href="https://www.coingecko.com/en/coins/spaghetti">Coingecko</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`

export default Nav