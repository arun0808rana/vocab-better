import React from "react";
import styled from "styled-components";
import { useState } from "react";

function ShowMeaning({state, setstate}) {
  

  const toggleSlider = (params) => {
    setstate(!state);
  }

  return (
    <Wrapper>
      <label class="switch">
        <input type="checkbox" checked={state} onChange={toggleSlider}/>
        <span class="slider round"></span>
      </label>
    </Wrapper>
  );
}

export default ShowMeaning;

const Wrapper = styled.div`
  margin: 1rem;
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ACD4C9;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #7BB7A8;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #DE9190;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
