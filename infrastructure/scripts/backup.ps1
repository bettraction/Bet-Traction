$BackupDir = ".\backups"
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
$BackupFile = Join-Path $BackupDir "bettraction_$Date.sql"

if (!(Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir | Out-Null
}

docker-compose exec -T postgres pg_dump -U postgres bettraction | Out-File -FilePath $BackupFile -Encoding utf8

Write-Host "Backup created: $BackupFile"
