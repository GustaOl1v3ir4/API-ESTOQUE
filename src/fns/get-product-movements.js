function getProductMovementes (movements) {
    const productMap = {};

    movements.forEach(movement => {
        const {productId, amount, type, product} = movement

        if(!productMap[productId]){ //se o produto ainda não existe no productMap
            productMap[productId] = {name: product.name, amount: 0} //cria a entrada
        }

        const amountChange = type === "in" ? amount : -amount 
        productMap[productId].amount += amountChange
    })

    const products = Object.values(productMap)


    return { products }
}

module.exports = getProductMovementes