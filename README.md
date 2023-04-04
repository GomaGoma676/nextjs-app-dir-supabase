### Create new Next.js project
```bash
# npx create-next-app --example with-tailwindcss rsc-supabase --use-npm
npx create-next-app@canary --tailwind with-tailwindcss-app rsc-supabase --use-npm
npm i @heroicons/react@2.0.13 @supabase/auth-helpers-nextjs@0.5.2 @supabase/supabase-js@2.1.1 zustand@4.1.4 supabase@1.27.0 date-fns@2.29.3
npm i next@13.2.4
```
### Generate supabase types
```bash
npx supabase login
npx supabase init
npx supabase link --project-ref your_project_id
npx supabase gen types typescript --linked > database.types.ts
```
