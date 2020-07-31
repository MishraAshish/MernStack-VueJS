import React from "react";
import CartListContainer from "../../Container/Cart/CartListContainer";
import CartSummary from "../../Container/Cart/CartSummaryContainer";

let CheckoutComponent = (props) => {
    return(
        <div className="cartComponent">
            <h1>Checkout Page</h1>
            <div>
                Hi, <b>{props.user.userName}</b>
                <br/><p>
                Your Items are checked out and will be delivered at below address.
                <br/>
                If it looks good then please proceed for payment.</p>
                <hr/>
                Mobile: <b>{props.user.mobile}</b>
                <br/>
                Adress: <b>{props.user.street}</b>
                <hr />
            </div>
            <CartListContainer donotMakeEditable={true} />
            <CartSummary/>
            <div>
                <button onClick={() => props.history.push("/cart")} >
                    Go Back To Cart
                </button>
                <button onClick={() => props.history.push("/checkout")} >
                    Make Payment
                </button>
            </div>
        </div>
    )
} 

export default CheckoutComponent;