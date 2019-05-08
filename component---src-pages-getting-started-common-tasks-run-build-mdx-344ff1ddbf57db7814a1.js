(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{300:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),c=a(2),l=a.n(c),s=a(4),p=a(341),i={},g=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:n},l.a.createElement("h1",{id:"run-and-build-vagov"},"Run and build VA.gov"),l.a.createElement("h2",{id:"prerequisite"},"Prerequisite"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Complete the ",l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started"}},"first")," step in ",l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"li"},"Start up guide"),".")),l.a.createElement("h2",{id:"locally-run-vagov"},"Locally run VA.gov"),l.a.createElement(s.MDXTag,{name:"p",components:n},"Start the watch task:"),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),l.a.createElement("h3",{id:"build"},"Build"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," manages this build pipeline. At a high level, this process:",l.a.createElement(s.MDXTag,{name:"ol",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"retrieves and ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," all of the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," sourced from ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")," or Drupal"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"starts ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack"),"'s devevelopment server which",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," bundles, and"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"serves")," the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," bundles and the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static content")," built by Metalsmith at ",l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://localhost:3000"}},"http://localhost:3000"))))))),l.a.createElement("h3",{id:"output"},"Output"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," outputs ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," to",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build/localhost")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack")," development server has ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"no output"),". ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," are kept in memory.")),l.a.createElement("h3",{id:"watch-and-rebuild"},"Watch and rebuild"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Metalsmith")," will rebuild ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," when changes are saved to ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"templates")," or content in ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Webpack")," development server will rebuild when changes are saved to ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," or ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"SCSS")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Both updates require a browser refresh to see changes."),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.")),l.a.createElement("h2",{id:"locally-build-and-run-for-specific-environment"},"Locally build and run for specific environment"),l.a.createElement(s.MDXTag,{name:"p",components:n},l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Note: most of the time, it's better to use the ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"watch")," task to build the site locally since it is the most developer-friendly experience.")),l.a.createElement(s.MDXTag,{name:"table",components:n},l.a.createElement(s.MDXTag,{name:"thead",components:n,parentName:"table"},l.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"thead"},l.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Environment"),l.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Build Command"),l.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Output directory"),l.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Run Command"))),l.a.createElement(s.MDXTag,{name:"tbody",components:n,parentName:"table"},l.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"localhost"),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn build")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/localhost")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/localhost"))),l.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"dev.va.gov"),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"yarn build --buildtype=vagovdev")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovdev")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovdev"))),l.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"staging.va.gov"),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovstaging")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovstaging")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovstaging"))),l.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"www.va.gov"),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovprod")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"build/vagovprod")),l.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"npx http-server -p 3001 build/vagovprod"))))),l.a.createElement("h3",{id:"build-commands"},"Build commands"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"create")," the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," from the markdown content in the ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vagov-content")," repository and data queried from the Drupal API into their ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"create")," the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"JavaScript")," and ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"CSS")," files with Webpack into ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/generated")," folder in their ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")," with Webpack")),l.a.createElement(s.MDXTag,{name:"p",components:n},l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Production like builds are required for staging and production environments. ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"em"},"NODE_ENV=production")," environment variable is required to be set when running these build commands")),l.a.createElement("h3",{id:"run-commands"},"Run commands"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"start")," an ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"http-server")," that ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"serves")," the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"static pages")," from the ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"output directory")," at ",l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://localhost:3001"}},"http://localhost:3001"))),l.a.createElement(s.MDXTag,{name:"p",components:n},l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect.")),l.a.createElement(s.MDXTag,{name:"p",components:n},l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"em"},"Deep-linking")," to urls that are rendered by ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"em"},"React")," apps on VA.gov ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"em"},"will not work")," when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"watch")," task)")),l.a.createElement("h2",{id:"related-source"},"Related source"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops"}},"Metalsmith build script")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js"}},"Webpack development server config"))))},n}(l.a.Component),d={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},341:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),c=a(343),l=(a(133),a(134),a(135),a(17),a(340)),s=a(342);function p(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(i,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:l})}function i(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(s.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var g=a(344),d=a.n(g);function u(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-run-build-mdx-344ff1ddbf57db7814a1.js.map