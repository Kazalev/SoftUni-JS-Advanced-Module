function solve() {
   
   const [ searchFilterInput, nameInput, quantityInput, priceInput ] = Array.from(document.querySelectorAll('input'));
   const filterBtn = Array.from(document.querySelectorAll('button'))[0];
   const addBtn = Array.from(document.querySelectorAll('button'))[1];
   const buyBtn = Array.from(document.querySelectorAll('button'))[2];
   const products = document.getElementById('products');
   const ulList = document.querySelectorAll('ul')[0];
   const secondUlList = document.querySelectorAll('ul')[1];
   let totalSum = 0;
   

   addBtn.addEventListener('click', function(e){
      e.preventDefault();
      const name = nameInput.value;
      let quantity = Number(quantityInput.value);
      const price = +priceInput.value;

      const liElement = document.createElement('li');
      const spanElement = document.createElement('span');
      const strongSecondElement = document.createElement('strong');
      const strongElement = document.createElement('strong');
      const divElement = document.createElement('div');
      const btnElement = document.createElement('button');

      spanElement.textContent = name;
      strongElement.textContent = `Available: ${quantity}`;
      strongSecondElement.textContent = price.toFixed(2);
      btnElement.textContent = `Add to Client's List`;

      divElement.appendChild(strongSecondElement);
      divElement.appendChild(btnElement);

      liElement.appendChild(spanElement);
      liElement.appendChild(strongElement);
      liElement.appendChild(divElement);

      ulList.appendChild(liElement);

      filterBtn.addEventListener('click', function(){
         let filter = searchFilterInput.value;
         filter.toLowerCase();
         let checker = false;
         let li = Array.from(document.querySelectorAll('li'));
         for (i = 0; i < li.length; i++) {
            let currentName = spanElement.textContent.toLowerCase();
            console.log(li[i]);
            
            for(let j = 0; j < currentName.length; j++){
               if(filter === currentName[j]){
                  li[i].style.display = "";
               } else {
                  li[i].style.display = "none";
               }
            }
         }
      });

      quantity -= 1;
      btnElement.addEventListener('click', function(){
         strongElement.textContent = `Available: ${quantity--}`;
         totalSum += price;
         document.querySelectorAll('h1')[1].textContent = `Total Price: ${totalSum.toFixed(2)}`;
         
         const liElement2 = document.createElement('li');
         const strongElement2 = document.createElement('strong');
         liElement2.textContent = name;
         strongElement2.textContent = price.toFixed(2);

         liElement2.appendChild(strongElement2);
         secondUlList.appendChild(liElement2);

         if(quantity === -1){
            console.log(ulList);
            ulList.removeChild(liElement);
         }
      });

      buyBtn.addEventListener('click', function(){
         secondUlList.textContent = '';
         totalSum = 0;
         document.querySelectorAll('h1')[1].textContent = `Total Price: ${totalSum.toFixed(2)}`;
      });
   });
}