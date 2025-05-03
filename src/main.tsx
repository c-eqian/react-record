// eslint-disable-next-line file-naming/component-naming
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import 'tdesign-react/esm/style/index.js';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
