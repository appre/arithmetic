const _=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const S of c.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&f(S)}).observe(document,{childList:!0,subtree:!0});function l(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(r){if(r.ep)return;r.ep=!0;const c=l(r);fetch(r.href,c)}};_();const z=document.getElementById("settings"),W=document.getElementById("solving"),H=document.getElementById("result"),Q=document.getElementById("settings-question-count"),Z=document.getElementById("settings-left-digit"),ee=document.getElementById("settings-left-below"),te=document.getElementById("settings-right-digit"),se=document.getElementById("settings-right-below");document.getElementById("settings-addition");document.getElementById("settings-substraction");document.getElementById("settings-multiplication");document.getElementById("settings-division");const ne=z.querySelectorAll(".settings-operators"),i=document.getElementById("solving-correct"),o=document.getElementById("solving-wrong"),$=document.getElementById("solving-question-number"),t=document.getElementById("solving-question"),O=document.getElementById("solving-stop"),D=document.getElementById("solving-back"),F=document.getElementById("solving-answer-box"),y=document.getElementById("solving-answer"),p=document.getElementById("solving-quotient"),g=document.getElementById("solving-rest"),K=document.getElementById("solving-review-answer-box"),m=document.getElementById("solving-review-answer"),h=document.getElementById("solving-review-quotient"),v=document.getElementById("solving-review-rest"),G=document.getElementById("solving-buttons"),E=document.getElementById("solving-submit"),x=document.getElementById("solving-next"),B=document.getElementById("solving-end"),J=document.getElementById("solving-review-buttons"),I=document.getElementById("solving-review-submit"),d=document.getElementById("solving-review-before"),L=document.getElementById("solving-review-back"),u=document.getElementById("solving-review-next"),ie=document.getElementById("settings-start"),oe=document.getElementById("result-count"),le=document.getElementById("result-correct"),re=document.getElementById("result-wrong"),ae=document.getElementById("result-rate"),j=document.getElementById("result-numbers"),fe=document.getElementById("result-again");W.style.display="none";H.style.display="none";Q.value=10;let w={},a=[null],b=[null],n;Q.addEventListener("input",function(){let e=String(this.value);if(e===""){this.value="";return}if(String(parseInt(e))!==e){this.value=e.substring(0,e.length-1);return}e=+e,e>0?this.value=e>100?100:e:this.value=""});ie.addEventListener("click",function(){if(de(),w.count===0){alert("\uBB38\uC81C \uC218\uB97C \uC785\uB825\uD558\uC138\uC694."),document.getElementById("settings-question-count").focus();return}if(w.operators.length===0){alert("\uC5F0\uC0B0 \uC885\uB958\uB97C \uC120\uD0DD\uD558\uC138\uC694.");return}z.style.display="none",W.style.display="",i.style.display="none",o.style.display="none",O.style.display="",D.style.display="none",J.style.display="none",G.style.display="",F.style.display="",K.style.display="none",y.value="",p.value="",g.value="",y.disabled=!1,p.disabled=!1,g.disabled=!1,E.style.display="",x.style.display="none",B.style.display="none",a=[null],b=[null],n=1,a.push(U(w,n)),$.textContent=n,P(),V(),X()});y.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});p.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});g.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});y.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(q()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),C();return}const s=N();s?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",a[n].isCorrect=s,b.push(a[n]),E.style.display="none",y.disabled=!0,p.disabled=!0,g.disabled=!0,n===w.count?B.style.display="":x.style.display=""});p.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(q()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),C();return}const s=N();s?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",a[n].isCorrect=s,b.push(a[n]),E.style.display="none",y.disabled=!0,p.disabled=!0,g.disabled=!0,n===w.count?B.style.display="":x.style.display=""});g.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(q()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),C();return}const s=N();s?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",a[n].isCorrect=s,b.push(a[n]),E.style.display="none",y.disabled=!0,p.disabled=!0,g.disabled=!0,n===w.count?B.style.display="":x.style.display=""});E.addEventListener("click",function(){if(q()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),C();return}const e=N();e?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",a[n].isCorrect=e,b.push(a[n]),E.style.display="none",y.disabled=!0,p.disabled=!0,g.disabled=!0,n===w.count?B.style.display="":x.style.display=""});x.addEventListener("click",function(){i.style.display="none",o.style.display="none",y.value="",p.value="",g.value="",y.disabled=!1,p.disabled=!1,g.disabled=!1,E.style.display="",x.style.display="none",++n,a.push(U(w,n)),$.textContent=n,P(),V(),X()});B.addEventListener("click",function(){Y()});O.addEventListener("click",function(){!confirm("\uC5F0\uC2B5\uC744 \uADF8\uB9CC\uB450\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")||Y()});fe.addEventListener("click",function(){H.style.display="none",z.style.display=""});D.addEventListener("click",function(){W.style.display="none",H.style.display=""});m.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});h.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});v.addEventListener("input",function(){const e=this.value;if(e!==""&&e!=="-"){if(isNaN(parseInt(e,10))){this.value=e.substring(0,e.length-1);return}this.value=parseInt(e,10)}});m.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(T()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),M();return}A()?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",m.disabled=!0,h.disabled=!0,v.disabled=!0,I.style.display="none",n===1&&n===b.length-1?(d.style.display="none",u.style.display="none"):n===b.length-1?(u.style.display="none",d.style.display=""):n===1?(d.style.display="none",u.style.display=""):(d.style.display="",u.style.display=""),L.style.display=""});h.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(T()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),M();return}A()?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",m.disabled=!0,h.disabled=!0,v.disabled=!0,I.style.display="none",n===1&&n===b.length-1?(d.style.display="none",u.style.display="none"):n===b.length-1?(u.style.display="none",d.style.display=""):n===1?(d.style.display="none",u.style.display=""):(d.style.display="",u.style.display=""),L.style.display=""});v.addEventListener("keydown",function(e){if(e.key!=="Enter")return;if(T()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),M();return}A()?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",m.disabled=!0,h.disabled=!0,v.disabled=!0,I.style.display="none",n===1&&n===b.length-1?(d.style.display="none",u.style.display="none"):n===b.length-1?(u.style.display="none",d.style.display=""):n===1?(d.style.display="none",u.style.display=""):(d.style.display="",u.style.display=""),L.style.display=""});I.addEventListener("click",function(){if(T()){alert("\uC815\uB2F5\uC744 \uC785\uB825\uD558\uC138\uC694."),M();return}A()?i.style.display="":o.style.display="",i.style.left=t.offsetLeft+t.offsetWidth/2-i.offsetWidth/2+"px",i.style.top=t.offsetTop+t.offsetHeight/2-i.offsetHeight/2+"px",o.style.left=t.offsetLeft+t.offsetWidth/2-o.offsetWidth/2+"px",o.style.top=t.offsetTop+t.offsetHeight/2-o.offsetHeight/2+"px",m.disabled=!0,h.disabled=!0,v.disabled=!0,I.style.display="none",n===1&&n===b.length-1?(d.style.display="none",u.style.display="none"):n===b.length-1?(u.style.display="none",d.style.display=""):n===1?(d.style.display="none",u.style.display=""):(d.style.display="",u.style.display=""),L.style.display=""});L.addEventListener("click",function(){R()});d.addEventListener("click",function(){--n,R()});u.addEventListener("click",function(){++n,R()});function de(){w.count=+Q.value,w.leftDigit=+Z.value,w.leftBelow=ee.checked,w.rightDigit=+te.value,w.rightBelow=se.checked,w.operators=[];for(let e of ne)e.checked&&w.operators.push(e.dataset.operator)}function k(e,s,l){let f;return s===!0?f=k(Math.floor(Math.random()*e+1),!1,l):e===1?f=Math.floor(Math.random()*10):f=Math.floor(Math.random()*(10**e-10**(e-1))+10**(e-1)),l&&f===0&&(f=k(e,s,l)),f}function ue(e){return e[Math.floor(Math.random()*e.length)]}function U(e,s){const l=ue(e.operators);let f;l==="/"?f=k(e.rightDigit,e.rightBelow,!0):f=k(e.rightDigit,e.rightBelow,!1);let r=k(e.leftDigit,e.leftBelow,!1);return new ce(s,r,l,f)}class ce{constructor(s,l,f,r){this.number=s,this.left=l,this.operator=f,this.right=r,this.answer=window.eval(`${l}${f}${r}`),this.quotient=Math.floor(this.answer),this.rest=window.eval(`${l}%${r}`),this.isCorrect=!1}}function P(){const e=a[n];let s="           ",l=String(e.left),f=String(e.right);s=s.substring(0,4-l.length)+l+" "+ye(e.operator)+" "+f+s.substring(7+f.length,11),t.textContent=s}function ye(e){return e==="*"?"\xD7":e==="/"?"\xF7":e}function V(){a[n].operator==="/"?(y.style.display="none",p.style.display="",g.style.display=""):(y.style.display="",p.style.display="none",g.style.display="none")}function X(){a[n].operator==="/"?p.focus():y.focus()}function q(){if(a[n].operator==="/"){const s=p.value,l=g.value;return s===""||l===""}else return y.value===""}function C(){if(a[n].operator==="/"){const s=p.value,l=g.value;s===""?p.focus():l===""&&g.focus()}else y.value===""&&y.focus()}function N(){const e=a[n];if(e.operator==="/"){const s=+p.value,l=+g.value;return e.quotient===s&&e.rest===l}else{const s=+y.value;return e.answer===s}}function pe(){let e=0;for(const s of a)s!==null&&s.isCorrect&&(e+=1);return e}function Y(){W.style.display="none",H.style.display="";const e=b.length-1,s=pe(),l=e-s,f=e===0?"-":Math.ceil(l/e*1e4/100)+"%";oe.textContent=e,le.textContent=s,re.textContent=l,ae.textContent=f,j.innerHTML="";for(let r of b){if(r===null)continue;let c=document.createElement("span");c.textContent=`${r.number}`,c.classList.add(r.isCorrect?"result-correct":"result-wrong"),c.classList.add("result-number"),c.addEventListener("click",function(){n=r.number,H.style.display="none",R()}),j.append(c)}}function R(){W.style.display="",i.style.display="none",o.style.display="none",O.style.display="none",D.style.display="",J.style.display="",G.style.display="none",F.style.display="none",K.style.display="",m.disabled=!1,h.disabled=!1,v.disabled=!1,m.value="",h.value="",v.value="",I.style.display="",L.style.display="none",d.style.display="none",u.style.display="none",$.textContent=n,P(),ge(),me()}function ge(){a[n].operator==="/"?(m.style.display="none",h.style.display="",v.style.display=""):(m.style.display="",h.style.display="none",v.style.display="none")}function me(){if(a[n].operator==="/"){const s=h.value,l=v.value;s===""?h.focus():l===""&&v.focus()}else m.value===""&&m.focus()}function T(){if(a[n].operator==="/"){const s=h.value,l=v.value;return s===""||l===""}else return m.value===""}function A(){const e=a[n];if(e.operator==="/"){const s=+h.value,l=+v.value;return e.quotient===s&&e.rest===l}else{const s=+m.value;return e.answer===s}}function M(){if(a[n].operator==="/"){const s=h.value,l=v.value;s===""?h.focus():l===""&&v.focus()}else m.value===""&&m.focus()}