let quote=document.getElementById("quote");
let quoteText=document.getElementById("quotesText");
let author=document.getElementById("author");
let data;
getRandom=()=>
{
  let random=Math.floor(Math.random() * 100);
  
  quoteText.innerHTML=`${data[random].text}`;
  author.innerHTML=`- ${data[random].author}`;
}

let getApi=async()=>
{
  let api="https://type.fit/api/quotes";
  
  try {
    
    let res = await fetch(api);
     data = await res.json();
   // console.log(data[0].text);
    getRandom();
    //changeQuote.innerHTML=`${data}`;
  } catch (e) {
    console.log(e);
  }
}

getApi(); 

quote.addEventListener("click", ()=>
{
 getApi(); 
});