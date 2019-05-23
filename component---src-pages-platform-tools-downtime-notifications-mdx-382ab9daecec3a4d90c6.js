(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{341:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),i=t(3),r=t.n(i),c=t(2),m=t.n(c),s=t(4),p=t(351),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},m.a.createElement("h1",{id:"downtime-notifications"},"Downtime Notifications"),m.a.createElement(s.MDXTag,{name:"p",components:n},"Downtime Notications are a mechanism for handling outages of external services in the consuming front-end applications. "),m.a.createElement("h2",{id:"overview"},"Overview"),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Available as a React component in ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/DowntimeNotification/index.jsx"}},"vets-website"),"."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Consumers of the React component register required-services as dependencies via React props"),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Driven by ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://dsva.pagerduty.com/maintenance_windows"}},"PagerDuty maintenance windows")," so that downtime for a certain service can be scheduled without requiring a deployment. ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://support.pagerduty.com/docs/maintenance-windows"}},"More info on PagerDuty maintenance windows"),"."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"After a maintenance window is added in Pager Duty, an application wrapped in the Downtime Notification React component typically responds in one of three ways:",m.a.createElement(s.MDXTag,{name:"ol",components:n,parentName:"li"},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Rendering the application as normal if the maintenance window does not start for upwards of an hour."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Displaying a dismissible modal informing the user of upcoming downtime and rendering the application as usual if the maintenance window starts within the hour."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Rendering an alert banner informing the user of active downtime instead of rendering the application if the maintenance window has already started.")))),m.a.createElement("h2",{id:"how-to-use"},"How to use"),m.a.createElement(s.MDXTag,{name:"ol",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Identify required-services for the application",m.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"These services should be added into ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/monitoring/DowntimeNotification/config/externalServices.js"}},"externalServices")," if they have not already been. The value must match that in the devops ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/a4b5432061ae60a4f77952bbe5f668a1355ee007/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L232"}},"config"),"."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"These dependencies may not be directly accessed by your application, but are more likely to be dependencies of the API method(s) consumed by your application. For example, the Search app requires Search.gov to function, even though it doesn't directly hit Search.gov."))),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Import the Downtime Notification React component into the application React code, usually the topmost container."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"In the render method, render a Downtime Notification React component passing the identified dependencies as props and the affected components as React children.")),m.a.createElement("h3",{id:"example"},"Example"),m.a.createElement(s.MDXTag,{name:"p",components:n},"Suppose an application ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"My App")," leverages a service called ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service"),", and ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," was known to be offline for maintenance every now and then. During those timeframes, it is desirable to show a message to the user explaining that ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"My App")," is unavailable at this time so that users aren't given the impression that they are running into unexpected errors and so that ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," isn't needlessly hit. This should also be easy for engineers to do, without requiring any deployments to publish/unpublish the messaging. This is a pretty typical use case for the ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification")," React component."),m.a.createElement("h4",{id:"react-code"},"React code"),m.a.createElement(s.MDXTag,{name:"p",components:n},"First, the topmost React container of My App is modified to import and consume the Downtime Notification React component. "),m.a.createElement(s.MDXTag,{name:"p",components:n},"Note that ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," would issue the API request to ",m.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," during ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"componentDidMount"),", rather than ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyApp"),". This is because ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," is passed a child component to ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification"),". ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification")," will fetch the currently-registered maintenance windows from the VA API (which in return reads the maintenance windows from PagerDuty), and if it discovers active downtime  for ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fancyService"),", then the ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"componentDidMount")," lifecycle method of ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," will not execute. This way, API requests to Fancy Service won't continue to send during downtime."),m.a.createElement(s.MDXTag,{name:"p",components:n},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"src/applications/my-app/containers/MyApp.jsx")),m.a.createElement(s.MDXTag,{name:"pre",components:n},m.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { connect } from 'react-redux';\n\nimport {\n  DowntimeNotification,\n  externalServices,\n} from 'platform/monitoring/DowntimeNotifications';\n\nimport {\n  fetchFromFancyService\n} from '../actions';\n\nimport MyAppDataGrid from '../components/MyAppDataGrid';\n\nclass MyApp extends React.component {\n  render() {\n      return (\n        <>\n          <h1>My App</h1>\n          <DowntimeNotification appTitle=\"my app\" dependencies={[ externalServices.fancyService ]}>\n             <MyAppDataGrid fetchFromFancyService={this.props.fetchFromFancyService}/>\n          </DowntimeNotification>\n        </>\n      );\n  }\n\n}\n\nconst mapStateToProps = state => store.myApp;\n\nconst mapDispatchToProps = {\n  fetchFromFancyService,\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n)(MyApp);\n")),m.a.createElement(s.MDXTag,{name:"p",components:n},"The render-flow for this container is:"),m.a.createElement(s.MDXTag,{name:"ol",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"MyApp"),"'s ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"render")," method is executed"),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," issues a GET request to the VA API for all registered maintenance windows."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," processes the response JSON data into a map."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," searches the downtime map for a service called ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fancyService"),", as passed in its ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"dependencies")," prop."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"If downtime for ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fancyService")," is found:",m.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"If the current time is in the timeframe of the downtime window, render an alert banner informing the user that this application is undergoing maintenance."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Otherwise, ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," will renders its children, in this case ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"MyAppDataGrid"),". A dismissible modal is also rendered if downtime is approaching within the hour.")))),m.a.createElement("h2",{id:"other-examples"},"Other examples"),m.a.createElement(s.MDXTag,{name:"ol",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The Search app is a basic ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/search/containers/SearchApp.jsx#L301"}},"example")," of an application having a single service dependency, in this case being Search.gov. The Facility Locator is another ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/facility-locator/containers/FacilityLocatorApp.jsx#L74"}},"example"),"."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The Account app is another simple ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/account/containers/AccountApp.jsx#L23"}},"example"),". This application has two dependencies. If either is down, then the application is considered in maintenance."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The Sign-In Modal is an ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/user/authentication/components/SignInModal.jsx#L74"}},"example")," of a component that renders messaging about service downtime, but it does not affect the functionality of the component. Instead, it's more a heads-up for the user about potential difficulty. This is also the case for ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/letters/containers/LettersApp.jsx#L63"}},"Letters"),"."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The Dashboard app consists of components with their own unique dependencies, so that a certain service being in maintenance should result in reduced but partial functionality for the Dashboard. It serves as an ",m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/dashboard/containers/DashboardApp.jsx#L398"}},"example")," of a more complex implementation of Downtime Notifications.")))},n}(m.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,t){"use strict";var a=t(2),o=t.n(a),i=t(13),r=t.n(i),c=t(354),m=(t(133),t(134),t(135),t(17),t(350)),s=t(352);function p(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=t(353),h=t.n(u);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-downtime-notifications-mdx-382ab9daecec3a4d90c6.js.map