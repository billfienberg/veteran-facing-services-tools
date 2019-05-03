(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),m=t(2),c=t.n(m),p=t(4),i=t(341),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=i.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},c.a.createElement("h1",{id:"vetsgov-front-end-best-practices-wip"},"vets.gov Front End Best Practices (WIP)"),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Last Updated:")," April 28, 2017"),c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement(p.MDXTag,{name:"p",components:n},"This is an initial pass at the best practices followed in vets.gov front-end development."),c.a.createElement("h3",{id:"objective"},"Objective"),c.a.createElement(p.MDXTag,{name:"p",components:n},"To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices."),c.a.createElement("h3",{id:"background"},"Background"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"form-builder library")," that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications."),c.a.createElement("h3",{id:"high-order-guidelines"},"High Order Guidelines"),c.a.createElement(p.MDXTag,{name:"p",components:n},"This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"li"},"PropTypes"),": we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component."),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"What to put into a selector vs. reducer vs. action"),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"How we map backend data to the state?")),c.a.createElement("h3",{id:"reactredux-guidelines"},"React/Redux Guidelines"),c.a.createElement("h4",{id:"components-vs-containers"},"Components vs. containers"),c.a.createElement(p.MDXTag,{name:"p",components:n},"A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-redux")," library's ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"connect")," function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below)."),c.a.createElement(p.MDXTag,{name:"p",components:n},"In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state."),c.a.createElement(p.MDXTag,{name:"p",components:n},'There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.'),c.a.createElement(p.MDXTag,{name:"p",components:n},"On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"containers")," folder and a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components")," folder that we divide components between."),c.a.createElement("h4",{id:"using-setstate-in-react-components"},"Using setState in React components"),c.a.createElement(p.MDXTag,{name:"p",components:n},"We also generally avoid ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setState")," inside regular components. This isn't because ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setState")," is bad, necessarily, but because it can be hard to track down data changes due to ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setState")," when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setState"),", it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props."),c.a.createElement(p.MDXTag,{name:"p",components:n},"Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux."),c.a.createElement("h3",{id:"existing-guides-and-tools"},"Existing Guides and Tools"),c.a.createElement(p.MDXTag,{name:"p",components:n},"We have a set of ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc"}},"ESLint rules")," that extend the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/airbnb/javascript"}},"AirBnB style guide")," and also use the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://prettier.io"}},"Prettier")," ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://prettier.io/docs/en/eslint.html"}},"ESLint rules"),". There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lint:js:fix")," or ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lint:js:changed:fix")," NPM scripts to fix all errors that ESLint can auto-fix."),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"p"},"TODO: list any notable exceptions here.")),c.a.createElement("h3",{id:"project-structure-and-code-location"},"Project Structure and Code Location"),c.a.createElement(p.MDXTag,{name:"p",components:n},"The structure of our React app's is described in ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project")),c.a.createElement(p.MDXTag,{name:"p",components:n},"A number (and soon all) of our forms use the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"react-json-schemaform"))," (or rjsf) library. To learn more about those, see ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"schemaform walkthrough")," and this ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"form config cookbook"),"."),c.a.createElement("h3",{id:"related-documents"},"Related Documents"),c.a.createElement(p.MDXTag,{name:"ul",components:n},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/Work%20Practices/Engineering/DocumentedDecisions/Redux.md"}},"Using Redux"))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project"))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"Schemaform walkthrough"))),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"Form config cookbook")),c.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Existing posts/articles on best practices that we may or may not agree with but can pull topics from:"),c.a.createElement(p.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21"}},"React best practices")),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"}},"Redux best practices")),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md"}},"Long list of links about react architecture and best practices")),c.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://reactrocket.com/post/react-redux-optimization/"}},"Redux isn't slow, you're just doing it wrong - An optimization guide"))))),c.a.createElement("h3",{id:"revision-history"},"Revision History"),c.a.createElement(p.MDXTag,{name:"table",components:n},c.a.createElement(p.MDXTag,{name:"thead",components:n,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"thead"},c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Date"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Revisions Made"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Author"),c.a.createElement(p.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Reviewed By"))),c.a.createElement(p.MDXTag,{name:"tbody",components:n,parentName:"table"},c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"March 1, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Skeleton document based on outline of ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"Javascript/Node.js.md"}},"Node.js Best Practices")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"April 28, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Pulled in content from discussion in ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659"}},"#659")),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),c.a.createElement(p.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"May 17, 2017"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Added information about React component types and ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"setState")," usage"),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(p.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})))))},n}(c.a.Component),u={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},341:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),m=t(343),c=(t(133),t(134),t(135),t(17),t(340)),p=t(342);function i(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(p.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(344),u=t.n(d);function g(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-react-mdx-ab74cc2ed314d3791f98.js.map