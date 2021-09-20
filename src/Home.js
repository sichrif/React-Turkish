import CardSection from "./components/CardSection";
import Header from "./components/Header";
import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from "./components/ChartSection";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import FAQSection from "./components/FAQSection";
import questions from "./questions";
import Footer from "./components/Footer";
import { Fade } from "react-reveal";


export default function Home() {
  return (
    <div className="App">
        <Header />
        <OuterLayout>
          <MainStyled>
            <Fade left>
              <CardSection />
            </Fade>
            <Fade right>
              <ChartSection />
            </Fade>
            <Fade left>
              <MessagingSection />
            </Fade>
            <Fade right>
              <PaymentSection />
            </Fade>
            <Fade left>
              <FAQSection />
            </Fade>
           
          </MainStyled>
        </OuterLayout>
        <Fade bottom>
          <Footer />
        </Fade>
    </div>
  );
}

const MainStyled = styled.main`


`;

 