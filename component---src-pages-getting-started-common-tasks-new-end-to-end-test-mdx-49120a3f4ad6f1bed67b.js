(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{302:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),s=t(3),m=t.n(s),r=t(2),c=t.n(r),i=t(4),l=t(351),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement("h1",{id:"write-an-end-to-end-test"},"Write an end-to-end test"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Front end engineers use end-to-end (e2e) tests in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," to validate multipage applications with client-side routing. They are primarily used to assert that:"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"client applications render their inputs"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"client-side navigation occurs when the required fields are populated")),c.a.createElement("h2",{id:"end-to-end-testing-overview"},"End-to-end testing overview"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," uses ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://nightwatchjs.org"}},"Nightwatch")," to run the tests and provide the browser client"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"end-to-end tests are ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"collocated in application folder")," with the application they test"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Two node apps run with the end-to-end tests:",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockapi.js")," - hosts mock responses (see ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#mocking-api-responses"}},"Mocking API responses"),")"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"test-server.js")," - builds a server that handles client side routes"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," must be started before end-to-end tests are run"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api")," should not be running when end-to-end tests are run")),c.a.createElement("h2",{id:"end-to-end-tests-conventions"},"End-to-end tests conventions"),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"00-main-test-file.e2e.spec.js")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const E2eHelpers = require('platform/testing/e2e/helpers')\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst MyApplicationHelpers = require('./my-application-helpers.js');\nconst testData = require('./schema/maximal-test.json');\nconst FormsTestHelpers = require('platform/testing/e2e/form-helpers');\n\n// export the test using E2eHelpers.createE2eTest\nmodule.exports = E2eHelpers.createE2eTest(client => {\n  // mock api responses\n  client.mockData({\n  // path to mock\n    path: '/v0/my-application',\n  // verb to mock\n    verb: 'post',\n  // mock response\n    value: {\n      formSubmissionId: '123fake-submission-id-567',\n      timestamp: '2016-05-16',\n    },\n  });\n\n  // use a comment to indicate what page is being tested\n  // Introduction page\n  client\n    .openUrl(`${E2eHelpers.baseUrl}/my-application`)\n    // use Timeouts constants\n    .waitForElementVisible('body', Timeouts.normal)\n    .assert.title('My Application Title | Veterans Affairs')\n    .click('.schemaform-start-button');\n\n  // disable scrolling\n  FormsTestHelpers.overrideFormsScrolling(client);\n\n  // assert navigation is successful\n  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');\n\n  // Personal Information page.\n  client.expect.element('input[name=\"root_veteranFullName_first\"]').to.be\n    .visible;\n  // use functions from the helper file to perform all actions on the page\n  MyApplicationHelpers.completePersonalInformation(client, testData.data);\n  client.axeCheck('.main').click('.form-panel .usa-button-primary');\n  E2eHelpers.expectNavigateAwayFrom(\n    client,\n    '/my-application/personal-information',\n  );\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"my-application-helpers.js")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const mock = require('platform/testing/e2e/mock-helpers');\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst Auth = require('platform/testing/e2e/auth.js');\nconst moment = require('moment');\n\nfunction completePersonalInformation(client, data) {\n  client\n    .waitForElementVisible(\n      'input[name=\"root_veteranFullName_first\"]',\n      Timeouts.normal,\n    )\n    .fill(\n      'input[name=\"root_veteranFullName_first\"]',\n      data.veteranFullName.first,\n    )\n    .fill('input[name=\"root_veteranFullName_last\"]', data.veteranFullName.last)\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"These are recommendations not requirements.")),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"separate navigation from field input",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"use a ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"main test file")," for navigation, assertions, and calls helpers"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"use a ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"helper file")," for filling out forms"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"create separate, numbered ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"main test files")," to organize tests by their focus:",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"00-all-fields.e2e.spec.js")," - required and optional fields"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"01-required.e2e.spec.js")," - only required fields"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"02-accessibility.e2e.spec.js")," - validates accessibility"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"03-auth.e2e.spec.js")," - validates authentication"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"04-cross-cutting-feature.e2e.spec.js")," - validates one feature used across several pages (e.g. save in progress)"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"export the end-to-end test using `E2eHelpers.createE2eTest()`- see [Helpers](#helpers)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"group tests by pages and use a comment to indicate what page is being tested"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"mock all api responses before starting the test. See ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#mocking-api-responses"}},"Mocking API responses")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"waitForElementVisible")," before interacting with any element on the page"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Timeouts")," constants for setting timeouts (",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"platform/testing/e2e/timeouts.js"),")"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"use helpers for filling data and performing actions on the page"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"perform ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"axeCheck")," on the main body of the application on each page - see ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#custom-nightwatch-commands"}},"Custom Nightwatch commands")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"assert that each navigation is successful")),c.a.createElement("h2",{id:"mocking-api-responses"},"Mocking API responses"),c.a.createElement(i.MDXTag,{name:"p",components:n},"A mock server runs with the end-to-end tests to allow tests to make production-like calls."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/6d97a63bd60d79864661cc757814ca041648d5c9/src/platform/testing/e2e/nightwatch-commands/mockData.js#L12-L14"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"mockData(data, token = nul)")),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"custom Nighwatch command that mocks the data at the endpoint provided"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"mock server is started as part of the end-to-end testing script")))),c.a.createElement("h2",{id:"custom-nightwatch-commands"},"Custom Nightwatch commands"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Nightwatch supports extending its client api with ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://nightwatchjs.org/guide/#writing-custom-commands"}},"custom commands"),". Custom commands are located in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/platform/testing/e2e/nightwatch-commands")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"Command commands are available on the Nightwatch client e.g. ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"client.axeCheck()"),". Below are some of the commonly used custom Nightwatch commands.")),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/axeCheck.js#L4-L7"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"axeCheck(selector)"))," - uses the ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/dequelabs/axe-core/blob/master/doc/developer-guide.md"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"axe-core"))," library to run a series of tests to check for accessibility of content and functionality for DOM nodes in the selector"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/clickIf.js#L4-L7"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"clickIf(selector, predicate, ...predicateArguments)"))," - clicks the input at the selector when the predicate returns true"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fill.js#L5-L6"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fill(selector, value, callback)"))," - clears the current value and sets to the value provided"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillAddress.js#L2-L5"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillAddress(baseName, address}"),")")," - fills an address widget with the value provided"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/343d77e2d7509cdcecee4b41c723d01ca0147881/src/platform/testing/e2e/nightwatch-commands/fillCheckbox.js#L4-L7"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillCheckbox(selector, predicate, ...predicateParams"),")")," - clicks the checkbox at the selector when the predicate returns true"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillDate.js#L4-L6"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillDate(fieldName, dateString}"),")")," - fills a date widget at the fieldName with the dateString provided e.g. 1990-1-28"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/openUrl.js"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"openUrl(url, disableForesee = true)"))," - navigates to url and disables user feedback module (this can interfere with end-to-end tests)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectRadio.js#L2-L6"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"selectRadio(fieldName, value)"))," - selects the provided option on yesNo widget at the field name"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"selectYesNo(fieldName, predicate)"))," - selects the provided options on yesNo widget at the field name when the predicate returns true")),c.a.createElement("h2",{id:"helpers"},"Helpers"),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/platform/testing/e2e")," contains other useful helpers"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L78-L81"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"createE2eTest(beginApplication)"))," - disables smooth scrolling and starts and ends test"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"overrideSmoothFormsScrolling(client)")," and ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"overrideFormsScrolling(client)"))," - disables smooth scrolling during end-to-end testing"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L94"}},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"expectNavigationAwayFrom(client, urlString)"))," - asserts the current page is not at the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"urlString"))))},n}(c.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,t){"use strict";var a=t(2),o=t.n(a),s=t(13),m=t.n(s),r=t(354),c=(t(133),t(134),t(135),t(17),t(350)),i=t(352);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=t(353),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-end-to-end-test-mdx-49120a3f4ad6f1bed67b.js.map