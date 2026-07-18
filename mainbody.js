// by JC McCowan 10/11/2025
// used for html for Lynn's Recipes PDF recipes

  window.addEventListener("resize", myWidthFunction);

   const collectiontop = document.getElementsByClassName("bmarktop");
   const collection2 = document.getElementsByClassName("bmark");
   const collection3 = document.getElementsByClassName("m-nav"); 
   

   function myWidthFunction(){
      // console.info("running width process");
      var thehght = collection3[0].offsetHeight;
      document.getElementById("searchBox").value="";
      let heightText= thehght + "px";
      // console.log("heightText: " + heightText);
      document.getElementById("TheRecipes").style.paddingTop = heightText;

  if(thehght<=167){
		for (let i = 0; i < collectiontop.length; i++) {
		  collectiontop[i].style.top =  "-167px";
		}
		for (let i = 0; i < collection2.length; i++) {
		  collection2[i].style.top =  "-140px";
		}
	}else if(thehght<=187){
		for (let i = 0; i < collectiontop.length; i++) {
		  collectiontop[i].style.top =  "-187px";
		}
		for (let i = 0; i < collection2.length; i++) {
		  collection2[i].style.top =  "-160px";
		}
     }else if(thehght<=207){
		for (let i = 0; i < collectiontop.length; i++) {
		  collectiontop[i].style.top = "-207px";
		}
		for (let i = 0; i < collection2.length; i++) {
		  collection2[i].style.top = "-185px";
		}		
	}else{
		for (let i = 0; i < collectiontop.length; i++) {
		  collectiontop[i].style.top = "-240px";
		}
		for (let i = 0; i < collection2.length; i++) {
		  collection2[i].style.top = "-205px";
		}
    }
};
;
