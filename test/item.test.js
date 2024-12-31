import Item from '../item.js'

describe('Testes dos itens', ()=> {
    test('Deve ter 3 campos: nome, valor e quantidade', ()=> {
        const item = new Item('Cenoura', 3.5, 10)
        
        expect(item.nome).toBe('Cenoura')
        expect(item.valor).toBe(3.5)
        expect(item.quantidade).toBe(10)
    })
    test('Deve ter o preço calculado de acordo com a quantidade', ()=> {
        const item = new Item('Batata', 0.1, 3)

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3)
    })
})