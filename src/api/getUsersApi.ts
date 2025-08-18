import ApiService from "@/ApiService.ts";
import {UserType} from "@/types.ts";

export const getUsersApi = async () => {
  const uri = '/users'

  return ApiService.GET<UserType[]>(uri)
}