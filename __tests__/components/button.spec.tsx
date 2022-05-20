import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../src/components/Button';

describe(`${Button.name}`, () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Button text="Next" />);

    expect(getByText('Next')).toBeInTheDocument();
  });
});
