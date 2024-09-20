import { createClient } from "@supabase/supabase-js";

// Replace these values with your Supabase project credentials
const SUPABASE_URL = "https://pfdjzyupxsplcnvmkpfz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGp6eXVweHNwbGNudm1rcGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NzcwNDcsImV4cCI6MjA0MjM1MzA0N30.oJiS5ZySvrvf7TfLxKKP-Chjd2XNIQB4_67RwddUONs";

// Create a Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
