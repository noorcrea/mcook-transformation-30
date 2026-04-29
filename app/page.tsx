"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ============ HERO ============
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[120px] bg-gradient-to-b from-orange-500 via-yellow-400 to-transparent"/>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px] bg-red-600"/>
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(#F97316 1px,transparent 1px),linear-gradient(90deg,#F97316 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0}}>
            {["Challenge 30 jours","Acces immediat","PDF + Tracker + Recettes"].map(b=>(
              <span key={b} className="text-xs font-semibold tracking-widest uppercase bg-[#111] border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full">{b}</span>
            ))}
          </motion.div>
          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.12}}>
            Lance ton<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">Challenge</span><br/>
            30 Jours
          </motion.h1>
          <motion.p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.24}}>
            Un plan simple pour perdre du gras, reprendre le controle et construire une routine saine — sans te tuer a la salle.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.36}}>
            <a href="#offre" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
              Commencer maintenant
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </a>
            <a href="#programme" className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-all">Voir le programme</a>
          </motion.div>
          <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-gray-500" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
            {[{c:"bg-green-400",t:"Sans salle de sport"},{c:"bg-orange-400",t:"Accessible a tous"},{c:"bg-yellow-400",t:"19,90 EUR"}].map((i,idx)=>(
              <div key={idx} className="flex items-center gap-2"><div className={"w-2 h-2 rounded-full "+i.c}/><span>{i.t}</span></div>
            ))}
          </motion.div>
        </div>
        <motion.div className="flex-shrink-0 w-full max-w-sm lg:max-w-md" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.3}}>
          <div className="relative bg-[#111] rounded-3xl border border-orange-500/20 p-10 text-center shadow-[0_0_60px_rgba(249,115,22,0.15)]">
            <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-orange-500 mb-2">30</div>
            <div className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-6">JOURS</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"/>
            <div className="text-2xl font-black text-white mb-1">M COOK</div>
            <div className="text-orange-400 text-sm font-semibold tracking-widest uppercase">TRANSFORMATION</div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-gray-500">
              {["Marche","Recettes","Tracker","Proteines","Motivation","Discipline"].map(t=>(
                <div key={t} className="bg-[#1A1A1A] rounded-lg py-2 px-1">{t}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}>
        <span className="text-xs text-gray-600 tracking-widest uppercase">Decouvrir</span>
        <motion.div className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center pt-1.5" animate={{y:[0,4,0]}} transition={{repeat:Infinity,duration:1.5}}>
          <div className="w-1 h-2 bg-orange-400 rounded-full"/>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============ PROBLEM ============
function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  return (
    <section ref={ref} className="py-24 bg-[#0D0D0D] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"/>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Le vrai probleme</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">Tu veux changer, mais tu ne sais<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">jamais par ou commencer ?</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[{l:"Regimes trop stricts",s:"Impossibles a tenir plus de 3 jours"},{l:"Programmes trop compliques",s:"Trop de variables, trop d'excuses"},{l:"Motivation qui s'effondre",s:"On commence fort, on abandonne vite"},{l:"Aucune methode concrete",s:"Des conseils vagues, pas de plan reel"}].map((item,i)=>(
            <motion.div key={item.l} className="flex items-start gap-4 bg-[#111] border border-[#1F1F1F] rounded-2xl p-5 hover:border-orange-500/20 transition-colors" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.1+i*0.08}}>
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
              </div>
              <div><p className="font-bold text-white">{item.l}</p><p className="text-sm text-gray-500 mt-0.5">{item.s}</p></div>
            </motion.div>
          ))}
        </div>
        <motion.p className="text-center text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.5}}>
          Beaucoup abandonnent parce qu'ils commencent trop fort. Le but ici est simple : <span className="text-white font-semibold">avancer jour apres jour</span> avec une methode realiste.
        </motion.p>
      </div>
    </section>
  );
}

