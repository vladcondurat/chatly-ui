import Swal from 'sweetalert2';
import { IAlertOptions } from './types';

const alertService = {
  showAlert: (opt: IAlertOptions) => {
    const { icon, title, description, duration } = opt;

    const titleStyle = `
      font-family: 'Inter', sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 20px;
    `;

    const descriptionStyle = `
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
    `;

    let iconColor = '';

    switch (icon) {
      case 'error':
        iconColor = '#ff4d4f'; // errorRed
        break;

      case 'success':
        iconColor = '#52c41a'; // acceptGreen
        break;

      case 'warning':
        iconColor = '#faad14'; // pendingYellow
        break;

      default:
        break;
    }

    Swal.fire({
      html: `
        <h2 style="${titleStyle}">${title}</h2>
        <p style="${descriptionStyle}">${description || ''}</p>
      `,
      icon,
      iconColor,
      showConfirmButton: !duration,
      timer: duration || 0,
      color: '#ffffff', // textPrimary
      background: '#393d47', // popupBackground
    });

    document.body.style.paddingRight = '0px';
    setTimeout(() => {
      document.body.removeAttribute('style');
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    }, duration || 1500);
  },

  successAlert: (opt: Omit<IAlertOptions, 'icon'>) => {
    alertService.showAlert({ ...opt, icon: 'success' });
  },

  errorAlert: (opt: Omit<IAlertOptions, 'icon'>) => {
    alertService.showAlert({ ...opt, icon: 'error' });
  },

  warningAlert: (opt: Omit<IAlertOptions, 'icon'>) => {
    alertService.showAlert({ ...opt, icon: 'warning' });
  },
};

export default alertService;
