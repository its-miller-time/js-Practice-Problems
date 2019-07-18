const element = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tabs-content") 

console.log(content)


function handleClick(event){
    element.forEach(el => el.classList.remove('selected'));
    this.classList.add('selected');
    content.forEach(el => el.classList.remove('selected'));
    content.forEach(el => el.classList.add('hidden'));
    
    const tab = event.target.dataset.tab;
    console.log(tab)
    
    content.forEach(copy => {
        if(copy.dataset.tab === tab){
            copy.classList.add('selected');
            copy.classList.remove('hidden');
        } else {
            copy.classList.add('hidden');
            copy.classList.remove('selected')
        };
    } )
 };

element.forEach(el => el.addEventListener('click', handleClick))