// ============ SOLUTION ============
function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  const pillars = [
    {title:"Marche quotidienne",desc:"Activer ton corps chaque jour sans effort extreme. Simple, efficace, durable.",grad:"from-orange-500 to-yellow-400",path:"M13 10V3L4 14h7v7l9-11h-7z"},
    {title:"Repas simples",desc:"Des recettes rapides, rassasiantes, sans frustration. Manger bien sans se compliquer la vie.",grad:"from-yellow-400 to-orange-400",path:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},
    {title:"Suivi proteines",desc:"Comprendre ce que tu manges. Un seul chiffre a surveiller chaque jour.",grad:"from-red-500 to-orange-500",path:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},
    {title:"Discipline 30 jours",desc:"Pas de perfection, juste de la regularite. Chaque jour coche est une victoire.",grad:"from-orange-400 to-red-500",path:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},
  ];
  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">La solution</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Une methode simple que <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">tu peux vraiment tenir</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p,i)=>(
            <motion.div key={p.title} className="group bg-[#111] border border-[#1F1F1F] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1.5 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]" initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.1+i*0.1}}>
              <div className={"w-12 h-12 rounded-xl bg-gradient-to-br "+p.grad+" flex items-center justify-center text-black"}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={p.path}/></svg>
              </div>
              <div><h3 className="font-bold text-white text-lg mb-2">{p.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROGRAMME ============
function Programme() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-60px"});
  const items = [
    {t:"Programme 30 jours",d:"Chaque journee structuree jour par jour. Tu sais exactement quoi faire et quand."},
    {t:"Recettes simples",d:"Des idees de repas rapides, accessibles, sans techniques de chef."},
    {t:"Liste de courses",d:"Une liste prete a l'emploi. Tu achetes, tu prepares, tu avances."},
    {t:"Tracker quotidien PDF",d:"Coche chaque journee terminee. Visualiser ta progression, c'est rester motive."},
    {t:"Guide proteines",d:"Comprendre les sources de proteines, les quantites et comment les integrer."},
    {t:"Conseils motivation",d:"Les bons reflexes pour ne pas decrocher a la deuxieme semaine."},
    {t:"Application YAZIO recommandee",d:"Suis tes calories et proteines gratuitement chaque jour.",hl:true},
  ];
  return (
    <section id="programme" ref={ref} className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[100px]"/></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Contenu complet</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Ce que tu recois <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">dans le programme</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item,i)=>(
            <motion.div key={item.t} className={"relative group bg-[#111] rounded-2xl p-6 border transition-all hover:-translate-y-1 "+(item.hl?"border-orange-500/40 hover:border-orange-500/60":"border-[#1F1F1F] hover:border-white/10")} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.05+i*0.07}}>
              {item.hl&&<div className="absolute top-3 right-3 text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">Recommande</div>}
              <div className="w-2 h-2 rounded-full bg-orange-400 mb-4"/>
              <h3 className="font-bold text-white text-base mb-2">{item.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FORWHO ============
function ForWho() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  const criteria = ["Tu veux perdre du gras de facon progressive","Tu veux reprendre une routine saine","Tu n'aimes pas les programmes compliques","Tu veux manger mieux sans frustration","Tu veux bouger plus sans salle de sport","Tu veux un plan clair pendant 30 jours"];
  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7}}>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Pour qui</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">Ce challenge est <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">fait pour toi si...</span></h2>
            <p className="text-gray-400 leading-relaxed">Hommes ou femmes, debutants ou reprenants. Aucune experience sportive requise. Juste la volonte de changer.</p>
          </motion.div>
          <motion.div className="space-y-3" initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}>
            {criteria.map((c,i)=>(
              <motion.div key={i} className="flex items-start gap-3 bg-[#111] border border-[#1F1F1F] rounded-xl p-4 hover:border-orange-500/20 transition-colors" initial={{opacity:0,x:20}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.15+i*0.07}}>
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  const steps = [{n:"01",t:"Telecharge le programme",d:"Tu recois immediatement l'acces a l'ebook complet, au tracker PDF et aux recettes."},{n:"02",t:"Suis ton plan chaque jour",d:"Chaque journee est detaillee. Tu sais exactement quoi manger, combien marcher."},{n:"03",t:"Note tes progres et reste regulier",d:"Coche chaque jour dans ton tracker. La regularite sur 30 jours fait toute la difference."}];
  return (
    <section ref={ref} className="py-24 bg-[#0D0D0D] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"/>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">La methode</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Comment ca marche ?</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s,i)=>(
            <motion.div key={s.n} className="relative text-center" initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:i*0.15}}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-black font-black text-xl mb-6">{s.n}</div>
              <h3 className="font-bold text-white text-xl mb-3">{s.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ MOTIVATION ============
function Motivation() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  return (
    <section ref={ref} className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-10 blur-[80px] bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600"/></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{opacity:0,scale:0.95}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.8}}>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mx-auto mb-10"/>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.3]">
            "30 jours vont passer de toute facon.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400">La vraie question, c'est :</span><br/>
            est-ce que tu veux les passer a repeter les memes habitudes — ou a construire une meilleure version de toi ?"
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-10"/>
        </motion.div>
      </div>
    </section>
  );
}

