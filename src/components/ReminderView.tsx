import { useLoaderData } from "react-router-dom";
import todosService from "../services/todos-service";

export async function loader({ params }: any) {
  const { data } = await todosService.getOne(params.id);
  return data;
}
const ReminderView = () => {
  const data = useLoaderData();

  return (
    <>
      <pre>{JSON.stringify(data, null, 6)}</pre>
    </>
  );
};

export default ReminderView;
