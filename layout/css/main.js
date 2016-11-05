import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "width": "100%",
        "height": "100%",
        "display": "block"
    },
    "body": {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "lineHeight": 1.5,
        "backgroundColor": "#fff",
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "400",
        "fontSize": 15,
        "color": "#888"
    },
    "textarea": {
        "WebkitAppearance": "none",
        "borderRadius": 0
    },
    "input": {
        "WebkitAppearance": "none",
        "borderRadius": 0,
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid rgb(169, 169, 169)",
        "outline": 0,
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "400",
        "color": "#888",
        "resize": "none",
        "display": "block"
    },
    "front-page-section": {
        "width": "100%",
        "paddingTop": 65,
        "paddingRight": 0,
        "paddingBottom": 85,
        "paddingLeft": 0
    },
    "front-page-section section-header": {
        "width": "100%"
    },
    "front-page-section section-header h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 0.6,
        "fontWeight": "900",
        "fontSize": 30,
        "color": "#000",
        "textTransform": "uppercase",
        "textAlign": "center"
    },
    "front-page-section section-header p": {
        "marginBottom": 7,
        "lineHeight": 1.6,
        "fontSize": 15,
        "color": "#888"
    },
    "front-page-section section-content": {
        "width": "100%"
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "wp-caption-text": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "sticky": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "gallery-caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "bypostauthor": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "open-responsive-menu": {
        "display": "none"
    },
    "responsive-menu": {
        "display": "none"
    },
    "customizer-display-none": {
        "display": "none"
    },
    "customizer-display-block": {
        "display": "block"
    },
    "header": {
        "width": "100%",
        "backgroundPosition": "center",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "header top-header": {
        "width": "100%",
        "paddingTop": 40
    },
    "header top-header header-logo": {
        "display": "block",
        "fontSize": 38,
        "color": "#fff",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "float": "left"
    },
    "header top-header header-logo:hover": {
        "color": "rgb(229, 0, 126)",
        "textDecoration": "none"
    },
    "header top-header header-navigation": {
        "float": "right"
    },
    "header top-header header-navigation ul": {
        "width": "100%",
        "marginTop": 35,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "header top-header header-navigation ul li": {
        "marginLeft": 40,
        "lineHeight": 1.375,
        "fontWeight": "700",
        "fontSize": 16,
        "color": "#fff",
        "textTransform": "uppercase",
        "position": "relative",
        "float": "left"
    },
    "header top-header header-navigation ul li:first-child": {
        "marginLeft": 0
    },
    "header top-header header-navigation ul limenu-item-has-children a": {
        "paddingRight": 16,
        "position": "relative"
    },
    "header top-header header-navigation ul limenu-item-has-children a:after": {
        "content": "\\f0d7",
        "fontFamily": "FontAwesome",
        "fontSize": 16,
        "position": "absolute",
        "top": 0,
        "right": 0
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu": {
        "width": 250,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "left": 0,
        "display": "none",
        "zIndex": 10
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li:first-child a": {
        "paddingTop": 10
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li:last-child a": {
        "paddingBottom": 10
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li a": {
        "width": "100%",
        "backgroundColor": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "lineHeight": 1.6,
        "fontWeight": "600",
        "fontSize": 16,
        "color": "#333",
        "textTransform": "none",
        "display": "block"
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li a:hover": {
        "color": "rgb(229, 0, 126)"
    },
    "header top-header header-navigation ul limenu-item-has-children sub-menu li a:after": {
        "display": "none"
    },
    "header top-header header-navigation ul li a": {
        "color": "#fff",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "header top-header header-navigation ul li a:hover": {
        "color": "#ffde00",
        "textDecoration": "none"
    },
    "header bottom-header": {
        "width": "100%",
        "paddingTop": 240,
        "paddingBottom": 280,
        "textAlign": "center"
    },
    "header bottom-headerblog": {
        "paddingTop": 130,
        "paddingRight": 0,
        "paddingBottom": 130,
        "paddingLeft": 0
    },
    "header bottom-headerblog p": {
        "marginBottom": 0
    },
    "header bottom-header h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0,
        "lineHeight": 0.74,
        "fontWeight": "900",
        "fontSize": 81,
        "color": "#fff",
        "textTransform": "uppercase"
    },
    "header bottom-header spanspan-dot": {
        "color": "#ffde00"
    },
    "header bottom-header p": {
        "lineHeight": 1.6,
        "marginBottom": 60,
        "fontSize": 15,
        "color": "#fff"
    },
    "header bottom-header header-button-one": {
        "width": "auto",
        "height": 63,
        "lineHeight": 57,
        "background": "rgba(255, 255, 255, 0.2)",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15,
        "paddingTop": 0,
        "paddingRight": 70,
        "paddingBottom": 0,
        "paddingLeft": 70,
        "display": "inline-block",
        "borderRadius": 3,
        "fontWeight": "700",
        "fontSize": 18,
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "border": "3px solid rgb(229, 0, 126)",
        "color": "rgb(229, 0, 126)"
    },
    "header bottom-header header-button-one:hover": {
        "background": "rgba(255, 255, 255, 0.1)",
        "textDecoration": "none"
    },
    "header bottom-header header-button-two": {
        "width": "auto",
        "height": 63,
        "lineHeight": 63,
        "background": "rgb(229, 0, 126)",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15,
        "paddingTop": 0,
        "paddingRight": 70,
        "paddingBottom": 0,
        "paddingLeft": 70,
        "display": "inline-block",
        "borderRadius": 3,
        "fontWeight": "700",
        "fontSize": 18,
        "color": "#fff",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "header bottom-header header-button-two:hover": {
        "background": "rgba(241, 210, 4, 0.9)",
        "textDecoration": "none"
    },
    "about": {
        "width": "100%",
        "background": "#fff",
        "paddingTop": 65,
        "paddingRight": 0,
        "paddingBottom": 85,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "static-page-content": {
        "width": "100%",
        "background": "#fff",
        "paddingTop": 65,
        "paddingRight": 0,
        "paddingBottom": 85,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "about section-header": {
        "marginBottom": 110
    },
    "about skill": {
        "width": "100%"
    },
    "about skill skill-top": {
        "width": "100%",
        "marginBottom": 25
    },
    "about skill skill-top skill-progress-bar": {
        "width": "100%",
        "height": 2,
        "backgroundColor": "#ebebeb",
        "position": "relative"
    },
    "about skill skill-top skill-progress-bar ui-progressbar-value": {
        "height": 4,
        "position": "absolute",
        "top": -1,
        "left": 0
    },
    "about skill skill-top skill-progress-bar ui-progressbar-value ui-progressbar-value-circle": {
        "content": "",
        "width": 9,
        "height": 9,
        "position": "absolute",
        "top": -2.5,
        "right": 0,
        "borderRadius": "50%"
    },
    "about skill skill-top skill-progress-bar ui-progressbar-value ui-progressbar-value-top": {
        "content": "",
        "width": 64,
        "height": 29,
        "lineHeight": 29,
        "backgroundColor": "#000",
        "position": "absolute",
        "top": -45,
        "right": -28,
        "borderRadius": 3,
        "fontWeight": "700",
        "fontSize": 17,
        "color": "#fff"
    },
    "about skill skill-top skill-progress-bar ui-progressbar-value ui-progressbar-value-top ui-progressbar-value-triangle": {
        "width": 0,
        "height": 0,
        "marginRight": "auto",
        "marginLeft": "auto",
        "borderStyle": "solid",
        "borderWidth": "5px 4.5px 0 4.5px",
        "lineHeight": 0,
        "position": "absolute",
        "right": 0,
        "bottom": -5,
        "left": 0
    },
    "about skill skill-bottom": {
        "width": "100%",
        "textAlign": "left"
    },
    "about skill skill-bottom fa": {
        "fontSize": 22
    },
    "about skill skill-bottom span": {
        "marginLeft": 8,
        "lineHeight": 1.294,
        "fontSize": 17
    },
    "about widget_illdy_skill": {
        "marginTop": 106
    },
    "about widget_illdy_skill:nth-child(1)": {
        "marginTop": 0
    },
    "about widget_illdy_skill:nth-child(2)": {
        "marginTop": 0
    },
    "about widget_illdy_skill:nth-child(3)": {
        "marginTop": 0
    },
    "projects": {
        "width": "100%",
        "backgroundColor": "#fbfbfb",
        "paddingTop": 65,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "projects container-fluid": {
        "maxWidth": 1920
    },
    "projects section-header": {
        "marginBottom": 65
    },
    "projects project": {
        "width": "100%",
        "height": 200,
        "display": "block",
        "position": "relative",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "projects project:hover project-overlay": {
        "opacity": 0.3
    },
    "projects project project-overlay": {
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#fff",
        "opacity": 0,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1,
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "testimonials": {
        "width": "100%",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0,
        "textAlign": "center",
        "position": "relative",
        "background": "linear-gradient(to bottom, #6a305e 0%, #451c56 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#6a305e', endColorstr='#451c56', GradientType=0)",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "backgroundAttachment": "fixed",
        "backgroundPosition": "center center"
    },
    "testimonials section-header": {
        "width": "100%",
        "marginBottom": 40
    },
    "testimonials section-header h3": {
        "color": "#fff"
    },
    "testimonials section-content": {
        "width": "100%"
    },
    "testimonials section-content testimonials-carousel": {
        "width": "100%"
    },
    "testimonials section-content testimonials-carousel carousel-testimonial": {
        "textAlign": "center"
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-image": {
        "width": "100%",
        "marginBottom": 25
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-image img": {
        "width": 127,
        "height": 127,
        "display": "inline",
        "borderRadius": "50%"
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-content": {
        "width": "100%",
        "backgroundColor": "#682e66",
        "marginBottom": 55,
        "paddingTop": 25,
        "paddingRight": 50,
        "paddingBottom": 25,
        "paddingLeft": 50,
        "position": "relative"
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-content blockquote": {
        "lineHeight": 1.6,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderLeft": "none",
        "color": "#fff"
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-content:after": {
        "content": "",
        "width": 0,
        "height": 0,
        "marginRight": "auto",
        "marginLeft": "auto",
        "borderStyle": "solid",
        "borderWidth": "19px 18px 0 18px",
        "borderColor": "#682e66 transparent transparent transparent",
        "position": "absolute",
        "right": 0,
        "bottom": -19,
        "left": 0
    },
    "testimonials section-content testimonials-carousel carousel-testimonial testimonial-meta": {
        "width": "100%",
        "lineHeight": "normal",
        "fontWeight": "900",
        "fontSize": 20,
        "color": "#fff",
        "textTransform": "uppercase"
    },
    "testimonials section-content testimonials-carousel owl-controls": {
        "width": "100%",
        "marginTop": 20
    },
    "testimonials section-content testimonials-carousel owl-controls owl-dots": {
        "width": "100%"
    },
    "testimonials section-content testimonials-carousel owl-controls owl-dots owl-dot": {
        "width": 10,
        "height": 10,
        "backgroundColor": "#fff",
        "marginTop": 0,
        "marginRight": 7.5,
        "marginBottom": 0,
        "marginLeft": 7.5,
        "display": "inline-block",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "borderRadius": "50%"
    },
    "testimonials section-content testimonials-carousel owl-controls owl-dots owl-dot:hover": {
        "background": "transparent",
        "border": "1px solid #fff"
    },
    "testimonials section-content testimonials-carousel owl-controls owl-dots owl-dotactive": {
        "background": "transparent",
        "border": "1px solid #fff"
    },
    "services": {
        "width": "100%",
        "background": "#fff",
        "paddingTop": 65,
        "paddingRight": 0,
        "paddingBottom": 75,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "services section-header": {
        "width": "100%",
        "marginBottom": 65
    },
    "services section-content": {
        "width": "100%"
    },
    "services section-content service": {
        "width": "100%"
    },
    "services section-content service service-icon": {
        "width": "100%",
        "marginBottom": 10,
        "fontSize": 34
    },
    "services section-content service service-icon fa": {
        "display": "block"
    },
    "services section-content service service-title": {
        "width": "100%",
        "marginBottom": 30,
        "lineHeight": 1.611,
        "fontWeight": "700",
        "fontSize": 18,
        "textTransform": "uppercase"
    },
    "services section-content service service-entry": {
        "width": "100%",
        "lineHeight": 1.6,
        "color": "#888"
    },
    "services widget_illdy_service": {
        "marginTop": 40
    },
    "services widget_illdy_service:nth-child(1)": {
        "marginTop": 0
    },
    "services widget_illdy_service:nth-child(2)": {
        "marginTop": 0
    },
    "services widget_illdy_service:nth-child(3)": {
        "marginTop": 0
    },
    "latest-news": {
        "width": "100%",
        "backgroundColor": "#f6f6f6",
        "paddingTop": 75,
        "paddingRight": 0,
        "paddingBottom": 85,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "latest-news section-header": {
        "marginBottom": 55
    },
    "latest-news section-content": {
        "width": "100%"
    },
    "latest-news section-content post": {
        "width": "100%",
        "backgroundColor": "#fff",
        "paddingBottom": 40,
        "textAlign": "left"
    },
    "latest-news illdy-blog-post": {
        "marginTop": 30
    },
    "latest-news section-content post post-image": {
        "width": "100%",
        "height": 213,
        "backgroundPosition": "center center",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "marginBottom": 58
    },
    "latest-news section-content post post-title": {
        "width": "100%",
        "lineHeight": 1.388,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "fontWeight": "700",
        "fontSize": 18,
        "color": "#333",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "display": "block"
    },
    "latest-news section-content post post-title:hover": {
        "color": "rgb(229, 0, 126)",
        "textDecoration": "none"
    },
    "latest-news section-content post post-entry": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 55,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "lineHeight": 1.6,
        "color": "#888"
    },
    "latest-news section-content post post-button": {
        "lineHeight": 1.388,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "fontSize": 18,
        "color": "rgb(229, 0, 126)",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "latest-news section-content post post-button:hover": {
        "textDecoration": "none",
        "color": "#333"
    },
    "latest-news section-content post post-button fa": {
        "marginRight": 13
    },
    "latest-news latest-news-button": {
        "width": "auto",
        "height": 56,
        "lineHeight": 56,
        "background": "rgb(229, 0, 126)",
        "marginBottom": 50,
        "paddingTop": 0,
        "paddingRight": 70,
        "paddingBottom": 0,
        "paddingLeft": 70,
        "display": "inline-block",
        "fontWeight": "900",
        "fontSize": 18,
        "color": "#f7f7f7",
        "textTransform": "uppercase",
        "borderRadius": 3,
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "latest-news latest-news-button:hover": {
        "textDecoration": "none",
        "opacity": 0.9
    },
    "latest-news latest-news-button fa": {
        "marginRight": 12
    },
    "counter": {
        "width": "100%",
        "paddingTop": 55,
        "paddingRight": 0,
        "paddingBottom": 55,
        "paddingLeft": 0,
        "textAlign": "center",
        "position": "relative",
        "backgroundAttachment": "fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    },
    "counter col-sm-4": {
        "borderRight": "1px solid #fff"
    },
    "counter col-sm-4:last-child": {
        "borderRight": "none"
    },
    "counter counter-overlay": {
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.5)",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "counter counter-number": {
        "width": "100%",
        "display": "block",
        "marginBottom": 10,
        "lineHeight": 0.9,
        "fontWeight": "900",
        "fontSize": 50,
        "color": "#fff"
    },
    "counter counter-description": {
        "width": "100%",
        "lineHeight": 2.25,
        "display": "block",
        "fontSize": 20,
        "color": "#fff",
        "textTransform": "uppercase"
    },
    "counter widget_illdy_counter": {
        "marginTop": 40
    },
    "counter widget_illdy_counter:nth-child(1)": {
        "marginTop": 0
    },
    "counter widget_illdy_counter:nth-child(2)": {
        "marginTop": 0
    },
    "counter widget_illdy_counter:nth-child(3)": {
        "marginTop": 0
    },
    "team": {
        "width": "100%",
        "background": "#fff",
        "paddingTop": 80,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "team section-header": {
        "width": "100%",
        "marginBottom": 85
    },
    "team section-content": {
        "width": "100%"
    },
    "team section-content person": {
        "width": "100%"
    },
    "team section-content person person-image": {
        "width": 125,
        "marginRight": 25,
        "float": "left"
    },
    "team section-content person person-image img": {
        "maxWidth": "100%",
        "height": "auto",
        "borderRadius": "50%"
    },
    "team section-content person person-content": {
        "textAlign": "left"
    },
    "team section-content person person-content h4": {
        "width": "100%",
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "lineHeight": 1.25,
        "fontSize": 20,
        "color": "#333",
        "textTransform": "uppercase"
    },
    "team section-content person person-content h5": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontWeight": "700",
        "fontSize": 15,
        "textTransform": "uppercase"
    },
    "team section-content person person-content p": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.5,
        "fontWeight": "300",
        "fontSize": 15,
        "fontStyle": "italic",
        "color": "#888"
    },
    "team section-content person person-content person-content-social": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "team section-content person person-content person-content-social li": {
        "marginLeft": 10,
        "float": "left"
    },
    "team section-content person person-content person-content-social li:first-child": {
        "marginLeft": 0
    },
    "team section-content person person-content person-content-social li a": {
        "width": 22,
        "height": 22,
        "lineHeight": 22,
        "display": "inline-block",
        "borderRadius": "50%",
        "fontSize": 12,
        "color": "#fff",
        "textAlign": "center",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "team section-content person person-content person-content-social li a:hover": {
        "opacity": 0.9
    },
    "team widget_illdy_person": {
        "marginTop": 40
    },
    "team widget_illdy_person:nth-child(1)": {
        "marginTop": 0
    },
    "team widget_illdy_person:nth-child(2)": {
        "marginTop": 0
    },
    "team widget_illdy_person:nth-child(3)": {
        "marginTop": 0
    },
    "contact-us label": {
        "width": "100% !important"
    },
    "contact-us": {
        "width": "100%",
        "backgroundColor": "#dda06f",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "contact-us section-header": {
        "width": "100%",
        "marginBottom": 80
    },
    "contact-us section-header h3": {
        "color": "#fff"
    },
    "contact-us section-header p": {
        "color": "#fff"
    },
    "contact-us section-content": {
        "width": "100%"
    },
    "contact-us section-content contact-us-box": {
        "width": "100%",
        "display": "inline-block",
        "textAlign": "left"
    },
    "contact-us section-content contact-us-box box-left": {
        "width": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderRight": "1px solid #fff",
        "lineHeight": "normal",
        "display": "table-cell",
        "fontWeight": "700",
        "fontSize": 18,
        "color": "#fff",
        "textTransform": "uppercase"
    },
    "contact-us section-content contact-us-box box-right": {
        "width": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "display": "table-cell"
    },
    "contact-us section-content contact-us-box box-right span": {
        "width": "100%",
        "display": "block",
        "lineHeight": 1.6,
        "fontSize": 15,
        "color": "#fee3bf"
    },
    "contact-us section-content contact-us-box box-right span a": {
        "color": "#fee3bf",
        "textDecoration": "none"
    },
    "contact-us section-content contact-us-box box-right span a:hover": {
        "textDecoration": "underline"
    },
    "contact-us section-content contact-us-social": {
        "width": "100%",
        "textAlign": "right"
    },
    "contact-us section-content contact-us-social a": {
        "marginLeft": 15,
        "fontSize": 17,
        "color": "#fff",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "contact-us section-content contact-us-social a:hover": {
        "color": "#333"
    },
    "contact-us section-content contact-us-social a:first-child": {
        "marginLeft": 0
    },
    "contact-us section-content wpcf7-form": {
        "width": "100%",
        "textAlign": "left"
    },
    "contact-us section-content wpcf7-form p": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p span": {
        "width": "100%",
        "display": "block"
    },
    "contact-us section-content wpcf7-form p:nth-of-type(1)": {
        "width": "33.33333333%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative",
        "minHeight": 1,
        "display": "block",
        "float": "left",
        "paddingRight": 15
    },
    "contact-us section-content wpcf7-form p:nth-of-type(2)": {
        "width": "33.33333333%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative",
        "minHeight": 1,
        "display": "block",
        "float": "left",
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "contact-us section-content wpcf7-form p:nth-of-type(3)": {
        "width": "33.33333333%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative",
        "minHeight": 1,
        "display": "block",
        "float": "left",
        "paddingLeft": 15
    },
    "contact-us section-content wpcf7-form p:nth-of-type(4)": {
        "width": "100%",
        "marginTop": 26,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "block",
        "float": "left"
    },
    "contact-us section-content wpcf7-form p:nth-of-type(5)": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "block",
        "float": "right",
        "width": "auto"
    },
    "contact-us section-content wpcf7-form wpcf7-response-outputwpcf7-mail-sent-ng": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form wpcf7-response-output": {
        "marginTop": "40px !important",
        "float": "left"
    },
    "contact-us divwpcf7 imgajax-loader": {
        "marginTop": 50,
        "marginRight": 10
    },
    "contact-us section-content wpcf7-form p wpcf7-text": {
        "width": "100%",
        "height": 46,
        "backgroundColor": "#df955b",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "border": "1px solid #d08b55",
        "outline": 0,
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontSize": 15,
        "color": "#fff",
        "display": "block"
    },
    "contact-us section-content wpcf7-form p wpcf7-text::-webkit-input-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-text::-moz-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-text:-ms-input-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-text:-moz-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-textarea": {
        "width": "100%",
        "height": 217,
        "backgroundColor": "#df955b",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "border": "1px solid #d08b55",
        "outline": 0,
        "resize": "none",
        "display": "block"
    },
    "contact-us section-content wpcf7-form p wpcf7-textarea::-webkit-input-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-textarea::-moz-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-textarea:-ms-input-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-textarea:-moz-placeholder": {
        "color": "#fff"
    },
    "contact-us section-content wpcf7-form p wpcf7-submit": {
        "width": "auto",
        "height": 44,
        "backgroundColor": "#fff",
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 60,
        "paddingBottom": 0,
        "paddingLeft": 60,
        "border": "none",
        "borderRadius": 2,
        "display": "inline-block",
        "fontWeight": "700",
        "color": "#e69f67",
        "textTransform": "uppercase",
        "float": "right",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "outline": 0
    },
    "contact-us section-content wpcf7-form p wpcf7-submit:hover": {
        "opacity": 0.9
    },
    "contact-us section-content wpcf7-form wpcf7-response-outputwpcf7-display-nonewpcf7-validation-errors": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "color": "#fff",
        "float": "left"
    },
    "footer": {
        "width": "100%",
        "backgroundColor": "#f5f5f5",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "footer footer-logo": {
        "width": "100%",
        "marginBottom": 20,
        "display": "block",
        "textAlign": "right"
    },
    "footer footer-logo img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "footer copyright": {
        "width": "100%",
        "lineHeight": 0.933,
        "color": "#888"
    },
    "footer copyright a": {
        "color": "#888",
        "textDecoration": "none"
    },
    "footer copyright a:hover": {
        "textDecoration": "underline"
    },
    "footer widget widget-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer widget widget-title:before": {
        "display": "none"
    },
    "footer widget widget-title h3": {
        "lineHeight": 1.15,
        "color": "#888"
    },
    "footer widget ul li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "borderBottom": "none"
    },
    "footer widget ul li:last-child": {
        "marginBottom": 0
    },
    "footer widget ul li a": {
        "lineHeight": 1.5,
        "color": "#888"
    },
    "footer widget ul li a:hover": {
        "color": "rgb(229, 0, 126)"
    },
    "footer widget ul li:before": {
        "color": "#888"
    },
    "blog": {
        "width": "100%",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "blog blog-post": {
        "width": "100%",
        "marginBottom": 100
    },
    "blog blog-post blog-post-title": {
        "width": "100%",
        "marginTop": 0,
        "marginBottom": 10,
        "lineHeight": 1.4,
        "fontWeight": "700",
        "fontSize": 25,
        "color": "#333",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "display": "block"
    },
    "blog blog-post blog-post-title:hover": {
        "textDecoration": "none",
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post h2blog-post-title:hover": {
        "color": "#333 !important"
    },
    "blog blog-post blog-post-image": {
        "width": "100%",
        "marginBottom": 10,
        "textAlign": "center"
    },
    "blog blog-post blog-post-image img": {
        "width": "100%",
        "maxWidth": "100%",
        "height": "auto"
    },
    "blog blog-post blog-post-meta": {
        "width": "100%",
        "marginBottom": 10,
        "lineHeight": 2.428,
        "fontSize": 14
    },
    "blog blog-post blog-post-meta post-meta-author": {
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-meta post-meta-author fa": {
        "marginRight": 6,
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-meta post-meta-time": {
        "marginLeft": 20,
        "color": "#888"
    },
    "blog blog-post blog-post-meta post-meta-categories": {
        "marginLeft": 20,
        "color": "#888"
    },
    "blog blog-post blog-post-meta post-meta-categories a": {
        "color": "#888"
    },
    "blog blog-post blog-post-meta post-meta-time fa": {
        "marginRight": 6,
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-meta post-meta-categories fa": {
        "marginRight": 6,
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-meta post-meta-comments": {
        "marginLeft": 40,
        "color": "#888"
    },
    "blog blog-post blog-post-meta post-meta-comments fa": {
        "marginRight": 6,
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-meta post-meta-comments a": {
        "color": "#888"
    },
    "blog blog-post blog-post-entry": {
        "width": "100%",
        "marginBottom": 40
    },
    "blog blog-post blog-post-entry p": {
        "lineHeight": 1.6,
        "color": "#888"
    },
    "blog blog-post blog-post-button": {
        "height": 45,
        "lineHeight": 45,
        "backgroundColor": "rgb(229, 0, 126)",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30,
        "display": "inline-block",
        "borderRadius": 3,
        "fontWeight": "700",
        "fontSize": 18,
        "color": "#fff",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s",
        "textTransform": "uppercase"
    },
    "blog blog-post blog-post-button:hover": {
        "textDecoration": "none",
        "opacity": 0.9
    },
    "blog blog-post blog-post-tags": {
        "width": "100%",
        "marginBottom": 40,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "blog blog-post blog-post-tags li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block",
        "color": "#888"
    },
    "blog blog-post blog-post-tags li a": {
        "color": "#888"
    },
    "blog blog-post social-links-list": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 55,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "blog blog-post social-links-list li": {
        "marginLeft": 30,
        "float": "left"
    },
    "blog blog-post social-links-list lilinks-list-title": {
        "marginLeft": 0,
        "lineHeight": 34,
        "fontWeight": "700",
        "color": "#333",
        "textTransform": "uppercase"
    },
    "blog blog-post social-links-list li[data-customizer=\"twitter\"] a": {
        "backgroundColor": "#2a7dca"
    },
    "blog blog-post social-links-list li[data-customizer=\"facebook\"] a": {
        "backgroundColor": "#06bef4"
    },
    "blog blog-post social-links-list li[data-customizer=\"linkedin\"] a": {
        "backgroundColor": "#0077b5"
    },
    "blog blog-post social-links-list li a": {
        "width": 34,
        "height": 34,
        "lineHeight": 34,
        "display": "block",
        "borderRadius": "50%",
        "color": "#fff",
        "fontSize": 17,
        "textAlign": "center",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "blog blog-post social-links-list li a:hover": {
        "opacity": 0.9
    },
    "blog blog-post blog-post-author": {
        "width": "100%",
        "background": "#f9f9f9",
        "marginBottom": 45,
        "paddingTop": 20,
        "paddingRight": 40,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "blog blog-post blog-post-author avatar": {
        "marginRight": 30,
        "borderRadius": "50%",
        "float": "left"
    },
    "blog blog-post blog-post-author h4": {
        "lineHeight": 1.7,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block",
        "fontSize": 20,
        "color": "rgb(229, 0, 126)"
    },
    "blog blog-post blog-post-author p": {
        "lineHeight": 1.6,
        "color": "#888"
    },
    "blog nav-links": {
        "width": "100%"
    },
    "navigation screen-reader-text": {
        "display": "none"
    },
    "blog nav-links page-numbers": {
        "width": 34,
        "height": 34,
        "lineHeight": 32,
        "display": "inline-block",
        "color": "#000",
        "textAlign": "center"
    },
    "blog nav-links page-numberscurrent": {
        "textDecoration": "none",
        "border": "1px solid #000"
    },
    "blog nav-links page-numbers:hover": {
        "textDecoration": "none",
        "border": "1px solid #000"
    },
    "sidebar": {
        "width": "90%",
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "paddingLeft": "10%",
        "borderLeft": "1px solid #ebebeb",
        "float": "right"
    },
    "page-template-left-sidebar sidebar": {
        "paddingRight": "10%",
        "paddingLeft": 0,
        "borderRight": "1px solid #ebebeb",
        "borderLeft": "none",
        "float": "left"
    },
    "widget": {
        "width": "100%",
        "marginBottom": 75
    },
    "widget:last-child": {
        "marginBottom": 0
    },
    "widget widget-title": {
        "width": "100%",
        "marginBottom": 20,
        "paddingBottom": 12,
        "position": "relative"
    },
    "widget widget-title:before": {
        "content": "",
        "width": 41,
        "height": 3,
        "backgroundColor": "rgb(229, 0, 126)",
        "position": "absolute",
        "bottom": 0,
        "left": 0
    },
    "widget widget-title h3": {
        "lineHeight": 2.55,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "700",
        "fontSize": 20,
        "color": "#333",
        "textTransform": "uppercase"
    },
    "widget a": {
        "color": "#333"
    },
    "widget img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "widget ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "widget ulchildren li": {
        "paddingBottom": 0,
        "borderBottom": "none"
    },
    "widget ulsub-menu li": {
        "paddingBottom": 0,
        "borderBottom": "none"
    },
    "widget ul li": {
        "width": "100%",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderBottom": "1px solid #ebebeb",
        "position": "relative"
    },
    "widget ul li:before": {
        "content": "\\f105",
        "fontFamily": "FontAwesome",
        "color": "rgb(229, 0, 126)",
        "position": "absolute",
        "left": 0
    },
    "widget ul li a": {
        "lineHeight": 1.6,
        "color": "#888",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "widget ul li a:hover": {
        "color": "rgb(229, 0, 126)",
        "textDecoration": "none"
    },
    "widget screen-reader-text": {
        "width": "100%"
    },
    "widget select": {
        "width": "100%"
    },
    "widget table": {
        "width": "100%"
    },
    "widget table caption": {
        "color": "#888",
        "marginBottom": 10,
        "fontWeight": "700"
    },
    "widget table thead": {
        "color": "#888"
    },
    "widget table thead th": {
        "paddingBottom": 5,
        "borderRight": "1px solid #eee",
        "borderBottom": "1px solid #eee",
        "textAlign": "center"
    },
    "widget table thead th:last-child": {
        "borderRight": "none"
    },
    "widget table tbody": {
        "color": "#888",
        "textAlign": "center",
        "fontSize": 12,
        "fontWeight": "300"
    },
    "widget table tbody a": {
        "fontWeight": "700"
    },
    "widget table tbody tr": {
        "borderBottom": "1px solid #eee"
    },
    "widget table tbody tr:last-child": {
        "borderBottom": "none"
    },
    "widget table tbody tr td": {
        "borderRight": "1px solid #eee",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7
    },
    "widget table tbody tr td:last-child": {
        "borderRight": "none"
    },
    "widget table tfoot": {
        "fontSize": 14,
        "color": "#888"
    },
    "widget table tfoot next": {
        "textAlign": "right"
    },
    "widget table a": {
        "color": "#888",
        "textDecoration": "underline"
    },
    "widget table a:hover": {
        "textDecoration": "none"
    },
    "widget table tdprev": {
        "paddingTop": 10
    },
    "widget table tdprev a": {
        "color": "#888"
    },
    "widget table tdnext": {
        "paddingTop": 10
    },
    "widget table tdnext a": {
        "color": "#888"
    },
    "widget search-form": {
        "width": "100%"
    },
    "widget search-form search-form-box": {
        "width": "100%",
        "height": 39,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "border": "1px solid #000"
    },
    "widget search-form search-form-box searchsubmit": {
        "height": 37,
        "lineHeight": 37,
        "background": "transparent",
        "marginRight": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "fontFamily": "FontAwesome",
        "color": "#000",
        "float": "left"
    },
    "widget search-form search-form-box s": {
        "height": 37,
        "background": "transparent",
        "border": "none",
        "color": "#333",
        "textTransform": "uppercase",
        "outline": 0
    },
    "widget search-form search-form-box s::-webkit-input-placeholder": {
        "color": "#000"
    },
    "widget search-form search-form-box s::-moz-placeholder": {
        "color": "#000"
    },
    "widget search-form search-form-box s:-ms-input-placeholder": {
        "color": "#000"
    },
    "widget search-form search-form-box s:-moz-placeholder": {
        "color": "#000"
    },
    "widget widget-recent-post": {
        "width": "100%",
        "marginBottom": 37
    },
    "widget widget-recent-post:last-of-type": {
        "marginBottom": 0
    },
    "widget widget-recent-post recent-post-image": {
        "width": 70,
        "marginRight": 22,
        "float": "left"
    },
    "widget widget-recent-post recent-post-image img": {
        "maxWidth": "100%",
        "height": "auto",
        "borderRadius": "50%"
    },
    "widget widget-recent-post recent-post-title": {
        "width": "100%",
        "lineHeight": 1.466,
        "display": "block",
        "color": "#333",
        "textTransform": "uppercase"
    },
    "widget widget-recent-post recent-post-button": {
        "width": "100%",
        "lineHeight": 1.466,
        "color": "rgb(229, 0, 126)",
        "textTransform": "lowercase"
    },
    "markup-format h1": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 92
    },
    "markup-format h2": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 32
    },
    "markup-format h3": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 30,
        "fontWeight": "500"
    },
    "markup-format h4": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 18
    },
    "markup-format h5": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 16
    },
    "markup-format h6": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "lineHeight": 14
    },
    "markup-format p": {
        "lineHeight": 25,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "markup-format a": {
        "color": "#e2c504",
        "textDecoration": "underline"
    },
    "markup-format a:hover": {
        "textDecoration": "none"
    },
    "markup-format img": {
        "maxWidth": "100% !important",
        "height": "auto"
    },
    "markup-format imgalignright": {
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 1
    },
    "markup-format imgalignleft": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "markup-format imgaligncenter": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "markup-format alignright": {
        "float": "right"
    },
    "markup-format alignleft": {
        "float": "left"
    },
    "markup-format aligncenter": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "markup-format wp-caption": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "markup-format post-password-form": {
        "width": "100%"
    },
    "markup-format post-password-form label": {
        "float": "left"
    },
    "markup-format post-password-form label input[type=\"password\"]": {
        "height": 40,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 5,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "border": "1px solid #e6e6e6",
        "borderRadius": 0,
        "outline": 0,
        "appearance": "none"
    },
    "markup-format post-password-form input[type=\"submit\"]": {
        "height": 40,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "markup-format gallery-item": {
        "width": "25%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "float": "left"
    },
    "markup-format gallery-columns-1 gallery-item": {
        "width": "100%"
    },
    "markup-format gallery-columns-2 gallery-item": {
        "width": "50%"
    },
    "markup-format gallery-columns-3 gallery-item": {
        "width": "33.33%"
    },
    "markup-format link-pages": {
        "width": "100%",
        "marginBottom": 40,
        "float": "left"
    },
    "markup-format iframe": {
        "maxWidth": "100%"
    },
    "markup-format blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 50,
        "fontSize": 30,
        "color": "#888",
        "borderLeft": "none"
    },
    "markup-format q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 50,
        "fontSize": 30,
        "color": "#888",
        "borderLeft": "none"
    },
    "markup-format blockquote:before": {
        "content": "\\\""
    },
    "markup-format blockquote:after": {
        "content": "\\\""
    },
    "markup-format cite": {
        "fontStyle": "normal",
        "fontSize": 14,
        "color": "#888"
    },
    "markup-format blockquote p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "markup-format ul": {
        "listStylePosition": "inside",
        "listStyleType": "disc"
    },
    "markup-format ul li": {
        "listStylePosition": "inside",
        "listStyleType": "disc"
    },
    "markup-format ul li ul": {
        "paddingLeft": 20
    },
    "markup-format ol": {
        "listStylePosition": "inside",
        "listStyleType": "decimal"
    },
    "markup-format ol li": {
        "listStylePosition": "inside",
        "listStyleType": "decimal"
    },
    "markup-format ol li ol": {
        "paddingLeft": 20
    },
    "markup-format table": {
        "width": "100%"
    },
    "markup-format table caption": {
        "color": "#888",
        "marginBottom": 10,
        "fontWeight": "700"
    },
    "markup-format table thead": {
        "color": "#888"
    },
    "markup-format table thead th": {
        "paddingBottom": 5,
        "borderRight": "1px solid #eee",
        "borderBottom": "1px solid #eee",
        "textAlign": "center"
    },
    "markup-format table thead th:last-child": {
        "borderRight": "none"
    },
    "markup-format table tbody": {
        "color": "#888",
        "textAlign": "center",
        "fontSize": 12,
        "fontWeight": "300"
    },
    "markup-format table tbody a": {
        "fontWeight": "700"
    },
    "markup-format table tbody tr": {
        "borderBottom": "1px solid #eee"
    },
    "markup-format table tbody tr:last-child": {
        "borderBottom": "none"
    },
    "markup-format table tbody tr td": {
        "borderRight": "1px solid #eee",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7
    },
    "markup-format table tbody tr td:last-child": {
        "borderRight": "none"
    },
    "markup-format table tfoot": {
        "fontSize": 14,
        "color": "#888"
    },
    "markup-format table tfoot next": {
        "textAlign": "right"
    },
    "markup-format table a": {
        "color": "#888",
        "textDecoration": "underline"
    },
    "markup-format table a:hover": {
        "textDecoration": "none"
    },
    "markup-format table tdprev": {
        "paddingTop": 10
    },
    "markup-format table tdprev a": {
        "color": "#888"
    },
    "markup-format table tdnext": {
        "paddingTop": 10
    },
    "markup-format table tdnext a": {
        "color": "#888"
    },
    "blog-post-related-articles": {
        "width": "100%",
        "marginBottom": 50
    },
    "blog-post-related-articles related-article-title": {
        "width": "100%",
        "marginBottom": 20,
        "fontWeight": "700",
        "color": "#333",
        "textTransform": "uppercase",
        "lineHeight": 1.6
    },
    "blog-post-related-articles related-post": {
        "width": "100%",
        "height": 203,
        "backgroundPosition": "center center",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "display": "block",
        "position": "relative",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "blog-post-related-articles related-post:hover related-post-title": {
        "color": "rgb(229, 0, 126)",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "blog-post-related-articles related-post related-post-title": {
        "width": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "color": "#fff",
        "lineHeight": 1.6,
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "comments": {
        "width": "100%"
    },
    "comments comments-list": {
        "width": "100%",
        "marginBottom": 50
    },
    "comments comments-list h3medium": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "lineHeight": 1.5,
        "fontWeight": "700",
        "fontSize": 17,
        "color": "#333",
        "textTransform": "uppercase"
    },
    "comments comments-list ulcomments": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "comments comments-list ulcomments comment": {
        "width": "100%"
    },
    "comments comments-list ulcomments comment > div": {
        "marginBottom": 30
    },
    "comments comments-list ulcomments comment comment-gravatar": {
        "width": "100%"
    },
    "comments comments-list ulcomments comment comment-gravatar img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "comments comments-list ulcomments comment url": {
        "color": "rgb(229, 0, 126)"
    },
    "comments comments-list ulcomments comment comment-entry p": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "comments comments-list ulcomments comment comment-reply-link": {
        "color": "rgb(229, 0, 126)"
    },
    "comments comments-list ulcomments comment ulchildren": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "listStyleType": "none"
    },
    "comments respond": {
        "width": "100%"
    },
    "comments respond reply-title": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "lineHeight": 1.5,
        "fontWeight": "700",
        "fontSize": 17,
        "color": "#333",
        "textTransform": "uppercase"
    },
    "comments respond comment-form": {
        "width": "100%"
    },
    "comments respond comment-form comment-notes": {
        "display": "none"
    },
    "comments respond comment-form input-full": {
        "width": "100%",
        "height": 37,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "border": "1px solid #d7d7d7",
        "outline": 0,
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "400",
        "color": "#888"
    },
    "comments respond comment-form textarea": {
        "width": "100%",
        "height": 125,
        "marginBottom": 30,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #d7d7d7",
        "outline": 0,
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "400",
        "color": "#888",
        "resize": "none",
        "display": "block"
    },
    "comments respond comment-form input-submit": {
        "width": "auto",
        "height": 36,
        "backgroundColor": "rgb(229, 0, 126)",
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "display": "inline-block",
        "color": "#fff",
        "border": "1px solid #d7d7d7",
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "700",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "input[type=submit]": {
        "width": "auto",
        "height": 36,
        "backgroundColor": "rgb(229, 0, 126)",
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "display": "inline-block",
        "color": "#fff",
        "border": "1px solid #d7d7d7",
        "fontFamily": "\"Source Sans Pro\", sans-serif",
        "fontWeight": "700",
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "OTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "comments respond comment-form input-submit:hover": {
        "opacity": 0.9
    },
    "gallerygallery-columns-4 gallery-item:nth-child(4n+1)": {
        "clear": "left"
    },
    "gallerygallery-columns-3 gallery-item:nth-child(3n+1)": {
        "clear": "left"
    },
    "gallery:after": {
        "content": "",
        "display": "block",
        "clear": "both"
    },
    "inline-columns": {
        "textAlign": "center"
    },
    "inline-columns > div": {
        "display": "inline-block",
        "float": "none"
    },
    "artisans": {
        "backgroundColor": "#f6f6f6"
    },
    "avantages": {
        "backgroundColor": "#f6f6f6"
    },
    "tarif": {
        "width": "100%",
        "paddingTop": 55,
        "paddingRight": 0,
        "paddingBottom": 55,
        "paddingLeft": 0,
        "textAlign": "center",
        "position": "relative",
        "backgroundAttachment": "fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    },
    "tarif number": {
        "width": "100%",
        "display": "block",
        "marginBottom": 10,
        "lineHeight": 0.9,
        "fontWeight": "900",
        "fontSize": 50,
        "color": "#fff"
    },
    "tarif tarif-overlay": {
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.5)",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "tarif col-sm-4": {
        "borderRight": "1px solid #fff"
    },
    "tarif col-sm-4:last-child": {
        "borderRight": "none"
    },
    "tarif description": {
        "width": "100%",
        "lineHeight": 2.25,
        "display": "block",
        "fontSize": 20,
        "color": "#fff"
    },
    "abonnement item fa": {
        "marginRight": 13,
        "marginBottom": 10,
        "color": "rgb(241, 4, 199)",
        "fontSize": 25
    },
    "avantages item fa": {
        "marginRight": 13,
        "marginBottom": 10,
        "color": "rgb(241, 4, 199)",
        "fontSize": 25
    },
    "le-concept item fa": {
        "marginRight": 13,
        "marginBottom": 10,
        "color": "rgb(241, 4, 199)",
        "fontSize": 25
    },
    "le-concept description": {
        "marginBottom": 20,
        "textAlign": "center"
    }
});