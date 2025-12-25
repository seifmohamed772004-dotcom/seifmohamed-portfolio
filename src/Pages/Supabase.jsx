import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tvbwogxstjyhxcgdrcwa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2YndvZ3hzdGp5aHhjZ2RyY3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDE1MzgsImV4cCI6MjA4MDM3NzUzOH0.7pEd_ZrIKxwmyGymQKV-_uoakn40AJb8k3p8Uqzn1_o';

export const supabase = createClient(supabaseUrl, supabaseKey);
