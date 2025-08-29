function showAnimalFact() {
  const facts = [
    "Sloths sleep up to 20 hours a day!",
    "Toucans have the biggest beaks in the bird world.",
    "Red-eyed tree frogs can leap far to escape predators.",
    "Rainforests cover only 6% of Earth, but house over 50% of animals!",
    "Jaguars can swim and love water."
  ];
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("animalFact").textContent = facts[randomIndex];
}
