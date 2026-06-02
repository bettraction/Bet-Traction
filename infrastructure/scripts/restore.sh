#!/bin/bash

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
    echo "Usage: $0 <backup-file>"
    exit 1
fi

if [ ! -f "$BACKUP_FILE" ]; then
    echo "Backup file not found: $BACKUP_FILE"
    exit 1
fi

docker-compose exec -T postgres psql -U postgres -d bettraction < $BACKUP_FILE

echo "Restore completed from: $BACKUP_FILE"
