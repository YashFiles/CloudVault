// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twmfboepjmcdntncijrz.supabase.co'   // ← Replace
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bWZib2Vwam1jZG50bmNpanJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1OTYzNDksImV4cCI6MjA3MDE3MjM0OX0.Cx8os6Pd0SYFSnJ_DCy_kZqK6nuRC4NvMsnq9_592Ms'                   // ← Replace

export const supabase = createClient(supabaseUrl, supabaseKey)
    