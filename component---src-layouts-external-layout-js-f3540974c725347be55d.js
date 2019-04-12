(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{275:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return m});var n=a(3),r=a.n(n),i=a(2),s=a.n(i),o=a(335),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.location;return s.a.createElement(o.a,{location:a},s.a.createElement("h2",null,t.markdownRemark.fields.slug),s.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}))},t}(i.Component),m="666931849"},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),r=a.n(n),i=a(13),s=a.n(i),o=a(68),c=a.n(o);a.d(t,"a",function(){return c.a});a(332);var m=r.a.createContext({}),l=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),i=a(2),s=a.n(i),o=a(13),c=a.n(o),m=a(94),l=a(9),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(m.a,r()({location:t,pageResources:a},a.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},335:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(333),s=a(2),o=a.n(s),c=a(13),m=a.n(c),l=a(338),d=a.n(l),u=a(330),h=(a(17),a(133),a(134),a(331)),f=a.n(h),p=a(18),g=a.n(p),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=f.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,r=t.location;return o.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},o.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},o.a.createElement("i",{className:"fas fa-times"})),o.a.createElement("div",{className:"usa-accordion "},f.a.sections.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},o.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),o.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},o.a.createElement("ul",{className:"site-c-mobile-nav-list"},o.a.createElement("li",{className:"site-c-mobile-nav-list__item"},o.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:r.pathname===t.href}),to:t.href},"Overview")))))})))},t}(o.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return o.a.createElement("div",null,o.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),o.a.createElement("header",{className:"site-c-header",role:"banner"},o.a.createElement("div",{className:"site-l-wrapper"},o.a.createElement("div",{className:"site-c-header__masthead"},o.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},o.a.createElement("em",{className:"site-c-header__logo-text"},o.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},o.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",o.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),o.a.createElement("div",{className:"site-c-header__utility-links"},o.a.createElement("div",{id:"search-container",className:"site-search-container"},o.a.createElement("i",{className:"fas fa-search search-icon"}),o.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),o.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),o.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},o.a.createElement("i",{className:"fas fa-search"})),o.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),o.a.createElement("nav",{className:"site-c-header__nav"},o.a.createElement("ul",{className:"site-c-header__nav-list"},f.a.sections.map(function(e){return o.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},o.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),o.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},o.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),o.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),o.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&o.a.createElement("div",{className:"site-c-overlay is-visible"}),o.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(o.a.Component),_=(a(340),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return o.a.createElement(u.b,{query:"1044757290",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(y,{location:a}),t)},data:i})},t}(o.a.Component));_.propTypes={children:m.a.node.isRequired};t.a=_}}]);
//# sourceMappingURL=component---src-layouts-external-layout-js-f3540974c725347be55d.js.map