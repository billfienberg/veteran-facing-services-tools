(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),s=n(2),i=n.n(s),c=n(4),l=n(321),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Create a Gatsby Remark plugin"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Gatsby uses a plugin called ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-remark/"}},"gatsby-transformer-remark"),"\nto convert markdown to html. Our MDX plugin ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-mdx/"}},"gatsby-mdx")," uses this plugin\nto convert markdown to html. We needed to create a way to add graphs to our MDX files so we tried to implement another plugin that adds the ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mermaidjs.github.io/"}},"mermaid")," feature to markdown. The problem was that it had conflicts with MDX files. This article will detail how we added our own plugin locally to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-transformer-remark")," plugin to solve this issue."),i.a.createElement(c.MDXTag,{name:"h3",components:t},"What are we doing"),i.a.createElement(c.MDXTag,{name:"p",components:t},"We needed a way to generate graphs using markdown like the code below. Normally this is done using the mermaid library. That is what we are going to use, but we need it to work with MDX files. Below is an example of what we are trying to do."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Markdown")),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"HTML Output")),i.a.createElement("div",{className:"mermaid"},"graph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Remark uses a plugin system that enables you to do some customization when the markdown gets converted into html through Remark. That is what we are going to use to convert our markdown into a graph."),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"First we need to create a plugin that we can add to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-transformer-remark")," plugin."),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Below is the code we are using to generate the html to convert our code into graphs. When adding this to the plugin, this code will run during the transformation phase. In this code we are taking the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"mardownAST")," and finding mermaid specific code on the page. Then we change the code to html."),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// plugins/remark/gatsby-remark-mdx-mermaid/index.js\n\nconst visit = require('unist-util-visit');\n\nmodule.exports = ({ markdownAST }, { language = 'mermaid', theme = 'default' } = {}) => {\n  visit(markdownAST, 'code', node => {\n    let lang = (node.lang || '').toLowerCase()\n    if (lang === language) {\n      node.type = 'html'\n      node.value = '<div class=\"mermaid\">{' + '`'+ node.value + '`'+ '}</div>'\n    }\n  })\n}\n")),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"This markdown code:"),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Will generate:"),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'<div class="mermaid">\n`\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n`\n</div>\n')),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Notice the back ticks inside the innerText. This was done because of MDX. MDX was interpreting the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"{}")," as JSX templating which causes an error. So we need to wrap the code in back ticks to make it work with MDX files.")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Add it to our MDX remarks plugin."),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"In our ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-config.js")," file we need to add our plugin to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-mdx plugin"),". Because this is a Remark plugin we need to add it to ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsbyRemarkPlugins"),". This is where you can add ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-transformer-remark")," specific plugins."),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\n{\n  resolve: `gatsby-mdx`,\n  options: {\n    extensions: ['.mdx'],\n    mediaTypes: ['text/x-markdown'],\n    defaultLayouts: {\n      default: require.resolve(\"./src/layouts/layout.js\"),\n    },\n    gatsbyRemarkPlugins: [\n      {\n        resolve: path.resolve(__dirname, './plugins/remark/gatsby-remark-mdx-mermaid'),\n        options: {\n          language: 'mermaid',\n          theme: 'default'\n        }\n      }\n    ],\n  }\n}\n"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Add the mermaid library so it can convert our code into SVG graphs"),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Because mermaid is a client side library we need to include it when the build is rendered on the client-side.\nTo do this we add some code to our Layout Component that will inject the script in the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"componentDidMount")," lifecycle hook."),i.a.createElement(c.MDXTag,{name:"pre",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"class Layout extends React.Component {\n  componentDidMount() {\n    window.mermaid_config = { theme: 'default', startOnLoad: true }\n    const s = document.createElement('script');\n    s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js');\n    document.head.appendChild(s);\n\n    if (window.mermaid) {\n      window.mermaid.init(undefined, document.getElementsByClassName('mermaid'));\n    }\n  }\n  .....\n}\n"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Once all this all setup we are good to go."))))},t}(i.a.Component),u={}},316:function(e,t,n){var a;e.exports=(a=n(318))&&a.default||a},317:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},318:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),s=n(13),i=n.n(s),c=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},319:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},320:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},321:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(317),m=n(2),s=n.n(m),i=n(13),c=n.n(i),l=n(322),p=n.n(l),d=n(68),u=n.n(d),g=(n(316),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(17),n(133),n(134),n(135);var f=n(319);function w(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var t=e.items;return t.length?s.a.createElement("ul",{className:"menu-list"},t.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(w,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var b=n(320),x=n.n(b);function y(e){var t=e.location,n=x.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,n.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:n.items})),!n&&s.a.createElement("ul",{className:"menu-list"},x.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}n(323);var T=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:n}),s.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(s.a.Component);T.propTypes={children:c.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-getting-started-create-gatsby-remark-plugin-mdx-d0b1d66cb1f620f9be17.js.map