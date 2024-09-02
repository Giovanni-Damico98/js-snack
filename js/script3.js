// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona,
// una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
  {
    nome: "Giovanni",
    cognome: `D'amico`,
    eta: "25",
  },
  {
    nome: "Davide",
    cognome: `D'amico`,
    eta: "10",
  },
  {
    nome: "Filippo",
    cognome: "Lorenzini",
    eta: "20",
  },
  {
    nome: "Marco",
    cognome: "Lorenzini",
    eta: "12",
  },
];

const frase = persone.map((persona) => {
  const possibilitaDiGuidare =
    persona.eta >= 18 ? "Può guidare" : "Non può guidare";
  return `${persona.nome} ${persona.cognome} ${possibilitaDiGuidare}`;
});

console.log(frase);
