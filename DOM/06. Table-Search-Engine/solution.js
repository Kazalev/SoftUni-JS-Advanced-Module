function solve() {
   
    let input = document.getElementById('searchField');
    let tbody = Array.from(document.querySelectorAll('body > table > tbody > tr')); //html body table.container tbody tr
    document.getElementById('searchBtn').addEventListener('click', search);

    function search(){
       tbody.map(x => x.classList.remove('select'));
       tbody.forEach(row => {
         let text = row.textContent;
         if(text.includes(input.value) && input.value != ''){
            row.className = 'select';
         }
       });
       
       input.value = '';
      }
}