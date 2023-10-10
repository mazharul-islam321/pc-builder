import { Button } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  const { data: session } = useSession();
  if (session) {
    return (
      <Button
        type="primary"
        className="bg-black"
        size={"large"}
        onClick={() => signOut()}
      >
        Logout
      </Button>
    );
  }
  return (
    <Button
      type="primary"
      className="bg-black"
      size={"large"}
      onClick={() => 
        signIn("github", {
        callbackUrl: "https://pc-builder-umber.vercel.app/",
      })
    }
    >
      Log in
    </Button>
  );
}
