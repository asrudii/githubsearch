import React from "react";
import { FiStar } from "react-icons/fi";

const ItemRepo = (props: ItemRepoProps) => {
  const { name, description, stargazersCount } = props;
  return (
    <>
      <li className="flex flex-row justify-between items-start bg-gray-100 p-4 mb-2 h-[130px] rounded-lg">
        <div className="w-[80%] flex flex-col items-start hover:bg-none">
          <h6 className="font-bold text-ellipsis" data-cy="repo-name">
            {name || "-"}
          </h6>
          <p className="text-ellipsis line-clamp-3" data-cy="repo-description">
            {description || "-"}
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <FiStar color="orange" />
          <span data-cy="repo-stargazerscount">{stargazersCount || "-"}</span>
        </div>
      </li>
    </>
  );
};

export default ItemRepo;
