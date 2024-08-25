import { ICategoryDataType, ITopicButtonType } from "src/types/common";

const makeTopicButtonData = (data: ICategoryDataType[]): ITopicButtonType[] => {
  return data.map((el: ICategoryDataType, index: number) => ({
    index: index + 1,
    name: el.topic,
    questionsCount: el.questions.length,
    position: el.position || "",
  }));
};

export { makeTopicButtonData };
