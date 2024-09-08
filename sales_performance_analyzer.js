//Task 1: Create a function to calculate average sales

// Function to calculate the average sales 
function calculateAverageSales(sales) {
    if (sales.length === 0) {
        return 0;  // return 0 if there is no sales data
    }
    let sum = 0;  // Using let to calculate the total sales
    for (let i = 0; i < sales.length; i++) {
        sum += sales [i]; // adding each sale to the sum
    }
    return sum / sales.length; // returns the average sale
}

//Task 2: Create a Function to Determine Performance Rating

//function to return performance rating based on average sales
function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) 
        return "Excellent"   // excellent for sales above 10,000
    else if (averageSales >= 7000 && averageSales <= 10000)
        return "Good";    // Good for sales between 4,000 and 7000
    else if (averageSales >= 4000 && averageSales < 7000)
        return "Satisfactory";  // Satisfactory for sales between 4000 and 7,000
    else
    return "Needs Improvement"; //Needs improvement for any sales below 4k

}
console.log(determinePerformanceRating); //looged the performce rating

//Task 3: Create a Function to Identify Top and Bottom Performers
//function to find top and bottom performers based on total sales
function findtopandbottomperformers(employeeSales) {
    let topPerformer = employeeSales [0]; // finding top performer
    let bottomPerformer = employeeSales [0]; // finding bottom perfomer

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

//Task 4: Combine Functions to Generate a Performance Report
//function to generate report

function generateperformancereport(employeeSales) {
    let report = []

    for(let i = 0; i < salesData.length; i++){
        let average = calculateAverageSales(employeeSales[i].sales) //calculates average sale for each salesperson
        let rating = determinePerformanceRating(average) //determines performance rating based on average sales

        report.push({
            name: employeeSales[i].name,
            averageSales: average,
            determinePerformanceRating: rating
        }) // adds the sales persons data to the report
    }
    let topandbottom = findtopandbottomperformers(employeeSales) //get the top and bottom performers
    report.topPerformer = topandbottom.topPerformer //adds top performer
    report.bottomPerformer = topandbottom.bottomPerformer //adds bottom performer

    return report  //returns the final report
}

