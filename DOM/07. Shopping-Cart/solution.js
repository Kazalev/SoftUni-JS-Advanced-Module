function solve() {
   let products = document.getElementsByClassName("product");
   let buttons = document.getElementsByClassName("add-product");
   let names = document.getElementsByClassName("product-title");
   
   let textArea = document.getElementsByTagName("textarea")[0];
   let itemsPurchased = [];
   let totalPrice = Number(0);
 
   for (let i = 0; i < products.length; i++) {
      buttons[i].addEventListener("click", function () {
         let name = names[i].textContent;
         let price = Number(products[i].textContent.match(/[0-9]+.[0-9]+/gim));
 
         if (!itemsPurchased.includes(name)) {
            itemsPurchased.push(name);
         }
         totalPrice += Number(price);
 
         textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`

         console.log(itemsPurchased);
      });
   }

   let checkoutButton = document.getElementsByClassName("checkout")[0];
      checkoutButton.addEventListener("click", function () {
      let listAsString = itemsPurchased.join(", ")
      textArea.value += `You bought ${listAsString} for ${totalPrice.toFixed(2)}.`;
 
      disableButtons(buttons);
   });

   function disableButtons(buttons){
      for (let button of buttons) {
         button.disabled = true;
      }
      checkoutButton.disabled = true;
   }
}