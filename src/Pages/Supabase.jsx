import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tvbwogxstjyhxcgdrcwa.supabase.co';
const supabaseKey = 'sb_publishable_4cFScswRyNMVu2KLJhZjuA_l33hAXY6';

export const supabase = createClient(supabaseUrl, supabaseKey);
