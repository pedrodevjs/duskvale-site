# Duskvale

Aplicacao React com Vite. A rota `/` exibe a tela de manutencao e as proximas paginas podem ser adicionadas em `src/App.jsx`.

## Desenvolvimento

```bash
npm install
npm run dev
```

No Codespaces, abra a porta `5173` pela aba **Ports** do VS Code e use a URL encaminhada por ela. A URL raiz `github.dev` mostra a tela de encaminhamento do GitHub, nao a aplicacao.

## Build para VPS

```bash
npm ci
npm run build
```

Publique o conteudo de `dist/` no diretorio configurado pelo Nginx. Use `deploy/nginx.conf` como base: o `try_files` preserva o fallback do React Router em rotas futuras.
