 
import { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
var voucher_codes = require('voucher-code-generator');

  
const GiftCardstyle = styled.header`
 
`;

function GiftCard() {
  const [data,setData] = useState(voucher_codes.generate({
    prefix: "turkish-",
    length: 8,
   
  }));
  

  return (
    <div>
    <h1>Generate gift cards</h1>
    <Formik
      initialValues={{ name: '10' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
              <GiftStyled>
        <form onSubmit={props.handleSubmit}>
           <input onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name" type="text"
             class="question"
              id="nme" 
              required autocomplete="off" />
      <label for="nme"><span>Number of gift cards to be generated</span></label>

          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button value="Submit!"  type="submit">Submit</button>
        </form>
        </GiftStyled>
      )}
    </Formik>
  </div>
    );
}

const GiftStyled = styled.footer`
/*
Basic input element using psuedo classes
*/

html {
  font-family: 'Lora', sans-serif;
  width: 100%;
}

body {
  margin: 5% auto 0 auto;
  width: 90%;
  max-width: 1125px;
}

h1 {
  font-size: 28px;
  margin-bottom: 2.5%;
}

input,
span,
label,
textarea {
  font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
}

textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input.question,
textarea.question {
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -112px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

button[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #EEE;
}

button[type="submit"]:active {
  background: #999;
}

input.question:valid ~ button[type="submit"], textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ button[type="submit"], textarea.question:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

`;

export default GiftCard;
