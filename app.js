// let names = [
//     'Aynur', 'Elmir', 'Cavid', 'Rəşad', 'Leyla',
//     'Fərid', 'Günel', 'Nigar', 'Kamil', 'Orxan'
// ];
// let salaries = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// function getAnnualSalary(salaries) {
//     let total = 0;
//     for (let i = 0; i < salaries.length; i++) {
//         total += salaries[i];
//     }
//     return total;
// }
// function getAnnualSalariesResult(names, salaries) {
//     let results = [];
//     for (let i = 0; i < names.length; i++) {
//         let annualSalary = getAnnualSalary(salaries[i]);
//         results.push(`${names[i]}: ${annualSalary} AZN`);
//     }
//     return results.join('\n');
// }
// let result = getAnnualSalariesResult(names, salaries);
// console.log(result);
let salaries = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];
function getTotalAnnualSalary(salaries){
    let total = 0;
    for (let i = 0; i < salaries.length; i++) {
        let annualSalary = getAnnualSalary(salaries[i]);
        total += annualSalary;
    }
    return total;
}
function getAnnualSalary(salaries){
    let total = 0;
    for (let i = 0; i < salaries.length; i++) {
        total += salaries[i];
    }
    return total;
}
let totalSalary = getTotalAnnualSalary(salaries);
console.log(`Butun iscilerin illik maaslarinin cemi: ${totalSalary} AZN`);