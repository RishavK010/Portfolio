(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{40651:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var o,i=n(85893),r=n(92809),a=n(67294),d=n(14494),c=n(53624),l=n(62286),s=n(87213),u=n(809),p=n.n(u),_=n(30266),v=n(80366),y=n(39803),x=n(16343),m=n(81993),f=n(1338),b=n.n(f),g=n(10805),h=n(61049);function k(e){var t=e.currentCityInput,r=e.setCityInput,d=e.clearPincode,c=e.setLocation,l=e.pincode,s=(0,a.useRef)(null),u=(0,a.useRef)(!0),f=(0,a.useState)(!1),k=f[0],P=f[1],w=(0,a.useState)(!1),I=w[0],C=w[1],E=(0,a.useState)(!1),S=E[0],j=E[1];(0,a.useEffect)((function(){return n.e(269).then(n.t.bind(n,50269,23)),function(){var e=document.querySelector(".pac-container");null===e||void 0===e||e.parentNode.removeChild(e)}}),[]);function N(){return(N=(0,_.Z)(p().mark((function e(t){var n,i,r,a,d,l,s,u,_,v,y,m,f;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.getPlace(),r=i.geometry&&i.geometry.location.lat(),a=i.geometry&&i.geometry.location.lng(),d=i.formatted_address,t(d),l=!1,s="",u=null===i||void 0===i||null===(n=i.address_components)||void 0===n?void 0:n.find((function(e){return e.types.includes("postal_code")})),_="",e.next=11,(0,g.$l)();case 11:if(v=e.sent,!(y=u&&u.long_name)){e.next=18;break}_=y,v[y]&&(l=!0,s=y,_=v[y]),e.next=23;break;case 18:return e.next=20,(0,x.CP)(r,a);case 20:m=e.sent,_=m.pincode,v[m.pincode]&&(l=!0,_=v[m.pincode],s=m.pincode);case 23:(f=d&&d.match(/\d{6,6}/)&&d.match(/\d{6,6}/).length>0&&d.match(/\d{6,6}/)[0])&&Number(f)!==Number(_)&&(l=!0,s=f),c(_,_,d,l,s),_&&(P(!0),C(!1));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){(o=new window.google.maps.places.Autocomplete(t.current,{types:["geocode"],componentRestrictions:{country:"in"}})).setFields(["address_components","geometry","type","formatted_address"]),o.addListener("place_changed",(function(){return function(e){return N.apply(this,arguments)}(e)})),function(e){var t=e.addEventListener;e.addEventListener=function(n,o){if("keydown"===n){var i=o;o=function(t){var n=document.getElementsByClassName("pac-item-selected").length;if("Enter"!==t.key||t.target.value){if("Enter"===t.key&&!n){var o=new KeyboardEvent("keydown",{key:"ArrowDown",code:"ArrowDown",keyCode:40});i.apply(e,[o])}}else C(!0);i.apply(e,[t])}}t.apply(e,[n,o])}}(t.current)}return(0,a.useEffect)((function(){var e=document.getElementById("filled-full-width");e!==document.activeElement&&""!==e.value&&document.getElementsByClassName("pac-container").length&&document.getElementsByClassName("pac-item").length&&(document.getElementsByClassName("pac-container")[0].style.display="block")}),[S]),(0,a.useEffect)((function(){if(u.current){u.current=!1;var e=m.eh[Math.floor(Math.random()*m.eh.length)];!function(e,t){var n=document.createElement("script");n.type="text/javascript",window.google&&window.google.maps&&window.google.maps.places&&window.google.maps.places.Autocomplete?t():(n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){return t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n))}("//maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&key=".concat(e),(function(){return T(r,s)}))}})),(0,a.useEffect)((function(){var e;if(t.length>1){var n=document.querySelector(".pac-container");e=setTimeout((function(){var e;!n||"none"===(null===n||void 0===n||null===(e=n.style)||void 0===e?void 0:e.display)&&!k?C(!0):C(!1)}),1e3)}else C(!1);return function(){e&&clearTimeout(e)}}),[t,k]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.Z,{id:"filled-full-width",label:"",placeholder:"* Enter Area or Locality",inputRef:s,onChange:function(e){r(e.target.value)},onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},fullWidth:!0,style:{margin:0},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",title:k?"Click on remove(X) button to change location":"Start typing and select from suggestions",className:"".concat(b()["deliver-input"]," ").concat(k?"":b().animate," ").concat(b()["small-input"]),inputProps:{className:k?b().readOnlyInput:""},value:t,disabled:k,autoFocus:!0,"data-testid":"locationInput"}),I&&(0,i.jsx)("div",{className:b()["no-area-error"],children:h.Qj.AREA_DOES_NOT_EXIST}),k&&l&&(0,i.jsx)("span",{id:"pincode-selected",className:b()["selected-pin"],children:"Pincode: ".concat(l)}),t.length>0&&k&&(0,i.jsx)("span",{role:"presentation",onClick:function(){d(),P(!1)},className:"close-icon",children:(0,i.jsx)(v.Z,{})})]})}k.defaultProps={currentCityInput:"",pincode:""};var P=k,w=n(22573),I=n(83843),C=n.n(I),E=n(8178),S=n(24066),j=n(84227),N=n(97496),T=n(70737);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t,n=e.handleBack,o=(0,a.useContext)(w.NP),r=o.updatePdpUserSelections,u=o.handlePincodeSelect,p=o.showTooltip,_=o.setShowTooltip,v=o.checkIsInternationalProduct,y=(0,a.useState)(),x=y[0],f=y[1],b=(0,a.useState)(!1),g=b[0],k=b[1],I=(0,a.useState)({pincode:"",matchedPincode:"",locality:""}),O=I[0],D=I[1],M=(0,d.I0)(),F=(0,d.v9)((function(e){return e.appConfigs})).isMobile,R=(0,d.v9)((function(e){return e.pdpContext})).selectedType,V=(0,d.v9)((function(e){return F?e.appConfigs.configData.mobile:e.appConfigs.configData.desktop})).isCdpEnabled,A=(0,d.v9)((function(e){return e.productDetail})),L=A.product,W=A.productExpiry,H=L.productId,U=L.productName,Z=L.primaryCategoryId,X=L.productPrice,Y=L.productReviewsAndRatings,G=L.isVariant,J=L.urlIdentifier,Q=L.skuCode,K="mappedPincodeMsg",q="Y"===W.isProductStockAvailable,z=(0,m.N0)(X.listPrice,X.price),$=(0,m.uR)(Z),ee={page_type:T.cleverTapCommonWords.PDP,page_name:J,product_name:U,pid:H,product_category:Z,product_price:null===X||void 0===X?void 0:X.price,is_variant_available:"Y"===G,is_egg:null!==(t=(null===R||void 0===R?void 0:R.toUpperCase())===h.W6.WITH_EGG)&&void 0!==t&&t,delivery_type:$,area:null===O||void 0===O?void 0:O.locality,strike_price:null===X||void 0===X?void 0:X.listPrice,discount_percentage:z,product_rating:null===Y||void 0===Y?void 0:Y.ratingValue,product_review_count:null===Y||void 0===Y?void 0:Y.totalReview,is_product_available:q,is_international:v(),system_pincode:null===O||void 0===O?void 0:O.pincode,sku_id:Q};return(0,a.useEffect)((function(){V&&(0,E.rV)(void 0,null,null)}),[V]),(0,i.jsx)("div",{className:C().modalBodyInner,children:(0,i.jsxs)("div",{className:C().deliverAction,children:[(0,i.jsxs)("div",{className:C().deliveryHeader,children:[(0,i.jsx)("h3",{className:C().chooseHeader,children:"Choose Your Delivery Location"}),(0,i.jsx)("span",{className:C().areaHeader,children:"Enter area or locality to get the Pincode."})]}),(0,i.jsxs)("div",{className:"deliver-section-input-container",children:[(0,i.jsx)("span",{className:"pin-icon",children:(0,i.jsx)(c.Z,{})}),(0,i.jsx)(P,{currentCityInput:x,setCityInput:f,clearPincode:function(){f(""),r({deliveryLocation:"",destlookup:"",matchedPincode:"",pinCode:"",timeSlotId:"",itemDesiredDeliveryDate:"",shippingMethodId:"",itemDesiredDeliveryDatesList:""}),k(!1)},setLocation:function(e,t,n,o,i){(0,N.default)(T.cleverTapEventsConstants.locationAreaSelected,ee),(0,N.default)(T.cleverTapEventsConstants.locationSaved,B(B({},ee),{},{area:null===O||void 0===O?void 0:O.locality,sku_id:Q})),D({pincode:e,matchedPincode:t,locality:n,isPincodeMapped:o,userTypedPincode:i}),e&&k(!0),F&&o&&(_({pincode:!0,message:"This area is served from ".concat(e," instead of ").concat(i,"."),isMapped:!0}),(0,j.Z)(K,3e3,3500))},pincode:O.pincode})]}),(0,i.jsx)(s.default,{id:"dontKnowPincodeSubmit",type:"submit",className:"form-button-primary mt40",onClick:function(){(0,N.default)(T.cleverTapEventsConstants.locationSaved,B(B({},ee),{},{area:null===O||void 0===O?void 0:O.locality,sku_id:Q})),function(){var e=O.pincode,t=O.locality,o=O.isPincodeMapped,i=O.userTypedPincode;M((0,S.Cj)(e)),u({pincode:e,location:t,event:"clicked"}),!F&&o&&_({pincode:!0,message:"This area is served from ".concat(e," instead of ").concat(i,"."),isMapped:!0}),F&&_({}),n(),(0,l.setCookie)({},"isDontKnowPincodeSelected",!0)}()},disabled:!g,testId:"continueBtn",children:"CONTINUE"}),F&&(0,i.jsx)("div",{className:C().mappedPincodeSection,id:K,children:(0,i.jsx)("div",{className:C().alternatePincodeSection,children:(0,i.jsx)("div",{className:C().alternatePincodeToast,children:(0,i.jsx)("div",{className:C().alternatePincodeMsg,children:(0,i.jsx)("span",{children:p.message})})})})})]})})}},1338:function(e){e.exports={pdpFlexContainer:"delivery-textbox_pdpFlexContainer__Z0Or_",deliveryInputs:"delivery-textbox_deliveryInputs__3NBUv",outOfStock:"delivery-textbox_outOfStock__10GTo",deliveryTextBoxPadding:"delivery-textbox_deliveryTextBoxPadding__1HE6S",deliveryTextBox:"delivery-textbox_deliveryTextBox__uk2bc",localityPicker:"delivery-textbox_localityPicker__1BbuD",animate:"delivery-textbox_animate__dJPAb",focuses:"delivery-textbox_focuses__2_MGO",readOnlyInput:"delivery-textbox_readOnlyInput__molZg",highlightError:"delivery-textbox_highlightError__1brDn",errorAnimation:"delivery-textbox_errorAnimation__1Evbf",placePin:"delivery-textbox_placePin__wnxmx",crossInput:"delivery-textbox_crossInput__2kAMc",dateSelectWrapper:"delivery-textbox_dateSelectWrapper__1mrT8",dateTimeLink:"delivery-textbox_dateTimeLink__15UXd",disabledInput:"delivery-textbox_disabledInput__2Lw5Y",disabledInputWithValue:"delivery-textbox_disabledInputWithValue__2bJb8",activeInput:"delivery-textbox_activeInput__3MWE2",filledInput:"delivery-textbox_filledInput__39FWS",arrowRight:"delivery-textbox_arrowRight__DR5sn",editIcon:"delivery-textbox_editIcon__mIUxu",dateTooltip:"delivery-textbox_dateTooltip__3JZ5G",cakeVariants:"delivery-textbox_cakeVariants__2yWHL",bothFlavourVariant:"delivery-textbox_bothFlavourVariant__3daYa",selectFlavourText:"delivery-textbox_selectFlavourText__1EFIU","desktop-view":"delivery-textbox_desktop-view__HkUm7",disableInput:"delivery-textbox_disableInput__1Yn9c",onlyFlavour:"delivery-textbox_onlyFlavour__2aB2x",onlyVariant:"delivery-textbox_onlyVariant__xf1ss",subVariantBlock:"delivery-textbox_subVariantBlock__sYuGs","cake-type":"delivery-textbox_cake-type__1RBRn","desktop-cake-type":"delivery-textbox_desktop-cake-type__VXrF5","cake-radio-opt":"delivery-textbox_cake-radio-opt__1EMeI","MuiFormControl-root":"delivery-textbox_MuiFormControl-root__3VaRv","deliver-input":"delivery-textbox_deliver-input__3X140","small-input":"delivery-textbox_small-input__167BW",c:"delivery-textbox_c__3nLth","surge-msg":"delivery-textbox_surge-msg__s1Jzl","old-price":"delivery-textbox_old-price__109OF","surge-price-updated":"delivery-textbox_surge-price-updated__6_6DW","new-price":"delivery-textbox_new-price__3ygc1","search-close-icon":"delivery-textbox_search-close-icon__3VDBU",btn:"delivery-textbox_btn__1iu9F","no-area-error":"delivery-textbox_no-area-error__3MOQP","selected-pin":"delivery-textbox_selected-pin__1MhhB"}},83843:function(e){e.exports={modalBodyInner:"dont-know-pincode_modalBodyInner__2l2aX",deliveryHeader:"dont-know-pincode_deliveryHeader__2jB8I",chooseHeader:"dont-know-pincode_chooseHeader__1-w97",areaHeader:"dont-know-pincode_areaHeader__WyvRf",mappedPincodeSection:"dont-know-pincode_mappedPincodeSection__3PwmQ",alternatePincodeSection:"dont-know-pincode_alternatePincodeSection__3rQXR",alternatePincodeToast:"dont-know-pincode_alternatePincodeToast__16WtZ",alternatePincodeMsg:"dont-know-pincode_alternatePincodeMsg__22uBx"}}}]);
//# sourceMappingURL=651-67bf453d7e39fd2b751d.js.map