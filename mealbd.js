document.getElementById('error-message').style.display = 'none'

const searchFood = async () => {
const searchfield = document.getElementById('search-field')
const searchText = searchfield.value;
// clear data 
searchfield.value = '';
document.getElementById('error-message').style.display = 'none';

if(searchText == ''){

//   const head = document.createElement('h2')
//   head.innerHTML =`<h2> error <?h2>`;
//  searchfield.appendChild.add(head)
}



else{
  // এখানে food এর url টা আনা হল
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

// const res = await fetch (url)
// const data = await res.json();
// displaySearchResults(data.meals)


fetch (url)
.then(response => response.json())
.then(data => displaySearchResults(data.meals))
.catch(error => displayError(error))
}

} 

const  displayError = error => {
  document.getElementById('error-message').style.display = 'block'

}


const displaySearchResults = meals => {

  const searchResult = document.getElementById('search-result');
  searchResult.textContent ='';
  meals.forEach(meal => {
const div = document.createElement('div')
div.classList.add('col');
div.innerHTML = `
 <div onclick= "loadMealDetail(${meal.idMeal})" class="card">
     <img src="${meal.strMealThumb}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      </div>
 </div>

`;
searchResult.appendChild(div);


  })
}


const loadMealDetail = async mealId => {

  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

  const res = await fetch(url)
  const data = await res.json()
  displayMealDetail(data.meals[0])
  
  // async & await diya kora holo uporer gula

  // fetch(url)
  // .then(res => res.json())
  // .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal =>{

const mealDetails = document.getElementById('meal-details');
mealDetails.textContent = '';
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML =`
<img  src="${meal.strMealThumb}" class="card-img-top" alt="img">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  
</div>`

mealDetails.appendChild(div)
}