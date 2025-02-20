import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import AppRoutes from './routes/AppRoutes';

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
