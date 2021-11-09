const {format_date, format_plural } = require('../utils/helpers');

test('format_plural() correctly pluralizes words', () => {
    const word1 = format_plural('tiger', 2);
    const word2 = format_plural('lion', 1);

    expect(word1).toBe('tigers');
    expect(word2).toBe('lion');
})

test('format_date() returns a date string', () => {
    const date = new Date('2021-11-04 16:12:03');

    expect(format_date(date)).toBe('11/4/2021');
})
