
    let darkPrice = 50; // Dark Chocolate Price
    let milkPrice = 25; // Milk Chocolate Price
    let whitePrice = 70; // White Chocolate Price
    let rawPrice = 65; // Raw Chocolate Price
    let seventyPrice = 55; // Seventy Percent Chocolate Price



    
    let chocolateTypes = ['dark', 'milk', 'white', 'raw', 'seventy'];
    let prices = [darkPrice, milkPrice, whitePrice, rawPrice, seventyPrice];
    
    function updateTotal() {
        let darkQuantity = document.getElementById('dark').value;
        let milkQuantity = document.getElementById('milk').value;
        let whiteQuantity = document.getElementById('white').value;
        let rawQuantity = document.getElementById('raw').value;
        let seventyQuantity = document.getElementById('seventy').value;
        let total = darkQuantity * darkPrice + milkQuantity * milkPrice + whiteQuantity * whitePrice + rawQuantity * rawPrice + seventyQuantity * seventyPrice;
        
        if (total > 8) {
            let sortedPrices = [darkPrice, milkPrice, whitePrice, rawPrice, seventyPrice].sort((a, b) => b - a);
            let maxPrice = sortedPrices[0];
            let maxPriceIndex = prices.indexOf(maxPrice);
            let maxQuantity = document.getElementById(chocolateTypes[maxPriceIndex]).value;
            
            if (maxQuantity > 0) {
                maxQuantity--;
                document.getElementById(chocolateTypes[maxPriceIndex]).value = maxQuantity;
            }
            
            total = darkQuantity * darkPrice + milkQuantity * milkPrice + whiteQuantity * whitePrice + rawQuantity * rawPrice + seventyQuantity * seventyPrice;
        }
        
        document.getElementById('total').textContent = total.toFixed(2);
    }
