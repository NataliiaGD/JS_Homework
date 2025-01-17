var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

        price() {
            let generalPrice = 0;
            for(const key in this){
                if(typeof this[key] !== "function"){
                    generalPrice += Number.parseFloat(this[key].split(' ')[0]);
                }
            }
            return generalPrice + " грн";
        },

        getMinPrice() {
            let minPrice = Infinity;
            for (const key in this) {
                if (minPrice > parseInt(this[key]) && typeof this [key] !== "function"){
                    minPrice = parseInt(this[key])
                }
            }
            return minPrice + " грн";

        },

        getMaxPrice() {
            let maxPrice = parseInt(this['стрижка']);
            for(const key in this){
                if(maxPrice < parseInt(this [key]) && typeof this [key] !== "function"){
                    maxPrice = parseInt(this[key]);
                }
            }
            return maxPrice + " грн";
        }

    }

    console.log(services.price())
    console.log(services.getMinPrice())
    console.log(services.getMaxPrice())
    
    