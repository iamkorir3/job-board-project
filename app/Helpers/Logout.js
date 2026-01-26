import { useRouter } from "next/navigation";
//i will have to get the user seesion
export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    //and clear user session
    localStorage.removeItem("token");
    router.push("/login");
  };

  return { logout };
};
