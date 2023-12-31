import { WhatsAppBtn } from '../../src/components/WhatsAppBtn';
import { render } from '@testing-library/react';

describe('Test on WhatsAppBtn Componente', () => {
  const url = 'https://domain.com/image.jpg';

  test('should have snapshot', () => {
    const { container } = render(<WhatsAppBtn url={url} />);
    expect(container).toMatchSnapshot();
  });
});
