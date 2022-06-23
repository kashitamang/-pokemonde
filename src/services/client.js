import { createClient } from '@supabase/supabase-js';
console.log(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);// eslint-disable-line
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
