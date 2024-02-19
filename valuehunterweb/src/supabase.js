import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ekywywmcekckrjtpmcqv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVreXd5d21jZWtja3JqdHBtY3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxOTk3MTEsImV4cCI6MjAyMzc3NTcxMX0.Tw0Z6GcHGbatsPYmYkDoCjcDGI4vBqIRRlCkkhPMHlY'
export const supabase = createClient(supabaseUrl, supabaseKey)