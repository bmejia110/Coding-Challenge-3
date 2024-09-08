function calculateAverageSales(sales) {
    if (sales.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < sales.length; i++) {
        sum += sales [i];
    }
    return sum / sales.length;
}
