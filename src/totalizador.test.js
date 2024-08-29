import { totalizador, precioItem, estado } from "./totalizador";

describe("Totalizador", () => {
    it("Deberia mostrar 20 items", () => {
        expect(totalizador(20)).toEqual(20);
    });
    it("Deberia mostrar 20 items y 10 de precio", () => {
        expect(precioItem(3)).toEqual(3);
    });
    it("Deberia mostrar el estado ", () => {
        expect(estado("UT")).toEqual("UT");
    });
});