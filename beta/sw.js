/* Kiplan · avisos al móvil. Sin caché: la app siempre se carga de internet. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{
  let d={};try{d=e.data?e.data.json():{}}catch(_e){d={cuerpo:e.data?e.data.text():""}}
  const o={body:d.cuerpo||"",icon:"/icon-192.png?v=4",badge:"/icon-192.png?v=4",data:{url:d.url||""}};
  if(d.tag){o.tag=d.tag;o.renotify=true}
  e.waitUntil(self.registration.showNotification(d.titulo||"Kiplan",o));
});
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  const h=(e.notification.data&&e.notification.data.url)||"",base=self.registration.scope;
  e.waitUntil((async()=>{
    const cs=await self.clients.matchAll({type:"window",includeUncontrolled:true});
    for(const c of cs){if(c.url.indexOf(base)===0){try{await c.focus()}catch(_e){}if(h)c.postMessage({kp:"aviso",h:h});return}}
    await self.clients.openWindow(base+h);
  })());
});
