import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ImageUploader from './ImageUploader';

describe('ImageUploader.tsx', () => {
  test('Upload your image が表示されているか', () => {
    render(<ImageUploader />);
    expect(screen.getByText('Upload your image')).toBeInTheDocument();
  });

  test('File should be Jpeg, Png... が表示されているか', () => {
    render(<ImageUploader />);
    expect(screen.getByText('File should be Jpeg, Png...')).toBeInTheDocument();
  });

  test('Drop & Drag your image here が表示されているか', () => {
    render(<ImageUploader />);
    expect(screen.getByText('Drop & Drag your image here')).toBeInTheDocument();
  });

  test('画像アップロードボタンが表示されているか', () => {
    render(<ImageUploader />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
