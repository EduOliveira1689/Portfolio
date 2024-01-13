import { Container, ItensList } from "./header.styled";
import { useEffect, useState, useRef } from "react";
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseOverTop, setMouseOverTop] = useState(false);
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollY(currentScrollPos);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouseOverTop(e.clientY <= 80);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      animateScroll.scrollTo(0, { duration: 500 });
    } else {
      window.location.href = '/';
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname !== '/projetos' && projectsRef.current) {
      const projectsPosition = projectsRef.current.offsetTop;
      animateScroll.scrollTo(projectsPosition, { duration: 500 });
    }
  };

  return (
    <Container visible={scrollY === 0 || mouseOverTop}>
      <ItensList>
        <ScrollLink to="home" smooth={true} duration={500} onClick={handleHomeClick}>
          Home
        </ScrollLink>
        <ScrollLink to="projetos" smooth={true} duration={500} onClick={handleProjectsClick}>
          Projetos
        </ScrollLink>
        <ReactRouterLink to="/contato">Contato</ReactRouterLink>
        <ReactRouterLink to="/linkedin">LinkedIn</ReactRouterLink>
        <ReactRouterLink to="/github">GitHub</ReactRouterLink>
      </ItensList>
    </Container>
  );
}

export default Header;
