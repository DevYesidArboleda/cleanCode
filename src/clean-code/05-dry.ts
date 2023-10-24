type Size  = '' | 'S' | 'M' | 'XL' | 'XS'


class Product{
    constructor(
        public name: string,
        public price: number= 0,
        public size: Size = '',
    ){}

    isProductready(){
        for (const key in this){
            switch (typeof this[key]){
                case 'string':
                    if(<string><unknown>this[key]) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if(<number><unknown>this[key]) throw Error(`${key} is zero`);
                break;
                default:
                     throw Error( `${typeof this[key]} is not valid`)
            }
        }
    }

    toString(){
        //No DRY
       /* if(this.name.length <= 0) throw ("name is empty")
        if(this.price <= 0) throw ("price is zero")
        if(this.size.length <= 0) throw ("size is empty")*/

        if(!this.isProductready) return;

        return  `${this.name} ${this.price} ${this.size}`
    } 
}

(()=>{
const bluePants = new Product('Hola mundo', 10, "M");
console.log(bluePants.toString())
})();