const categories = document.querySelectorAll('.item');

const numberOfCategories = categories.length;

console.log(`Number of categories: ${numberOfCategories}`);

console.log('');


categories.forEach(category => {
    const categoryName = category.querySelector('h2').innerText;
    console.log(`Category: ${categoryName}`);
    
    const numberOfElements = category.querySelectorAll('li').length;
    console.log(`Elements: ${numberOfElements}`);
    console.log('');
})
