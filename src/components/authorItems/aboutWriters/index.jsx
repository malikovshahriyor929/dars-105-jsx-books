import React from "react";
import { useParams } from "react-router-dom";
import AuthorDetails from "./AuthorDetails";
import Skeleton from "./skeleton";
import { useQueryHandlerWriters } from "../../../hooks/useQueryHandlerWriters";

const AboutWriters = () => {
  let { id } = useParams();
  let { data, isLoading } = useQueryHandlerWriters({
    pathname: "writers",
    url: "/ApiForWriters",
  });


  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        data?.map(
          (value) =>
            value.id == id && (
              <AuthorDetails key={value.id} {...value} />
            )
        )
      )}
    </div>
  );
};

export default AboutWriters;
