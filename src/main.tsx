// eslint-disable-next-line file-naming/component-naming
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/RouterConfig.tsx';
import 'tdesign-react/esm/style/index.js';
import './index.css';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
