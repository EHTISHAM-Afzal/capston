/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2, User2Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProfileItem = ({ user }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "text-red-400"
          : isActive
          ? " w-9 h-9 rounded-full border-primary flex items-center border-4 shadow-md scale-110"
          : " w-9 h-9 flex items-center rounded-full shadow-sm"
      }
      to="/profile"
    >
      <Avatar className="w-full h-full">
        <AvatarImage alt={user.name} src={user.picture} />
        <AvatarFallback>
          {user.name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </NavLink>
  );
};
const LoginItem = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "text-red-400"
          : isActive
          ? " w-9 h-9 border-primary flex items-center justify-center rounded-full border-4 hover:bg-accent"
          : " w-9 h-9 rounded-lg  flex items-center justify-center hover:bg-accent"
      }
      to="/profile"
    >
      <>
        <User2Icon onClick={() => loginWithRedirect()} />
      </>
    </NavLink>
  );
};

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let content;
  if (isLoading) {
    content = <Loader2 className="w-7 h-7 animate-spin" />;
  } else if (!isAuthenticated) {
    content = <LoginItem />;
  } else if (isAuthenticated === true) {
    content = <ProfileItem user={user} />;
  }

  return <>{content}</>;
};

export default User;
