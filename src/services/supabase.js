import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nrgfusrpocairdmnaxfh.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZ2Z1c3Jwb2NhaXJkbW5heGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNjIwNjEsImV4cCI6MjAzNDYzODA2MX0.ZjOKAp92x7XojwwJoiCHQOnK1mROLs5D3b_rfDKTZfY`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase