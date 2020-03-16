// acá escribimos nuestros testings
describe("Función que da vuelta un String", function() {
    //primera prueba
    it('Debe retornar "aloh" si yo le paso "hola" ', function() {
        expect(invertirString("hola")).toEqual("aloh");
        expect(invertirString('hola')).not.toEqual('alo');
    });
});