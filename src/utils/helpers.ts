import queryString from "query-string";

const filterValue = <T>(value: T): boolean =>
  value !== undefined && value !== null;

const getQueryString = (
  params: Record<string, any>,
  joinArrayValues = false
): string => {
  return Object.entries(params)
    .filter(([_, value]) => filterValue(value))
    .map(([key, value]) => {
      if (!Array.isArray(value)) {
        return key + "=" + encodeURIComponent(value);
      } else if (joinArrayValues) {
        return (
          key +
          "=" +
          value
            .filter(filterValue)
            .map((item) => encodeURIComponent(item))
            .join(",")
        );
      } else {
        return value
          .filter(filterValue)
          .map((item) => `${key}[]` + "=" + encodeURIComponent(item))
          .join("&");
      }
    })
    .filter(Boolean)
    .join("&");
};

const makeQueryString = (queryObj: any): string => {
  const obj = { ...queryObj };
  return queryString.stringify(obj);
};

const makeQueryObj = (queryStr: string): any => {
  const obj = queryString.parse(queryStr);
  return obj;
};

export { getQueryString, makeQueryObj, makeQueryString };
