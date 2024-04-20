"use client";
import {
  useInsertPortofolio,
  useUpdatePortofolio,
  useRemovePortofolio,
  usePortofolio,
} from "@/client/query/portofolio";
const Test = () => {
  const { data } = usePortofolio();
  const { mutate: insert } = useInsertPortofolio();
  const { mutate: update } = useUpdatePortofolio();
  const { mutate: remove } = useRemovePortofolio();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        className="bg-gray-200"
        type="button"
        onClick={() =>
          insert({
            description: "keroco",
            image: "keroco",
            link: "keroco",
            title: "keroco",
            id: "random",
          })
        }
      >
        Test Insert
      </button>
      <button
        className="bg-blue-200"
        type="button"
        onClick={() => remove("random")}
      >
        Test Delete
      </button>
      <button
        className="bg-yellow-200"
        type="button"
        onClick={() =>
          update({
            description: "kenokokoko",
            image: "kenokokoko",
            link: "kenokokoko",
            title: "kenokokoko",
            id: "random",
          })
        }
      >
        Test Update
      </button>
    </>
  );
};

export default Test;
