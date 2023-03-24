import React from "react";

import { IoExitOutline } from "react-icons/io5";
import styled from "styled-components";

const Checkout = () => {
  return (
    <>
      <CheckoutCard>
        <div className="checkout_list ">
          <div>
            <h2>Total</h2>
            <p>$20</p>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <h2>Shipping</h2>
            <p>Free</p>
          </div>
          <div>
            <h2>Estimate for</h2>
            <p>Uzbekistan</p>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <h2>Total</h2>
            <p>$20</p>
          </div>
        </div>
      </CheckoutCard>
    </>
  );
};

export default Checkout;

const CheckoutCard = styled.div`
  font-family: "Quicksand";
  font-weight: 700;
  flex: 1;
  border: 2px solid #ececec;
  border-radius: 10px;
  padding: 20px;
  height: max-content;
  .checkout_list > div {
    display: flex;
    justify-content: space-between;
    padding: 7px 15px;
    border: 1px solid #ececec;
  }

  .checkout_list > div hr {
    width: 100%;
    margin: 5px;
    border-bottom: #ececec;
  }

  .checkout_list > div h2 {
    color: #b6b6b6;
    font-size: 18px;
  }
  .checkout_list > div p {
    color: #b6b6b6;
    font-size: 20px;
    color:#3bb77e;
  }
`;
