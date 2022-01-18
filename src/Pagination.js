import React from "react";
import styled from "styled-components";

function Pagination(props) {
  return (
    <Wrapper>
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </Wrapper>
  );
}

export default Pagination;

const Wrapper = styled.div`
margin: 1rem;
  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #7BB7A8;
    color: white;
    border-radius: 5px;
  }

  .pagination a:hover:not(.active) {
    background-color: #ACD4C9;
    border-radius: 5px;
  }
`;
