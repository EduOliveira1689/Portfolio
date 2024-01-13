import {
  Container,
  PersonDate,
  PersonLogo,
  PersonText,
  AnimatedImage,
  ProjectsContainer,
  TextProjectsContainer,
  Projects,
  ImagePage,
  AnimatedPage,
  LeftContainer,
  RightContainer,
} from "./home.styled";
import imageIcon1 from "../assets/img/css.png";
import imageIcon2 from "../assets/img/html.png";
import imageIcon3 from "../assets/img/react logo.png";
import imageIcon4 from "../assets/img/styled.png";
import imageIcon5 from "../assets/img/github.png";
import ImageProjectsYoutube from "../assets/img/youtube.jpg";

function Home() {
  return (
    <>
      <Container className="animate-entry">
        <PersonDate>
          <h1>Eduardo Oliveira</h1>
          <h2>Front End Developer</h2>
          <PersonText>
            <span>
              Seja bem-vindo ao meu portfólio! Me chamo Eduardo Oliveira,
              trabalho como Desenvolvedor Front End. Nessa página, você encontrará alguns
              de meus projetos pessoais, minhas habilidades e informações para contato.
            </span>
          </PersonText>
        </PersonDate>
        <PersonLogo>
          <AnimatedImage src={imageIcon1} alt="Tecnologia CSS" />
          <AnimatedImage src={imageIcon2} alt="Tecnologia HTML" />
          <AnimatedImage src={imageIcon3} alt="Tecnologia React" />
          <AnimatedImage src={imageIcon4} alt="Tecnologia Styled Components" />
          <AnimatedImage src={imageIcon5} alt="Tecnologia GitHub" />
        </PersonLogo>
      </Container>
      <TextProjectsContainer id="projetos">
  <span>Projetos</span>
</TextProjectsContainer>
        <ProjectsContainer>
          <Projects>
            <LeftContainer>
              <ImagePage src={ImageProjectsYoutube} alt="Imagem Page Project youtube." />
              <AnimatedPage></AnimatedPage>
            </LeftContainer>
          </Projects>
          <Projects>
            <RightContainer>
              <ImagePage src={ImageProjectsYoutube} alt="Imagem Page Project youtube." />
              <AnimatedPage></AnimatedPage>
            </RightContainer>
          </Projects>
          <Projects>
            <LeftContainer>
              <ImagePage src={ImageProjectsYoutube} alt="Imagem Page Project youtube." />
              <AnimatedPage></AnimatedPage>
            </LeftContainer>
          </Projects>
          <Projects>
            <RightContainer>
              <ImagePage src={ImageProjectsYoutube} alt="Imagem Page Project youtube." />
              <AnimatedPage></AnimatedPage>
            </RightContainer>
          </Projects>
        </ProjectsContainer>
    </>
  );
}

export default Home;
