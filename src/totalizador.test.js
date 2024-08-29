import { totalizador } from "./totalizador";

describe("Totalizador", () => {
    it("Deberia mostrar 20 items", () => {
        expect(totalizador(20, 0)).toEqual([20, 0]);
    });
    it("Deberia mostrar 20 items y 10 de precio", () => {
        expect(totalizador(20, 10)).toEqual([20, 10]);
    });
});