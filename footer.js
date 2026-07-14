class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        	<div style="height:50px";"></div>
		<div class="footer" style="text-align: center;">by <a href="mailto:mccowan2812@gmail.com?subject=Lynn's%20Recipes%20PDF%20version">JC McCowan</a> created 10/8/2025 v.2026.07.14</div>
		<div style="height:50px";></div>

        `;
    }
}


customElements.define('shared-footer', Footer);




