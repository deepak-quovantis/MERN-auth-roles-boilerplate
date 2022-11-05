import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useRefreshAccessToken from "./useRefreshAccessToken";
import { axiosPrivate } from "../api/axios";
import { AccessToken } from "../recoil/atom";

const useAxiosPrivate = () => {
  // TODO testing refresh error here !!!
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const getNewToken = useRefreshAccessToken();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization && accessToken) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await getNewToken();

          setAccessToken(newAccessToken);

          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, getNewToken, setAccessToken]);

  return axiosPrivate;
};
export default useAxiosPrivate;
