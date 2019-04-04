<template>
  <div id="app" class="nomalfont">
    <transition name="fade" mode="out-in" appear>
      <Nav v-if="$route.meta.isNavShow"></Nav>
    </transition>
    <div style="height:100vh">
      <el-scrollbar style="height:100%;">
        <transition name="fade" mode="out-in" appear>
          <router-view :class="{topBlank:$route.meta.isNavShow}"/>
        </transition>
        <transition name="fade" mode="out-in" appear>
          <my-foot v-if="$route.meta.isNavShow"></my-foot>
        </transition>
      </el-scrollbar>
    </div>
    <div class="efont bgfun">You are not Alone</div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import MyFoot from "./components/footer";
export default {
  name: "App",
  components: {
    Nav: Nav,
    MyFoot: MyFoot
  },
  data() {
    return {};
  }
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  /* font-size: 100%; */
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  font-size: 62.5%;
  min-width: 1200px;
}
body {
  min-width: 1200px;
}
.efont {
  font-family: "PizzaDudesHandwriting";
  font-weight: normal;
}
.topBlank {
  padding-top: 10rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.pic-wrap {
  text-align: center;
  width: 100%;
  overflow: hidden;
}
.pic-wrap img {
  width: 70%;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.bgfun{
  font-size: 8rem;
  position: fixed;
  bottom: 70px;
  right: 50px;
  z-index: -1;
  color: #409eff;
  opacity: 0.4;
}
</style>
