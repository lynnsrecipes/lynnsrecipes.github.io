class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            


			<div class="m-nav" >
				<img class="logo"alt="Lynn's Recipes" src="logo.png"> 

				<p >
					<div class="dropdown" style="float:left;">
						<button class="dropbtn">&#9776;&nbsp;Recipes</button>
						<div class="dd-content">
							<a href="index.html">Home Page</a>
							<a href="appetizers.html">Appetizers</a>
							<a href="beverages.html">Beverages</a>
							<a href="breads.html">Breads</a>
							<a href="desserts.html">Desserts</a>
							<a href="maindishes.html">Main Dishes</a>	
							<a href="miscellaneous.html">Miscellaneous</a>	
							<a href="saladdressings.html">Salads & Dressings</a>	
							<a href="sauces.html">Sauces</a>
							<a href="sidedishes.html">Side Dishes</a>
							<a href="soups.html#">Soups</a>
						</div>
					</div>
						&nbsp;&nbsp;To find a recipe: use Crtl+f or Command+f, select a letter above, or use: &nbsp;&nbsp;
						<input class="findinput" type="text" id="searchInput" onkeyup="myInputTextFunction(event)" placeholder="Enter text to find">
						<button class="findbutton" id="searchbutton" onclick="searchPage()">Find</button>
				</p>
				<br>
				<a href="#top" >Top</a>
				<a href="#a" >A</a>
				<a href="#b" >B</a>
				<a href="#c" >C</a>
				<a href="#d" >D</a>
				<a href="#e" >E</a>
				<a href="#f" >F</a>
				<a href="#g" >G</a>
				<a href="#h" >H</a>
				<a href="#i" >I</a>
				<a href="#j" >J</a>
				<a href="#k" >K</a>
				<a href="#l" >L</a>
				<a href="#m" >M</a>
				<a href="#n" >N</a>
				<a href="#o" >O</a>
				<a href="#p" >P</a>
				<a href="#q" >Q</a>
				<a href="#r" >R</a>
				<a href="#s" >S</a>
				<a href="#t" >T</a>
				<a href="#u" >U</a>
				<a href="#v" >V</a>
				<a href="#w" >W</a>
				<a href="#x" >X</a>
				<a href="#y" >Y</a>
				<a href="#z" >Z</a>
			</br>	
	
			</div>

			<div class="recipes bmarktop" id="top" ></div>

        `;
    }
}


customElements.define('shared-mainheader', MainHeader);




