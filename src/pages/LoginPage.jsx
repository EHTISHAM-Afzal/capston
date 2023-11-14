import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[63vh] space-y-3 px-6 mt-6 ">
      <div className="w-80 text-center">
        <img src="../../cute-bunny.svg" alt="" />
        <Button
          className="font-markazi-text text-3xl"
          onClick={() => loginWithRedirect()}
        >
          LogIn to LittleLemon
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
