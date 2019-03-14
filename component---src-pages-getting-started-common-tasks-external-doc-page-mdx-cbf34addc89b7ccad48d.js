(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(41);var a=n(42),o=n.n(a),r=n(3),s=n.n(r),m=n(2),c=n.n(m),i=n(4),p=n(307),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=p.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},c.a.createElement(i.MDXTag,{name:"h2",components:t},"Adding External Pages from Github API"),c.a.createElement(i.MDXTag,{name:"p",components:t},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),c.a.createElement(i.MDXTag,{name:"h3",components:t},"Why?"),c.a.createElement(i.MDXTag,{name:"p",components:t},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),c.a.createElement(i.MDXTag,{name:"h3",components:t},"How to Add External pages"),c.a.createElement(i.MDXTag,{name:"p",components:t},"I have created helper functions for the GitHub Api located in ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"services/github-api.js"),".\nWe should store all our utility function for the GitHub Api here. That way we have one source of truth. We can add to this file as needed."),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"getPageAndCreatePage"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"getDirectoryAndCreatePages")),c.a.createElement(i.MDXTag,{name:"p",components:t},"You will need to run these functions in the ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"exports.sourceNodes")," lifecycle hook.\nThis can be found in the ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-node.js")," file."),c.a.createElement(i.MDXTag,{name:"h5",components:t},"Limitations"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),c.a.createElement(i.MDXTag,{name:"h5",components:t},"Data you will need to make the API request"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Owner of the repo"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Repo name"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"File directory you want to add or file fileName")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Example:"),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Work Practices/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},c.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),c.a.createElement(i.MDXTag,{name:"h2",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/eeb7c/github-file-directory.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",maxWidth:"665px",marginLeft:"auto",marginRight:"auto"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.323308270676693%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"github file directory",title:"",src:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/4e447/github-file-directory.png",srcSet:"/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/6e98a/github-file-directory.png 259w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/733a6/github-file-directory.png 518w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/4e447/github-file-directory.png 1035w,\n/veteran-facing-services-tools/static/9351180725b6bc47870739d8a8fd4a71/eeb7c/github-file-directory.png 1330w",sizes:"(max-width: 665px) 100vw, 665px"})))),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Here is how to use the utility functions:"),"\nThese functions will do an API request then create a Gatsby nodes so you can create pages within the system."),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"getPageAndCreatePage")," - This will add only 1 page in Gatsby"),c.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPageAndCreatePage({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices/Accessing-Staging.md',\n  }, createNode);\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"getDirectoryAndCreatePages")," - This will add all markdown pages in a directory"),c.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst githubApi = require('./services/github-api');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getDirectoryAndCreatePages({\n    owner: 'department-of-veterans-affairs',\n    repo: 'vets.gov-team',\n    dir: 'Work Practices',\n  }, createNode);\n}\n")))),c.a.createElement(i.MDXTag,{name:"h3",components:t},"How it Works"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Use Gatsby's ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Create a Gatsby Node for the pages"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Use ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),c.a.createElement(i.MDXTag,{name:"h4",components:t},"Use Gatsby's ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"sourceNodes")," lifecycle hook to get data."),c.a.createElement(i.MDXTag,{name:"p",components:t},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript{numberLines:",metastring:"true}","true}":!0}},"  // gatsby-node.js\n\n  exports.sourceNodes = async ({\n    boundActionCreators,\n    getNode,\n    hasNodeChanged,\n  }) => {\n    const { createNode } = boundActionCreators\n\n  }\n")),c.a.createElement(i.MDXTag,{name:"h4",components:t},"Use GitHub's GraphQL API to query page information from GitHub"),c.a.createElement(i.MDXTag,{name:"p",components:t},"Now we have to do a API request using the Github GraphQL API. You can use the ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Here is an example of what it looks like."),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),c.a.createElement(i.MDXTag,{name:"h4",components:t},"Create a Gatsby Node for the pages"),c.a.createElement(i.MDXTag,{name:"p",components:t},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),c.a.createElement(i.MDXTag,{name:"h4",components:t},"Use gatsby-transformer-remark to convert the markdown data into an html document"),c.a.createElement(i.MDXTag,{name:"p",components:t},"When we did a ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"createNode")," we set the ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"gatsby-transformer-remark"),"."),c.a.createElement(i.MDXTag,{name:"h3",components:t},"Create pages using the createPages lifecycle hook"),c.a.createElement(i.MDXTag,{name:"p",components:t},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},t}(c.a.Component),u={}},301:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),m=n(66),c=n.n(m);n.d(t,"a",function(){return c.a});n(302);var i=o.a.createContext({}),p=function(e){return o.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},302:function(e,t,n){var a;e.exports=(a=n(304))&&a.default||a},303:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},304:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),m=n(13),c=n.n(m),i=n(93),p=n(9),l=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},305:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}}]}}}},306:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test",href:"getting-started/common-tasks/write-unit-test"},{name:"Writing an end-to-end test",href:"getting-started/common-tasks/write-e2e-test"},{name:"Updating Formation",href:"getting-started/common-tasks/update-formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},307:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(303),s=n(2),m=n.n(s),c=n(13),i=n.n(c),p=n(308),l=n.n(p),d=n(301),u=(n(17),n(132),n(133),n(134),n(305));function g(){return m.a.createElement(d.b,{query:"2758471434",render:function(e){return m.a.createElement(h,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:u})}function h(e){var t=e.items;return t.length?m.a.createElement("ul",{className:"menu-list"},t.map(function(e){return m.a.createElement("li",{key:e.name},!!e.items&&m.a.createElement("li",{key:e.name},m.a.createElement("h4",null,e.name),m.a.createElement(h,{items:e.items})),"componentList"===e.query&&m.a.createElement("li",{key:e.name},m.a.createElement("h4",null,e.name),m.a.createElement(g,null)),!!e.href&&m.a.createElement("li",{key:e.name},m.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&m.a.createElement("li",{key:e.href},m.a.createElement(d.a,{to:e.href},e.name)))})):null}var f=n(306),b=n.n(f);function y(e){var t=e.location,n=b.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return m.a.createElement("aside",{className:"sidebar"},m.a.createElement("div",{className:"search"},m.a.createElement("div",{className:"input-wrap"},m.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,n.name),m.a.createElement(d.a,{className:"home-link",to:""},"Home"),m.a.createElement(h,{items:n.items})),!n&&m.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return m.a.createElement("li",{key:e.id},m.a.createElement(d.a,{to:e.href},e.name))})))}n(309);var E=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(y,{location:n}),m.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(m.a.Component);E.propTypes={children:i.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-external-doc-page-mdx-cbf34addc89b7ccad48d.js.map