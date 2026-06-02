#!/bin/bash

BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/bettraction_$DATE.sql"

mkdir -p $BACKUP_DIR

docker-compose exec -T postgres pg_dump -U postgres bettraction > $BACKUP_FILE

echo "Backup created: $BACKUP_FILE"
