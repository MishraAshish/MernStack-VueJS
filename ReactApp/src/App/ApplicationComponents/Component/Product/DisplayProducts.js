import React from "react";
import DisplayProductDetailsComponent from "../Product/DisplayProductDetails";

let DisplayProduct = (props) => {
    let products = props.products;
    products.length < 1 ? props.fetchProducts() : "";
    return(
        <React.Fragment>
            {products.length >= 1 ?
                products.map((product)=>{ 
                    return <DisplayProductDetailsComponent product={product} />
                })
                :
                <p>No Products to display</p>
            }
        </React.Fragment>
    )
}

export default DisplayProduct;