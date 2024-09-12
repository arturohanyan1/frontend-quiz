import {
  ICategoryDataType,
  IQuestionButtonType,
  IQuestionDataType,
  ITopicButtonType,
  ITopicDataType,
} from "src/types/common";

const makeTopicButtonData = (
  data: ICategoryDataType[],
  category: string
): ITopicButtonType[] => {
  return data.map((el: ICategoryDataType, index: number) => ({
    index: index + 1,
    name: el.topic,
    questionsCount: el.questions.length,
    position: el.position || "",
    category: category,
  }));
};

const makeQuestionButtonData = (
  data: ITopicDataType,
  category: string,
  topic: string
): IQuestionButtonType[] => {
  return data.questions.map((el: IQuestionDataType, index: number) => ({
    index: index + 1,
    question: el.question,
    answer: el.answer,
    category: category,
    topic: topic,
  }));
};

export { makeTopicButtonData, makeQuestionButtonData };
