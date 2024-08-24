type PartialIf<P extends boolean, T> = P extends true ? Partial<T> : T;
declare module '*.module.scss' {
  const content: any;

  export default content;
}

declare module 'lodash';
declare module 'query-string';
declare module 'save-file';
declare module 'accounting';
declare module 'react-date-range';