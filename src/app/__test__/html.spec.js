import HTML from '../HTML';

test('html template', () => {
  const html = HTML({});

  expect(typeof html).toBe('string');
  expect(html).toContain('<html>')
  expect(html).toContain('<body>')
  expect(html).toContain('window.__INITIAL_STATE')
});