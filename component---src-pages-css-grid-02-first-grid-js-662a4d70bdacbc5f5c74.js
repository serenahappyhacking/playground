webpackJsonp([0xd58dc9925fb4],{222:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),d=a(n),r=l(17),i=a(r),u=l(15),o=a(u),s=l(12),c=a(s),m=l(27),f=a(m),p=l(16),g=a(p),h=l(57),E=a(h),w=function(){return d.default.createElement("div",null,d.default.createElement(E.default,{videoId:"I32g1VYTOAE"}),d.default.createElement("h2",null,"Your First Grid"),d.default.createElement("h4",null,"Create a grid"),d.default.createElement("p",null,"The first thing we want to do is create a grid container. We can do this by declaring ",d.default.createElement("code",null,"display: grid")," on the container element. In this example we are using a div with the class of ",d.default.createElement("code",null,"container"),"."),d.default.createElement("h4",null,"Define rows and columns"),d.default.createElement("p",null,"There are several ways to define rows and columns. For our first grid, we will use properties ",d.default.createElement("code",null,"grid-template-columns")," and"," ",d.default.createElement("code",null,"grid-template-rows"),". These properties allow us to define the size of the rows and columns for our grid. To create two fixed-height rows of 150px and three fixed-width columns of 150px, simply write:"),d.default.createElement(o.default,null,"\ngrid-template-columns: 150px 150px 150px;\ngrid-template-rows: 150px 150px;\n      "),d.default.createElement("p",null,"To add a fourth column that is 70px wide, write:"),d.default.createElement(o.default,null,"\ngrid-template-columns: 150px 150px 150px 70px;\n      "),d.default.createElement("p",null,"...and so on to add more columns."),d.default.createElement("h4",null,"Add a gutter"),d.default.createElement("p",null,"Adding a gutter to your grid is amazingly easy with CSS Grid Layout. Simply add:"),d.default.createElement(o.default,null,"\ngrid-gap: 1rem;\n      "),d.default.createElement("p",null,"That simple line gives you an equal-sized gutter between all rows and columns. To define the gutter size for columns and rows individually, you can use the ",d.default.createElement("code",null,"grid-column-gap")," and ",d.default.createElement("code",null,"grid-row-gap")," ","properties instead."),d.default.createElement("p",null,"Now let's put that all together. Here is our HTML:"),d.default.createElement(o.default,null,'\n<div class="container">\n  <div class="item item1"></div>\n  <div class="item item2"></div>\n  <div class="item item3"></div>\n  <div class="item item4"></div>\n  <div class="item item5"></div>\n  <div class="item item6"></div>\n</div>\n      '),d.default.createElement("p",null,"With just a few lines of CSS, we can create a simple grid:"),d.default.createElement(o.default,null,"\n.container {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n  grid-template-rows: 150px 150px;\n  grid-gap: 1rem;\n}\n      "),d.default.createElement("p",null,"Here is the result:"),d.default.createElement("div",{className:"container-2"},d.default.createElement("div",{className:"item"}),d.default.createElement("div",{className:"item"}),d.default.createElement("div",{className:"item"}),d.default.createElement("div",{className:"item"}),d.default.createElement("div",{className:"item"}),d.default.createElement("div",{className:"item"})),d.default.createElement(f.default,{link:"https://codepen.io/mozilladevelopers/pen/veXQmp"}))},v=function(){return d.default.createElement(c.default,{title:"Firefox DevTools + CSS Grid Layout"},d.default.createElement("p",null,"Amazing right? Inspect the grid above with your browser's developer tools. Try changing the column width, or the row height. Swap out the ",d.default.createElement("code",null,"grid-gap")," property with the",d.default.createElement("code",null,"grid-column-gap")," and ",d.default.createElement("code",null,"grid-row-gap")," properties and play around with different widths and heights."),d.default.createElement("p",null,"Having a good set of developer tools when working with CSS Grid Layout is essential. Firefox has some fantastic features that are specifically built to help you create and design grids. Intrigued?"," ",d.default.createElement(g.default,{content:"cssgrid-page-2"},"Download Firefox Developer Edition")," to get the browser with the best CSS Grid Layout tools."),d.default.createElement("p",null,"Click to the next section to learn about Firefox's new CSS Grid Layout panel."))};t.default=function(){return d.default.createElement(i.default,{currentPageNum:2,tutorial:d.default.createElement(w,null),homework:d.default.createElement(v,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-css-grid-02-first-grid-js-662a4d70bdacbc5f5c74.js.map