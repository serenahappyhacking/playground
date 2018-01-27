webpackJsonp([0x7c7cfd362af0],{559:function(e,t,l){e.exports=l.p+"static/overview.98a2002a.png"},560:function(e,t,l){e.exports=l.p+"static/tools.b39842b6.png"},236:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),o=a(n),s=l(44),r=a(s),i=l(12),u=a(i),c=l(16),d=a(c),f=l(56),m=a(f),h=l(559),p=a(h),g=l(560),E=a(g),b=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Introduction to Firefox Debugger"),o.default.createElement("p",null,"Are you only using ",o.default.createElement("code",null,"console.log")," to debug your JavaScript code? It is OK to admit. Using ",o.default.createElement("code",null,"console.log")," is easy and convenient, but it has limitations. It isn’t great for catching things as they happen, or diving deep into code to see exactly where it is broken. To do that, you’ll need a full-featured debugger. The Firefox Debugger has comprehensive tools to evaluate and repair broken code. Once you learn the basics, you’ll find that using a debugger is not only fast and easy, but it can save you from hours of frustration, and potential ‘bang-head-on-desk’ sessions."),o.default.createElement("p",null,"We’ll learn the basics of Firefox Debugger by debugging a simple to-do app. You will need Firefox to follow along. Don’t have Firefox? Check out"," ",o.default.createElement(d.default,{content:"debugger-part1"},"Firefox Developer Edition"),"."),o.default.createElement("p",null,"Before diving in, let’s take a look at the Debugger interface. Hit"," ",o.default.createElement("span",{className:"shortcut"},"option")," + ",o.default.createElement("span",{className:"shortcut"},"command")," +"," ",o.default.createElement("span",{className:"shortcut"},"S")," on Mac or ",o.default.createElement("span",{className:"shortcut"},"shift")," +"," ",o.default.createElement("span",{className:"shortcut"},"ctrl")," + ",o.default.createElement("span",{className:"shortcut"},"S")," on Windows to open the Debugger."," "),o.default.createElement("p",null,"The Debugger is divided into three panes:"),o.default.createElement(m.default,{src:p.default,alt:"overview",caption:"An overview of the Firefox Debugger Panel"}),o.default.createElement("p",null,o.default.createElement("ul",{className:"list"},o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"source list pane")," shows all the JavaScript files related to the current page or project."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"source pane")," shows the content of those files."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"tool pane")," contains info and tools."))),o.default.createElement("p",null,"The tool pane can be broken down into five sections:"),o.default.createElement(m.default,{src:E.default,alt:"tools",caption:"All of the tools available in the tools pane"}),o.default.createElement("p",null,o.default.createElement("ul",{className:"list"},o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"toolbar")," has buttons that control the debugger’s movement through the script."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"watch expressions")," section allows us to watch expressions as executions are paused."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"breakpoints")," section displays all of the breakpoints that have been set. Next to each breakpoint is a checkbox to enable or disable that breakpoint."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"call stack "),"section displays each level of the call stack, as well as the function name, filename, and line number."),o.default.createElement("li",null,"The ",o.default.createElement("strong",null,"scopes")," section displays all objects that are in scope."))),o.default.createElement("p",null,"Don’t worry if you don’t understand what all of these terms and symbols mean. We’ll cover them in the following sections. Just take note of where things are so that you can follow along."),o.default.createElement("p",null,"Now that we’ve reviewed the Debugger interface, let’s use it to fix a broken to-do app."))},v=function(){return o.default.createElement(u.default,{title:"Firefox DevTools: Hot Tip"},o.default.createElement("p",null,"Sometimes JavaScript code will be “minified” so that the file size is smaller and faster to load. This is great for your users, but it can make the code impossible to read in the Debugger. Thankfully, Firefox has a great option for viewing minified code. When you view a minified file in the source pane, an icon will appear at the bottom. After clicking this icon, Debugger will format the code into something that is human-readable, and display it as a new file in the source pane."),o.default.createElement("p",null,"Give it a try! The link below will bring you to a to-do app that is using a minified JavaScript file. Simply:"),o.default.createElement("ol",{className:"list"},o.default.createElement("li",null,o.default.createElement("a",{href:"https://mozilladevelopers.github.io/sample-todo/minified/",target:"_blank",rel:"noopener noreferrer"},"Visit this Link")),o.default.createElement("li",null,"Open Debugger (",o.default.createElement("span",{className:"shortcut"},"option")," +"," ",o.default.createElement("span",{className:"shortcut"},"command")," + ",o.default.createElement("span",{className:"shortcut"},"S")," on Mac or"," ",o.default.createElement("span",{className:"shortcut"},"shift")," + ",o.default.createElement("span",{className:"shortcut"},"control")," +"," ",o.default.createElement("span",{className:"shortcut"},"S")," on Windows)"),o.default.createElement("li",null,"Find and click on app.js in the source list pane"),o.default.createElement("li",null,"Locate and click on the format icon")))};t.default=function(){return o.default.createElement(r.default,{currentPageNum:1,tutorial:o.default.createElement(b,null),homework:o.default.createElement(v,null)})},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-debugger-index-js-2597034f63dbd6422306.js.map