import React from "react";
import styled from "styled-components";

function Header() {
  const Wrapper = styled.div`
    .landing {
      background: black;
      height: 80vh;
    }
  `;
  return (
    <Wrapper>
      <div className="jumbotron landing d-flex flex-column justify-content-center align-items-center">
        <h1 className="medium text-white">
          <strong>All daily breaking News</strong>
        </h1>

        <div className="px-3 row mt-4">
          <div className="col-12 col-md-8 offset-md-2">
            <p className="lead text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
