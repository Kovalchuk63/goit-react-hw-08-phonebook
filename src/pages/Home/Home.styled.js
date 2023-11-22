import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme: { spacing } }) => spacing(12)};
  font-weight: 600;
  line-height: 2;
  text-align: center;
`;
