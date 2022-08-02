import NumerosFelizesESortudos from ".";

describe("#Index - test suit for index file", () => {
  it("NumerosFelizesESortudos - should return 'Número Sortudo e Feliz.' given param 7", () => {
    const result = NumerosFelizesESortudos(7);
    expect(result).toBe("7 - Número Sortudo e Feliz.");
  });

  it("NumerosFelizesESortudos - should return 'Número Sortudo e Não-Feliz.' given param 21", () => {
    const result = NumerosFelizesESortudos(21);
    expect(result).toBe("21 - Número Sortudo e Não-Feliz.");
  });

  it("NumerosFelizesESortudos - should return 'Número Não-Sortudo e Feliz.' given param 28", () => {
    const result = NumerosFelizesESortudos(28);
    expect(result).toBe("28 - Número Não-Sortudo e Feliz.");
  });

  it("NumerosFelizesESortudos - should return 'Número Não-Sortudo e Não-Feliz.' given param 142", () => {
    const result = NumerosFelizesESortudos(142);
    expect(result).toBe("142 - Número Não-Sortudo e Não-Feliz.");
  });

  it("NumerosFelizesESortudos - should return 'Número Sortudo e Não-Feliz' given param 37", () => {
    const result = NumerosFelizesESortudos(37);
    expect(result).toBe("37 - Número Sortudo e Não-Feliz.");
  });

  it("NumerosFelizesESortudos - should return 'Número Não-Sortudo e Feliz.' given param 100", () => {
    const result = NumerosFelizesESortudos(100);
    expect(result).toBe("100 - Número Não-Sortudo e Feliz.");
  });
});
