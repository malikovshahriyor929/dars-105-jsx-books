import { useQuery } from "@tanstack/react-query";
import { useAxiosWriters } from "../useAxiosWriters";

export let useQueryHandlerWriters = ({ pathname, url, params }) => {
  const axios = useAxiosWriters();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }),
  });
};
