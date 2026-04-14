DO $$
BEGIN
    IF to_regclass('public."Movie"') IS NOT NULL
       AND to_regclass('public.movie') IS NULL THEN
        ALTER TABLE public."Movie" RENAME TO movie;
    END IF;
END $$;