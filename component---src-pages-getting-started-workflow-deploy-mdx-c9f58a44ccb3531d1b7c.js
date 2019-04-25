(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{328:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),m=a.n(r),s=a(2),i=a.n(s),c=a(4),l=a(345),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},i.a.createElement("h1",{id:"deploy"},"Deploy"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),i.a.createElement("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),i.a.createElement(c.MDXTag,{name:"table",components:t},i.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Application"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Branch"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Changes in by"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Deployment Start"),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Release History"))),i.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"vets-website"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"vets-api"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"master"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),i.a.createElement("h2",{id:"overview"},"Overview"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Jenkins performs the following tasks after a pull request is merged into ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Build")," ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Deploy")," to development and staging using deployment artifact"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"A big assumption in this process is that the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),i.a.createElement("h2",{id:"process-details"},"Process details"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),i.a.createElement(c.MDXTag,{name:"p",components:t},"Every work day at the configured time a ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),i.a.createElement(c.MDXTag,{name:"p",components:t},"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Deploy")," to production using deployment artifacts")),i.a.createElement(c.MDXTag,{name:"p",components:t},"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),i.a.createElement("h2",{id:"rollbacks"},"Rollbacks"),i.a.createElement(c.MDXTag,{name:"p",components:t},"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),i.a.createElement(c.MDXTag,{name:"p",components:t},"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),i.a.createElement("h2",{id:"manual-deployment"},"Manual deployment"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Two out-of-cycle deploys are supported in Jenkins:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"partial deploy including only static page changes (",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vagov-content")," and ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Drupal"),")"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"full deploy of VA.gov client app and static pages")),i.a.createElement("h3",{id:"before-deploying"},"Before deploying"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Wait for ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Jenkins")," to ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"build the change")," in ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"vets-website")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Builds status can be viewed ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}},"here"),". ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"Requires SOCKS proxy. See ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"em",props:{href:"/getting-started/internal-tools"}},"Accessing internal tools"))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),i.a.createElement("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Start a deploy job"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Log into Jenkins ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Build with Parameters")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Set the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"release_wait")," option to ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"5")," minutes"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Check ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"use_latest_release")," <-- ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"important")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Build")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Verify commits in ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"deployment notification"))),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"In Slack channel ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"em"},"deploy notification"),"."))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Verify")," changes in ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"production")," once the build finishes"))),i.a.createElement("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),i.a.createElement(c.MDXTag,{name:"ol",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Last deployment time"),": You can check the build ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"history")," for the time of the last deploy (usually daily at 2pm EST)"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Commit history"),": ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}},"Look")," for commits after the last deploy and verify they're production ready.")))),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"You may need to contact the developers of those commits to verify.")),i.a.createElement(c.MDXTag,{name:"ol",components:t,props:{start:2}},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},"Start a deploy job"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Log into Jenkins ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Build with Parameters")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Set the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"release_wait")," option to ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"5")," minutes"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Uncheck ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"use_latest_release")," <-- ",i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"li"},"important")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Click ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Build")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Verify commits in ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"deployment notification"))),i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"In Slack channel ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"em"},"deploy notification"),"."))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Verify")," changes in ",i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"production")," once the build finishes"))))},t}(i.a.Component),u={}},338:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),m=a.n(r),s=a(68),i=a.n(s);a.d(t,"a",function(){return i.a});a(340);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},339:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,t,a){var n;e.exports=(n=a(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),m=a.n(r),s=a(13),i=a.n(s),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?m.a.createElement(c.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},343:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(341),m=a(2),s=a.n(m),i=a(13),c=a.n(i),l=a(346),p=a.n(l),d=a(338),u=(a(17),a(133),a(134),a(339)),g=a.n(u),h=a(18),f=a.n(h),E=a(347),v=a.n(E),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=g.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return s.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(t){return s.a.createElement("div",{key:t.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),s.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(s.a.Component),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(b,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(s.a.Component),y=(a(348),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(N,{location:a}),t)},data:r})},t}(s.a.Component));y.propTypes={children:c.a.node.isRequired};t.a=y},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),m=a.n(r),s=a(343),i=(a(133),a(134),a(135),a(17),a(344)),c=a(338);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(339),u=a.n(d);function g(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function h(e){var t=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-c9f58a44ccb3531d1b7c.js.map