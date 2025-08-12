import Fproduct from "./Fproduct";
import Header from "./Header";
import IntrProduct from "./IntrProduct";
import Main from "./Main";

// app/page.js
export default async function HomePage() {
  // 1. گرفتن لیست کلی کوکتل‌ها
  // const listRes = await fetch(
  //   "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  // )
  // const listData = await listRes.json()
  // const allCocktails = listData.drinks || []

  // // 2. انتخاب 20 تا تصادفی بدون تکرار
  // function getRandomItems(arr, n) {
  //   const result = []
  //   const taken = new Set()

  //   while (result.length < n && result.length < arr.length) {
  //     const index = Math.floor(Math.random() * arr.length)
  //     if (!taken.has(index)) {
  //       taken.add(index)
  //       result.push(arr[index])
  //     }
  //   }
  //   return result
  // }

  // const selectedCocktails = getRandomItems(allCocktails, 20)

  // // 3. گرفتن جزئیات هر کوکتل به صورت همزمان
  // const detailsPromises = selectedCocktails.map(cocktail =>
  //   fetch(
  //     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
  //   ).then(res => res.json())
  // )
  // const detailsResults = await Promise.all(detailsPromises)

  // // 4. استخراج داده‌های کامل هر نوشیدنی
  // const drinks = detailsResults
  //   .map(result => (result.drinks && result.drinks[0] ? result.drinks[0] : null))
  //   .filter(Boolean)

  return (<div>
    <Header/>
    <Main/>
    <Fproduct/>
    <IntrProduct/>
  </div>
    // <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
    //   <h1>Random 20 Cocktails with Details</h1>
    //   <ul style={{ listStyle: "none", padding: 0 }}>
    //     {drinks.map(drink => (
    //       <li
    //         key={drink.idDrink}
    //         style={{
    //           marginBottom: "2rem",
    //           borderBottom: "1px solid #ddd",
    //           paddingBottom: "1rem"
    //         }}
    //       >
    //         <h2>{drink.strDrink}</h2>
    //         <img
    //           src={drink.strDrinkThumb}
    //           alt={drink.strDrink}
    //           width={200}
    //           style={{ borderRadius: 8 }}
    //         />
    //         <p><strong>Category:</strong> {drink.strCategory}</p>
    //         <p><strong>Type:</strong> {drink.strAlcoholic}</p>
    //         <p><strong>Glass:</strong> {drink.strGlass}</p>

    //         <h3>Ingredients:</h3>
    //         <ul>
    //           {Array.from({ length: 15 }).map((_, i) => {
    //             const ingredient = drink[`strIngredient${i + 1}`]
    //             const measure = drink[`strMeasure${i + 1}`]
    //             if (ingredient) {
    //               return (
    //                 <li key={i}>
    //                   {measure ? `${measure} ` : ""}{ingredient}
    //                 </li>
    //               )
    //             }
    //             return null
    //           })}
    //         </ul>

    //         <h3>Instructions:</h3>
    //         <p>{drink.strInstructions}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}
