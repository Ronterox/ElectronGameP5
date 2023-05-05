let items = [];
let selectedItem = null;

window.addEventListener("DOMContentLoaded", () => {
	const itemForm = document.getElementById("itemForm");

	itemForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const input = e.target[0];

		if (!input.value) 
        {
            selectedItem = null;
            document.getElementById("selected-item").innerHTML = "";
            return;
        }

		items.push(input.value);
		input.value = "";

		const itemsList = document.getElementById("item-list");
        const index = items.length - 1;
		const item = `
        <div id="item-${index}" class="item">
			<h2>${items[index]}</h2>
			<p> | | | </p>
		</div>`;

        itemsList.insertAdjacentHTML("beforeend", item);

        const itemNode = itemsList.querySelector(`#item-${index}`);

        itemNode.addEventListener("click", () => {
            selectedItem = itemNode;
            document.getElementById("selected-item").innerHTML = items[index];
        });
    });
});
