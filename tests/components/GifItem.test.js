import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Test on GifItem', () => {
  const title = 'One Punch';
  const url = 'https://domain.com/image.jpg';

  test('should have snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show image with url and alt', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getAllByRole('img')[0]; // the first element (show more images)
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show title on component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
