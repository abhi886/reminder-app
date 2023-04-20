import useData from "./useData";

const useTodos = () => {
  return useData("/todos/");
};

export default useTodos;
