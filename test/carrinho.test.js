import Carrinho from '../carrinho.js'
import Item from '../item.js'

describe('Testes do carrinho', ()=> {
    it('Deve inicializar vazio', ()=> {
        const carrinho = new Carrinho()

        expect(carrinho.subtotal).toBeNull()
    })
    it('Deve ter itens', ()=> {
        const item1 = new Item('Banana', 2, 5)
        const item2 = new Item('Mamão', 0.5, 1)
        const carrinho = new Carrinho()
        carrinho.adiciona(item1)
        carrinho.adiciona(item2)

        expect(typeof carrinho).toBe('object')
        expect(carrinho.itens[0]).toBe(item1)
        expect(carrinho.itens[1]).toBe(item2)

        expect(carrinho.itens).toContain(item1)
        expect(carrinho.itens).toContain(item2)
    })
    it('Deve ter a propriedade "total" na inicialização', ()=> {
        const carrinho = new Carrinho()
        expect(carrinho).toHaveProperty('total')
    }) 
    it('Deve lançar erro ao tentar finalizar compra com carrinho vazio.', ()=> {
        function capturaErro(){
            const carrinho = new Carrinho()
            carrinho.finalizaCompra()
        }

        expect(capturaErro).toThrowError('Carrinho de compras vazio')
    })
    it('Deve adicionar frete ao carrinho', ()=> {
        const carrinho = new Carrinho()
        carrinho.adicionaFrete(10)

        expect(carrinho.frete).toBe(10)
    })
    it('Deve finalizar as compras', ()=> {
        const item1 = new Item('Banana', 2, 5)
        const item2 = new Item('Mamão', 2, 1)
        const carrinho = new Carrinho()
        carrinho.adiciona(item1)
        carrinho.adiciona(item2)
        carrinho.adicionaFrete(10)

        expect(carrinho.finalizaCompra()).toStrictEqual({
            frete: 10,
            subtotal: 12,
            total: 22
        })
    })
})