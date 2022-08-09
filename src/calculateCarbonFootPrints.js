// @ts-check
/**
 * Calculates the carbon footprints of a person.
 * @function
 * @param {string} diet - Diet of the person.
 * @param {string} redMeat - Red Meat Consumption.
 * @param {string} seaFood - Sea Food Consumption.
 * @param {string} dairy - Dairy Product Consumption.
 * @param {string} throwFood - Amount of food thrown.
 *
 * @returns {("higher" | "lower" | "same as" | undefined)}
 */
export default function calculateCarbonFootPrints(
  diet,
  redMeat,
  seaFood,
  dairy,
  throwFood
) {
  const averagePoints = 5;
  let pointEarned = 0;

  if (diet === "vegan") {
  } else if (diet === "vegetarian" || diet === "semi-vegetarian") {
    pointEarned += 1;
  } else if (diet === "pescatarian" || diet === "eat-everything") {
    pointEarned += 2;
  }

  if (redMeat === "none") {
  } else if (redMeat === "few-times-a-week") {
    pointEarned += 1;
  } else if (redMeat === "most-days" || redMeat === "everyday") {
    pointEarned += 2;
  }

  if (seaFood === "none") {
  } else if (seaFood === "few-times-a-week") {
    pointEarned += 1;
  } else if (seaFood === "most-days" || seaFood === "everyday") {
    pointEarned += 2;
  }

  if (dairy === "none") {
  } else if (dairy === "few-times-a-week") {
    pointEarned += 1;
  } else if (dairy === "most-days" || dairy === "everyday") {
    pointEarned += 2;
  }

  if (throwFood === "never") {
  } else if (throwFood === "rarely") {
    pointEarned += 1;
  } else if (throwFood === "sometimes" || throwFood === "often") {
    pointEarned += 2;
  }

  if (pointEarned > averagePoints) {
    return "higher";
  } else if (pointEarned === averagePoints) {
    return "same as";
  } else if (pointEarned < averagePoints) {
    return "lower";
  }
}
