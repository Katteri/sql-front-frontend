import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/shared/hooks/redux";

import { Layout, type LayoutProps } from "./layout";

export const ProtectedLayout = ({ children }: LayoutProps) => {
  const { replace } = useRouter();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      replace("/");
    }
  }, [token, replace]);
  
  if (!token) {
    return null;
  }

  return (
    <Layout>
      {children}
    </Layout>
  );
};
