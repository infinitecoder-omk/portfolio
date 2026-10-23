import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileActions, MobileThemeToggle, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FcNoIdea ,FcIdea } from "react-icons/fc";
import starLogo from '../../images/gold_star_rotation.gif';
 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center",  color: theme.gajanan, marginBottom: '20;', cursor: 'pointer' }}>
            <img src={starLogo} alt="" aria-hidden="true" style={{ width: 64, height: 64, objectFit: 'contain', marginRight: 8 }} />
            <Span>OMK's Portfolio</Span>
          </a>
        </NavLogo>
        <MobileActions>
          <MobileThemeToggle type="button" onClick={toggleDarkMode} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <FcIdea style={{ fontSize: "28px" }}/> : <FcNoIdea style={{ fontSize: "28px" }}/>}
          </MobileThemeToggle>
          <MobileIcon type="button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            <FaBars />
          </MobileIcon>
        </MobileActions>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
             
        <span onClick={toggleDarkMode} style={{ marginLeft: "auto" }}>
        {darkMode ? <FcIdea style={{ fontSize: "28px" }}/> : <FcNoIdea style={{ fontSize: "28px" }}/>}
      </span>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
