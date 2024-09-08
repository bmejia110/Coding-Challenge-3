//Task 1: Create a function to calculate average sales

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

//Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) 
        return "Excellent"
    else if (averageSales >= 7000 && averageSales <= 10000)
        return "Good";
    else if (averageSales >= 4000 && averageSales < 7000)
        return "Satisfactory";
    else
    return "Needs Improvement";

}
console.log(determinePerformanceRating);

//Task 3: Create a Function to Identify Top and Bottom Performers

function findtopandbottomperformers(employeeSales) {
    let topPerformer = employeeSales [0];
    let bottomPerformer = employeeSales [0];

    for (let i =1; i <employeeSales.length; i++)
        if(employeeSales[i].sales > topPerformer.sales)
            topPerformer = employeeSales[i]
        if (employeeSales[i].sales < bottomPerformer.sales)
            bottomPerformer = employeeSales[i]

    return {
        topPerformer: topPerformer.findtopandbottomperformers
        bottomPerformer:bottomPerformer.findtopandbottomperformers
    }
}