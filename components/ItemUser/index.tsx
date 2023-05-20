import UserService from "@/services/UserService";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ItemRepo from "../ItemRepo";
import toast from "react-hot-toast";

const ItemUser = (props: SearchResultItemProps) => {
  const { username, avatarUrl } = props;
  const [isActive, setIsActive] = useState(false);
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectUser = async () => {
    setIsActive(!isActive);
    if (repoList.length > 0) return;
    setLoading(true);
    try {
      const response = await UserService.getRepo({ username });
      setRepoList(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "get repo user failed!");
    }
  };

  return (
    <>
      <li className="border-b pb-0">
        <div className="flex items-center justify-between hover:bg-gray-50 p-4">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avatarUrl} />
              </div>
            </div>
            <span data-cy="username">{username}</span>
          </div>
          <motion.button
            className="hover:cursor-pointer"
            animate={{ rotate: isActive ? -180 : 0 }}
            transition={{ type: "spring", duration: 2 }}
            onClick={handleSelectUser}
          >
            <FiChevronDown size={32} />
          </motion.button>
        </div>

        {/* repo list */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0, type: "spring" }}
              transition={{ duration: 1 }}
              exit={{ y: -20 }}
            >
              {loading ? (
                <div className="w-full text-center mt-10 font-bold">
                  Please Wait ...
                </div>
              ) : repoList.length > 0 ? (
                <ul>
                  {repoList.map((item: any) => (
                    <ItemRepo
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      stargazersCount={item.stargazers_count}
                    />
                  ))}
                </ul>
              ) : (
                <div className="w-full text-center py-5 font-bold bg-gray-100">
                  This Account not have repository!
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default ItemUser;
