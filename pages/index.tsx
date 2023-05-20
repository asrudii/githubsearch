import SearchForm from "@/components/SearchForm";
import SearchResult from "@/components/SearchResult";
import UserService from "@/services/UserService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState("");
  const router: any = useRouter();

  useEffect(() => {
    if (router?.query?.search) {
      setKeywordSearch(router?.query?.search);
      handleSearch(router?.query?.search);
    }
  }, [router?.query?.search]);

  const handleClear = () => {
    setKeywordSearch("");
    setUserList([]);
    router.push({
      pathname: "/",
      search: null,
    });
  };

  const handleSearch = async (keyword: string) => {
    let pattern = "^\\s+$";
    let whiteSpace = keyword.match(pattern);
    if (!keyword || whiteSpace) return toast.error("Please fill the keyword!");
    setLoading(true);
    try {
      router.push({
        pathname: "/",
        search: `?search=${keyword.trim()}`,
      });
      const response = await UserService.searchUser({
        q: keyword.trim(),
        per_page: 5,
      });
      setUserList(response?.data?.items || []);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "search failed!");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-24">
      <div className="p-5 bg-white rounded-md w-full md:w-[450px] min-h-[500px]">
        <SearchForm
          onSubmit={() => handleSearch(keywordSearch)}
          onClear={handleClear}
          disabled={loading}
          setKeywordSearch={(e) => setKeywordSearch(e.target.value)}
          keyword={keywordSearch}
        />
        {loading ? (
          <div className="w-full text-center mt-10 font-bold">
            Please Wait ...
          </div>
        ) : userList.length > 0 ? (
          <SearchResult data={userList} keyword={router?.query?.search} />
        ) : (
          router?.query?.search && (
            <div className="w-full text-center mt-10 font-bold">
              Data Not Found!
            </div>
          )
        )}
      </div>
    </main>
  );
}
