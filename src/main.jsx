import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import StepTracker from './components/StepTracker/StepTracker';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Main app render
const appRoot = createRoot(document.getElementById('root'));
appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Create a separate root for the modal
const modalRoot = document.createElement('div');
modalRoot.id = 'step-tracker-modal-root';
document.body.appendChild(modalRoot);

const modalRootInstance = createRoot(modalRoot);

// Expose functions to window for HTML access
window.Rodyn = {
  openStepTracker: () => {
    document.getElementById('stepTrackerModal').style.display = 'block';
    modalRootInstance.render(
      <StrictMode>
        <StepTracker />
      </StrictMode>
    );
  },
  closeModal: (id) => {
    document.getElementById(id).style.display = 'none';
    modalRootInstance.unmount();
  }
};