create table if not exists public.blog_posts (
    id bigint generated always as identity primary key,
    author_name text not null check (char_length(btrim(author_name)) between 1 and 80),
    title text check (title is null or char_length(title) <= 120),
    content text not null check (char_length(btrim(content)) between 1 and 20000),
    created_at timestamptz not null default now()
);

create table if not exists public.blog_post_contacts (
    post_id bigint primary key references public.blog_posts(id) on delete cascade,
    email text not null check (char_length(email) between 3 and 254)
);

alter table public.blog_posts enable row level security;
alter table public.blog_post_contacts enable row level security;

drop policy if exists "Anyone can read blog posts" on public.blog_posts;
create policy "Anyone can read blog posts"
    on public.blog_posts
    for select
    to anon, authenticated
    using (true);

revoke all on public.blog_posts from anon, authenticated;
grant select on public.blog_posts to anon, authenticated;
revoke all on public.blog_post_contacts from anon, authenticated;

create or replace function public.submit_blog_post(
    p_author_name text,
    p_email text,
    p_title text,
    p_content text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
    new_post_id bigint;
    clean_title text := nullif(btrim(p_title), '');
begin
    if p_author_name is null or char_length(btrim(p_author_name)) not between 1 and 80 then
        raise exception 'Name must be between 1 and 80 characters';
    end if;

    if p_email is null
        or char_length(p_email) not between 3 and 254
        or p_email !~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' then
        raise exception 'A valid email address is required';
    end if;

    if clean_title is not null and char_length(clean_title) > 120 then
        raise exception 'Title must be at most 120 characters';
    end if;

    if p_content is null or char_length(btrim(p_content)) not between 1 and 20000 then
        raise exception 'Content must be between 1 and 20000 characters';
    end if;

    insert into public.blog_posts (author_name, title, content)
    values (btrim(p_author_name), clean_title, btrim(p_content))
    returning id into new_post_id;

    insert into public.blog_post_contacts (post_id, email)
    values (new_post_id, btrim(p_email));
end;
$$;

revoke all on function public.submit_blog_post(text, text, text, text) from public;
grant execute on function public.submit_blog_post(text, text, text, text) to anon, authenticated;
