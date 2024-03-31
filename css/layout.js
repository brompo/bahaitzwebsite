import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "section-head h2": {
        "font": "30px/42px montserrat-bold, sans-serif"
    },
    "desc": {
        "font": "14px/24px opensans-regular, sans-serif"
    },
    "intro": {
        "font": "20px/36px opensans-light, sans-serif",
        "color": "#565658",
        "background": "#111 url(../images/intro-bg.jpg) no-repeat center",
        "overflow": "hidden",
        "marginTop": 55
    },
    "first": {
        "clear": "left"
    },
    "m-first": {
        "clear": "none"
    },
    "flexslider a:active": {
        "outline": "none"
    },
    "flexslider a:focus": {
        "outline": "none"
    },
    "slides": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "maxHeight": 660,
        "overflow": "hidden"
    },
    "flex-control-nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "flex-direction-nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "slides li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "flexslider": {
        "position": "relative",
        "zoom": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "flexslider slides": {
        "zoom": 1
    },
    "flexslider slides > li": {
        "position": "relative",
        "display": "none",
        "WebkitBackfaceVisibility": "hidden"
    },
    "flex-container": {
        "zoom": 1,
        "position": "relative"
    },
    "slides:before": {
        "content": " ",
        "display": "table"
    },
    "slides:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "header": {
        "height": 54,
        "width": "100%",
        "zIndex": 99999,
        "background": "url(../images/k-opacity-70.png)",
        "position": "fixed",
        "top": 0,
        "left": 0
    },
    "headerstatic": {
        "position": "static"
    },
    "header logo": {
        "position": "relative",
        "height": 54,
        "width": 150,
        "float": "left"
    },
    "header logo a": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 18,
        "position": "absolute",
        "left": 12,
        "top": 16
    },
    "nav-wrap ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "outline": "none"
    },
    "nav-wrap li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "outline": "none"
    },
    "nav-wrap a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "outline": "none"
    },
    "nav-wrap": {
        "position": "relative",
        "font": "13px opensans-regular, sans-serif",
        "float": "left"
    },
    "nav-wrap > a": {
        "display": "none"
    },
    "ulnav": {
        "minHeight": 54,
        "width": "auto",
        "textAlign": "left"
    },
    "ulnav li": {
        "position": "relative",
        "listStyle": "none",
        "height": 54,
        "display": "inline-block"
    },
    "ulnav > liactive a": {
        "background": "#8E673E",
        "color": "#fff !important"
    },
    "ulnav li a": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 14,
        "paddingBottom": 0,
        "paddingLeft": 14,
        "lineHeight": 54,
        "textDecoration": "none",
        "textAlign": "left",
        "color": "#fff",
        "WebkitTransition": "color .2s ease-in-out",
        "MozTransition": "color .2s ease-in-out",
        "OTransition": "color .2s ease-in-out",
        "MsTransition": "color .2s ease-in-out",
        "transition": "color .2s ease-in-out"
    },
    "ulnav li a:active": {
        "backgroundColor": "transparent !important"
    },
    "ulnav li:hover > a": {
        "color": "#11ABB0"
    },
    "ulnav liactive a": {
        "color": "#11ABB0"
    },
    "slider-text": {
        "color": "#737E8C",
        "textAlign": "center",
        "width": "85%",
        "marginTop": 156,
        "marginRight": "auto",
        "marginBottom": 66,
        "marginLeft": "auto"
    },
    "slider-text h2": {
        "font": "56px/78px montserrat-regular, Sans-serif",
        "color": "#fff",
        "textShadow": "0px 1px 5px rgba(50, 50, 50, .5)",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "slider-text h2 span": {
        "color": "#11ABB0"
    },
    "slider-text a": {
        "color": "#11ABB0"
    },
    "slider-text p": {
        "font": "17px/36px opensans-light, sans-serif",
        "textShadow": "0px 1px 2px rgba(0, 0, 0, .3)",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 18,
        "marginRight": "10%",
        "marginBottom": 0,
        "marginLeft": "10%"
    },
    "flex-direction-nav a": {
        "display": "block",
        "width": 40,
        "height": 66,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#2D3339",
        "cursor": "pointer",
        "zIndex": 99999,
        "opacity": 0,
        "position": "absolute",
        "top": "50%",
        "font": "0/0 a",
        "textShadow": "none",
        "color": "transparent",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "flex-direction-nav a:hover": {
        "backgroundColor": "#11ABB0"
    },
    "flex-direction-nav flex-next": {
        "right": 0,
        "background": "#2D3339 url(../images/direction-nav-right.png) no-repeat 53% 50%",
        "position": "absolute"
    },
    "flex-direction-nav flex-prev": {
        "left": 0,
        "background": "#2D3339 url(../images/direction-nav-left.png) no-repeat 47% 50%",
        "position": "absolute"
    },
    "flexslider:hover flex-next": {
        "opacity": 1
    },
    "flexslider:hover flex-prev": {
        "opacity": 1
    },
    "flex-direction-nav flex-disabled": {
        "opacity": ".3 !important",
        "filter": "alpha(opacity=30)",
        "cursor": "default"
    },
    "services": {
        "background": "#1b1e21 url(../images/patterns/servicesbg.png)",
        "paddingTop": 156,
        "paddingBottom": 120,
        "color": "#4E565F"
    },
    "services a": {
        "color": "#C4C4C4"
    },
    "services a:visited": {
        "color": "#C4C4C4"
    },
    "services a:hover": {
        "color": "#11ABB0"
    },
    "services a:focus": {
        "color": "#11ABB0"
    },
    "services section-head h2": {
        "color": "#11ABB0"
    },
    "services section-head pdesc": {
        "color": "#57606B"
    },
    "services section-head intro": {
        "color": "#57606B"
    },
    "services-wrapper": {
        "marginTop": 42
    },
    "services-wrapper col": {
        "width": "33.33333%",
        "marginBottom": 30
    },
    "services-wrapper h2": {
        "font": "16px/24px montserrat-bold, sans-serif",
        "letterSpacing": 1.5,
        "textTransform": "uppercase",
        "color": "#C4C4C4",
        "marginBottom": 18
    },
    "services-wrapper p": {
        "fontSize": 16,
        "lineHeight": 30
    },
    "services services-wrapper i": {
        "marginRight": 10
    },
    "portfolio": {
        "background": "#f5f5f5 url(../images/patterns/grey.png)",
        "paddingTop": 50,
        "paddingBottom": 50
    },
    "portfolio section-head h2": {
        "color": "#0f9095"
    },
    "portfolio section-head pdesc": {
        "color": "#999999"
    },
    "portfolio section-head intro": {
        "color": "#565658"
    },
    "portfolio-wrapper": {
        "marginTop": 36
    },
    "portfolio-wrapper col": {
        "width": "25%",
        "marginBottom": 36
    },
    "portfolio-item item-wrap": {
        "background": "#fff",
        "overflow": "hidden",
        "WebkitBoxShadow": "0px 1px 1px rgba(50, 50, 50, 0.1)",
        "MozBoxShadow": "0px 1px 1px rgba(50, 50, 50, 0.1)",
        "boxShadow": "0px 1px 1px rgba(50, 50, 50, 0.1)",
        "WebkitTransition": "all 0.3s ease-in-out",
        "MozTransition": "all 0.3s ease-in-out",
        "OTransition": "all 0.3s ease-in-out",
        "MsTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "portfolio-item item-wrap a": {
        "display": "block"
    },
    "portfolio-item portfolio-item-meta": {
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0
    },
    "portfolio-item portfolio-item-meta h5 a": {
        "font": "13px/24px montserrat-bold, sans-serif",
        "color": "#0f9095",
        "marginLeft": "7%"
    },
    "portfolio-item:hover item-wrap": {
        "backgroundColor": "#0f9095"
    },
    "portfolio-item:hover h5 a": {
        "color": "#fff !important"
    },
    "reveal-modal-bg": {
        "position": "fixed",
        "height": "100%",
        "width": "100%",
        "background": "rgba(0,0,0,.8)",
        "zIndex": 100,
        "display": "none",
        "top": 0,
        "left": 0
    },
    "reveal-modal": {
        "visibility": "hidden",
        "top": 100,
        "left": "50%",
        "marginLeft": -300,
        "width": 600,
        "maxWidth": 600,
        "background": "#fff",
        "position": "absolute",
        "zIndex": 101,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "MozBoxShadow": "0 0 10px rgba(0,0,0,.4)",
        "WebkitBoxShadow": "0 0 10px rgba(0,0,0,.4)",
        "BoxShadow": "0 0 10px rgba(0,0,0,.4)"
    },
    "reveal-modal description-box": {
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36
    },
    "reveal-modal description-box h4": {
        "font": "15px/24px montserrat-bold, sans-serif",
        "marginBottom": 18,
        "color": "#111"
    },
    "reveal-modal description-box p": {
        "font": "13px/24px opensans-regular, sans-serif",
        "color": "#A1A1A1",
        "marginBottom": 18
    },
    "reveal-modal description-box categories": {
        "font": "11px/24px opensans-regular, sans-serif",
        "color": "#A1A1A1",
        "textTransform": "uppercase",
        "letterSpacing": 1,
        "display": "block"
    },
    "reveal-modal description-box categories i": {
        "marginRight": 8
    },
    "reveal-modal link-box": {
        "paddingTop": 18,
        "paddingRight": 36,
        "paddingBottom": 18,
        "paddingLeft": 36,
        "background": "#111",
        "textAlign": "left"
    },
    "reveal-modal link-box a": {
        "color": "#fff",
        "font": "11px/24px opensans-regular, sans-serif",
        "textTransform": "uppercase",
        "letterSpacing": 3,
        "cursor": "pointer"
    },
    "reveal-modal a:hover": {
        "color": "#00CCCC"
    },
    "reveal-modal aclose-reveal-modal": {
        "marginLeft": 28
    },
    "journal": {
        "background": "#f5f5f5 url(../images/patterns/grey.png)",
        "paddingTop": 156,
        "paddingBottom": 120,
        "color": "#7fe6ed"
    },
    "journal a": {
        "color": "#b7b0ab"
    },
    "journal a:visited": {
        "color": "#b7b0ab"
    },
    "journal a:hover": {
        "color": "#005757"
    },
    "journal a:focus": {
        "color": "#005757"
    },
    "journal section-head h2": {
        "color": "#A3A3A4"
    },
    "journal section-head pdesc": {
        "color": "#C2F1F5"
    },
    "journal section-head intro": {
        "color": "#C2F1F5"
    },
    "journal blog-entries": {
        "marginTop": 54
    },
    "journal entry": {
        "marginBottom": 12
    },
    "journal blog-entries entry-header": {
        "position": "relative",
        "marginBottom": 6
    },
    "journal entry-header entry-title": {
        "paddingLeft": 38
    },
    "journal entry-header h3": {
        "font": "30px/42px montserrat-regular, sans-serif"
    },
    "journal entry-header author-image img": {
        "position": "absolute",
        "top": 12,
        "left": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 60,
        "height": 60,
        "MozBorderRadius": "100% 100% 100% 100%",
        "WebkitBorderRadius": "100% 100% 100% 100%",
        "KhtmlBorderRadius": "100% 100% 100% 100%",
        "borderRadius": "100% 100% 100% 100%"
    },
    "journal entry post-meta": {
        "font": "14px/24px opensans-regular, sans-serif",
        "color": "#A3A3A4",
        "marginTop": 12,
        "marginBottom": 0
    },
    "journal entry post-meta time": {
        "display": "block",
        "fontFamily": "montserrat-bold, sans-serif",
        "textTransform": "uppercase",
        "letterSpacing": 1
    },
    "journal entry post-meta dauthor": {
        "display": "block"
    },
    "journal entry post-content": {
        "paddingLeft": 38
    },
    "journal entry post-content p": {
        "font": "16px/30px opensans-regular, sans-serif"
    },
    "journal entry post-content amore-link": {
        "font": "15px/30px opensans-bold, sans-serif",
        "marginLeft": 3
    },
    "journal entry post-content amore-link i": {
        "marginLeft": 10,
        "fontSize": 14
    },
    "about": {
        "background": "#fff url(../images/patterns/grey.png)",
        "paddingTop": 0,
        "paddingBottom": 50,
        "textAlign": "center",
        "fontStyle": "italic",
        "color": "#A3A3A3"
    },
    "about section-head h2": {
        "color": "#0f9095"
    },
    "about h4": {
        "color": "#0f9095"
    },
    "about h5": {
        "color": "#0f9095"
    },
    "about section-head pdesc": {
        "color": "#999999"
    },
    "about section-head intro": {
        "color": "#A3A3A3"
    },
    "about h3": {
        "font": "24px/30px montserrat-regular, sans-serif",
        "marginTop": 24,
        "marginBottom": 24,
        "color": "#6E6E6E"
    },
    "about process-wrap col": {
        "width": "25%"
    },
    "about team-wrap": {
        "marginBottom": 24
    },
    "about team-wrap col": {
        "marginBottom": 24
    },
    "about process-wrap h4": {
        "font": "15px/24px montserrat-bold, sans-serif",
        "letterSpacing": 1,
        "textTransform": "uppercase"
    },
    "about team-wrap h5": {
        "font": "14px/24px montserrat-bold, sans-serif"
    },
    "about team-wrap span": {
        "position": "relative",
        "top": -6,
        "fontSize": 13,
        "lineHeight": 18,
        "color": "#969696"
    },
    "about team-wrap member-social": {
        "fontSize": 14,
        "fontWeight": "normal",
        "lineHeight": 18,
        "color": "#969696",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "about team-wrap member-social li": {
        "display": "inline-block",
        "marginRight": 15
    },
    "about team-wrap member-social li a": {
        "color": "#8C8C8C"
    },
    "about team-wrap member-social li a:hover": {
        "color": "#0f9095"
    },
    "testimonials": {
        "marginTop": 30
    },
    "testimonials client-author": {
        "position": "relative"
    },
    "testimonials client-author img": {
        "height": 66,
        "width": 66,
        "MozBorderRadius": "100% 100% 100% 100%",
        "WebkitBorderRadius": "100% 100% 100% 100%",
        "KhtmlBorderRadius": "100% 100% 100% 100%",
        "borderRadius": "100% 100% 100% 100%"
    },
    "testimonials client-author name": {
        "font": "14px/24px montserrat-bold, sans-serif",
        "color": "#0f9095",
        "position": "absolute",
        "top": 6,
        "left": 80
    },
    "testimonials client-author span": {
        "fontFamily": "opensans-regular, sans-serif",
        "lineHeight": 18,
        "fontSize": 13,
        "color": "#969696",
        "display": "block"
    },
    "testimonials client-cite": {
        "font": "18px/36px opensans-light, sans-serif"
    },
    "call-to-action": {
        "backgroundColor": "#0f9095",
        "paddingTop": 60,
        "paddingBottom": 72,
        "color": "#7fe6ed"
    },
    "call-to-action action": {
        "marginTop": 12
    },
    "call-to-action h2": {
        "font": "34px/42px montserrat-bold, sans-serif",
        "color": "#fff",
        "letterSpacing": -1,
        "marginBottom": 3
    },
    "call-to-action h2 a": {
        "color": "inherit"
    },
    "call-to-action p": {
        "fontSize": 17
    },
    "call-to-action button": {
        "background": "#036569"
    },
    "call-to-action button:hover": {
        "background": "#fff",
        "color": "#0F9095"
    },
    "call-to-action button:active": {
        "background": "#fff",
        "color": "#0F9095"
    },
    "call-to-action p span": {
        "fontFamily": "opensans-semibold, sans-serif",
        "color": "#fff"
    },
    "map": {
        "display": "block",
        "height": 486,
        "width": "100%",
        "backgroundColor": "#F6F4EF"
    },
    "map img": {
        "maxWidth": "inherit !important"
    },
    "map map-error": {
        "textAlign": "center",
        "paddingTop": 48,
        "color": "#C0B491",
        "fontSize": 14
    },
    "contact": {
        "backgroundColor": "#25292D",
        "paddingTop": 50,
        "color": "#707B89"
    },
    "contact a": {
        "color": "#C4C4C4"
    },
    "contact a:visited": {
        "color": "#C4C4C4"
    },
    "contact a:hover": {
        "color": "#11ABB0"
    },
    "contact a:focus": {
        "color": "#11ABB0"
    },
    "contact section-head": {
        "marginBottom": 42
    },
    "contact section-head h2": {
        "color": "#11ABB0"
    },
    "contact section-head pdesc": {
        "color": "#57606B"
    },
    "contact intro": {
        "color": "#57606B"
    },
    "contact p": {},
    "contact form": {
        "marginBottom": 30
    },
    "contact label": {
        "font": "15px/24px opensans-semibold, sans-serif",
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 12,
        "marginLeft": 0,
        "color": "#fff",
        "display": "inline-block",
        "float": "left",
        "width": "22%"
    },
    "contact input": {
        "paddingTop": 18,
        "paddingRight": 20,
        "paddingBottom": 18,
        "paddingLeft": 20,
        "color": "#eee",
        "background": "#3F464B",
        "marginBottom": 42,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "66%"
    },
    "contact textarea": {
        "paddingTop": 18,
        "paddingRight": 20,
        "paddingBottom": 18,
        "paddingLeft": 20,
        "color": "#eee",
        "background": "#3F464B",
        "marginBottom": 42,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "66%"
    },
    "contact select": {
        "paddingTop": 18,
        "paddingRight": 20,
        "paddingBottom": 18,
        "paddingLeft": 20,
        "color": "#eee",
        "background": "#3F464B",
        "marginBottom": 42,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "66%"
    },
    "contact input:focus": {
        "color": "#fff",
        "backgroundColor": "#11ABB0"
    },
    "contact textarea:focus": {
        "color": "#fff",
        "backgroundColor": "#11ABB0"
    },
    "contact select:focus": {
        "color": "#fff",
        "backgroundColor": "#11ABB0"
    },
    "contact buttonsubmit": {
        "font": "18px/30px montserrat-bold, sans-serif",
        "textTransform": "uppercase",
        "letterSpacing": 3,
        "color": "#fff",
        "background": "#11ABB0",
        "paddingTop": 18,
        "paddingRight": 30,
        "paddingBottom": 18,
        "paddingLeft": 30,
        "border": "none",
        "cursor": "pointer",
        "height": "auto",
        "display": "inline-block",
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "KhtmlBorderRadius": 3,
        "borderRadius": 3,
        "marginLeft": "22%"
    },
    "contact buttonsubmit:hover": {
        "color": "#25292D",
        "background": "#fff"
    },
    "contact spanrequired": {
        "color": "#11ABB0",
        "fontSize": 13
    },
    "message-warning": {
        "display": "none",
        "background": "#151719",
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "marginBottom": 36,
        "width": "88%",
        "color": "#D72828"
    },
    "message-success": {
        "display": "none",
        "background": "#151719",
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "marginBottom": 36,
        "width": "88%",
        "color": "#11ABB0"
    },
    "message-warning i": {
        "marginRight": 10
    },
    "message-success i": {
        "marginRight": 10
    },
    "image-loader": {
        "display": "none",
        "position": "relative",
        "left": 18,
        "top": 12
    },
    "contact aside h3": {
        "font": "21px/30px montserrat-bold, sans-serif",
        "marginBottom": 18,
        "color": "#11ABB0"
    },
    "post": {
        "background": "#f5f5f5 url(../images/patterns/grey.png)",
        "paddingBottom": 90
    },
    "post entry-header": {
        "position": "relative",
        "width": "100%"
    },
    "post entry-header h1": {
        "font": "45px/60px montserrat-regular, sans-serif",
        "color": "#313131",
        "width": "83.33333%",
        "paddingRight": "12%",
        "float": "right"
    },
    "post post-meta": {
        "float": "left",
        "textAlign": "right",
        "width": "16.66667%",
        "color": "#bec0c1",
        "paddingRight": 36,
        "font": "14px/24px opensans-regular, sans-serif",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 6,
        "marginLeft": 0
    },
    "post post-meta a": {
        "color": "#B9BBBC"
    },
    "post post-meta a:visited": {
        "color": "#B9BBBC"
    },
    "post post-meta a:hover": {
        "color": "#11ABB0"
    },
    "post post-meta a:focus": {
        "color": "#11ABB0"
    },
    "post post-meta date": {
        "marginBottom": 18,
        "display": "block"
    },
    "post post-meta date:before": {
        "display": "block",
        "font": "14px/24px opensans-bold, sans-serif",
        "color": "#313131",
        "textAlign": "right",
        "content": "Published"
    },
    "post post-meta categories:before": {
        "display": "block",
        "font": "14px/24px opensans-bold, sans-serif",
        "color": "#313131",
        "textAlign": "right",
        "content": "Categories"
    },
    "post post-meta categories a": {
        "display": "block"
    },
    "post post-meta categories sep": {
        "display": "none"
    },
    "post post-image": {
        "marginTop": 24,
        "marginRight": 0,
        "marginBottom": 36,
        "marginLeft": 0,
        "width": "100%"
    },
    "post post-content": {
        "marginBottom": 24
    },
    "post post-content tags": {
        "marginTop": 18,
        "fontFamily": "opensans-light, sans-serif"
    },
    "post post-content tags a": {
        "fontFamily": "opensans-bold, sans-serif"
    },
    "post bio": {
        "marginTop": 48,
        "paddingTop": 29,
        "borderTop": "1px solid #E0E0E0"
    },
    "post bio gravatar": {
        "width": 72,
        "float": "left",
        "height": 72
    },
    "post bio gravatar img": {
        "marginTop": 12,
        "MozBorderRadius": "100% 100% 100% 100%",
        "WebkitBorderRadius": "100% 100% 100% 100%",
        "KhtmlBorderRadius": "100% 100% 100% 100%",
        "borderRadius": "100% 100% 100% 100%"
    },
    "post bio about": {
        "width": "83.33333%",
        "float": "right"
    },
    "post bio about h5": {
        "font": "16px/30px opensans-bold, sans-serif",
        "marginBottom": 6
    },
    "post post-nav": {
        "marginTop": 24,
        "marginRight": 0,
        "marginBottom": 24,
        "marginLeft": 0,
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTop": "1px solid #E0E0E0",
        "font": "16px/30px opensans-light, sans-serif"
    },
    "post post-nav li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "49%",
        "lineHeight": 30
    },
    "post post-nav li a": {
        "color": "#a3a3a3"
    },
    "post post-nav li a:hover": {
        "color": "#333"
    },
    "post post-nav li strong": {
        "font": "15px/30px opensans-bold, sans-serif",
        "textTransform": "uppercase",
        "color": "#11ABB0",
        "letterSpacing": 1,
        "display": "block"
    },
    "post post-nav linext": {
        "float": "right",
        "textAlign": "right"
    },
    "post post-nav liprev": {
        "float": "left",
        "textAlign": "left"
    },
    "comments": {
        "background": "#E6E8EB",
        "paddingBottom": 90,
        "paddingTop": 101,
        "borderTop": "1px solid #E0E3E6"
    },
    "comments h3": {
        "font": "20px/30px opensans-bold, sans-serif",
        "marginBottom": 6,
        "marginLeft": "16.66667%",
        "color": "#313131"
    },
    "olcommentlist": {
        "borderTop": "1px solid #D5D9DC",
        "marginTop": 29,
        "marginRight": 0,
        "marginBottom": 54,
        "marginLeft": "16.66667%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "75%"
    },
    "commentlist > li": {
        "position": "relative",
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 18,
        "paddingRight": 0,
        "paddingBottom": 17,
        "paddingLeft": 0,
        "borderBottom": "1px solid #D5D9DC"
    },
    "commentlist  li avatar": {
        "position": "absolute",
        "left": -40,
        "display": "block",
        "height": 50,
        "width": 50
    },
    "commentlist li avatar img": {
        "marginTop": 6,
        "height": 50,
        "width": 50,
        "MozBorderRadius": "100% 100% 100% 100%",
        "WebkitBorderRadius": "100% 100% 100% 100%",
        "KhtmlBorderRadius": "100% 100% 100% 100%",
        "borderRadius": "100% 100% 100% 100%"
    },
    "commentlist li comment-info cite": {
        "font": "15px/30px opensans-bold, sans-serif",
        "color": "#454545"
    },
    "commentlist li comment-info comment-meta": {
        "fontSize": 12,
        "lineHeight": 24,
        "display": "block"
    },
    "commentlist li comment-info comment-meta reply": {
        "fontFamily": "opensans-semibold, sans-serif"
    },
    "commentlist li comment-info comment-meta sep": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "color": "#AEB6B7"
    },
    "commentlist li comment-text": {
        "clear": "both",
        "marginTop": 24,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 24
    },
    "commentlist li ulchildren": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 18,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "commentlist li ulchildren li": {
        "paddingLeft": "5%",
        "paddingTop": 17,
        "borderTop": "1px solid #D5D9DC"
    },
    "comments form": {
        "marginTop": 30,
        "marginLeft": "16.66667%"
    },
    "comments form label": {
        "font": "14px/24px opensans-bold, sans-serif",
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 12,
        "marginLeft": 0,
        "color": "#3d4145"
    },
    "comments form input": {
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18,
        "color": "#3d4145",
        "background": "#CFD4D8",
        "marginBottom": 24,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "60%"
    },
    "comments form textarea": {
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18,
        "color": "#3d4145",
        "background": "#CFD4D8",
        "marginBottom": 24,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "60%"
    },
    "comments form select": {
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18,
        "color": "#3d4145",
        "background": "#CFD4D8",
        "marginBottom": 24,
        "border": 0,
        "outline": "none",
        "fontSize": 15,
        "lineHeight": 24,
        "width": "60%"
    },
    "comments form input:focus": {
        "color": "#fff",
        "backgroundColor": "#3d4145"
    },
    "comments form textarea:focus": {
        "color": "#fff",
        "backgroundColor": "#3d4145"
    },
    "comments form select:focus": {
        "color": "#fff",
        "backgroundColor": "#3d4145"
    },
    "comments form buttonsubmit": {
        "font": "18px/30px montserrat-bold, sans-serif",
        "textTransform": "uppercase",
        "letterSpacing": 3,
        "color": "#fff",
        "background": "#11ABB0",
        "paddingTop": 18,
        "paddingRight": 24,
        "paddingBottom": 18,
        "paddingLeft": 24,
        "border": "none",
        "cursor": "pointer",
        "height": "auto",
        "display": "block",
        "marginTop": 36,
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "KhtmlBorderRadius": 3,
        "borderRadius": 3
    },
    "comments form buttonsubmit:hover": {
        "background": "#3d4145"
    },
    "comments form spanrequired": {
        "color": "#11ABB0",
        "fontSize": 13
    },
    "journal-bottom-nav": {
        "marginTop": 36,
        "marginLeft": "16.66667%",
        "paddingTop": 5,
        "borderTop": "1px solid #D1D6DB"
    },
    "bottom-nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "font": "14px/36px opensans-bold, sans-serif"
    },
    "bottom-nav li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 24
    },
    "bottom-nav li i": {
        "marginLeft": 5
    },
    "bottom-nav li a:hover": {
        "color": "#3d4145"
    },
    "bottom-nav sep": {
        "font": "16px/36px opensans-light, sans-serif",
        "marginTop": 0,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 6,
        "color": "#C0C7CE"
    },
    "blog-entries": {
        "background": "#f5f5f5 url(../images/patterns/grey.png)",
        "paddingBottom": 48
    },
    "blog-entries post": {
        "paddingBottom": 53,
        "borderBottom": "1px solid #E0E0E0"
    },
    "blog-entries post entry-header h1 a": {
        "color": "#313131"
    },
    "blog-entries post entry-header h1 a:visited": {
        "color": "#313131"
    },
    "blog-entries post entry-header h1 a:hover": {
        "color": "#11ABB0"
    },
    "blog-entries post entry-header h1 a:focus": {
        "color": "#11ABB0"
    },
    "blog-entries post post-content p": {
        "font": "20px/36px opensans-light, sans-serif"
    },
    "blog-entries post-content amore-link": {
        "font": "14px/30px opensans-bold, sans-serif",
        "marginTop": 18,
        "paddingTop": 6,
        "paddingRight": 18,
        "paddingBottom": 6,
        "paddingLeft": 18,
        "background": "#838A91",
        "color": "#fff",
        "display": "inline-block",
        "WebkitTransition": "all 200ms ease-in-out",
        "MozTransition": "all 200ms ease-in-out",
        "OTransition": "all 200ms ease-in-out",
        "MsTransition": "all 200ms ease-in-out",
        "transition": "all 200ms ease-in-out",
        "MozBorderRadius": 2,
        "WebkitBorderRadius": 2,
        "KhtmlBorderRadius": 2,
        "borderRadius": 2
    },
    "blog-entries post-content amore-link:hover": {
        "background": "#11ABB0"
    },
    "blog-entries post-content amore-link i": {
        "marginLeft": 10
    },
    "pagination": {
        "marginTop": 36,
        "marginRight": "auto",
        "marginBottom": 12,
        "marginLeft": "auto"
    },
    "pagination ul li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bottom-block": {
        "background": "#E6E8EB",
        "paddingTop": 24,
        "paddingBottom": 30,
        "borderTop": "1px solid #E0E0E0"
    },
    "bottom-block blog-categories": {
        "font": "13px/30px opensans-semibold, sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bottom-block blog-categories li": {
        "display": "inline",
        "marginRight": 15
    },
    "bottom-block blog-categories licurrent a": {
        "color": "#11ABB0"
    },
    "bottom-block blog-categories a": {
        "color": "#A0A6AB"
    },
    "bottom-block blog-categories a:hover": {
        "color": "#5B6167"
    },
    "bottom-block back-to-top": {
        "textAlign": "right"
    },
    "bottom-block back-to-top a i": {
        "marginLeft": 6
    },
    "bottom-block back-to-top a": {
        "font": "14px/30px opensans-bold, sans-serif",
        "color": "#11ABB0"
    },
    "footer": {
        "paddingTop": 30,
        "paddingBottom": 30,
        "color": "#303030",
        "background": "#25292D",
        "fontSize": 14
    },
    "footer a": {
        "color": "#0B686B"
    },
    "footer a:visited": {
        "color": "#0B686B"
    },
    "footer a:hover": {
        "color": "#fff"
    },
    "footer a:focus": {
        "color": "#fff"
    },
    "footer copyright": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer copyright li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 24
    },
    "ie footer copyright li": {
        "display": "inline"
    },
    "footer copyright li:before": {
        "content": "|",
        "paddingLeft": 10,
        "paddingRight": 10,
        "color": "#095153"
    },
    "footer copyright  li:first-child:before": {
        "display": "none"
    },
    "footer social-links": {
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 18,
        "float": "right"
    },
    "footer social-links li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 24,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer social-links li:first-child": {
        "marginLeft": 0
    },
    "quote": {
        "fontStyle": "italic !important"
    },
    "manifestation": {
        "fontWeight": "bold",
        "fontSize": 18,
        "fontStyle": "normal"
    },
    "sub-entry-title": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    }
});