#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

echo "Starting Nova Studio website on http://localhost:${PORT}"
echo "Press Ctrl+C to stop."
python3 -m http.server --bind 0.0.0.0 "${PORT}"
