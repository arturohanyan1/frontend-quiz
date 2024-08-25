import http from "./http";

const getCategory = async (category: string): Promise<any> => {
  const data = await http.get(`/mock/${category}.json`, false);
  return data;
};

export { getCategory };
