const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
    // escreva seu código aqui
    const currentYear = new Date().getFullYear();
  return books
    .filter((book) => currentYear - book.releaseYear > 60)
    .map((book) => book.name);
  }