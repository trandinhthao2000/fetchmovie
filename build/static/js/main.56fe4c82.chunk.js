(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={control:"AddMovie_control__2zRX_"}},,,,,function(e,t,n){e.exports={movie:"Movie_movie__1FcnG"}},function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__2kT4L"}},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(14),n(1)),i=n.n(o),s=n(4),u=n(3),m=n(7),p=n.n(m),f=function(e){return r.a.createElement("li",{className:p.a.movie},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,e.releaseDate),r.a.createElement("p",null,e.openingText))},v=n(8),d=n.n(v),E=function(e){return r.a.createElement("ul",{className:d.a["movies-list"]},e.movies.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,releaseDate:e.releaseDate,openingText:e.openingText})})))},b=(n(16),n(2)),h=n.n(b);var x=function(e){var t=Object(a.useRef)(""),n=Object(a.useRef)(""),l=Object(a.useRef)("");return r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var r={title:t.current.value,openingText:n.current.value,releaseDate:l.current.value};e.onAddMovie(r)}},r.a.createElement("div",{className:h.a.control},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",ref:t})),r.a.createElement("div",{className:h.a.control},r.a.createElement("label",{htmlFor:"opening-text"},"Opening Text"),r.a.createElement("textarea",{rows:"5",id:"opening-text",ref:n})),r.a.createElement("div",{className:h.a.control},r.a.createElement("label",{htmlFor:"date"},"Release Date"),r.a.createElement("input",{type:"text",id:"date",ref:l})),r.a.createElement("button",null,"Add Movie"))};var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(u.a)(c,2),m=o[0],p=o[1],f=Object(a.useState)(),v=Object(u.a)(f,2),d=v[0],b=v[1],h=Object(a.useCallback)(Object(s.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),b(null),e.prev=2,e.next=5,fetch("https://listmovie-c0896-default-rtdb.firebaseio.com/movies.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(r in n=e.sent,console.log(n),a=[],n)a.push({id:r,title:n[r].title,openingText:n[r].openingText,releaseDate:n[r].releaseDate});l(a),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),b(e.t0.message);case 20:p(!1);case 21:case"end":return e.stop()}}),e,null,[[2,17]])}))),[]);function g(){return(g=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://listmovie-c0896-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){h()}),[h]);var j=r.a.createElement("p",null,"Found no movies.");return n.length>0&&(j=r.a.createElement(E,{movies:n})),d&&(j=r.a.createElement("p",null,d)),m&&(j=r.a.createElement("p",null,"Loading....")),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(x,{onAddMovie:function(e){return g.apply(this,arguments)}})),r.a.createElement("section",null,r.a.createElement("button",{onClick:h},"Fetch Movies")),r.a.createElement("section",null,j))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.56fe4c82.chunk.js.map