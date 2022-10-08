describe("Shopping Cart", () => {
  it("can remove items from cart", () => {
    cy.visit("/");

    cy.get(".Item").should("have.length", 3);

    cy.get('[aria-label="Toggle navigation"]').click();

    cy.get('[href="/cart"]').click();

    cy.get(".Item").should("have.length", 2);

    cy.get('[data-test-id="remove-item"]').first().click();

    cy.reload();

    cy.get(".Item").should("have.length", 2);
  });

  it.skip("can remove an item from the cart", () => {});
});

export {};
