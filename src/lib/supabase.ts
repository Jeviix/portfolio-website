import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://wbwfwpztgrwgtlgfjxov.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indid2Z3cHp0Z3J3Z3RsZ2ZqeG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2ODEwOTgsImV4cCI6MjA3MzI1NzA5OH0.eUIS_dgjwfTXiTcyT2Lq6nytD6J7e7O2Jpzk7d8nIDk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject?: string
  message: string
  created_at?: string
  status?: "new" | "read" | "replied"
}
