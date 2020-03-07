function acceptance() {
	
	const [ companyInput, productInput, quantityInput, scrapeInput ] = Array.from(document.querySelectorAll('input'));
	const addButton = document.getElementById('acceptance');
	const bodyDiv = document.getElementById('warehouse');
	
	addButton.addEventListener('click', function(e){
		let company = companyInput.value;
		let product = productInput.value;
		let quantity = Number(quantityInput.value);
		let scrape = Number(scrapeInput.value);
		
		if(company !== '' && product !== '' && quantity && scrape){
			const productElement = document.createElement('div');
        	const p = document.createElement('p');
			const outOfStockBtn = document.createElement('button');
			//outOfStockBtn.setAttribute('type', 'button');
			quantity -= scrape;
			if(quantity > 0){
				p.textContent = `[${company}] ${product} - ${quantity} pieces`;
				outOfStockBtn.textContent = `Out of stock`;

				outOfStockBtn.addEventListener('click', function(){
					this.parentNode.parentNode.removeChild(this.parentNode);
				});

				productElement.appendChild(p);
				productElement.appendChild(outOfStockBtn);

				bodyDiv.appendChild(productElement);
			}
		}

		companyInput.value = '';
		productInput.value = '';
		quantityInput.value = '';
		scrapeInput.value = '';
	})
}