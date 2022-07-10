const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Becca',95,'rebecca.doan@yahoo.com',115);

    expect(manager.name).toBe('Becca');
    expect(manager.id).toBe(95);
    expect(manager.email).toBe('rebecca.doan@yahoo.com');
    expect(manager.office).toBe(115);
});

test('tests manager methods', () => {
    const manager = new Manager('Becca',95,'rebecca.doan@yahoo.com', 115);

    expect(manager.getName()).toBe('Becca');
    expect(manager.getId()).toBe(95);
    expect(manager.getEmail()).toBe('rebecca.doan@yahoo.com');
    expect(manager.getRole()).toBe('Manager');
});