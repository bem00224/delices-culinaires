export const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m > 0 ? `${m} min` : ""}`.trim();
};
  
export const multiplyIngredients = (ingredients, persons, base = 2) => {
return ingredients.map(ing => ({
    ...ing,
    quantity: typeof ing.quantity === "number" ? (ing.quantity / base) * persons : ing.quantity
}));
};
  