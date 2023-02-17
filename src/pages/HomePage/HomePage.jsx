import { Box2, Container, Section } from 'components/App/App.styled';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Box2>
          <h1>PhoneBook</h1>
          <p>
            This app created to help you remember main contacts. You can throw
            away big old phone books!
          </p>
        </Box2>
      </Container>
    </Section>
  );
};

export default HomePage;
