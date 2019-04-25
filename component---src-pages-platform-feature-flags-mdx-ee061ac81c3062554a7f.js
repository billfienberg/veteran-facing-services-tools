(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{332:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),s=t.n(r),i=t(2),c=t.n(i),m=t(4),l=t(345),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},c.a.createElement("h1",{id:"front-end-feature-flags"},"Front End Feature Flags"),c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Agile and user centric workflows often use testing of partially complete features to refine or research experiences. This document provides recommendations on using feature flags to manage new unreleased features in our continuous integration environment."),c.a.createElement("h2",{id:"enhancements-to-existing-applications"},"Enhancements to Existing Applications"),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased features should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),": Unreleased features can be made available on www.va.gov by checking ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the enhancement can be done by adding this name/value to the local storage",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present.")))),c.a.createElement("h2",{id:"new-applications"},"New Applications"),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased applications should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),":"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on www.va.gov by checking ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the application can be done by adding this name/value to the local storage",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present."))))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on production behind a password by setting ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"protected: yes")," in ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/e1030d1a499e39eaeceb8f4bdcbd33baf7ee946d/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml"}},"react_routes.yml"),". External teams should work with their DSVA contact to request support for enabling this.")),c.a.createElement("h2",{id:"new-content-pages"},"New Content Pages"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Unreleased content pages should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," by adding an exclusion flag to the front matter of the content page. For example, because this front matter includes ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vagovprod: false"),", this content page would be excluded from the build for the production environment:"),c.a.createElement(m.MDXTag,{name:"pre",components:a},c.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},'---\ntitle: Apply for disability benefits\nvagovprod: false\n---\n<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"\nid="va-breadcrumbs">\n')),c.a.createElement(m.MDXTag,{name:"p",components:a},"Content pages can be excluded from any or all of these environments:"),c.a.createElement(m.MDXTag,{name:"pre",components:a},c.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},"vagovprod: false\nvagovstaging: false\nvagovdev: false\nlocalhost: false\n")),c.a.createElement("h2",{id:"writing-good-feature-flags"},"Writing Good Feature Flags"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"New features or applications should be merged often so they can be included as part of the daily continuous integration deploy."),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Feature flagged enhancements should be made with code that is ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to"}},"easy to delete"),"- ideally done simply and with as few checks as possible. Repeating yourself is okay in feature flagged code.",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Making code that's easy to delete ensures that deprecated code is quickly removed once a feature is released."))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Making features or applications available in production should done only as needed for testing with users.")))},a}(c.a.Component),u={}},338:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(68),c=t.n(i);t.d(a,"a",function(){return c.a});t(340);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,a,t){var n;e.exports=(n=t(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),s=t.n(r),i=t(13),c=t.n(i),m=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?s.a.createElement(m.a,o()({location:a,pageResources:t},t.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=p},343:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(341),s=t(2),i=t.n(s),c=t(13),m=t.n(c),l=t(346),p=t.n(l),d=t(338),u=(t(17),t(133),t(134),t(339)),h=t.n(u),f=t(18),g=t.n(f),b=t(347),v=t.n(b),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=h.a.sections.reduce(function(e,a){var t;return g()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return i.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(a){return i.a.createElement("div",{key:a.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),i.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(i.a.Component),y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(i.a.Component),w=(t(348),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:t}),a)},data:r})},a}(i.a.Component));w.propTypes={children:m.a.node.isRequired};a.a=w},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),s=t.n(r),i=t(343),c=(t(133),t(134),t(135),t(17),t(344)),m=t(338);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(339),u=t.n(d);function h(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function f(e){var a=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-feature-flags-mdx-ee061ac81c3062554a7f.js.map