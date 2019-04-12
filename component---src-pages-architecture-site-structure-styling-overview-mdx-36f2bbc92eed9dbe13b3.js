(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{281:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),s=t(2),i=t.n(s),c=t(4),l=t(315),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement(c.MDXTag,{name:"h1",components:n},"CSS General Info"),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Background"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Written in ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/"}},"Sass")," using the ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html"}},"SCSS")," syntax",i.a.createElement(c.MDXTag,{name:"blockquote",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. In addition, SCSS understands most CSS hacks and vendor-specific syntax, such as IE's old filter syntax. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Files resides in ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/sass"}},"src/sass")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Frameworks and libraries include:",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/"}},"U.S. Web Design System (USWDS)"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"GitHub Repo")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://foundation.zurb.com/sites/docs/v/5.5.3/"}},"Foundation"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Included only partially, for grid and responsive utilities"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Using Foundation classes should be avoided as we plan to remove it eventually."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://fontawesome.io/"}},"Font Awesome")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Compiled to CSS using Webpack")),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Directory structure"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"root/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is defined in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Includes global imports, such as our frameworks and libraries"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Temporary style lives in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_shame.scss")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other files at the root-level are considered page-specific"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"base/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles and overrides that will be imported into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-variables.scss")," - site-wide colors and units, many of which are from USWDS."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_va.scss")," - Site-wide style declarations for global components/elements"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_b-breakpoints.scss")," - This is used to reconcile naming conflicts and differing responsive breakpoints between USWDS and Foundation."))))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"modules/"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains site-wide styles for individual components that are generally reusable across the website."))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Other folders",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Generally used only for specific applications/pages of the website that are organized in a directory rather than a single file.")))))),i.a.createElement(c.MDXTag,{name:"h1",components:n},"Webpack/Compilation"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Sass is configured and compiled into CSS via Webpack",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Configuration at ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"config/webpack.config.js")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Website is broken into a series of entry files, one of which is the site-wide file, ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style.scss"),", while the rest are entry points for applications defined as ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"JSX")," files."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Site-wide style is compiled into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/generated/style.css"),", which is linked to in the header of the website and therefore available on all pages."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"An import statement within a JavaScript file is used to include style for a specific application. You should also define your application's entry point in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryPoint")," map of the Webpack configuration, so that your application's code and style are not included in every page. The key you use to define your application's entry point in that map will also be used as the file name for the generated JavaScript as well as CSS. Files in the content directory can then define an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryname")," property to link to those files.")),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Example Application"),i.a.createElement(c.MDXTag,{name:"h5",components:n},"config/webpack.config.js"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const entryFiles = {\n  // ...\n  'my-application': './src/applications/my-application/entry.jsx'\n  // ...\n")),i.a.createElement(c.MDXTag,{name:"h5",components:n},"content/somewhere/some-application.md"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'---\ntitle: My Application\nlayout: page-react.html\nentryname: my-application\n---\n<p> Some content</p>\n<div id="react-entry"></div>\n')),i.a.createElement(c.MDXTag,{name:"h5",components:n},"src/applications/my-application/entry.jsx"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// Our Webpack configuration will use the file extension to determine how to handle that import, which in our case is to compile it into a CSS file.\nimport '../../sass/my-application.scss';\n")),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Static Assets"),i.a.createElement(c.MDXTag,{name:"p",components:n},"The ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/")," directory is used for storing images, fonts, and other files you may want to have reside outside of the Webpack build system. During build time, the contents of that directory will be moved as-is to the build output, so ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/assets/js/something.js")," will be moved to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"root/build/development/js/something.js"),", which means it can be linked to in the website with ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/js/something.js"),"."),i.a.createElement(c.MDXTag,{name:"h1",components:n},"Roadmap Ahead"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Keep up-to-date with USWDS",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://designsystem.digital.gov/whats-new/"}},"What's New")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Foundation needs to go entirely. We should opt for the USWDS grid system or Flexbox instead."),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Reduce the shame file")))},n}(i.a.Component),d={}},310:function(e,n,t){var a;e.exports=(a=t(312))&&a.default||a},311:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},312:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),s=t(13),i=t.n(s),c=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(c.a,o()({location:n,pageResources:t},t.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=p},313:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},314:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},315:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(311),m=t(2),s=t.n(m),i=t(13),c=t.n(i),l=t(316),p=t.n(l),u=t(68),d=t.n(u),g=(t(310),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};t(17),t(133),t(134),t(135);var f=t(313);function E(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(T,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function T(e){var n=e.items;return n.length?s.a.createElement("ul",{className:"menu-list"},n.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(T,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var y=t(314),D=t.n(y);function M(e){var n=e.location,t=D.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,t.name),s.a.createElement(d.a,{className:"home-link",to:""},"Home"),s.a.createElement(T,{items:t.items})),!t&&s.a.createElement("ul",{className:"menu-list"},D.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.a,{to:e.href},e.name))})))}t(317);var b=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(M,{location:t}),s.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(s.a.Component);b.propTypes={children:c.a.node.isRequired};n.a=b}}]);
//# sourceMappingURL=component---src-pages-architecture-site-structure-styling-overview-mdx-36f2bbc92eed9dbe13b3.js.map