import { useEffect, useState } from "react";

export function useFetch<Datas>(url: string) {
  type FetchedDatas = {
    datas: Datas[];
    state: "loading" | "successs" | "error";
  };

  const [fetchedDatas, setFetchedDatas] = useState<FetchedDatas>({
    datas: [],
    state: "loading",
  });

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const buffer = await fetch(url);
        const datas = (await buffer.json()) as Datas[];
        setFetchedDatas({ datas, state: "successs" });
      } catch (error) {
        setFetchedDatas((p) => ({ ...p, state: "error" }));
      }
    };
    fetchFunction();
  }, []);
  return fetchedDatas;
}
