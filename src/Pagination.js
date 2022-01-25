import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

function Pagination(props) {
  const [page, setPage] = useState(localStorage.getItem("currentPage") || 1);
  const paginateBack = (params) => {
    if (page == 1) return;
    setPage(+page - 1);
  };

  const paginateForward = (params) => {
    setPage(+page + 1);
  };

  const paginateOnPageNumberClick = (params) => {
    // console.log(params.target.innerText);
    setPage(+params.target.innerText);
  };

  useEffect(() => {
    localStorage.setItem("currentPage", page);
    // console.log(page);
  }, [page]);

  return (
    <Wrapper>
      <div className="pagination">
        <a href="#" onClick={paginateBack}>
          &laquo;
        </a>

        {[1, 2, 3, 4, 5].map((jsxPage, index) => {
          return (
            <a
              href="#"
              className={jsxPage == page ? "active" : ""}
              key={`page-no-${index}`}
              onClick={paginateOnPageNumberClick}
            >
              {jsxPage}
            </a>
          );
        })}

        <a href="#" onClick={paginateForward}>
          &raquo;
        </a>
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
    background-color: #7bb7a8;
    color: white;
    border-radius: 5px;
  }

  .pagination a:hover:not(.active) {
    background-color: #acd4c9;
    border-radius: 5px;
  }
`;
