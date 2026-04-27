#!/usr/bin/env bash
set -euo pipefail

SCRIPT_NAME="${1:?Usage: run-workspace-script.sh <script-name>}"
TIMEOUT_SECONDS="${ASTRA_WORKSPACE_SCRIPT_TIMEOUT_SECONDS:-60}"

mapfile -t WORKSPACES < <(python3 - "$SCRIPT_NAME" <<'PY'
import json
import sys
from pathlib import Path

script_name = sys.argv[1]
roots = ["apps", "packages", "services", "tools"]

for root in roots:
    root_path = Path(root)
    if not root_path.exists():
        continue

    for package_json in sorted(root_path.glob("*/package.json")):
        try:
            data = json.loads(package_json.read_text())
        except json.JSONDecodeError as exc:
            raise SystemExit(f"Invalid JSON in {package_json}: {exc}") from exc

        scripts = data.get("scripts", {})
        if script_name in scripts:
            print(package_json.parent.as_posix())
PY
)

if [ "${#WORKSPACES[@]}" -eq 0 ]; then
  echo "No workspaces define script: ${SCRIPT_NAME}"
  exit 0
fi

echo "Running '${SCRIPT_NAME}' in ${#WORKSPACES[@]} workspace(s)."
echo

for workspace in "${WORKSPACES[@]}"; do
  echo "==> ${workspace}: ${SCRIPT_NAME}"

  if command -v timeout >/dev/null 2>&1; then
    timeout "${TIMEOUT_SECONDS}s" bash -lc "cd '${workspace}' && bun run '${SCRIPT_NAME}'"
  else
    bash -lc "cd '${workspace}' && bun run '${SCRIPT_NAME}'"
  fi

  echo
done
