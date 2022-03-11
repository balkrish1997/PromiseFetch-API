 const bodyEle =document.querySelector("body");  
 const maindiv =document.createElement("div");
 maindiv.classList.add("main");
 bodyEle.append(maindiv);

async function PromiseAPI()
{
    const countryApi= await fetch(`https://rest-countries-api-techieegy.herokuapp.com/v1/all`);
    const data= await countryApi.json();
    data.forEach(item =>
    {
    const countryname=item.name;
    const flag=item.flags;
    const countrycaptial=item.capital;
    const countrycodes=item.alpha2Code +""+item.alpha3Code;
    const region=item.region;
    const latitude=item.latlng;
   
    const containerdiv=document.createElement("div");
    containerdiv.classList.add("container");
    const title      =document.createElement("div");
    title.classList.add("title","countryinfo");
    title.innerHTML=countryname;
    //Image Div

    const imagediv=document.createElement("div");

   const image=document.createElement("img");
   image.classList.add("imageinfo");
   image.setAttribute("src",flag)
   image.setAttribute("alt",countryname);

   
   imagediv.append(title);
   imagediv.append(image);
   //info div
   const infodiv=document.createElement("div");
   infodiv.classList.add("new");

   const div1=document.createElement("div");
   div1.classList.add("infodiv");
   const div2=document.createElement("div");
   div2.classList.add("infodiv")
   const div3=document.createElement("div");
   div3.classList.add("infodiv")
   const div4=document.createElement("div");
   div4.classList.add("infodiv")

   const lblcaptial=document.createElement("label");
   lblcaptial.innerHTML="Captial:"
   const spancaptial=document.createElement("span");
   spancaptial.classList.add("country");
   spancaptial.innerHTML=countrycaptial;
   div1.append(lblcaptial);
   div1.append(spancaptial);

   const lblcountry=document.createElement("label");
   lblcountry.innerHTML="Country Codes:"
   const spancountry=document.createElement("span");
   spancountry.innerHTML=countrycodes;
   spancountry.classList.add("result");
   div2.append(lblcountry);
   div2.append(spancountry);

   const lblregion=document.createElement("label");
   lblregion.innerHTML="Region:"
   const spanregion=document.createElement("span");
   spanregion.innerHTML=region;
   spanregion.classList.add("result");
   div3.append(lblregion);
   div3.append(spanregion);

   const lbllatlong=document.createElement("label");
   lbllatlong.innerHTML="Lat,Long:"
   const spanlatlong=document.createElement("span");
   spanlatlong.innerHTML=latitude;
   spanlatlong.classList.add("result");
   div4.append(lbllatlong);
   div4.append(spanlatlong);

   infodiv.append(div1);
   infodiv.append(div2);
   infodiv.append(div3);
   infodiv.append(div4);
  
 
   //Final
   containerdiv.append(imagediv);
   containerdiv.append(infodiv);
   maindiv.append(containerdiv);
  });
}

 PromiseAPI()
