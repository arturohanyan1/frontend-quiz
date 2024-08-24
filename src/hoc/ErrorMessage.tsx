import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ErrorMessage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="error-boundary">
      <p>{t('errorBoundaryText')}</p>
    </div>
  );
};

export default ErrorMessage;
