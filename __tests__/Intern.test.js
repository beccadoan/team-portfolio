const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Becca',95,'rebecca.doan@yahoo.com', 'UT Austin');

    expect(intern.name).toBe('Becca');
    expect(intern.id).toBe(95);
    expect(intern.email).toBe('rebecca.doan@yahoo.com');
    expect(intern.school).toBe('UT Austin');
});

test('tests intern methods', () => {
    const intern = new Intern('Becca',95,'rebecca.doan@yahoo.com', 'UT Austin');

    expect(intern.getName()).toBe('Becca');
    expect(intern.getId()).toBe(95);
    expect(intern.getEmail()).toBe('rebecca.doan@yahoo.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('UT Austin');
});