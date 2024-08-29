import { mostrarItems } from "./totalizador";

describe("Mostrar Items", () => {
    it("Deberia mostrar 20 items", () => {
        expect(mostrarItems(20)).toEqual(20);
    });
});