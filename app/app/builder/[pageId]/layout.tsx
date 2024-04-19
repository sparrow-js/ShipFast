import { ReactNode, Suspense } from "react";
import './variables.css';
import './next.var.min.css';
export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
      <div className="h-full">
        {children}
      </div>
    );
  }