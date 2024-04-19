import { ReactNode, Suspense } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div>
          {children}
        </div>
    );
  }