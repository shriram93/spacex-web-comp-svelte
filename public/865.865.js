(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[865],{865:(a,s,l)=>{"use strict";l.r(s),l.d(s,{spacex_card:()=>n,spacex_footer:()=>e,spacex_header:()=>t,spacex_toggle:()=>r});var c=l(369);const n=class{constructor(a){(0,c.r)(this,a)}render(){return(0,c.h)("div",{class:"launch-card"},(0,c.h)("div",{class:"launch-card__image"},(0,c.h)("img",{src:this.imageurl,alt:this.missonname})),(0,c.h)("div",{class:"launch-card__name"},(0,c.h)("p",null,`${this.missonname} #${this.flightnumber}`)),this.missionids&&this.missionids.length>0&&(0,c.h)("p",{class:"launch-card__data"},(0,c.h)("span",{class:"launch-card__data__label"},"Mission ids:"),(0,c.h)("span",{class:"launch-card__data__value"},(0,c.h)("ul",null,this.missionids.split(",").map((a=>(0,c.h)("li",{key:a},a.trim())))))),(0,c.h)("p",{class:"launch-card__data"},(0,c.h)("span",{class:"launch-card__data__label"},"Launch Year:"),(0,c.h)("span",{class:"launch-card__data__value"},this.launchyear)),(0,c.h)("p",{class:"launch-card__data"},(0,c.h)("span",{class:"launch-card__data__label"},"Successful Launch:"),(0,c.h)("span",{class:"launch-card__data__value"},this.launchsuccess?"true":"false")),(0,c.h)("p",{class:"launch-card__data"},(0,c.h)("span",{class:"launch-card__data__label"},"Successful Landing:"),(0,c.h)("span",{class:"launch-card__data__value"},this.landsuccess?"true":"false")))}};n.style=".launch-card{width:100%;height:100%;background:#fff;border-radius:8px;padding:8px;display:inline-block;max-width:500px}.launch-card__image{padding:8px;display:flex;justify-content:center;align-items:center;background:#f2f2f2}.launch-card__image img{width:100%;max-width:125px}.launch-card__name{color:#474f94;font-weight:600;margin:16px 0}.launch-card__data{margin:8px 0}.launch-card__data__label{font-weight:600;color:#000}.launch-card__data__value{color:#474f94}.launch-card__data__value ul{margin-left:30px}";const e=class{constructor(a){(0,c.r)(this,a)}render(){return(0,c.h)(c.H,null,(0,c.h)("p",null,(0,c.h)("slot",null)))}};e.style=":host{padding:8px;display:flex;justify-content:center;align-items:center}:host p{padding:0;margin:0}";const t=class{constructor(a){(0,c.r)(this,a)}render(){return(0,c.h)(c.H,null,(0,c.h)("p",null,(0,c.h)("slot",null)))}};t.style=":host{padding:8px;display:block}:host p{padding:0;margin:0;font-size:24px;font-weight:bold}";const r=class{constructor(a){(0,c.r)(this,a)}render(){return(0,c.h)("button",{class:"toggle "+(this.checked?"toggle--selected":"")},(0,c.h)("slot",null))}};r.style=".toggle{padding:4px;border-radius:4px;width:100%;height:100%;outline:none;background:#c5e09b;border:none;cursor:pointer;max-width:80px;display:inline-flex;justify-content:center;align-items:center}.toggle--selected{background:#7bbb27}"}}]);