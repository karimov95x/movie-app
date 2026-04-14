DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Action'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'ACTION'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Action' TO 'ACTION';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Comedy'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'COMEDY'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Comedy' TO 'COMEDY';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Drama'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'DRAMA'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Drama' TO 'DRAMA';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Fantasy'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'FANTASY'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Fantasy' TO 'FANTASY';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Horror'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'HORROR'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Horror' TO 'HORROR';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'Thriller'
    ) AND NOT EXISTS (
        SELECT 1
        FROM pg_enum e
        JOIN pg_type t ON t.oid = e.enumtypid
        WHERE t.typname = 'Genre' AND e.enumlabel = 'THRILLER'
    ) THEN
        ALTER TYPE "Genre" RENAME VALUE 'Thriller' TO 'THRILLER';
    END IF;
END $$;