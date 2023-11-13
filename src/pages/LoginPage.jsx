import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </div>
  );
};

export default LoginPage;
