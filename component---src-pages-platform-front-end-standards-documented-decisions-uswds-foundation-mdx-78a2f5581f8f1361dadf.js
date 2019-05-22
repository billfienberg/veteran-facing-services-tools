(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{331:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),m=t(2),c=t.n(m),i=t(4),l=t(350),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement("h1",{id:"uswdsfoundation"},"USWDS/Foundation"),c.a.createElement(i.MDXTag,{name:"table",components:n},c.a.createElement(i.MDXTag,{name:"thead",components:n,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"thead"},c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),c.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}))),c.a.createElement(i.MDXTag,{name:"tbody",components:n,parentName:"table"},c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Last Decision Made:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Keep Foundation for grid for now"),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Decision Date:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"05/2017")),c.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Decision:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"td"},"Revisit Date:")),c.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"06/2017")))),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Revisit Criteria:")," Once keeping Foundation with an older version of USWDS starts to create too much pain for developers, or once USWDS adds additional functionality that we need."),c.a.createElement("h2",{id:"summary"},"Summary"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We needed to reach a decision on whether or not to finish the work of stripping out Foundation."),c.a.createElement(i.MDXTag,{name:"p",components:n},"Pros:"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It would streamline our front-end frameworks"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It would reduce bloat"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It would enable us to upgrade to the latest version of USWDS")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Cons:"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It would be a huge investment of time and resources."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It wasn't actually causing that much developer pain to continue to use Foundation."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It might be possible to reduce bloat without having to totally remove Foundation"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"USWDS didn't have all the functionality we needed out of the box.")),c.a.createElement("h2",{id:"history"},"History"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Removing Foundation from vets-website became a project our team wanted to tackle for a few reasons:\n1. We wanted to remove bloat from our bundle (both in taking out Foundation and the JavaScript it relied upon)\n2. It seemed unnecessary to be including 2 separate grid frameworks in our codebase (Foundation and USWDS)\n3. Foundation had conflicts with the latest version of USWDS, preventing us from upgrading"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Tiffany Brown (front-end dev) had been working on trying to remove Foundation from vets-website for a few months. It was a tangled problem that touched every part of Vets.gov and had cascading effects."),c.a.createElement(i.MDXTag,{name:"p",components:n},"She left the team on Friday, May 12 with the following work:\n1. The ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/549"}},"original ticket")," that includes a ton of documentation\n2. An ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/pull/5353"}},"open PR"),"\n3. ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2739"}},"Hand-off notes")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Tiffany got us pretty far before she left, but there was still a good amount of work left to do to complete this project."),c.a.createElement("h2",{id:"decision-meeting---may-18-2017"},"Decision Meeting - May 18, 2017"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We set up a meeting to decide on next steps for finishing the work of stripping out Foundation."),c.a.createElement(i.MDXTag,{name:"p",components:n},"Attendees:"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Alex Yale-Loehr (Vets.gov tech lead)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Anne Kainic (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Jeff Balboni (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Claire Hsu (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Raquel Romano (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Ben Shyong (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Eugene Doan (Front-end dev)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Bill Hunt")),c.a.createElement(i.MDXTag,{name:"p",components:n},"There were 2 questions we had to answer:"),c.a.createElement(i.MDXTag,{name:"ol",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Was the work of stripping out Foundation and exclusively using USWDS worth the effort it was going to take?"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"If so, what was the best approach for doing it?")),c.a.createElement(i.MDXTag,{name:"p",components:n},"For question 1 (was the work worth the effort it would take), developers were not currently experiencing a lot of pain in having to work between USWDS and Foundation. We believed it might be possible to strip our jQuery and the Foundation JavaScript without having to remove the Foundation grid and visibility classes, the only part of Foundation we were currently using. This would take care of the bloat problem without having to go through the enormous effort of switching grid classes everywhere and fixing visual regression issues."),c.a.createElement(i.MDXTag,{name:"p",components:n},"An additional problem with removing Foundation was that USWDS did not provide all the functionality we needed that we currently got from Foundation (small width grid classes and visibility classes). We would either have to talk to the USWDS team and figure out a way to include those things in USWDS, or write our own styles on top of it so that we could do all the same things we were doing before with Foundation. This would mean additional time and resources."),c.a.createElement(i.MDXTag,{name:"p",components:n},"The one downside to deciding not to remove Foundation was that it seemed to conflict with the latest upgrade of USWDS. This would mean we could not keep up to date with USWDS releases."),c.a.createElement(i.MDXTag,{name:"p",components:n},"For question 2 (what was the best approach), if we decided to remove Foundation, we had 2 possible routes to do so:\n1. Have all the front-end developers devote 2-3 days of exclusively working on converting the grid classes for all the apps and content pages and get the changes merged as soon as possible."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Advantages: the fastest solution to finishing this work."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Disadvantages: an investment of resources and probably some pain.")),c.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:2}},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create a parallel set of styles that did not use Foundation, and move apps and content pages over to using the new set of styles when possible.")),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Advantages: gives us the flexibility to migrate when we have time."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Disadvantages: a lot of overhead work.")),c.a.createElement("h2",{id:"the-decision"},"The Decision"),c.a.createElement(i.MDXTag,{name:"p",components:n},"The short-term decision was to explore ways of not removing the Foundation grid."),c.a.createElement(i.MDXTag,{name:"p",components:n},"There were 3 action items that came out of this decision:\n1. Try removing jQuery and the Foundation JavaScript to ensure that everything continues to work without those two larger pieces of JavaScript.\n2. Investigate what we miss out on by not upgrading the newest version of USWDS --\x3e ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2873"}},"GH issue with documentation"),"\n3. Talk to the 18f team about some of the features that we would need in USWDS to be able to fully use their framework (small width grid classes and visibility classes)"))},n}(c.a.Component),u={}},349:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},350:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),m=t(353),c=(t(133),t(134),t(135),t(17),t(349)),i=t(351);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=t(352),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-uswds-foundation-mdx-78a2f5581f8f1361dadf.js.map