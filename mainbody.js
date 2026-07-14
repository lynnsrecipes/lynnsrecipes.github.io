// by JC McCowan 10/11/2025
// used for html for Lynn's Recipes PDF recipes

  window.addEventListener("resize", myWidthFunction);

   const collectiontop = document.getElementsByClassName("bmarktop");
   const collection2 = document.getElementsByClassName("bmark");
   const collection3 = document.getElementsByClassName("m-nav"); 

function myWidthFunction(){
  console.info("running width process");
  var thehght = collection3[0].offsetHeight;
  document.getElementById("searchInput").value="";
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
function searchPage() {
  const searchTerm = document.getElementById("searchInput").value;
  console.log("running search");
  if (searchTerm) {
    window.find(searchTerm);
	var theText=document.getElementById("searchbutton").innerText
	console.info("The Button label is " + theText);
	console.info("the searchTerm is " + searchTerm);
	document.getElementById("searchbutton").innerText= "Find more";
	
  } else {
//    alert("Please enter a search term.");
	document.getElementById("searchbutton").innerText= "Find";
  }
};
function myInputTextFunction(e){
  let theLength=e.target.value.length;
  if(theLength<1){
	  document.getElementById("searchbutton").innerText= "Find";
  };
};
