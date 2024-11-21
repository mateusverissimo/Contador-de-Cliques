let contcliques = 0;
const botaocliques = document.getElementById('botaocliques');
const numerocliques = document.getElementById('numerocliques');

botaocliques.addEventListener('click', () => {
  contcliques++;
  numerocliques.textContent = `Cliques: ${contcliques}`;
});