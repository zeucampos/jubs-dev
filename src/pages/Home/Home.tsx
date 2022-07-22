import { Container } from "reactstrap";
import Button from "../../components/Button";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <S.PageWrapper>
      <S.SlideContainer>
        <Container>
          <S.Column>
            <h1>✌️</h1>
            <h1>Hi there, i am Zeu</h1>
            <p>
              I develop apps to your mobile device and web browsers. <br />
              if you want to know more about me, you can visit{" "}
              <a href="https://jobsjubs.com/bio">my bio</a>
            </p>
            <S.Row>
              <Button>make a budget</Button>
              <Button outlined>see projects</Button>
            </S.Row>
          </S.Column>
        </Container>
      </S.SlideContainer>
    </S.PageWrapper>
  );
};

export default Home;
