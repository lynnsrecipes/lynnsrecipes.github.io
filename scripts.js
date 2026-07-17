// Find the container element
const container = document.getElementById("content-mainheader");

// Insert the HTML structure
container.innerHTML = `
    <div class="card">
        <h2>Hello World</h2>
        <p>This HTML was inserted dynamically using a JS file.</p>
    </div>
`;
