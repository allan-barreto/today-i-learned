import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kxynufeuyebhjlmktnqo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4eW51ZmV1eWViaGpsbWt0bnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1ODQsImV4cCI6MTk5NjU3NjU4NH0.34goeK2Nm5DiYTx3bSO91uCoxVO1-DQRC5xzYCCG_As';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
