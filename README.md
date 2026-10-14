# easyops-webui

The admin console for **[easyops](../easyops)** — a Kubernetes/Helm ops service.
Svelte 5 + Vite + Tailwind 4, served at `/ui/` and calling the `ops.v1` Connect
API same-origin.

Pages: Overview / Services / Sandboxes / PVCs / Helm.

## Build

```sh
npm install && npm run build                  # -> ./dist
OUT_DIR=../easyops/cmd/easyops/ui/dist npm run build   # into the server's go:embed dir
```

The easyops server embeds the built output via `//go:embed all:ui/dist`
(`cmd/easyops/ui.go`). **dist is not committed** — the server's Containerfile
builds it from this repo in a dedicated stage.
