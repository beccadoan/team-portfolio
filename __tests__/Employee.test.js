const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Becca',95,'rebecca.doan@yahoo.com');

    expect(employee.name).toBe('Becca');
    expect(employee.id).toBe(95);
    expect(employee.email).toBe('rebecca.doan@yahoo.com');
});

test('tests employee methods', () => {
    const employee = new Employee('Becca',95,'rebecca.doan@yahoo.com');

    expect(employee.getName()).toBe('Becca');
    expect(employee.getId()).toBe(95);
    expect(employee.getEmail()).toBe('rebecca.doan@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
});