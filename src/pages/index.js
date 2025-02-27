import Acomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section as GlobalSection } from '../styles/GlobalComponents';

import styled from 'styled-components';

const StyledSection = styled.section`
  display: ${props => (props.$grid ? 'grid' : 'block')};
  padding: ${props => (props.$nopadding ? '0' : '20px')};
`;

const Home = () => {
  return (
    <Layout>
      <StyledSection $grid>
        <Hero />
        <BgAnimation />
      </StyledSection> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
