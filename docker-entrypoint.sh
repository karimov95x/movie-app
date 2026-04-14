#!/bin/sh
set -eu

run_migrations="${RUN_MIGRATIONS_ON_STARTUP:-false}"

if [ "$run_migrations" = "true" ]; then
  echo "[entrypoint] Running Prisma migrations before application startup."
  npx prisma migrate deploy
fi

if [ "$#" -gt 0 ]; then
  case "$*" in
    *"prisma migrate deploy"*)
      if [ "$run_migrations" != "true" ]; then
        echo "[entrypoint] Ignoring startup command that runs Prisma migrations. Set RUN_MIGRATIONS_ON_STARTUP=true to allow this." >&2
        exec node dist/main
      fi
      ;;
  esac

  exec "$@"
fi

exec node dist/main