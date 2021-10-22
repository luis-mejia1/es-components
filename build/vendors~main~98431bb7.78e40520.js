/*! For license information please see vendors~main~98431bb7.78e40520.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1663:function(e,t,n){"use strict";n.r(t),n.d(t,"IGNORE_CLASS_NAME",(function(){return d}));var o=n(0),r=n(50);function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function isNodeFound(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}function findHighest(e,t,n){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&isNodeFound(e,t,n))return!0;e=e.parentNode||e.host}return e}var l=function testPassiveEventSupport(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function get(){e=!0}}),n=function noop(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}};var a,i=function autoInc(e){return void 0===e&&(e=0),function(){return++e}}(),s={},u={},c=["touchstart","touchmove"],d="ignore-react-onclickoutside";function getEventHandlerOptions(e,t){var n=null;return-1!==c.indexOf(t)&&a&&(n={passive:!e.props.preventDefault}),n}t.default=function onClickOutsideHOC(e,t){var n,c,f=e.displayName||e.name||"Component";return c=n=function(n){var c,d;function onClickOutside(e){var o;return(o=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof o.__clickOutsideHandlerProp){var t=o.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+f+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else o.__clickOutsideHandlerProp(e)},o.__getComponentNode=function(){var e=o.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():Object(r.findDOMNode)(e)},o.enableOnClickOutside=function(){if("undefined"!=typeof document&&!u[o._uid]){void 0===a&&(a=l()),u[o._uid]=!0;var e=o.props.eventTypes;e.forEach||(e=[e]),s[o._uid]=function(e){var t;null!==o.componentNode&&(o.props.preventDefault&&e.preventDefault(),o.props.stopPropagation&&e.stopPropagation(),o.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||findHighest(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,o.componentNode,o.props.outsideClickIgnoreClass)===document&&o.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,s[o._uid],getEventHandlerOptions(_assertThisInitialized(o),e))}))}},o.disableOnClickOutside=function(){delete u[o._uid];var e=s[o._uid];if(e&&"undefined"!=typeof document){var t=o.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,getEventHandlerOptions(_assertThisInitialized(o),t))})),delete s[o._uid]}},o.getRef=function(e){return o.instanceRef=e},o._uid=i(),o}d=n,(c=onClickOutside).prototype=Object.create(d.prototype),c.prototype.constructor=c,_setPrototypeOf(c,d);var p=onClickOutside.prototype;return p.getInstance=function getInstance(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},p.componentDidMount=function componentDidMount(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+f+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},p.componentDidUpdate=function componentDidUpdate(){this.componentNode=this.__getComponentNode()},p.componentWillUnmount=function componentWillUnmount(){this.disableOnClickOutside()},p.render=function render(){var t=this.props;t.excludeScrollbar;var n=_objectWithoutPropertiesLoose(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,Object(o.createElement)(e,n)},onClickOutside}(o.Component),n.displayName="OnClickOutside("+f+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:d,preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},c}},1698:function(e,t,n){"use strict";n(54);var o=n(30),r=n.n(o),l=n(163),a=n.n(l),i=n(709),s=n(260),u=n(0),c=n(471),d=n(144),f=n.n(d),p=n(711),h=n(50),m=n.n(h);function safeFindDOMNode(e){return e&&"setState"in e?m.a.findDOMNode(e):null!=e?e:null}var v=function noop(){};function isLeftClickEvent(e){return 0===e.button}var y=function getRefTarget(e){return e&&("current"in e?e.current:e)};t.a=function useRootClose(e,t,n){var o=void 0===n?{}:n,l=o.disabled,d=o.clickTrigger,h=void 0===d?"click":d,m=Object(u.useRef)(!1),b=t||v,O=Object(u.useCallback)((function(t){var n,o=y(e);f()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),m.current=!(o&&(n=t,!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey))&&isLeftClickEvent(t)&&!Object(i.a)(o,t.target))}),[e]),C=Object(c.a)((function(e){m.current||b(e)})),g=Object(c.a)((function(e){27===e.keyCode&&b(e)}));Object(u.useEffect)((function(){if(!l&&null!=e){var t,n,o=window.event,i=(t=y(e),Object(p.a)(safeFindDOMNode(t))),u=Object(s.a)(i,h,O,!0),c=Object(s.a)(i,h,(function(e){e!==o?C(e):o=void 0})),d=Object(s.a)(i,"keyup",(function(e){e!==o?g(e):o=void 0})),f=[];if("ontouchstart"in i.documentElement)f=r()(n=a()([]).call(i.body.children)).call(n,(function(e){return Object(s.a)(e,"mousemove",v)}));return function(){u(),c(),d(),f.forEach((function(e){return e()}))}}}),[e,l,h,O,C,g])}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(735));t.default=o.default,e.exports=t.default},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(745)).default,r=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM;t.default=r},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function findTabbableDescendants(e){return[].slice.call(e.querySelectorAll("*"),0).filter(tabbable)};var o=/input|select|textarea|button|object/;function hidesContents(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}catch(e){return console.warn("Failed to inspect element style"),!1}}function visible(e){for(var t=e;t&&t!==document.body;){if(hidesContents(t))return!1;t=t.parentNode}return!0}function focusable(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&visible(e)}function tabbable(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&focusable(e,!n)}e.exports=t.default},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function resetState(){l&&(l.removeAttribute?l.removeAttribute("aria-hidden"):null!=l.length?l.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(l).forEach((function(e){return e.removeAttribute("aria-hidden")})));l=null},t.log=function log(){return void 0;var e=l||{};console.log("ariaAppHider ----------"),console.log(e.nodeName,e.className,e.id),console.log("end ariaAppHider ----------")},t.assertNodeList=assertNodeList,t.setElement=function setElement(e){var t=e;if("string"==typeof t&&r.canUseDOM){var n=document.querySelectorAll(t);assertNodeList(n,t),t=n}return l=t||l},t.validateElement=validateElement,t.hide=function hide(e){var t=!0,n=!1,o=void 0;try{for(var r,l=validateElement(e)[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(e){n=!0,o=e}finally{try{!t&&l.return&&l.return()}finally{if(n)throw o}}},t.show=function show(e){var t=!0,n=!1,o=void 0;try{for(var r,l=validateElement(e)[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(e){n=!0,o=e}finally{try{!t&&l.return&&l.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function documentNotReadyOrSSRTesting(){l=null};var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(144)),r=n(360);var l=null;function assertNodeList(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function validateElement(e){var t=e||l;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,o.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},474:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function log(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function resetState(){r=new o};var o=function PortalOpenInstances(){var e=this;_classCallCheck(this,PortalOpenInstances),this.register=function(t){-1===e.openInstances.indexOf(t)&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var n=e.openInstances.indexOf(t);-1!==n&&(e.openInstances.splice(n,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach((function(n){return n(t,e.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new o;t.default=r},735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=n(0),a=_interopRequireDefault(l),i=_interopRequireDefault(n(50)),s=_interopRequireDefault(n(1)),u=_interopRequireDefault(n(742)),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(473)),d=n(360),f=_interopRequireDefault(d),p=n(748);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=t.portalClassName="ReactModalPortal",m=t.bodyOpenClassName="ReactModal__Body--open",v=d.canUseDOM&&void 0!==i.default.createPortal,y=function createHTMLElement(e){return document.createElement(e)},b=function getCreatePortal(){return v?i.default.createPortal:i.default.unstable_renderSubtreeIntoContainer};function getParentElement(e){return e()}var O=function(e){function Modal(){var e,t,n;_classCallCheck(this,Modal);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return t=n=_possibleConstructorReturn(this,(e=Modal.__proto__||Object.getPrototypeOf(Modal)).call.apply(e,[this].concat(l))),n.removePortal=function(){!v&&i.default.unmountComponentAtNode(n.node);var e=getParentElement(n.props.parentSelector);e&&e.contains(n.node)?e.removeChild(n.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},n.portalRef=function(e){n.portal=e},n.renderPortal=function(e){var t=b()(n,a.default.createElement(u.default,o({defaultStyles:Modal.defaultStyles},e)),n.node);n.portalRef(t)},_possibleConstructorReturn(n,t)}return _inherits(Modal,e),r(Modal,[{key:"componentDidMount",value:function componentDidMount(){d.canUseDOM&&(v||(this.node=y("div")),this.node.className=this.props.portalClassName,getParentElement(this.props.parentSelector).appendChild(this.node),!v&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function getSnapshotBeforeUpdate(e){return{prevParent:getParentElement(e.parentSelector),nextParent:getParentElement(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function componentDidUpdate(e,t,n){if(d.canUseDOM){var o=this.props,r=o.isOpen,l=o.portalClassName;e.portalClassName!==l&&(this.node.className=l);var a=n.prevParent,i=n.nextParent;i!==a&&(a.removeChild(this.node),i.appendChild(this.node)),(e.isOpen||r)&&!v&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function render(){return d.canUseDOM&&v?(!this.node&&v&&(this.node=y("div")),b()(a.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:Modal.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function setAppElement(e){c.setElement(e)}}]),Modal}(l.Component);O.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func},O.defaultProps={isOpen:!1,portalClassName:h,bodyOpenClassName:m,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function parentSelector(){return document.body},overlayElement:function overlayElement(e,t){return a.default.createElement("div",e,t)},contentElement:function contentElement(e,t){return a.default.createElement("div",e,t)}},O.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(O),t.default=O},742:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(0),i=_interopRequireDefault(n(1)),s=_interopRequireWildcard(n(743)),u=_interopRequireDefault(n(744)),c=_interopRequireWildcard(n(473)),d=_interopRequireWildcard(n(746)),f=n(360),p=_interopRequireDefault(f),h=_interopRequireDefault(n(474));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(747);var m={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,y=function(e){function ModalPortal(e){_classCallCheck(this,ModalPortal);var t=_possibleConstructorReturn(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,e));return t.setOverlayRef=function(e){t.overlay=e,t.props.overlayRef&&t.props.overlayRef(e)},t.setContentRef=function(e){t.content=e,t.props.contentRef&&t.props.contentRef(e)},t.afterClose=function(){var e=t.props,n=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,l=e.bodyOpenClassName;l&&d.remove(document.body,l),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&v>0&&0===(v-=1)&&c.show(n),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(s.returnFocus(t.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),h.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(s.setupScopedFocus(t.node),s.markForFocusLater()),t.setState({isOpen:!0},(function(){t.openAnimationFrame=requestAnimationFrame((function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})}))})))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var e=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:e},(function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())}))},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(t.content,e),t.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),t.requestClose(e))},t.handleOverlayOnClick=function(e){null===t.shouldClose&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(e):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(e){t.props.shouldCloseOnOverlayClick||e.target!=t.overlay||e.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(e){return t.ownerHandlesClose()&&t.props.onRequestClose(e)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(e,n){var o="object"===(void 0===n?"undefined":r(n))?n:{base:m[e],afterOpen:m[e]+"--after-open",beforeClose:m[e]+"--before-close"},l=o.base;return t.state.afterOpen&&(l=l+" "+o.afterOpen),t.state.beforeClose&&(l=l+" "+o.beforeClose),"string"==typeof n&&n?l+" "+n:l},t.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return _inherits(ModalPortal,e),l(ModalPortal,[{key:"componentDidMount",value:function componentDidMount(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function componentDidUpdate(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function beforeOpen(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(v+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function render(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,l=e.defaultStyles,a=e.children,i=n?{}:l.content,s=r?{}:l.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},i,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,a);return this.props.overlayElement(u,d)}}]),ModalPortal}(a.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(p.default),i.default.instanceOf(f.SafeHTMLCollection),i.default.instanceOf(f.SafeNodeList),i.default.arrayOf(i.default.instanceOf(p.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=y,e.exports=t.default},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function resetState(){r=[]},t.log=function log(){return void 0;console.log("focusManager ----------"),r.forEach((function(e){var t=e||{};console.log(t.nodeName,t.className,t.id)})),console.log("end focusManager ----------")},t.handleBlur=handleBlur,t.handleFocus=handleFocus,t.markForFocusLater=function markForFocusLater(){r.push(document.activeElement)},t.returnFocus=function returnFocus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==r.length&&(t=r.pop()).focus({preventScroll:e}))}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function popWithoutFocus(){r.length>0&&r.pop()},t.setupScopedFocus=function setupScopedFocus(e){l=e,window.addEventListener?(window.addEventListener("blur",handleBlur,!1),document.addEventListener("focus",handleFocus,!0)):(window.attachEvent("onBlur",handleBlur),document.attachEvent("onFocus",handleFocus))},t.teardownScopedFocus=function teardownScopedFocus(){l=null,window.addEventListener?(window.removeEventListener("blur",handleBlur),document.removeEventListener("focus",handleFocus)):(window.detachEvent("onBlur",handleBlur),document.detachEvent("onFocus",handleFocus))};var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(472));var r=[],l=null,a=!1;function handleBlur(){a=!0}function handleFocus(){if(a){if(a=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,o.default)(l)[0]||l).focus()}),0)}}},744:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function scopeTab(e,t){var n=(0,o.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,l=t.shiftKey,a=n[0],i=n[n.length-1];if(e===document.activeElement){if(!l)return;r=i}i!==document.activeElement||l||(r=a);a===document.activeElement&&l&&(r=i);if(r)return t.preventDefault(),void r.focus();var s=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==s||"Chrome"==s[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=n.indexOf(document.activeElement);u>-1&&(u+=l?-1:1);if(void 0===(r=n[u]))return t.preventDefault(),void(r=l?i:a).focus();t.preventDefault(),r.focus()};var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(472));e.exports=t.default},746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function resetState(){var e=document.getElementsByTagName("html")[0];for(var t in o)removeClass(e,o[t]);var n=document.body;for(var l in r)removeClass(n,r[l]);o={},r={}},t.log=function log(){return void 0;var e=document.getElementsByTagName("html")[0].className,t="Show tracked classes:\n\n";for(var n in t+="<html /> ("+e+"):\n",o)t+="  "+n+" "+o[n]+"\n";for(var l in e=document.body.className,t+="\n\ndoc.body ("+e+"):\n",r)t+="  "+l+" "+r[l]+"\n";t+="\n",console.log(t)};var o={},r={};function removeClass(e,t){e.classList.remove(t)}var l=function incrementReference(e,t){return e[t]||(e[t]=0),e[t]+=1,t},a=function decrementReference(e,t){return e[t]&&(e[t]-=1),t},i=function trackClass(e,t,n){n.forEach((function(n){l(t,n),e.add(n)}))},s=function untrackClass(e,t,n){n.forEach((function(n){a(t,n),0===t[n]&&e.remove(n)}))};t.add=function add(e,t){return i(e.classList,"html"==e.nodeName.toLowerCase()?o:r,t.split(" "))},t.remove=function remove(e,t){return s(e.classList,"html"==e.nodeName.toLowerCase()?o:r,t.split(" "))}},747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function resetState(){for(var e=[r,l],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}r=l=null,a=[]},t.log=function log(){console.log("bodyTrap ----------"),console.log(a.length);for(var e=[r,l],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(474));var r=void 0,l=void 0,a=[];function focusContent(){0!==a.length&&a[a.length-1].focusContent()}o.default.subscribe((function bodyTrap(e,t){r||l||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",focusContent),(l=r.cloneNode()).addEventListener("focus",focusContent)),(a=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(r.parentElement&&r.parentElement.removeChild(r),l.parentElement&&l.parentElement.removeChild(l))}))},748:function(e,t,n){"use strict";function componentWillMount(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function componentWillReceiveProps(e){this.setState(function updater(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function componentWillUpdate(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function polyfill(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var l=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=componentWillMount,t.componentWillReceiveProps=componentWillReceiveProps),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=componentWillUpdate;var i=t.componentDidUpdate;t.componentDidUpdate=function componentDidUpdatePolyfill(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;i.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return polyfill})),componentWillMount.__suppressDeprecationWarning=!0,componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0}}]);