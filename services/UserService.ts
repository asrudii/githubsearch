import { API_SEARCH_USER, API_USER } from "@/constant/UrlList";
import axios from "axios";
import authHeader from "./AuthHeader";

const searchUser = (props: QuerySearchProps) => {
  const { q, per_page } = props;

  const params: any = {};
  if (q) {
    params.q = q;
  }
  if (per_page) {
    params.per_page = per_page;
  }
  return axios.get(API_SEARCH_USER, {
    params,
    headers: authHeader(),
  });
};

const getRepo = (props: QueryRepoProps) => {
  const { username } = props;

  return axios.get(`${API_USER}/${username}/repos`, {
    headers: authHeader(),
  });
};

const UserService = {
  searchUser,
  getRepo,
};

export default UserService;
