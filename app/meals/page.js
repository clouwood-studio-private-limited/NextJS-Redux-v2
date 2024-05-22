import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
      </header>
      <main className={classes.main}>
        <MealsGrid />
      </main>
    </>
  );
}
