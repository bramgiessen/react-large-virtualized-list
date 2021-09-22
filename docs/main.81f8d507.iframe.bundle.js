(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1589:function(module,exports,__webpack_require__){__webpack_require__(1590),__webpack_require__(1757),__webpack_require__(1758),__webpack_require__(2472),__webpack_require__(2473),__webpack_require__(2479),__webpack_require__(2478),__webpack_require__(2474),__webpack_require__(2480),__webpack_require__(2475),__webpack_require__(2476),module.exports=__webpack_require__(2459)},1657:function(module,exports){},1758:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1082)},2459:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1082).configure)([__webpack_require__(2460)],module,!1)}).call(this,__webpack_require__(592)(module))},2460:function(module,exports,__webpack_require__){var map={"./VirtualizedList/VirtualizedList.stories.js":2477};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2460},2468:function(module,exports,__webpack_require__){(exports=__webpack_require__(2469)(!1)).push([module.i,".VirtualizedList-stories-module__VirtualizedList__2rEEt {\n   box-sizing: border-box;\n   height: 300px;\n   position: relative;\n   width: 100%;\n   will-change: transform;\n   overflow: hidden auto;\n   font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .VirtualizedList-stories-module__listItem__1kinQ{\n   border-bottom: 1px solid #e0e0e0;\n   display: flex;\n   flex-direction: row;\n   align-items: center;\n  }\n\n  .VirtualizedList-stories-module__number__16ME- {\n   display: inline-block;\n   height: 40px;\n   width: 40px;\n   line-height: 40px;\n   text-align: center;\n   border-radius: 40px;\n   color: white;\n   font-size: 1.5em;\n   margin-right: 25px;\n }\n\n .VirtualizedList-stories-module__text__3CeqE{\n    display: inline-block;\n }",""]),exports.locals={VirtualizedList:"VirtualizedList-stories-module__VirtualizedList__2rEEt",listItem:"VirtualizedList-stories-module__listItem__1kinQ",number:"VirtualizedList-stories-module__number__16ME-",text:"VirtualizedList-stories-module__text__3CeqE"},module.exports=exports},2477:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HundredItems",(function(){return HundredItems})),__webpack_require__.d(__webpack_exports__,"TenThousandItems",(function(){return TenThousandItems})),__webpack_require__.d(__webpack_exports__,"HundredThousandItems",(function(){return HundredThousandItems})),__webpack_require__.d(__webpack_exports__,"ThreeHundredThousandItems",(function(){return ThreeHundredThousandItems}));__webpack_require__(2461),__webpack_require__(2462),__webpack_require__(2464),__webpack_require__(1017),__webpack_require__(648),__webpack_require__(660),__webpack_require__(661),__webpack_require__(662),__webpack_require__(663),__webpack_require__(455),__webpack_require__(665),__webpack_require__(1018),__webpack_require__(667),__webpack_require__(666);var react=__webpack_require__(0),VirtualizedList_stories_module=__webpack_require__(470),VirtualizedList_stories_module_default=__webpack_require__.n(VirtualizedList_stories_module),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__(2470);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var calculateRenderedItemsState=function calculateRenderedItemsState(listHeight,amountOfItems,overscanRowCount,scrollTop,itemHeight){var state={renderedStartIndex:0,renderedEndIndex:0};if(!listHeight||!itemHeight)return state;var visibleItemsCount=Math.ceil(listHeight/itemHeight)+1,visibleStartIndex=Math.max(0,Math.floor(scrollTop/itemHeight));return state.renderedStartIndex=Math.max(0,visibleStartIndex-overscanRowCount),state.renderedEndIndex=Math.min(amountOfItems-1,visibleStartIndex+visibleItemsCount+overscanRowCount-1),state},jsx_runtime=__webpack_require__(200);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function VirtualizedList_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return VirtualizedList_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return VirtualizedList_arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function VirtualizedList_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var VirtualizedList_VirtualizedList=function VirtualizedList(_ref){var wrapperTagName=_ref.wrapperTagName,wrapperStyle=_ref.wrapperStyle,className=_ref.className,overscanRowCount=_ref.overscanRowCount,itemHeight=_ref.itemHeight,items=_ref.items,renderItem=_ref.renderItem,innerHeight=items.length*itemHeight,TagName=""+wrapperTagName,wrapperElRef=Object(react.useRef)(),_useState2=_slicedToArray(Object(react.useState)(0),2),wrapperElHeight=_useState2[0],setWrapperElHeight=_useState2[1],_useState4=_slicedToArray(Object(react.useState)({renderedStartIndex:0,renderedEndIndex:0}),2),renderedItemsState=_useState4[0],setVisibleListStateDebounced=function requestAnimationFrameSingleRun(callback){var rafScheduled=!1,callbackWrapper=function callbackWrapper(){callback.apply(void 0,arguments),rafScheduled=!1};return function requestAnimationFrameSingleRun(){var _arguments=arguments;rafScheduled||(requestAnimationFrame((function(){return callbackWrapper.apply(void 0,_toConsumableArray(_arguments))})),rafScheduled=!0)}}(_useState4[1]);Object(react.useLayoutEffect)((function(){resetWrapperElHeight()}),[]),Object(react.useEffect)((function(){var debouncedOnResizeHanlder=function debounce(func){var timer,timeout=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((function(){func.apply(void 0,args)}),timeout)}}(resetWrapperElHeight,300);return window.addEventListener("resize",debouncedOnResizeHanlder),function(){window.removeEventListener("resize",debouncedOnResizeHanlder)}}),[]),Object(react.useEffect)((function(){var scrollTop=wrapperElRef.current.scrollTop,renderedItemsState=calculateRenderedItemsState(wrapperElHeight,items.length,overscanRowCount,scrollTop,itemHeight);setVisibleListStateDebounced(renderedItemsState)}),[wrapperElHeight]);var resetWrapperElHeight=function resetWrapperElHeight(){wrapperElRef.current&&setWrapperElHeight(wrapperElRef.current.getBoundingClientRect().height)};return Object(jsx_runtime.jsx)(TagName,{ref:wrapperElRef,className:"virtualized-list "+className,style:wrapperStyle,onScroll:function onScroll(event){var scrollTop=wrapperElRef.current.scrollTop,renderedItemsState=calculateRenderedItemsState(wrapperElHeight,items.length,overscanRowCount,scrollTop,itemHeight);setVisibleListStateDebounced(renderedItemsState)},children:Object(jsx_runtime.jsx)("div",{className:"inner-wrapper",style:{position:"relative",height:innerHeight+"px"},children:function renderListItems(){for(var renderedStartIndex=renderedItemsState.renderedStartIndex,renderedEndIndex=renderedItemsState.renderedEndIndex,renderedItems=[],i=renderedStartIndex;i<=renderedEndIndex;i++){var style={position:"absolute",top:i*itemHeight+"px",height:itemHeight+"px",width:"100%"};renderedItems.push(renderItem(items[i],style,i))}return renderedItems}()})})};VirtualizedList_VirtualizedList.displayName="VirtualizedList",VirtualizedList_VirtualizedList.propTypes={itemHeight:prop_types_default.a.number.isRequired,items:prop_types_default.a.array.isRequired,overscanRowCount:prop_types_default.a.number,renderItem:prop_types_default.a.func,wrapperTagName:prop_types_default.a.string,className:prop_types_default.a.string,wrapperStyle:prop_types_default.a.object},VirtualizedList_VirtualizedList.defaultProps={overscanRowCount:0,renderItem:function renderItem(item,style,index){return Object(jsx_runtime.jsx)("li",{style:style,children:"Item "+index},index)},wrapperTagName:"ul",className:"",wrapperStyle:{}},VirtualizedList_VirtualizedList.__docgenInfo={description:"",methods:[],displayName:"VirtualizedList",props:{overscanRowCount:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},renderItem:{defaultValue:{value:"(item, style, index) => <li key={index} style={style}>{`Item ${index}`}</li>",computed:!1},type:{name:"func"},required:!1,description:""},wrapperTagName:{defaultValue:{value:"'ul'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},wrapperStyle:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemHeight:{type:{name:"number"},required:!0,description:""},items:{type:{name:"array"},required:!0,description:""}}};var src_VirtualizedList_VirtualizedList=VirtualizedList_VirtualizedList;function VirtualizedList_stories_toConsumableArray(arr){return function VirtualizedList_stories_arrayWithoutHoles(arr){if(Array.isArray(arr))return VirtualizedList_stories_arrayLikeToArray(arr)}(arr)||function VirtualizedList_stories_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function VirtualizedList_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return VirtualizedList_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return VirtualizedList_stories_arrayLikeToArray(o,minLen)}(arr)||function VirtualizedList_stories_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function VirtualizedList_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/VirtualizedList/VirtualizedList.js"]={name:"VirtualizedList",docgenInfo:VirtualizedList_VirtualizedList.__docgenInfo,path:"src/VirtualizedList/VirtualizedList.js"});var random_rgb=function random_rgb(){var o=Math.round,r=Math.random;return"rgb("+o(255*r())+","+o(255*r())+","+o(255*r())+")"},generateListItems=function generateListItems(amount){return VirtualizedList_stories_toConsumableArray(Array(amount)).map((function(item,index){return{color:random_rgb(),letter:String.fromCharCode(65+Math.floor(26*Math.random()))}}))},VirtualizedList_stories_renderListItem=function renderListItem(item,itemStyle,index){var letter=item.letter,color=item.color;return Object(jsx_runtime.jsxs)("div",{style:itemStyle,className:VirtualizedList_stories_module_default.a.listItem,children:[Object(jsx_runtime.jsx)("div",{className:VirtualizedList_stories_module_default.a.number,style:{backgroundColor:color},children:letter}),Object(jsx_runtime.jsx)("div",{className:VirtualizedList_stories_module_default.a.text,children:"This is row "+index})]},index)};VirtualizedList_stories_renderListItem.displayName="renderListItem";__webpack_exports__.default={title:"VirtualizedList",component:src_VirtualizedList_VirtualizedList,argTypes:{wrapperTagName:{description:"Tag-name used for the root-element of the component"},items:{description:"List of data items to be used as source for the list",control:{disable:!0}},itemHeight:{description:"Height used for every list-item in pixels"},className:{description:"Classname that will be applied to the root-element of the component"},renderItem:{description:"Custom render function that is called to render every list-item"},overscanRowCount:{description:"The number of items that will be rendered before and after the visible part of the list"},wrapperStyle:{description:"Object containing css-styles that should be applied to the root-element of the component"}}};var VirtualizedList_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_VirtualizedList_VirtualizedList,Object.assign({},args))};VirtualizedList_stories_Template.displayName="Template";var HundredItems=VirtualizedList_stories_Template.bind({});HundredItems.args={wrapperTagName:"div",items:generateListItems(100),itemHeight:50,className:VirtualizedList_stories_module_default.a.VirtualizedList,renderItem:VirtualizedList_stories_renderListItem};var TenThousandItems=VirtualizedList_stories_Template.bind({});TenThousandItems.args=Object.assign({},HundredItems.args,{items:generateListItems(1e4)});var HundredThousandItems=VirtualizedList_stories_Template.bind({});HundredThousandItems.args=Object.assign({},HundredItems.args,{items:generateListItems(1e5)});var ThreeHundredThousandItems=VirtualizedList_stories_Template.bind({});ThreeHundredThousandItems.args=Object.assign({},HundredItems.args,{items:generateListItems(3e5)}),HundredItems.parameters=Object.assign({storySource:{source:"args => <VirtualizedList {...args} />"}},HundredItems.parameters),TenThousandItems.parameters=Object.assign({storySource:{source:"args => <VirtualizedList {...args} />"}},TenThousandItems.parameters),HundredThousandItems.parameters=Object.assign({storySource:{source:"args => <VirtualizedList {...args} />"}},HundredThousandItems.parameters),ThreeHundredThousandItems.parameters=Object.assign({storySource:{source:"args => <VirtualizedList {...args} />"}},ThreeHundredThousandItems.parameters)},470:function(module,exports,__webpack_require__){var api=__webpack_require__(2467),content=__webpack_require__(2468);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}},[[1589,2,3]]]);