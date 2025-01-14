(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();let f,m;async function p(){f=await fetch("shaders/CRTVertexShader.glsl").then(e=>e.text()),m=await fetch("shaders/CRTFragmentShader.glsl").then(e=>e.text()),E(),h()}let l,s,o,c,u,g=new THREE.Clock;function E(){const e=document.getElementById("webgl-container");l=new THREE.Scene,s=new THREE.PerspectiveCamera(75,e.clientWidth/e.clientHeight,.1,1e3),s.position.z=2,o=new THREE.WebGLRenderer({antialias:!0}),o.setSize(e.clientWidth,e.clientHeight),e.appendChild(o.domElement);const r=new THREE.PlaneGeometry(2,2);c=new THREE.ShaderMaterial({vertexShader:f,fragmentShader:m,uniforms:{uTime:{value:0},uResolution:{value:new THREE.Vector2(e.clientWidth,e.clientHeight)}}}),u=new THREE.Mesh(r,c),l.add(u),window.addEventListener("resize",w)}function w(){const e=document.getElementById("webgl-container"),r=e.clientWidth,i=e.clientHeight;o.setSize(r,i),s.aspect=r/i,s.updateProjectionMatrix(),c.uniforms.uResolution.value.set(r,i)}function h(){requestAnimationFrame(h);let e=g.getElapsedTime();c.uniforms.uTime.value=e,o.render(l,s)}p();