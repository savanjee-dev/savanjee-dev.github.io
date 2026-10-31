(()=>{
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const clean=p=>{if(p.endsWith('/index.html'))p=p.slice(0,-10);if(p.length>1&&p.endsWith('/'))p=p.slice(0,-1);return p||'/';};
 const current=clean(location.pathname);
 document.querySelectorAll('.nav a[href]').forEach(a=>{const target=clean(new URL(a.href,location.href).pathname);if(target===current)a.setAttribute('aria-current','page');});
 const main=document.querySelector('main');if(main&&!reduce)main.classList.add('page-enter');
})();
// Make archive return controls explicit and reliable on touch devices.
document.querySelectorAll("[data-home-link]").forEach(link=>{link.addEventListener("click",event=>{event.preventDefault();window.location.assign("/");});});
