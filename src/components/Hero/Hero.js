import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { hero } from '../../constants/constants2';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> 
        Janajan Jeyabalan's <br />
        Personal Portfolio <br />
      </SectionTitle>
      <SectionText>
        Software Engineer with an IoT Specialization <br />
      </SectionText>
      
      <Button onClick={() => window.location = 'mailto:janajan0129@gmail.com'}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;

