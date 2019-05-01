(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{333:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return p}),n.d(a,"_frontmatter",function(){return u});n(42);var t=n(43),o=n.n(t),r=n(3),s=n.n(r),i=n(2),c=n.n(i),m=n(4),l=n(347),d={},p=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=l.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:a},c.a.createElement("h1",{id:"front-end-feature-flags"},"Front End Feature Flags"),c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Agile and user centric workflows often use testing of partially complete features to refine or research experiences. This document provides recommendations on using feature flags to manage new unreleased features in our continuous integration environment."),c.a.createElement("h2",{id:"enhancements-to-existing-applications"},"Enhancements to Existing Applications"),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased features should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),": Unreleased features can be made available on www.va.gov by checking ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the enhancement can be done by adding this name/value to the local storage",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present.")))),c.a.createElement("h2",{id:"new-applications"},"New Applications"),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased applications should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),":"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on www.va.gov by checking ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the application can be done by adding this name/value to the local storage",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present."))))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on production behind a password by setting ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"protected: yes")," in ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/e1030d1a499e39eaeceb8f4bdcbd33baf7ee946d/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml"}},"react_routes.yml"),". External teams should work with their DSVA contact to request support for enabling this.")),c.a.createElement("h2",{id:"new-content-pages"},"New Content Pages"),c.a.createElement(m.MDXTag,{name:"p",components:a},"Unreleased content pages should always be made available on ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," by adding an exclusion flag to the front matter of the content page. For example, because this front matter includes ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vagovprod: false"),", this content page would be excluded from the build for the production environment:"),c.a.createElement(m.MDXTag,{name:"pre",components:a},c.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},'---\ntitle: Apply for disability benefits\nvagovprod: false\n---\n<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"\nid="va-breadcrumbs">\n')),c.a.createElement(m.MDXTag,{name:"p",components:a},"Content pages can be excluded from any or all of these environments:"),c.a.createElement(m.MDXTag,{name:"pre",components:a},c.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},"vagovprod: false\nvagovstaging: false\nvagovdev: false\nlocalhost: false\n")),c.a.createElement("h2",{id:"writing-good-feature-flags"},"Writing Good Feature Flags"),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"New features or applications should be merged often so they can be included as part of the daily continuous integration deploy."),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Feature flagged enhancements should be made with code that is ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to"}},"easy to delete"),"- ideally done simply and with as few checks as possible. Repeating yourself is okay in feature flagged code.",c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Making code that's easy to delete ensures that deprecated code is quickly removed once a feature is released."))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Making features or applications available in production should done only as needed for testing with users.")))},a}(c.a.Component),u={}},340:function(e,a,n){"use strict";n.d(a,"b",function(){return l});var t=n(2),o=n.n(t),r=n(13),s=n.n(r),i=n(68),c=n.n(i);n.d(a,"a",function(){return c.a});n(342);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},341:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,a,n){var t;e.exports=(t=n(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,a,n){"use strict";n.r(a);var t=n(18),o=n.n(t),r=n(2),s=n.n(r),i=n(13),c=n.n(i),m=n(94),l=n(9),d=function(e){var a=e.location,n=l.default.getResourcesForPathnameSync(a.pathname);return n?s.a.createElement(m.a,o()({location:a,pageResources:n},n.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=d},345:function(e,a,n){"use strict";var t=n(3),o=n.n(t),r=n(343),s=n(2),i=n.n(s),c=n(13),m=n.n(c),l=n(348),d=n.n(l),p=n(340),u=(n(17),n(133),n(134),n(341)),g=n.n(u),h=n(18),f=n.n(h),v=n(349),b=n.n(v),E=function(e){function a(a){var n;return(n=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var n;return f()(((n={})[a.id]=!1,n),e)},{}),n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,n=a.open,t=a.onClose,o=a.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return i.a.createElement("div",{key:a.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[a.id]=!e.state[a.id],n))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),i.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(i.a.Component),y=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={navOpen:!1},n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(i.a.Component),w=(n(350),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var n=a.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,a=e.children,n=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:n}),a)},data:r})},a}(i.a.Component));w.propTypes={children:m.a.node.isRequired};a.a=w},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(13),s=n.n(r),i=n(345),c=(n(133),n(134),n(135),n(17),n(346)),m=n(340);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function d(e){var a=e.items,n=e.isSublist,t=void 0!==n&&n;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=n(341),u=n.n(p);function g(e){var a=e.location,n=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function h(e){var a=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-feature-flags-mdx-087a0e6d624a8c605ef9.js.map