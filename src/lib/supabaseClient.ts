import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://demoproject.supabase.co'

// ⚠️ ERREUR CLASSIQUE : la clé service_role (admin) laissée côté client.
// Elle contourne tout le RLS. Devrait être uniquement la clé "anon".
const SUPABASE_SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwicmVmIjoiZGVtbyIsImlhdCI6MTcwMH0.DEMOsignature0000notrealdonotusethisatall00000000000'

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
