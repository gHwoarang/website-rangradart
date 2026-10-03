## rangradArt

Static Bootstrap blog site. Visitors can publish a post or a short note without
creating an account. Posts are published immediately.

### Configure public blog submissions

1. Create a Supabase project.
2. In the Supabase SQL Editor, run [`supabase/schema.sql`](./supabase/schema.sql).
3. In the Supabase Dashboard, open **Project Settings → API Keys** and copy
   the **publishable** key (it starts with `sb_publishable_`). The older
   **anon** key also works. Find the project URL under **Project Settings →
   API** (or the project's **Connect** dialog), then put both values in
   [`js/supabase-config.js`](./js/supabase-config.js): the URL in `url` and the
   publishable/anon key in `anonKey`.
4. Publish the site over HTTPS.

The anon/publishable key is intended for browser use. Never put a Supabase
`service_role` key in this site. Row-level security allows visitors to read
posts and submit through a validated database function. Email addresses are
stored separately from public posts and are not readable by visitors.

Because posts are published immediately, public submissions can attract spam.
The form includes a basic honeypot; enable a CAPTCHA or additional rate limiting
before using it for a high-traffic site.
