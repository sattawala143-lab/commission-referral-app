const products=[
  {name:"Festival Decoration Kit",price:999},
  {name:"Pooja Essentials Pack",price:499},
  {name:"Digital Learning Pack",price:1499}
];
const rate=.05;
const box=document.querySelector("#products");
products.forEach((p)=>{
  const commission=Math.round(p.price*rate);
  const el=document.createElement("div");
  el.className="product";
  el.innerHTML=`<div><strong>${p.name}</strong><small>Price ₹${p.price.toLocaleString("en-IN")} • Demo commission ₹${commission}</small></div><button onclick="shareProduct('${p.name}')">Share</button>`;
  box.appendChild(el);
});
function shareProduct(name){
  const link=`https://example.com/?ref=MONU369&product=${encodeURIComponent(name)}`;
  if(navigator.share) navigator.share({title:name,text:"Check this product",url:link});
  else navigator.clipboard?.writeText(link).then(()=>alert("Referral link copied"));
}
document.querySelector("#copyBtn").onclick=async()=>{
 const link=document.querySelector("#refLink").textContent;
 try{await navigator.clipboard.writeText(link);document.querySelector("#copyStatus").textContent=" Copied!";}
 catch{document.querySelector("#copyStatus").textContent=" Copy manually: "+link;}
};
