(()=>{
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const path=location.pathname.replace(/index\\.html$/,'').replace(/\\/$/,'')||'/';
 document.querySelectorAll('.nav a[href]').forEach(a=>{const target=new URL(a.href,location.href).pathname.replace(/index\\.html$/,'').replace(/\\/$/,'')||'/';if(target===path)a.setAttribute('aria-current','page');});
 document.querySelectorAll('a[href]').forEach(a=>{const u=new URL(a.href,location.href);if(u.origin===location.origin&&u.pathname===location.pathname&&u.hash){a.addEventListener('click',()=>{});}});
 const main=document.querySelector('main');if(main&&!reduce){main.classList.add('page-enter');}
})();