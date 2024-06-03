let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

let totalSalary = 0;

function calcTotalSalary (company) {
    for (let key in company) {
        if (typeof (company[key]) === 'object') {
            calcTotalSalary(company[key]);
        } else if (key === 'salary' && typeof(company[key]) === 'number') {
            totalSalary += company[key];
        }
    }
    return totalSalary;
}

console.log(calcTotalSalary(company));