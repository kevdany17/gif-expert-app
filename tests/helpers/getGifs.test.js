import { getGifs } from '../../src/helpers/getGifs';

jest.mock('../../src/helpers/getEnviroments', () => ({
  getEnviroments: () => ({ ...process.env }),
}));

describe('Test getGifs function', () => {
  test('should have more than one result in the array', async () => {
    const results = await getGifs('seven deadly sins');
    expect(results.length).toBeGreaterThan(0);
  });
  test('should have the properties in the array', async () => {
    const results = await getGifs('seven deadly sins');
    expect(results[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
