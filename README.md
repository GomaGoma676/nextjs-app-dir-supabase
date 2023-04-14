### Create new Next.js project
```bash
# npx create-next-app --example with-tailwindcss rsc-supabase --use-npm
npx create-next-app@13.2.5-canary.34 --tailwind rsc-supabase --use-npm
npm i @heroicons/react@2.0.13 @supabase/auth-helpers-nextjs@0.6.0 @supabase/supabase-js@2.1.1 zustand@4.1.4 supabase@1.27.0 date-fns@2.29.3
npm i next@13.2.5-canary.34
```
### Generate supabase types
```bash
npx supabase login
npx supabase init
npx supabase link --project-ref your_project_id
npx supabase gen types typescript --linked > database.types.ts
```
