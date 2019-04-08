(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return d});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),c=n(2),s=n.n(c),i=n(4),l=n(311),p={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(i.MDXTag,{name:"h1",components:t},"Linting your code"),s.a.createElement(i.MDXTag,{name:"p",components:t},"We use ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://eslint.org/"}},"ESLint")," to lint our code, in order to find bugs and enforce consistency across the codebase. To enforce a common Javascript style, we use ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io/"}},"Prettier")," through an ESLint plugin."),s.a.createElement(i.MDXTag,{name:"p",components:t},"We also lint our Sass styles using ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/sasstools/sass-lint"}},"sass-lint"),"."),s.a.createElement(i.MDXTag,{name:"h2",components:t},"Commands"),s.a.createElement(i.MDXTag,{name:"p",components:t},"You can run the linters with the command"),s.a.createElement(i.MDXTag,{name:"p",components:t},s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn lint")),s.a.createElement(i.MDXTag,{name:"p",components:t},"If you just want to run the Javascript linter, you can run ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn lint:js"),", or ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn lint:sass")," for the Sass linter."),s.a.createElement(i.MDXTag,{name:"h2",components:t},"Pre-commit hook"),s.a.createElement(i.MDXTag,{name:"p",components:t},"We also have a pre-commit Git hook that will lint the files being changed before you commit them. If you don't see this being run, you may need to run ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build")," once to install the hook."),s.a.createElement(i.MDXTag,{name:"p",components:t},"Our linting rules are enforced in our CI build, but you can skip the pre-commit hook by using the ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"-n")," option when running ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"git commit"),"."),s.a.createElement(i.MDXTag,{name:"h2",components:t},"Editor setup"),s.a.createElement(i.MDXTag,{name:"p",components:t},"We strongly recommend that you set up your editor to show you ESLint errors automatically as you're writing code. This makes the linter far less annoying in day to day use. ESLint has ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://eslint.org/docs/user-guide/integrations"}},"integrations")," for nearly all popular editors."))},t}(s.a.Component),d={}},306:function(e,t,n){var a;e.exports=(a=n(308))&&a.default||a},307:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},308:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),c=n(13),s=n.n(c),i=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},309:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}}]}}}},310:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},311:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(307),m=n(2),c=n.n(m),s=n(13),i=n.n(s),l=n(312),p=n.n(l),u=n(68),d=n.n(u),h=(n(306),c.a.createContext({})),f=function(e){return c.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};n(17),n(133),n(134),n(135);var g=n(309);function E(){return c.a.createElement(f,{query:"157057713",render:function(e){return c.a.createElement(y,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:g})}function y(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(y,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(E,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var b=n(310),x=n.n(b);function v(e){var t=e.location,n=x.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(d.a,{className:"home-link",to:""},"Home"),c.a.createElement(y,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},x.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(d.a,{to:e.href},e.name))})))}n(313);var w=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(f,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(v,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);w.propTypes={children:i.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-lint-mdx-7bfc4a1a3424ca4618f6.js.map