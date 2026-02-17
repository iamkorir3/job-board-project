import { useRouter } from "next/navigation";
//i will have to get the user seesion
export const useLogout = () => {
  const router = useRouter();
  //getting user session
  const session = usersession;

  const logout = () => {
    //and clear user session
    session = null;
    localStorage.removeItem("token");
    router.push("/login");
  };

  return { logout };
};
