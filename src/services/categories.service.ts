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

export { getCategory, getTopic };
