import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

export let useQueryHandler = ({ pathname, url, params }) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }),
  });
};
