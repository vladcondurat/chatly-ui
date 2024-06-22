import { useEffect } from 'react';
import { useAppSelector } from './store-hooks';
import { isModalOpenSelector } from '../store/selectors/app-selectors';

const useModalOpen = (): void => {
  const isModalOpen = useAppSelector(isModalOpenSelector);

  const isOpen = isModalOpen;

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.setAttribute('style', 'overflow-x: hidden; overflow-y: hidden');
    } else {
      body?.setAttribute('style', 'overflow-x: hidden; overflow-y: scroll');
    }
  }, [isOpen]);
};
export default useModalOpen;
