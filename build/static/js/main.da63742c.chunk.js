(this["webpackJsonpsplitwise-2"]=this["webpackJsonpsplitwise-2"]||[]).push([[0],{135:function(e,a,t){e.exports=t(259)},140:function(e,a,t){},141:function(e,a,t){},259:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),l=t.n(i),o=(t(140),t(141),t(15)),c=t(117),s=t(104),m=t.n(s),d=t(303),p=t(14),u=t(307),g=t(322),f=t(319),x=t(305),v=t(321),E=t(105),h=t.n(E),b=Object(d.a)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column",borderBottom:"1px solid rgba(0,0,0,0.1)",paddingBottom:"10px"},payIn:{color:"#3e8e41"},payOut:{color:"#f44336"},TypoCSS:{padding:"0px",margin:"0px",color:"rgba(0,0,0,0.4)",width:"100%",textAlign:"center"},titleText:{margin:"0px"},leftPartition:{flex:.3,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"0px 20px"},midPartition:{flex:1.4,flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px 20px"},rightPartition:{flex:.3,display:"flex",justifyContent:"center",alignItems:"center",padding:"0px 20px",flexDirection:"column",marginLeft:"auto"},imgStyle:{height:"45px",width:"45px",borderRadius:"50%",border:"2px solid #3f51b5"},iconClass:{color:"#3f51b5",fontSize:"32px",marginBottom:"10px"},xactionTypo:{textAlign:"center"},xaction:{display:"flex",justifyContent:"center"},xactionDest:{marginTop:"5px"},xactionContent:{display:"flex"},timestamp:{padding:"10px",paddingLeft:"20px"}}}));function y(e){var a=b();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.timestamp},r.a.createElement(x.a,{variant:"caption",className:a.timeTypo},function(){var e,a=-1,t=(new Date).toString().split(" ").slice(1,5),n="AM";return a=parseInt(t[t.length-1].split(".")[0]),e=t[t.length-1].split(":")[1],console.log(t[t.length-1].split(":")),a/12>1&&(a-=12,n="PM"),t.pop(),t.join(" ")+", "+a+":"+e+" "+n}())),r.a.createElement("div",{className:a.xactionContent},r.a.createElement("div",{className:a.leftPartition},r.a.createElement("img",{className:a.imgStyle,src:"/images/thumbnail.jpg"}),r.a.createElement(x.a,{className:a.xactionDest,variant:"caption"},e.propData.from)),r.a.createElement("div",{className:a.midPartition},r.a.createElement("div",{className:a.arrowDir},r.a.createElement(x.a,{className:a.TypoCSS,gutterBottom:!0},r.a.createElement(h.a,{className:"".concat(a.iconClass)}))),r.a.createElement("div",{className:a.xaction},"You"===e.propData.from?r.a.createElement(x.a,{className:a.xactionTypo,variant:"caption"},"Paid\xa0",r.a.createElement("span",{className:a.payOut},e.propData.cost),"\xa0for ",e.propData.event):r.a.createElement(x.a,{className:a.xactionTypo,variant:"caption"},"Paid\xa0",r.a.createElement("span",{className:a.payIn},e.propData.cost),"\xa0for ",e.propData.event))),r.a.createElement("div",{className:a.rightPartition},r.a.createElement("img",{className:a.imgStyle,src:"/images/thumbnail.jpg"}),r.a.createElement(x.a,{className:a.xactionDest,variant:"caption"},e.propData.to))))}var N=t(309),w=t(116),j=t(325),C=t(308),D=t(107),S=t.n(D),O=t(106),B=t.n(O),I=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function k(){var e=I(),a=r.a.useState(!0),t=Object(o.a)(a,2),n=t[0],i=(t[1],r.a.useState(null)),l=Object(o.a)(i,2),c=l[0],s=l[1],m=Boolean(c),d=function(){s(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(C.a,null,r.a.createElement(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(B.a,null)),r.a.createElement(x.a,{variant:"h6",className:e.title},"Splitwise"),n&&r.a.createElement("div",null,r.a.createElement(N.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(S.a,null)),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:d},r.a.createElement(j.a,{onClick:d},"Profile"),r.a.createElement(j.a,{onClick:d},"My account"))))))}var P=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"20px",background:"#3f51b5"},ratioBar:{width:"50px",height:"50px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",transform:"rotate(45deg)",background:"linear-gradient(to right, #71c174 60%,#f43325 40%)"},payOuts:{flexGrow:"1",paddingLeft:"20px",width:"100%",display:"flex",justifyContent:"space-evenly",color:"white"},titleText:{display:"flex",alignItems:"center",flexDirection:"column"}}}));function F(){var e=P();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.ratioContainer},r.a.createElement("div",{className:e.ratioBar},r.a.createElement("div",{style:{height:"40px",width:"40px",borderRadius:"50%",background:"#3f51b5"}}))),r.a.createElement("div",{className:e.payOuts},r.a.createElement(x.a,{className:e.titleText,variant:"h6",gutterBottom:!0},r.a.createElement(r.a.Fragment,null,"Total owed ",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#71c174"}},"\u20b9600"))),r.a.createElement(x.a,{className:e.titleText,variant:"h6",gutterBottom:!0},r.a.createElement(r.a.Fragment,null,"You owe ",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#f43325"}},"\u20b9400")))))}var R=t(263),T=t(310),L=Object(d.a)((function(e){return{peopleIcons:{display:"flex"},innerText:{padding:"10px"},small:{width:e.spacing(3),height:e.spacing(3)},rightDivider:{display:"flex",flexDirection:"column"},leftDivider:{display:"flex",flexDirection:"column",flexGrow:"1"},imageDivider:{},imgStyle:{height:"40px",width:"40px",borderRadius:"50%",border:"2px solid #3f51b5",marginRight:"20px"},avatarGroup:{"& div:nth-child(4)":{width:e.spacing(3),height:e.spacing(3),fontSize:"12px"}},divider:{display:"flex",padding:"10px 20px",borderBottom:"1px solid rgba(0,0,0,0.1)"},container:{height:"100%"}}}));function J(e){var a=L(),t=r.a.useState("Controlled"),n=Object(o.a)(t,2);n[0],n[1];return r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.divider},r.a.createElement("div",{className:a.imageDivider},r.a.createElement("img",{className:a.imgStyle,src:"/images/thumbnail.jpg"})),r.a.createElement("div",{className:a.leftDivider},r.a.createElement(x.a,{gutterBottom:!0,variant:"subtitle1",style:{marginBottom:"0px",flex:"0.7"}},e.propData.event),r.a.createElement(x.a,{variant:"caption",display:"block",style:{marginLeft:"1px"}},e.propData.date)),r.a.createElement("div",{className:a.rightDivider},r.a.createElement(x.a,{gutterBottom:!0,variant:"subtitle1",style:{marginBottom:"0px",flex:"0.3",textAlign:"right"}},"\u20b9",new Intl.NumberFormat("en-IN").format(e.propData.spent)),r.a.createElement(T.a,{max:4,className:a.avatarGroup},e.propData.attendees.map((function(e){return r.a.createElement(R.a,{alt:e,className:a.small})}))))))}var z=t(320),A=t(312),G=t(313),M=t(315),H=t(311),W=t(314),Y=t(261),X=Object(d.a)({table:{}});function Z(e){var a=X();return r.a.createElement(H.a,{component:Y.a},r.a.createElement(A.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(G.a,null,e.propData.map((function(e){return r.a.createElement(W.a,{key:e.name},r.a.createElement(M.a,{component:"th",scope:"row"},e.name),r.a.createElement(M.a,{align:"right"},"\u20b9",e.owed))})))))}var $=t(108),q=t(109),K=t(118),Q=t(115),U=t(110),V={labels:["January","February","March","April","May","June","July"],datasets:[{fill:!0,backgroundColor:"rgba(104, 119, 202,0.4)",borderColor:"rgba(63, 81, 181,1)",pointBorderColor:"rgba(63, 81, 181,1)",pointBackgroundColor:"#fff",pointHoverBackgroundColor:"rgba(63, 81, 181,1)",pointHoverBorderColor:"rgba(220,220,220,1)",data:[3500,2500,3e3,4500,1e4,6e3,4e3]}]},_=function(e){Object(K.a)(t,e);var a=Object(Q.a)(t);function t(){return Object($.a)(this,t),a.apply(this,arguments)}return Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{variant:"h6",gutterBottom:!0,style:{padding:"20px",paddingBottom:"10px"}},"Monthly Expenditure"),r.a.createElement(U.Line,{data:V,width:"100%",height:"50px",options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:2e3}}]}}}))}}]),t}(n.Component),ee=Object(d.a)((function(e){return{listStructure:{margin:"20px"},tableSeparator:{display:"flex",justifyContent:"center"}}}));function ae(){var e=ee();return r.a.createElement("div",null,r.a.createElement(x.a,{variant:"h6",gutterBottom:!0,style:{padding:"20px",paddingBottom:"10px"}},"Top Owers"),r.a.createElement("div",{className:e.tableSeparator},r.a.createElement(Z,{propData:[{name:"Dan",owed:8e3},{name:"Guy",owed:4500},{name:"Jake",owed:2300}]})))}var te=t(78),ne=t(318),re=t(326),ie=t(324),le=t(317),oe=t(114),ce=t.n(oe),se=t(113),me=t.n(se),de=t(112),pe=t.n(de),ue=t(25),ge=t(111),fe=t.n(ge),xe=t(316),ve=t(328),Ee=Object(d.a)((function(e){return{listLeftHalf:{display:"flex",alignItems:"center","& div":{minWidth:"auto"}},listRightHalf:{display:"flex",alignItems:"center",justifyContent:"flex-end"},chosenFriends:{display:"flex",justifyContent:"flex-start",overflowX:"scroll",padding:"5px 0px 15px 0px","& > span":{marginLeft:"10px"}},badgeCSS:{"& span":{background:"grey",transform:"scale(2) translate(50%, 50%)"}},addFriendsImgStyle:{height:"30px",width:"30px",borderRadius:"50%"},dropDownInput:{position:"absolute",left:0,right:0,border:"1px solid rgba(0,0,0,0.2)",background:"white",borderBottomRightRadius:"5px",borderBottomLeftRadius:"5px",zIndex:2,"& li":{padding:"10px 5px",borderBottom:"1px solid rgba(0,0,0,0.2)",width:"100%"},"& ul":{padding:"0px"}},menuItemDivContainer:{display:"flex",alignItems:"center",width:"100%"},personName:{marginLeft:"10px"}}}));function he(e){var a=Ee(),t=e.addFriend();return console.log(t),r.a.createElement("div",{className:a.dropDownInput},["msg1","msg2","msg3","msg4"].map((function(e){return r.a.createElement(ve.a,{className:a.friendsList},r.a.createElement(j.a,{onClick:t},r.a.createElement("div",{className:a.menuItemDivContainer},r.a.createElement("div",{className:a.listLeftHalf},r.a.createElement(xe.a,null,r.a.createElement("img",{className:a.addFriendsImgStyle,src:"/images/thumbnail.jpg"}))),r.a.createElement("div",{className:a.personName},r.a.createElement(x.a,{variant:"inherit",id:"id-"+e},e)))))})))}var be=Object(d.a)((function(e){var a;return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},addFriendsImgStyle:{height:"30px",width:"30px",borderRadius:"50%"},friendsList:{padding:"0px","& > li":(a={padding:"0px",borderLeft:"1px solid rgba(0,0,0,0.3)",borderBottom:"1px solid rgba(0,0,0,0.3)",borderRight:"1px solid rgba(0,0,0,0.3)"},Object(ue.a)(a,"padding","5px"),Object(ue.a)(a,"paddingLeft","10px"),Object(ue.a)(a,"display","flex"),Object(ue.a)(a,"justifyContent","space-between"),Object(ue.a)(a,"alignItems","center"),a)},findFriend:{position:"relative",paddingLeft:"10px",paddingRight:0,margin:"0px 10px"},listLeftHalf:{display:"flex",alignItems:"center"},listRightHalf:{display:"flex",alignItems:"center",justifyContent:"flex-start"},chosenFriends:{display:"flex",justifyContent:"flex-start",overflowX:"scroll",padding:"5px 0px 15px 0px","& > span":{marginLeft:"10px"}},badgeCSS:{"& span":{background:"grey",transform:"scale(2) translate(50%, 50%)"}},friendsPay:{display:"flex",justifyContent:"space-evenly",alignItems:"center","& div:nth-child(1)":{flex:.6},"& div:nth-child(3)":{flex:.5},marginBottom:"15px"},friendsSuggestion:{position:"relative",display:"flex",flexDirection:"column"},margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},groupPayName:{},groupPayAmt:{width:"90%"},paidAmt:{display:"flex",flexDirection:"column"},labelHeaders:{display:"flex",flexDirection:"column"},groupLabels:{display:"flex",justifyContent:"space-evenly"},payBtn:{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:"20px","& button":{padding:0,paddingRight:"15px",margin:0},"& button *":{pointerEvents:"none"},height:"100%"},largeIcon:{"& svg":{fontSize:100}},spacerDiv:{height:"10px",width:"10px"}}}));function ye(e){var a,t=be(),n=e.delRow();return console.log(e),r.a.createElement("div",{className:t.findFriend},r.a.createElement("div",{className:t.friendsPay,id:"pay-row-".concat(e.ele)},r.a.createElement("div",{className:t.friendsSuggestion},r.a.createElement(x.a,{variant:"caption",display:"block",gutterBottom:!0},"Name"),r.a.createElement(z.a,{id:"text-row-".concat(e.ele),className:t.groupPayName,label:"Select",size:"small",variant:"outlined",fullWidth:!0,inputProps:{autoComplete:"off"}})),r.a.createElement("div",{className:t.spacerDiv}),r.a.createElement("div",{className:t.paidAmt},r.a.createElement(x.a,{variant:"caption",display:"block",gutterBottom:!0},"Amount"),r.a.createElement(z.a,{size:"small",className:t.groupPayAmt,id:"outlined-basic",label:"Select",variant:"outlined",fullWidth:!0,inputProps:{autoComplete:"off"}})),r.a.createElement("div",{className:t.payBtn},r.a.createElement(N.a,(a={className:t.largeIcon,"aria-label":"delete"},Object(ue.a)(a,"className",t.margin),Object(ue.a)(a,"id","del-pay-row-".concat(e.ele)),Object(ue.a)(a,"onClick",n),a),r.a.createElement(fe.a,null)))))}var Ne=Object(d.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},cameraContainer:{position:"relative",height:"240px",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},eventImage:{height:"100%",width:"100%",filter:"blur(2px)",margin:"-2px",transform:"scale(1.3)"},eventImageContainer:{position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",width:"100%"},iconContainer:{position:"relative",zIndex:"10",color:"white",border:"2px solid white",borderRadius:"50%",padding:"15px",background:"rgba(255,255,255,0.4)"},addFriends:{marginTop:"20px"},addFriendSearch:{position:"relative",margin:"20px",marginBottom:"0px"},addNewFriend:{display:"flex",justifyContent:"space-around",alignItems:"center","& button":{padding:"0px"},"& svg":{fontSize:50}},eventDetails:{margin:"20px",marginBottom:"0px"},eventTag:{display:"flex",margin:"20px",marginBottom:"0px","& > div":{marginRight:"10px"}}}})),we=r.a.forwardRef((function(e,a){return r.a.createElement(le.a,Object.assign({direction:"up",ref:a},e))}));function je(){var e=Ne(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],i=t[1],l=r.a.useState(!1),c=Object(o.a)(l,2),s=c[0],m=c[1],d=r.a.useState([]),p=Object(o.a)(d,2),g=p[0],f=p[1],v=function(e){console.log(e),f([].concat(Object(te.a)(g),[g[g.length-1]+1]))},E=function(e){g.splice(g.indexOf(parseInt(e.target.id.split("del-pay-row-")[1])),1);var a=Object(te.a)(g);f(a)},h=function(){i(!1)},b=function(e){"focus"===e.type?m(!0):setTimeout((function(){m(!1)}),100)},y=function(e){console.log(e.target.parentNode)};return r.a.createElement("div",null,r.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:function(){i(!0)}},"Create"),r.a.createElement(ie.a,{fullScreen:!0,open:n,onClose:h,TransitionComponent:we},r.a.createElement(u.a,{className:e.appBar},r.a.createElement(C.a,null,r.a.createElement(N.a,{edge:"start",color:"inherit",onClick:h,"aria-label":"close"},r.a.createElement(pe.a,null)),r.a.createElement(x.a,{variant:"h6",className:e.title},"Create an Event"),r.a.createElement(ne.a,{autoFocus:!0,color:"inherit",onClick:h},"Create"))),r.a.createElement("div",{className:e.cameraContainer},r.a.createElement("div",{className:e.eventImageContainer},r.a.createElement("img",{src:"/images/europetrip.jpg",className:e.eventImage})),r.a.createElement("div",{className:e.iconContainer},r.a.createElement(me.a,null))),r.a.createElement("div",{className:e.eventDetails},r.a.createElement(z.a,{className:e.groupPayName,label:"Event Name",size:"small",fullWidth:!0,variant:"outlined",inputProps:{autoComplete:"off"}})),r.a.createElement("div",{className:e.eventTag},[1,2,3,4,5].map((function(e){return r.a.createElement(re.a,{size:"small",icon:r.a.createElement(ce.a,null),label:"Food",variant:"outlined",color:"primary",onClick:y})}))),r.a.createElement("div",{className:e.addFriendSearch},r.a.createElement("div",{className:e.addNewFriend},r.a.createElement(z.a,{className:e.groupPayName,label:"Add Friends",size:"small",variant:"outlined",fullWidth:!0,onBlur:b,onFocus:b,inputProps:{autoComplete:"off"}})),s?r.a.createElement(he,{addFriend:function(){return v}}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:e.addFriends},g.map((function(e){return r.a.createElement(ye,{delRow:function(){return E},props:e})})))))}function Ce(e){var a=e.children,t=e.value,n=e.index,i=Object(c.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),t===n&&r.a.createElement(v.a,null,r.a.createElement(x.a,null,a)))}function De(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Se=Object(d.a)((function(e){return{root:{backgroundColor:"#f5f5f5",bottom:0,"& .MuiTextField-root":{width:"100%"}},searchHelp:{width:"calc(100%-20px)",marginTop:"20px",padding:"20px",display:"flex"}}}));function Oe(){var e=Se(),a=Object(p.a)(),t=r.a.useState(0),n=Object(o.a)(t,2),i=n[0],l=n[1],c=r.a.useState(0),s=Object(o.a)(c,2),d=s[0],x=s[1];return r.a.createElement("div",{className:e.root},r.a.createElement(k,null),d?r.a.createElement(r.a.Fragment,null):r.a.createElement(F,null),r.a.createElement(u.a,{position:"static",color:"default"},r.a.createElement(g.a,{value:i,onChange:function(e,a){l(a),x(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},r.a.createElement(f.a,Object.assign({label:"Listings"},De(0))),r.a.createElement(f.a,Object.assign({label:"Events"},De(1))),r.a.createElement(f.a,Object.assign({label:"Statistics"},De(2))))),r.a.createElement(m.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){l(e)}},r.a.createElement(Ce,{value:i,index:0,dir:a.direction},r.a.createElement(Y.a,{elevation:10,style:{margin:"10px"}},[{from:"Dan",to:"You",cost:"\u20b9100",event:"Dominos"},{from:"You",to:"Sara",cost:"\u20b9200",event:"Birthday Party"},{from:"You",to:"Guy",cost:"\u20b9200",event:"Picnic"},{from:"You",to:"Perry",cost:"\u20b9400",event:"Restaurant Dinner"},{from:"Perry",to:"You",cost:"\u20b91000",event:"Trip"},{from:"You",to:"Jane",cost:"\u20b9600",event:"Transport cost"}].map((function(e){return r.a.createElement(y,{propData:e})})))),r.a.createElement(Ce,{value:i,index:1,dir:a.direction},r.a.createElement(Y.a,{elevation:3,style:{margin:"10px"}},r.a.createElement("div",{className:e.searchHelp},r.a.createElement(z.a,{id:"outlined-multiline-flexible",label:"Find Event",multiline:!0,size:"small",rowsMax:4,onChange:function(){},variant:"outlined"}),r.a.createElement(je,null))),r.a.createElement(Y.a,{elevation:3,style:{margin:"10px"}},[{event:"Fine Dining",spent:"2000",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Sara","Guy","Perry"],img:"/images/finedining.jpg"},{event:"Europe Trip",spent:"10000",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Sara","Jim","John","Richard","Jane"],img:"/images/europetrip.jpg"},{event:"Dinner Party",spent:"1000",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Joe","Peter","Mary"],img:"/images/dinner.jpg"},{event:"Amusement Park",spent:"1500",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Dan","Guy","Perry","Richard"],img:"/images/amusement.jpg"},{event:"Breakfast",spent:"2000",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Ron","Dan","Johnathon"],img:"/images/bfast.jpg"},{event:"Silverstone Race",spent:"1800",date:(new Date).toJSON().slice(0,10).split("-").reverse().join("/"),attendees:["Sara","Guy","Perry","Jason","Dan","Richard"],img:"/images/f1.jpg"}].map((function(e){return r.a.createElement(J,{propData:e})})))),r.a.createElement(Ce,{value:i,index:2,dir:a.direction},r.a.createElement(Y.a,{elevation:3,style:{margin:"10px"}},r.a.createElement(ae,null)),r.a.createElement(Y.a,{elevation:3,style:{margin:"10px"}},r.a.createElement(_,null)))))}var Be=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.da63742c.chunk.js.map