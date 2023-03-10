import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 0;
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: auto;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  color: white;
  border-radius: 4px;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 16px;
  color: white;
`;

export const StyledForm = styled.form`
  width: 360px;
  padding: 20px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 300px;
  margin-top: 8px;
  padding: 4px 8px;
`;

export const Box = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 360px;
  border-radius: 8px;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px auto;
  padding: 20px;

  color: white;
  font-size: 16px;
  border-radius: 8px;

  & h1,
  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;
