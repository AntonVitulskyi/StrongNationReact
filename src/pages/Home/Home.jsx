import { Container, Typography } from '@mui/material';
import { AutoPlay } from 'components/Slider/Slider';
import { Timer } from 'components/Timer/Timer';

import content1 from '../../images/sliderImages/1.jpg';
import content2 from '../../images/sliderImages/2.jpg';
import content3 from '../../images/sliderImages/3.jpg';
import content4 from '../../images/sliderImages/4.jpg';
import content5 from '../../images/sliderImages/5.jpg';
import content6 from '../../images/sliderImages/6.jpg';
import content7 from '../../images/sliderImages/7.jpg';
import content8 from '../../images/sliderImages/8.jpg';
import content9 from '../../images/sliderImages/9.jpg';
import content10 from '../../images/sliderImages/10.jpg';
import content11 from '../../images/sliderImages/11.jpg';

import {
  AboutSection,
  AboutTextWrapper,
  Li,
  MapSection,
  StatsSection,
  StatsTitle,
  StyledBox,
  Ul,
} from './Home.styled';
import { ReadMore } from 'components/ReadMore/ReadMore';

const Home = () => {
  const images1 = [content1, content2, content3, content4, content5, content6];
  const images2 = [
    content7,
    content8,
    content9,
    content10,
    content11,
    content1,
    content1,
  ];
  return (
    <>
      <MapSection>
        {/* map section */}
        <Container>
          <ReadMore />
          <AutoPlay images={images1} rtl={true} />
          <AutoPlay images={images2} rtl={false} />
        </Container>
      </MapSection>
      <AboutSection>
        {/* who we are section */}
        <Container>
          <AboutTextWrapper>
            <Typography variant="h2" align="center" mb="10px">
              ПРО НАС
            </Typography>
            <Typography>
              Засновником фонду “Хоробра Укаїна” є Міміношвілі Вахтангі
              Омарійович, який має багаторічний досвід допомоги людям. Після
              початку повномасштабної війни Росії проти України, Вахтангі
              Омарійович просто не зміг залишатись осторонь та створив фонд
              допомоги громадянам України.
            </Typography>
            <br />
            <Typography>
              Фонд створено для захисту, допомоги та підтримки людей, які
              лишились своїх домівок, роботи й коштів на існування.
            </Typography>
            <br />
            <Typography>
              Міміношвілі Вахтангі Омарійович також є засновником адвокатського
              бюро, керуючим партнером, адвокатом та членом Ради адвокатів
              Київської області. Тому, фонд “Хоробра Україна” надає як фізичну
              допомогу постраждалим та переселенцам, так і професійну юридичну
              допомогу, маючи багаторічний досвід у будь яких юридичних
              питаннях.
            </Typography>
            <br />
            <Typography> Разом ми переможемо!</Typography>
          </AboutTextWrapper>
        </Container>
      </AboutSection>
      <StatsSection>
        <Container>
          {/* stats section */}
          <StyledBox>
            <StatsTitle variant="h3" component="h2">
              нашi досягнення за &nbsp;
            </StatsTitle>
            <Timer />
          </StyledBox>
          <Ul>
            <Li>
              <Typography variant="h4" component="span">
                1240
              </Typography>
              <Typography variant="h5" component="p">
                одиниць Збройної техніки
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                150 340
              </Typography>
              <Typography variant="h5" component="p">
                грн на підтримку зсу
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                5430
              </Typography>
              <Typography variant="h5" component="p">
                кілограм продуктів
              </Typography>
            </Li>
            <Li>
              <Typography variant="h4" component="span">
                350
              </Typography>
              <Typography variant="h5" component="p">
                вантажівок з ліками
              </Typography>
            </Li>
          </Ul>
        </Container>
      </StatsSection>
    </>
  );
};

export default Home;
