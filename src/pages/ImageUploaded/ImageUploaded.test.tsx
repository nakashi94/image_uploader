import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ImageUploaded from './ImageUploaded';

describe('ImageUploader.tsx', () => {
  test('Uploaded Successfully! が表示されているか', () => {
    render(<ImageUploaded />);
    expect(screen.getByText('Uploaded Successfully!')).toBeInTheDocument();
  });

  test('Copy Linkボタンが表示されているか', () => {
    render(<ImageUploaded />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
