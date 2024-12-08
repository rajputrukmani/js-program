const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];
  
  const departments = employees
    .reduce((acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = { total: 0, count: 0 };
      }
      acc[employee.department].total += employee.salary;
      acc[employee.department].count += 1;
      return acc;
    }, {});
  
  const result = Object.keys(departments)
    .map(department => ({
      department: department,
      average: departments[department].total / departments[department].count
    }))
    .filter(department => department.average > 65000);
  
  console.log(result);
  // Output: [{ department: 'HR', average: 71666 }]
