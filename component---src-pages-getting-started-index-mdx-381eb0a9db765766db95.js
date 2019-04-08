(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return d});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),c=n.n(s),l=n(4),i=n(310),p={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=i.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(l.MDXTag,{name:"h1",components:t},"Set up VA.gov locally"),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Node setup"),c.a.createElement(l.MDXTag,{name:"p",components:t},"To get started, you'll need to install Node.js and Yarn. Versions 8.10.0 and 1.12.3, respectively."),c.a.createElement(l.MDXTag,{name:"p",components:t},"The best way to do that is through a tool called ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nvm"),", which lets you manage multiple versions of Node on your machine.  This makes it easier to keep in sync with everyone else on the project. You can find installation instructions at ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/creationix/nvm#installation-and-update"}},"nvm's Github page"),", but if you're on a Mac you can use ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://brew.sh/"}},"homebrew")," to install it:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"brew update && brew install nvm\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},'There will be some further instructions in the success message after install "finishes".')),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you have ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nvm")," installed, you should install Node.js:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"nvm install 8.10.0\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},c.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"This will also install ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"npm"))),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you have node.js 8.10.0 you should set as the default version for nvm, you do that by running:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"nvm alias default 8.10.0\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Next install Yarn:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm i -g yarn@1.12.3\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you have Node and Yarn installed, you should verify that you have the correct versions:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"node --version # 8.10.0\nyarn --version # 1.12.3\n")),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Get the source code"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Most of the source for the front end of VA.gov lives in the ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," repository, but there are a few others you should clone:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"git clone git@github.com:department-of-veterans-affairs/vets-website.git\ngit clone git@github.com:department-of-veterans-affairs/vagov-content.git\ngit clone git@github.com:department-of-veterans-affairs/vets-json-schema.git\ngit clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},"These repos are the most important to have a basic understanding of:"),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"vets-website",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Front end platform and application code"))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"vagov-content",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Markdown content used to generate static pages (must be a sibling of vets-website)"))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"vets-json-schema",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Shared JSON Schema definitions used by form applications and the APIs that they consume"))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"veteran-facing-services-tools",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Shared code that we support for the broader VA (not just VA.gov), plus this documentation site"))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"vets-api",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"The repository for the Rails API backend."))),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"vets-api-mockdata",c.a.createElement(l.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Mock data used when running locally and on dev for the backend (must be a sibling of vets-api)")))),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Start up the front end"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you have Node and Yarn installed, you can install the dependencies for vets-website:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yarn install\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once this completes, you should be able to start up the site locally:"),c.a.createElement(l.MDXTag,{name:"pre",components:t},c.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once this builds (you'll see a message about Webpack compilation finishing), open up ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://localhost:3001"}},"http://localhost:3001")," and you should see the VA.gov homepage."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Set up the backend"),c.a.createElement(l.MDXTag,{name:"p",components:t},"You can find the backend set up instructions in the ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api")," repo. If possible, you should follow the Docker instructions, which are in the README for that repo."),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you've gone through that set up, you should verify that you can log in using one of the test accounts, which can be found in the ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Accessing-Staging.md"}},"Accessing Staging")," doc."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Internal tools"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Once you've got the site running locally, you'll also want to get set up with our ",c.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"internal-tools"}},"internal tools"),". This will enable you to render static pages that use Drupal data locally, as well as access our reporting and monitoring tools. "))},t}(c.a.Component),d={}},305:function(e,t,n){var a;e.exports=(a=n(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),c=n.n(s),l=n(94),i=n(9),p=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(l.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}}]}}}},309:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(306),m=n(2),s=n.n(m),c=n(13),l=n.n(c),i=n(311),p=n.n(i),u=n(68),d=n.n(u),g=(n(305),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};n(17),n(133),n(134),n(135);var f=n(308);function E(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(b,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function b(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(b,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var v=n(309),T=n.n(v);function y(e){var t=e.location,n=T.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(d.a,{className:"home-link",to:""},"Home"),s.a.createElement(b,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},T.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.a,{to:e.href},e.name))})))}n(312);var M=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);M.propTypes={children:l.a.node.isRequired};t.a=M}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-381eb0a9db765766db95.js.map