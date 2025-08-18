/// <reference types="cypress" />

describe('Agenda de Contatos - CRUD', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('deve incluir um contato', () => {
    const nome = `Teste ${Date.now()}`
    const telefone = '11999998888'
    const email = `teste${Date.now()}@teste.com`

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)  
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button[type="submit"]').click()

    cy.contains('.contato', nome).should('exist')
    cy.contains('.contato', telefone).should('exist')
  })

  it('deve alterar um contato', () => {
    const nome = `Teste ${Date.now()}`
    const telefone = '11911112222'
    const email = `teste${Date.now()}@teste.com`

    // cria contato
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)   
    cy.get('input[placeholder="Telefone"]').type('11888887777')
    cy.get('button[type="submit"]').click()
    cy.contains('.contato', nome).should('exist')

    // edita
    cy.contains('.contato', nome).within(() => {
      cy.contains('Editar').click()
    })

    cy.get('input[placeholder="Telefone"]').clear().type(telefone)
    cy.get('button[type="submit"]').click()

    cy.contains('.contato', telefone).should('exist')
  })

  it('deve remover um contato', () => {
    const nome = `Teste ${Date.now()}`
    const email = `teste${Date.now()}@teste.com`

    // cria contato
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type('11777776666')
    cy.get('button[type="submit"]').click()
    cy.contains('.contato', nome).should('exist')

    // remove
    cy.contains('.contato', nome).within(() => {
      cy.get('button.delete').click()
    })

    cy.contains('.contato', nome).should('not.exist')
  })
})
