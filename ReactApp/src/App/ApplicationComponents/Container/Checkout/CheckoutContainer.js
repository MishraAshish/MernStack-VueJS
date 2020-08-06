import {connect} from "react-redux";
import CheckoutComponent from "../../Component/Checkout/CheckoutComponent";


let mapStateToProps = (state) =>{
    return{
        user: state.user.user,
        coupon: state.coupon.coupon
    }
}

export default connect(mapStateToProps, null)(CheckoutComponent);