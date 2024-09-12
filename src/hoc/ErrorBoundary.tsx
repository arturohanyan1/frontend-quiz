import { Component, ErrorInfo, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';

import ErrorMessage from './ErrorMessage';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorInfo: any;
}
class ErrorBoundaryComponent extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    errorInfo: null,
  };

  public static getDerivedStateFromError(): IState {
    return { hasError: true, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }

    return children;
  }
}

export default withTranslation()(ErrorBoundaryComponent);
