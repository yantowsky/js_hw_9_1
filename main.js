let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

let totalSalary = 0;

function calcTotalSalary (obj) {
    for (let key in obj) {
        if (typeof (obj[key]) === 'object') {
            calcTotalSalary(obj[key]);
        } else if (key === 'salary' && typeof(obj[key]) === 'number') {
            totalSalary += obj[key];
        }
    }
    return totalSalary;
}

console.log(calcTotalSalary(company));