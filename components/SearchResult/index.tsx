import React from "react";
import ItemUser from "../ItemUser";

const SearchResult = (props: SearchResultListProps) => {
  const { data, keyword } = props;

  return (
    <>
      <div className="my-4">
        <span className="text-gray-600">
          Showing users for <strong data-cy="showing-for">"{keyword}"</strong>
        </span>
      </div>
      <ul className="bg-base-100 w-full p-2 rounded-box">
        {data?.map(({ id, login, avatar_url }: any) => (
          <ItemUser key={id} username={login} avatarUrl={avatar_url} />
        ))}
      </ul>
    </>
  );
};

export default SearchResult;
