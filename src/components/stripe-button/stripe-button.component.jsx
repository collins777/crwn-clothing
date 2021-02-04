import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // stripe sees values in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IGuTbDNiHKU4gzm0BTMGibSA6LI0bku44uFEoBpslAismSjceYfuFaW8jYO7gA0eCG2Q9ITqXAO4c92EhSpvpaP00xDE8e3q3";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      //bitcoin={true}
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} // triggers when we submit
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
