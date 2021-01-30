import styled from 'styled-components';

export const Container = styled.div`
   padding: 0rem 4rem;

   & > h2 {
       color: var(--text-primary);
       font-size: 3.8rem;
       margin: 2rem 0;
   }
`;

export const Table = styled.table`
  border-spacing: 1rem;

  th {
      font-weight: 30;
  }

  td {
      font-weight: bolder;
      font-size: 1.8rem;
  }
`;