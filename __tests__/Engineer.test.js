const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Becca',95,'rebecca.doan@yahoo.com', 'beccadoan');

    expect(engineer.name).toBe('Becca');
    expect(engineer.id).toBe(95);
    expect(engineer.email).toBe('rebecca.doan@yahoo.com');
    expect(engineer.github).toBe('beccadoan');
});

test('tests engineer methods', () => {
    const engineer = new Engineer('Becca',95,'rebecca.doan@yahoo.com', 'beccadoan');

    expect(engineer.getName()).toBe('Becca');
    expect(engineer.getId()).toBe(95);
    expect(engineer.getEmail()).toBe('rebecca.doan@yahoo.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGitHub()).toBe('beccadoan');
});