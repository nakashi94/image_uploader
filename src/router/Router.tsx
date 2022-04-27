import { memo, VFC } from 'react';
import { Route, Routes } from 'react-router';

import { ImageUploaded, ImageUploader } from '../pages';

const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<ImageUploader />} />
      <Route path="uploaded" element={<ImageUploaded />} />
    </Routes>
  );
});

export default Router;
