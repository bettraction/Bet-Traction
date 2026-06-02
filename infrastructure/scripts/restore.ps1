param(
    [Parameter(Mandatory=$true)]
    [string]$BackupFile
)

if (!(Test-Path $BackupFile)) {
    Write-Host "Backup file not found: $BackupFile" -ForegroundColor Red
    exit 1
}

Get-Content $BackupFile | docker-compose exec -T postgres psql -U postgres -d bettraction

Write-Host "Restore completed from: $BackupFile"
