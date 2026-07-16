import { createContext } from "react";
import { AppContextType } from "@/types/ContextTypes";

export const AppContext = createContext<AppContextType | null>(null);