// ============ OFFER ============
function Offer() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  const included = ["Ebook complet 30 jours — plan jour par jour","Tracker PDF a cocher chaque jour","Recettes simples et rassasiantes","Guide proteines complet","Liste de courses prete a l'emploi","Conseils motivation anti-abandon","Acces immediat apres paiement"];
  return (
    <section id="offre" ref={ref} className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[100px] bg-gradient-to-r from-orange-500 to-yellow-400"/></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Pret a commencer</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Rejoins le challenge aujourd'hui</h2>
        </motion.div>
        <motion.div className="relative max-w-md mx-auto" initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.2,duration:0.7}}>
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-3xl blur opacity-20"/>
          <div className="relative bg-[#0F0F0F] border border-orange-500/30 rounded-3xl p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">Offre de lancement</div>
            <div className="text-lg text-gray-400 font-medium mb-2">M COOK TRANSFORMATION 30</div>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl font-black text-white">19</span>
              <span className="text-3xl font-black text-orange-400">,90</span>
              <span className="text-2xl font-bold text-gray-400">EUR</span>
            </div>
            <p className="text-gray-600 text-sm mb-8">Paiement unique — acces a vie</p>
            <div className="space-y-3 mb-8 text-left">
              {included.map((item,i)=>(
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#" className="block w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg py-4 rounded-xl mb-4 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]">Je commence aujourd'hui</a>
            <p className="text-xs text-gray-600">Paiement securise — acces immediat apres achat</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true,margin:"-80px"});
  const [open, setOpen] = useState<number|null>(null);
  const faqs = [
    {q:"Est-ce adapte aux debutants ?",a:"Oui, completement. Ce programme est concu pour les personnes qui n'ont pas ou peu d'experience sportive. Aucune performance particuliere n'est demandee."},
    {q:"Faut-il aller a la salle ?",a:"Non. Le programme est base sur la marche quotidienne. Aucun equipement de salle de sport n'est necessaire."},
    {q:"Est-ce pour homme et femme ?",a:"Oui, le programme est adapte aux deux. Les principes de base sont les memes, les recettes et conseils sont valables pour tous."},
    {q:"Est-ce que je dois peser tous mes aliments ?",a:"Non. Le programme propose des repas simples avec des portions intuitives. YAZIO peut t'aider si tu veux un suivi precis, mais ce n'est pas obligatoire."},
    {q:"Quelle application utiliser pour suivre mes proteines ?",a:"Nous recommandons YAZIO, disponible gratuitement sur iOS et Android. Elle permet de scanner les aliments et de suivre ses macros facilement."},
    {q:"Est-ce que les resultats sont garantis ?",a:"Les resultats dependent de ta regularite, de ton alimentation, de ton sommeil et de ton profil. Ce programme te donne une methode eprouvee — les resultats sont lies a ton engagement personnel."},
  ];
  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"/>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Questions frequentes</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">FAQ</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq,i)=>(
            <motion.div key={i} className="bg-[#111] border border-[#1F1F1F] rounded-2xl overflow-hidden hover:border-orange-500/20 transition-colors" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:i*0.07}}>
              <button className="w-full text-left p-5 flex items-center justify-between gap-4" onClick={()=>setOpen(open===i?null:i)}>
                <span className="font-semibold text-white">{faq.q}</span>
                <div className={"w-6 h-6 rounded-full border border-orange-500/40 flex items-center justify-center flex-shrink-0 transition-transform "+(open===i?"rotate-45 bg-orange-500/20":"")}>
                  <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
              </button>
              {open===i&&<div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1F1F1F] pt-4">{faq.a}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1F1F1F] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-white font-black text-lg">M COOK <span className="text-orange-400">TRANSFORMATION 30</span></div>
            <p className="text-gray-600 text-sm mt-1">Challenge 30 jours — Perte de gras, routine saine</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Conditions generales</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Politique de confidentialite</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Mentions legales</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1A1A1A] text-center text-gray-700 text-xs">
          © {new Date().getFullYear()} M COOK TRANSFORMATION 30. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN PAGE ============
export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <Hero/>
      <Problem/>
      <Solution/>
      <Programme/>
      <ForWho/>
      <HowItWorks/>
      <Motivation/>
      <Offer/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
