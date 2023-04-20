import { useEffect, useState } from "react";
import Reminder from "../models/reminder";
import apiClient from "../services/api-client";

const useData = (endpoint: string) => {
  const [data, setData] = useState<Reminder[]>([]);
  useEffect(() => {
    apiClient
      .get(endpoint)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log({ error: e }));
  }, [endpoint]);
  return { data, setData };
};
export default useData;
