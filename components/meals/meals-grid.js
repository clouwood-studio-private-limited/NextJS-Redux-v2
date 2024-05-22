import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export default async function MealsGrid() {
  const meals = [
    {
      id: 1,
      title: "Hot Crispy Burger",
      image: "/images/burger.jpg",
      summary:
        "Spicy marinade, succulent boneless chicken, and our signature crunchy coating.",
      creator: "KFC",
    },
    {
      id: 2,
      title: "Yummy Curry",
      image: "/images/curry.jpg",
      summary:
        "jam-packed with fireworks of savory, spicy, and even sweet tastes",
      creator: "Karims",
    },
    {
      id: 3,
      title: "Veg Dumplings",
      image: "/images/dumplings.jpg",
      summary:
        "small mass of leavened dough that is either boiled or steamed and served in soups or stews or with fruit.",
      creator: "China Town",
    },
    {
      id: 4,
      title: "Double Cheese Pizza",
      image: "/images/pizza.jpg",
      summary:
        "This comes with the goodness of extra cheese, oodles of liquid cheese coming out with every bite",
      creator: "Pizza Buzzer",
    },
  ];
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
