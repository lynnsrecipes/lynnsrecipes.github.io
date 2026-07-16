// script32.js
function searchSite() {
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", () => {
    const term = searchBox.value.toLowerCase();
    document.querySelectorAll("div.bmark,article.recipes").forEach(el => {
        el.style.display =
            el.textContent.toLowerCase().includes(term)
                ? ""
                : "none";
    });
})};
function clearSearch(){
	var theText=document.getElementById("article.recipes,div.bmark");
	document.getElementById("searchBox").value="";
	document.querySelectorAll("article.recipes,div.bmark").forEach(el => {
console.info("The element is " + theText);		
	el.style.display ="";

})};
