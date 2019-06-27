(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{333:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(11);var o=t(57),a=t.n(o),r=t(3),s=t.n(r),c=t(2),m=t.n(c),i=t(4),l=t(395),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},m.a.createElement("h1",{id:"vagov-forms-system"},"VA.gov Forms System"),m.a.createElement(i.MDXTag,{name:"p",components:n},"The VA.gov Forms System (VAFS) provides a simple way to create a consistent experience for complex forms for Veterans. Applications created with this framework generally follow this flow:"),m.a.createElement("div",{className:"mermaid"},"graph LR\n    A(Introduction Page) --\x3e B(Form Pages Start)\n    B -. Form Pages .-> C(Review Page)\n    C -- Submission --\x3e D(Confirmation Page)"),m.a.createElement(i.MDXTag,{name:"p",components:n},"VAFS consists of several different pieces:"),m.a.createElement(i.MDXTag,{name:"ul",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Standardized ",m.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"inputs and field sets")," for common types of form data"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"Validation functions")," used for commonly collected types of data"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"A standardized ",m.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"data flow")," within the application that triggers validation and updates conditionally displayed UI"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Hooks for custom validation, hiding/showing fields, and writing custom fields and widgets"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Save and restore form data using the VA.gov save in progress and prefill APIs")),m.a.createElement("h2",{id:"when-to-use-vafs"},"When to use VAFS"),m.a.createElement(i.MDXTag,{name:"p",components:n},"VAFS is best suited for forms that"),m.a.createElement(i.MDXTag,{name:"ul",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"are long enough to be organized across multiple pages,"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"have optionally captured or required fields, and"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"require field level or multiple field validation.")),m.a.createElement(i.MDXTag,{name:"p",components:n},"VAFS shouldn't be used when"),m.a.createElement(i.MDXTag,{name:"ul",components:n},m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"the form is simple enough to fit on a single page, or"),m.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"when the user experience doesn't benefit from ",m.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"all")," of the steps documented in the above flow.")),m.a.createElement(i.MDXTag,{name:"p",components:n},"In these cases, it's recommended to either make simple single page form or to deploy a React app that doesn't use VAFS. We have form components available in the formation-react library, which can view ",m.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/platform"}},"here"),"."))},n}(m.a.Component),d={}},394:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},395:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(25),s=t.n(r),c=t(398),m=(t(128),t(129),t(179),t(8),t(394)),i=t(396);function l(){return a.a.createElement(i.b,{query:"157057713",render:function(e){return a.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(i.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var d=t(397),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(u,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(h,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-index-mdx-aa75bc8a89b843d670f9.js.map