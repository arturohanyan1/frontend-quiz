import { ICategoryDataType } from "src/types/common";
import http from "./http";

const getCategory = async (category: string): Promise<any> => {
  const data = await http.get(`/mock/${category}.json`, false);
  return data;
};

const getTopic = async (category: string, topic: string): Promise<any> => {
  const data = await http.get(`/mock/${category}.json`, false);
  const topicData = data.find(
    (item: ICategoryDataType) => item.topic === topic
  );
  return topicData;
};

const getQuestion = async (
  category: string,
  topic: string,
  index: number
): Promise<any> => {
  const data = await http.get(`/mock/${category}.json`, false);
  const topicData = data.find(
    (item: ICategoryDataType) => item.topic === topic
  );
  if (topicData && topicData?.questions) {
    return topicData.questions[index - 1];
  }
};

export { getCategory, getTopic, getQuestion };
