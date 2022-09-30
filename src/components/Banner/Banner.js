import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import './Banner.css';



const StyledBanner = styled.div`
  

`;

const Banner = ({  ...props }) => {
  return (
    <div >
    <StyledBanner className="Banner">
    </StyledBanner> </div>
  );
};

Banner.propTypes = {
  config: PropTypes.object.isRequired
};

export default function App() {
  return (
    <div >
      <Banner/>
    </div>
  );
}
