const URLApp = "http://127.0.0.1:8080";

describe("Visitando la pokedex", () => {
  beforeEach(() => {
    cy.visit(URLApp);
  });
  it("Se asegura que exista las cartas con pokemones", () => {
    cy.get(".cartas-de-pokemones").find(".card").should("exist");
  });
  it("Se asegura que cada card tenga la imagen de cada pokemon", () => {
    cy.get(".pokemon").find(".pokemon-imagen").should("exist");
  });
  it("Se asegura que exista una barra de filtros", () => {
    cy.get(".sidebar-lista").find(".sidebar-item").should("exist");
  });
  it("Se asegura que existan botones para cambiar de pagina", () => {
    cy.get(".navbar").find("#pagina-anterior").should("exist");
    cy.get(".navbar").find("#pagina-siguiente").should("exist");
  });
});

describe("Probando la app", () => {
  beforeEach(() => {
    cy.visit(URLApp);
  });
  it("Se puede cambiar de pagina", () => {
    cy.get("#pagina-siguiente").click();

    cy.wait(1000);

    cy.get("#pagina-anterior").click();
  });
  it("Se asegura que se aplica el filtro de pokemones", () => {
    cy.wait(5000);
    cy.get("#fire").click();
    cy.wait(5000);
    cy.get("#ver-todos").click();
  });
  it("Se asegura que se pueda ver la informacion del pokemon", () => {
    cy.wait(5000);
    cy.get(".modal-btn").first().click();
    cy.wait(2000);
    cy.get('.modal-body').find('.pokemon-types');
    cy.get('.modal-body').find('.poke-stats');
  });
});

describe('Testeando la API',()=>{
  beforeEach(()=>{
    cy.visit(URLApp)
  })
  describe('API de Pokémon', () => {
    it('carga los datos de un Pokémon correctamente', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/1').as('pokemon');
      cy.get('@pokemon').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('bulbasaur');
        expect(response.body.types).to.have.length(2);
      });
    });
  });
})
