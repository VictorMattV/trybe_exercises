const service = require('./service');


describe("testando implementações na function number", () => {

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });

  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(service.randomNumber(5, 5, 5)).toBe(125);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5, 5, 5);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
  
    expect(service.randomNumber(8)).toBe(16);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(8);
  });

});

  describe("testando implementações nas demais functions", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const mockFirstFunction = jest.spyOn(service, "firstFunction" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const mockSecondFunction = jest.spyOn(service, "secondFunction").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockSecondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    const mockThirdFunction = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockThirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });

  test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    service.firstFunction.mockRestore();

    expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  })

});

