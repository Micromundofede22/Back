class ProductManager {
    #products
    #error

    constructor() {
        this.#products = []
        this.#error = undefined
    }

    getProducts = () => this.#products

    getProductById = (id) => {
        const product = this.#products.find(item => item.id === id)
        if (!product) return 'Not Found'
        return product;
    }

    #generateId = () => (this.#products.length === 0) ? 1 : this.#products[this.#products.length - 1].id + 1

    #validateProduct = (title, description, price, code, stock, thumbnail) => {
        if (!title || !description || !price || !code || !stock || !thumbnail) {
            this.#error = `[${title}]: campos incompletos`
        } else {
            const found = this.#products.find(item => item.code === code)
            if (found) this.#error = `Code: [${code}]: el code ya existe`
            else this.#error = undefined
        }
    }

    addProduct = (title, description, price, code, stock, thumbnail) => {
        this.#validateProduct(title, description, price, code, stock, thumbnail)
        if (this.#error === undefined)
            this.#products.push({ id: this.#generateId(), title, description, price, code, stock, thumbnail })
        else
            console.log(this.#error)
    }
}

const productManager = new ProductManager()
productManager.addProduct("Terrario Berlín", "terrario abierto", 3500, "001", 20, "https://micromundofede22.github.io/html-Micromundo/imagenes/terrarios/berlin.jpg")
productManager.addProduct("Terrario Ámsterdam", "terrario abierto")  //error!! 
productManager.addProduct("Terrario Roma", "terrario abierto", 6500, "002", 20, "https://micromundofede22.github.io/html-Micromundo/imagenes/terrarios/roma.jpg")
productManager.addProduct("Terrario Londres", "terrario abierto", 7900, "002", 20, "https://micromundofede22.github.io/html-Micromundo/imagenes/terrarios/roma.jpg")  //error!! Codigo repetido
console.log(productManager.getProducts())
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(1))
console.log(productManager.getProductById(9))