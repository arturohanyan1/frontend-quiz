import { useEffect } from 'react';

type RefType = React.MutableRefObject<HTMLElement | null>;

const useOutsideClick = (ref: RefType, callback: () => void): void => {
  const handleClick = (e: MouseEvent | TouchEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('touchstart', handleClick);
    };
  }, []);
};

export default useOutsideClick;
