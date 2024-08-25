import { ICategoryDataType, ITopicButtonType } from "src/types/common";

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

export { makeTopicButtonData };
