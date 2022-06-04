import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1654373137&userId=usrQMwWEPx18KgLcP&cs=dfa2f910968a77eb"
        alt="product"
      ></img>
      <footer>
        <h4>Product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  margin: 0 auto;
  width: 90vw;
  max-width: 300px;
  background-color: #fff;
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      color: var(--primary);
    }
    p {
      color: var(--secondary);
      font-weight: 700;
    }
  }
`;

export default Card;
