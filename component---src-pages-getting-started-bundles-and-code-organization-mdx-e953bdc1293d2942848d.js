(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{288:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),l=a(2),i=a.n(l),c=a(4),s=a(312),p={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=s.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},i.a.createElement(c.MDXTag,{name:"h1",components:n},"Bundle and Code Organization"),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Files Overview"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/config"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"jest configs - proof of concepts- not used in CI",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-integration.config.js")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-vrt.config.js")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Nightwatch e2e test runner and configurations",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-globals-sauce.js")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-sauce.js")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.docker-compose.js")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.js")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"sass config: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sass-lint.yml")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"webpack production and dev configs",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.config.js")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.dev.config.js")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"build setup script",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"manifest-loader.js")," - passes front matter of content files to app entry files\n- ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"parse-app-settings.js")," - reads settings.js - a file containing app information generated during Metalsmith build"))))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/docs")," - best practices and troubleshooting docs"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/jenkins")," - jenkins setup, build, deploy script for ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-websites")," repo"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/script"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/custom-eslint")," - project specific linting plugin"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/hooks")," - -git -precommit hook"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"app-list.sh")," - bash script that outputs a list of the applications in vets-website"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build.js")," - imports and runs build script in src/site/stages/build"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"csv-path-builder.js")," - TODO"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"heroku-postbuild.sh")," - static content builder used by Heroku when a new branch is pushed"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mocha.js")," - unit test runner and watch task"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prearchive.js")," - updates paths to js, css, and image assets to point to S3 asset bucket"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prebuild.js")," - npm prebuild script that checks node version and install precommit hooks"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"preview.js")," - metalsmith build script for drupal preview"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"reset-environment.js")," - installs yarn and cleans up node_modules- used by build process"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-coverage.sh")," - runs mocha unit test coverage report"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-docker-nightwatch.sh")," - runs mock vets-api with docker"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-mockapi.sh")," - runs js mock vets-app"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-nightwatch.sh")," - test harness for running end to end tests"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-puppeteer-tests.sh")," - test harness for puppeteer tests (proof of concept)"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-unit-test.sh")," - runs unit tests"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"security-check.js")," - checks for security advisories in dependencies"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"update-json-schema.js")," - helper for updating dependency version of vets-jason-schema"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"watch.js")," - watch task for unit tests (proof of concept)"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/src")," - source files for vets-website web applications",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/applications")," - application specific code that's into -entry.js files"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/platform")," - shared code that's includes polyfilles, code thats injected directly into the site, or used for testing"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/site")," - Metalsmith pipeline code and templates used to generate static content pages from Drupal api or Markdown files"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"runtime configs used locally and in CI for builders, dependency managers, linters, transcoders, and source control",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"babel: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".bablerc")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"docker: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".dockerignore"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Dockerfile"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"docker-compose.yml")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"eslint: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintrc"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintignore")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"git: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".gitignore")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"nvm: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".nvmrc")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"prettier (linting runtime used with eslint): ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".prettierrc")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"yarn: ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".yarnrc"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn.lock"),", ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"package.json")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Procfile, app.json - TODO some heroku thing"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"json-config-example.json")," - intellisense config for supporting babel module-resolver plugin")),i.a.createElement(c.MDXTag,{name:"h2",components:n},"Application Bundling with Webpack"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"most applications leverage the ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://webpack.js.org/plugins/commons-chunk-plugin/"}},"CommonsChunkPlugin")," to code split their source into\n- entries files that are application specific e.g. facilities-locator.entry.js, and\n- a vendor.js file containing common modules shared between entry points"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Webpage loads application specific files on demand. More information on this can be found in ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://webpack.js.org/guides/code-splitting/"}},"Webpack code splitting"))),i.a.createElement(c.MDXTag,{name:"h3",components:n},"Common bundles"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"settings.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"adds ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"window.settings"),"- a globally available object containing build and application settings"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by metasmith plugin src/site/stages/build/plugins/create-build-settings.js"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"consumed by webpack loader config/manifest-loader primarily for application routes"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"common entry files included on every page",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vendor.entry.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack's SplitChunksPlugin"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"includes shared dependencies including react, redux, and node_modules"))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uswds.entry.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"U.S. Web Design System's JavaScript npm module: ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/uswds/uswds"}},"https://github.com/uswds/uswds")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack code splitting with an dynamic import in src/platform/site-wide/index.js"))))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"examples of application entry files",i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"static-pages.entry.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"included on all non-react pages"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"e.g. ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov"}},"https://www.va.gov")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gi.entry.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"stand alone react app"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/gi-bill-comparison-tool"}},"https://www.va.gov/gi-bill-comparison-tool")))),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pre-need.entry.js"),i.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"react app that uses the forms system"),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"}},"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"))))))))},n}(i.a.Component),d={}},307:function(e,n,a){var t;e.exports=(t=a(309))&&t.default||t},308:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},309:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),m=a(2),r=a.n(m),l=a(13),i=a.n(l),c=a(94),s=a(9),p=function(e){var n=e.location,a=s.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,o()({location:n,pageResources:a},a.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=p},310:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}}]}}}},311:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},312:function(e,n,a){"use strict";var t=a(3),o=a.n(t),m=a(308),r=a(2),l=a.n(r),i=a(13),c=a.n(i),s=a(313),p=a.n(s),u=a(68),d=a.n(u),g=(a(307),l.a.createContext({})),h=function(e){return l.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(17),a(133),a(134),a(135);var E=a(310);function f(){return l.a.createElement(h,{query:"157057713",render:function(e){return l.a.createElement(T,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:E})}function T(e){var n=e.items;return n.length?l.a.createElement("ul",{className:"menu-list"},n.map(function(e){return l.a.createElement("li",{key:e.name},!!e.items&&l.a.createElement("li",{key:e.name},l.a.createElement("h4",null,e.name),l.a.createElement(T,{items:e.items})),"componentList"===e.query&&l.a.createElement("li",{key:e.name},l.a.createElement("h4",null,e.name),l.a.createElement(f,null)),!!e.href&&l.a.createElement("li",{key:e.name},l.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&l.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var M=a(311),D=a.n(M);function N(e){var n=e.location,a=D.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return l.a.createElement("aside",{className:"sidebar"},l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"input-wrap"},l.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,a.name),l.a.createElement(d.a,{className:"home-link",to:""},"Home"),l.a.createElement(T,{items:a.items})),!a&&l.a.createElement("ul",{className:"menu-list"},D.a.sections.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(d.a,{to:e.href},e.name))})))}a(314);var X=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return l.a.createElement(h,{query:"1044757290",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(N,{location:a}),l.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:m})},n}(l.a.Component);X.propTypes={children:c.a.node.isRequired};n.a=X}}]);
//# sourceMappingURL=component---src-pages-getting-started-bundles-and-code-organization-mdx-e953bdc1293d2942848d.js.map