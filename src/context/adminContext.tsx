import { createContext, useContext, useState, ReactNode } from "react";

type AdminContextType = {
  admins: string[];
  currentAdmin: string | null;
  isLoading: boolean;
  addAdmin: (name: string) => void;
  removeAdmin: (name: string) => void;
  loginAdmin: (name: string) => Promise<void>;
  logoutAdmin: () => Promise<void>;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [admins, setAdmins] = useState<string[]>(() => {
    const saved = localStorage.getItem("admins");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentAdmin, setCurrentAdmin] = useState<string | null>(() => {
    return localStorage.getItem("currentAdmin") || null;
  });

  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const addAdmin = (name: string) => {
    setAdmins((prev) => {
      const updated = [...prev, name];
      localStorage.setItem("admins", JSON.stringify(updated));
      return updated;
    });
  };

  const removeAdmin = (name: string) => {
    setAdmins((prev) => {
      const updated = prev.filter((admin) => admin !== name);
      localStorage.setItem("admins", JSON.stringify(updated));
      return updated;
    });
  };

  const loginAdmin = async (name: string) => {
    setIsLoading(true);
    await delay(1000);
    setCurrentAdmin(name);
    localStorage.setItem("currentAdmin", name);
    setIsLoading(false);
  };

  const logoutAdmin = async () => {
    setIsLoading(true);
    await delay(1000);
    setCurrentAdmin(null);
    localStorage.removeItem("currentAdmin");
    setIsLoading(false);
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        currentAdmin,
        isLoading,
        addAdmin,
        removeAdmin,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
