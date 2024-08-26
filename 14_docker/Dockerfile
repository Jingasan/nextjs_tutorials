#============================================================
# ビルド環境
#============================================================
FROM node:22-alpine as builder

# Next.jsのビルド
COPY frontend /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build


#============================================================
# 製品環境
#============================================================
FROM gcr.io/distroless/nodejs22-debian12:nonroot as releaser
USER nonroot

WORKDIR /frontend

# Next.jsのインストール
COPY --from=builder /frontend/public ./public
COPY --from=builder /frontend/.next/standalone ./
COPY --from=builder /frontend/.next/static ./.next/static
CMD ["server.js"]