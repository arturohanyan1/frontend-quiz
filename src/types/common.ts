export interface ICategoryButtonType {
  name: string;
  id: string;
}

export interface IQuestionDataType {
  question: string;
  answer: string;
}

export interface ICategoryDataType {
  id?: number;
  position?: string;
  topic: string;
  questions: IQuestionDataType[];
}

export interface ITopicButtonType {
  index: number;
  position?: string;
  name: string;
  questionsCount: Number;
  category: string;
}

export interface IQuestionButtonType {
  index: number;
  question: string;
  answer: string;
}
