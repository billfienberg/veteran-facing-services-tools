(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{310:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),r=a.n(n),o=a(3),m=a.n(o),i=a(2),s=a.n(i),c=a(4),l=a(345),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},s.a.createElement("h1",{id:"available-form-widgets"},"Available form widgets"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Widgets from the ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./about-the-schema-and-uischema-objects.md#understanding-the-uischema-object"}},"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"Then, set the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ui:widget")," field to the imported widget name:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"Available widgets are:"),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#arraycountwidget"}},"ArrayCountWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#checkboxwidget"}},"CheckboxWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#currencywidget"}},"CurrencyWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#datewidget"}},"DateWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#emailwidget"}},"EmailWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#phonenumberwidget"}},"PhoneNumberWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#radiowidget"}},"RadioWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#selectwidget"}},"SelectWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#ssnwidget"}},"SSNWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#textwidget"}},"TextWidget")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#yesnowidget"}},"YesNoWidget"))),s.a.createElement("h2",{id:"arraycountwidget"},"ArrayCountWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/forms/available-features-and-usage-guidelines.md#sequential-duplicate-form-groups"}},"Sequential duplicate form groups"),'."'),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"}},"ArrayCountWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),s.a.createElement("h2",{id:"checkboxwidget"},"CheckboxWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a single ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/forms/available-features-and-usage-guidelines.md#checkbox-group"}},"Checkbox Group"),'."'),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"}},"CheckboxWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," Usually the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"CheckboxWidget")," is not specified directly in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"type: 'boolean'"),".")),s.a.createElement("h2",{id:"currencywidget"},"CurrencyWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"}},"CurrencyWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),s.a.createElement("h2",{id:"datewidget"},"DateWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders three separate fields for dates, two ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<select>")," elements for month and day and one ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<input>")," element for the year."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"}},"DateWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': 'date'")," for the given field.")),s.a.createElement("h2",{id:"emailwidget"},"EmailWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TextWidget")," with the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'type: "email"')," passed to the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<input>")," element."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"}},"EmailWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': 'email'")," for the given field.")),s.a.createElement("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"}},"PhoneNumberWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),s.a.createElement("h2",{id:"radiowidget"},"RadioWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a single radio button for each ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"enum")," value. This overrides the default ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SelectWidget")," that is normally rendered where ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"enum")," exists."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"}},"RadioWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/forms/available-features-and-usage-guidelines.md#radio-button-group"}},"radio button group in form features"),".")),s.a.createElement("h2",{id:"selectwidget"},"SelectWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"type: 'string'")," with an ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"enum")," property."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"}},"SelectWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," Usually the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SelectWidget")," is not specified directly in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"type: 'string'")," with an ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"enum")," property.")),s.a.createElement("h2",{id:"ssnwidget"},"SSNWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"}},"SSNWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),s.a.createElement("h2",{id:"textwidget"},"TextWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Renders a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"type: 'string'"),"."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"}},"TextWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," Usually the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"TextWidget")," is not specified directly in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"type: 'string'"),".")),s.a.createElement("h2",{id:"yesnowidget"},"YesNoWidget"),s.a.createElement(c.MDXTag,{name:"p",components:t},'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"File:")," ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"}},"YesNoWidget.jsx")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Usage:")," In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"uiSchema"),", specify ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'ui:widget': 'yesNo'")," for the given field.")))},t}(s.a.Component),u={}},338:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),r=a.n(n),o=a(13),m=a.n(o),i=a(68),s=a.n(i);a.d(t,"a",function(){return s.a});a(340);var c=r.a.createContext({}),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},339:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,t,a){var n;e.exports=(n=a(342))&&n.default||n},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),o=a(2),m=a.n(o),i=a(13),s=a.n(i),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?m.a.createElement(c.a,r()({location:t,pageResources:a},a.json)):null};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},343:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(341),m=a(2),i=a.n(m),s=a(13),c=a.n(s),l=a(346),p=a.n(l),d=a(338),u=(a(17),a(133),a(134),a(339)),g=a.n(u),h=a(18),f=a.n(h),E=a(347),N=a.n(E),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=g.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,r=t.location;return i.a.createElement("div",{className:N()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:N()("site-c-mobile-nav-list__link",{current:r.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(b,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),M=(a(348),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(T,{location:a}),t)},data:o})},t}(i.a.Component));M.propTypes={children:c.a.node.isRequired};t.a=M},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(13),m=a.n(o),i=a(343),s=(a(133),a(134),a(135),a(17),a(344)),c=a(338);function l(){return r.a.createElement(c.b,{query:"157057713",render:function(e){return r.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?r.a.createElement("li",{key:e.name},n&&e.name,!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&e.name,!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,null)):e.href?r.a.createElement("li",{key:e.name},r.a.createElement(c.a,{to:e.href},e.name)):r.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(339),u=a.n(d);function g(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(p,{items:a.items}))):null}function h(e){var t=e.children,a=e.location;return r.a.createElement(i.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(g,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-e84dad519974e42fb63d.js.map