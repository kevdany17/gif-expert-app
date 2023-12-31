import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/helpers/getEnviroments', () => ({
  getEnviroments: () => ({ ...process.env }),
}));

describe('Testing on useFetchGifs Hook', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return array of image and isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Push'));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
