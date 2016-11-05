import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header top-header header-navigation ul limenu-item-has-children sub-menu sub-menu": {
        "width": 250,
        "paddingTop": 0,
        "top": 0,
        "left": 250
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu": {
        "display": "block",
        "visibility": "hidden"
    },
    "woocommerce": {},
    "woocommerce h1page-title": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce divproduct product_title": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce reviews comments h2": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce woocommerce-tabswc-tabs-wrapper h2": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce relatedproducts h2": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce reviews h3": {
        "width": "100%",
        "marginTop": 0,
        "lineHeight": 1.4,
        "fontSize": 25,
        "color": "#333",
        "transition": "all .3s",
        "display": "block",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    "woocommerce respond inputsubmit": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s",
        "background": "rgba(241, 210, 4, 0.9)"
    },
    "woocommerce abutton": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce buttonbutton": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce inputbutton": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce divproduct formcart button": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce review_form respond form-submit input": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce-cart wc-proceed-to-checkout acheckout-button": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce payment place_order": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s",
        "background": "rgba(241, 210, 4, 0.9)"
    },
    "woocommerce-page payment place_order": {
        "backgroundColor": "#f1d204",
        "color": "#ffffff",
        "textTransform": "uppercase",
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "OTransition": "all .3s",
        "transition": "all .3s"
    },
    "woocommerce abutton:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce buttonbutton:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce inputbutton:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce divproduct formcart button:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce review_form respond form-submit input:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce-cart wc-proceed-to-checkout acheckout-button:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce-page payment place_order:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "color": "#ffffff"
    },
    "woocommerce ulproducts liproduct h3": {
        "color": "#000000"
    },
    "woocommerce star-rating:before": {
        "color": "#000000"
    },
    "woocommerce star-rating span:before": {
        "color": "#000000"
    },
    "woocommerce pstars a:before": {
        "color": "#000000"
    },
    "woocommerce quantity qty": {
        "height": 34
    },
    "woocommerce divproduct woocommerce-product-rating a": {
        "color": "#000000"
    },
    "woocommerce divproduct divsummary product_meta posted_in a": {
        "color": "#000000"
    },
    "woocommerce aadded_to_cart": {
        "color": "#000000"
    },
    "woocommerce woocommerce-info": {
        "borderTopColor": "#000000"
    },
    "woocommerce woocommerce-info:before": {
        "color": "#000000"
    },
    "add_payment_method payment ulpayment_methods li": {},
    "woocommerce-checkout payment ulpayment_methods li": {},
    "add_payment_method payment ulpayment_methods li label": {
        "cursor": "pointer"
    },
    "woocommerce-checkout payment ulpayment_methods li label": {
        "cursor": "pointer"
    },
    "add_payment_method payment ulpayment_methods li:before": {
        "display": "inline"
    },
    "woocommerce-checkout payment ulpayment_methods li:before": {
        "display": "inline"
    },
    "add_payment_method payment ulpayment_methods li input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "woocommerce-checkout payment ulpayment_methods li input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "add_payment_method payment ulpayment_methods li p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "woocommerce-checkout payment ulpayment_methods li p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "woocommerce input[type=\"text\"]": {
        "height": 31
    },
    "woocommerce input[type=\"tel\"]": {
        "height": 31
    },
    "woocommerce input[type=\"email\"]": {
        "height": 31
    },
    "woocommerce input": {
        "border": "1px solid #cccccc"
    },
    "woocommerce textarea": {
        "border": "1px solid #cccccc"
    }
});