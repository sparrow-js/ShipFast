import { User } from "./user";

export interface Page {
  id?: number;
  user_email: string;
  llm_name: string;
  llm_params?: any;
  schema_data: any;
  created_at: string;
  created_user?: User;
}
