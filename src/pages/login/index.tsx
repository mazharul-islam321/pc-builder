import { GithubOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Empty
      className="mt-52"
        description={
          <span>
            <a href="#API">Login</a>
          </span>
        }
      >
        <Button
          type="primary"
          className="bg-black"
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000",
            })
          }
        >
          <GithubOutlined />
          {"Github Login "}
        </Button>
      </Empty>
    </div>
  );
};

export default LoginPage;
