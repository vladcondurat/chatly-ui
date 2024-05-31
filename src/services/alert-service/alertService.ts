type AlertOptions = {
  icon?: string;
  title: string;
  description?: string;
  duration?: number;
};

const alertService = {
  successAlert: (opt: AlertOptions) => {
    const options = { ...opt, icon: 'success' };
    showAlert(options);
  },
  errorAlert: (opt: AlertOptions) => {
    const options = { ...opt, icon: 'error' };
    showAlert(options);
  },
};

function showAlert(opt: AlertOptions) {
  const { icon, title, description, duration } = opt;

  const iconColors: { [key: string]: string } = {
    error: 'red',
    success: 'green',
    warning: 'yellow',
  };

  const iconElement = icon ? `<div style="color: ${iconColors[icon]};">${icon}</div>` : '';

  const alertMessage = `
    <div style="font-size: 16px;">
      ${iconElement}
      <h2>${title}</h2>
      <p>${description || ''}</p>
    </div>
  `;

  console.log(alertMessage);
  if (duration) {
    setTimeout(() => {
      console.log('Removing body styles...');
      document.body.removeAttribute('style');
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    }, duration);
  }
}

// Define generic error and success options
const genericErrorOptions: AlertOptions = {
  title: 'Error',
  description: 'An error occurred.',
  duration: 5000, // 5 seconds
};

const genericSuccessOptions: AlertOptions = {
  title: 'Success',
  description: 'Operation successful.',
  duration: 3000, // 3 seconds
};

export default alertService;
export { genericErrorOptions, genericSuccessOptions };
