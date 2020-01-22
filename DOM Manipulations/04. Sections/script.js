function create(words) {
   
   const content = document.getElementById('content');

   for(let i = 0; i < words.length; i++){
      let currentWord = words[i];

      let divElement = document.createElement('div');
      let paragraphElement =  document.createElement('p');
      paragraphElement.textContent = currentWord;
      
      divElement.appendChild(paragraphElement);
      content.appendChild(divElement);

      paragraphElement.style.display = 'none';
      divElement.addEventListener('click', function(){
         paragraphElement.style.display = 'block';
      });
   }
}