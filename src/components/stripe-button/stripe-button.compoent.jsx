import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.compoent.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IFObzFrEwE4OD2ySHqkHTmLiEDjdx4hBbshIiJCP3SJz3lFR2EaWWYrfAQ7EFOFY2RpZaz8EImO7b3IqdubuSPH00qM4la4kF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ST&#9885;AR Cloths"
      billingAddress
      shippingAddress
      image="https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/147165758_516226792682188_7844419679773529443_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=vTbnwm2F5M4AX8Ke_tA&_nc_ht=scontent.fdel5-1.fna&oh=420bf6e36de0aa633f33925df11c7aba&oe=605FC058"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
