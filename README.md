# ポイ活コード検索（mea-code-search）

メアのポイ活メディア「ポイ活コード検索」の独立サイト版。Astro＋Markdownで構築し、Cloudflare Pages（Free）で公開する。旧サイト（muse.ai）は移行完了＋ユーザー最終承認があるまで削除しない。

## 公開URL（暫定）

- https://mea-code-search.pages.dev （Cloudflare Pagesのプロジェクト作成時にサブドメインが確定したら `astro.config.mjs`・`public/robots.txt`・`public/sitemap.xml` のURLを書き換えること）

## 内容

- 記事：全19サービス分の個別記事ページ（`src/content/articles/`）。カテゴリ4部門（ポイントサイト4／SNS・動画2／決済・銀行・通信5／その他8）
- トップページ：検索ボックス＋カテゴリフィルター＋並び替え（おすすめ順／特典額が大きい順／名前順）、19サービスのカード一覧、使い方3ステップ、FAQ、姉妹ブログ
- カテゴリページ：ポイントサイト／SNS・動画／決済・銀行・通信／その他
- サイト内検索：`/search/`（ビルド時に `/search-index.json` を生成し、ブラウザ内で絞り込み）
- 法務ページ：広告・紹介報酬に関する表記／プライバシーポリシー／利用規約・免責事項（旧サイトの文言をそのまま移行）
- SEO：ページごとの固有title・meta description・canonical・XMLサイトマップ・robots.txt・OGP・JSON-LD（WebPage／ItemList／FAQPage／Article／BreadcrumbList）・パンくず・内部リンク・モバイル対応。JavaScriptなしでも記事本文はHTMLに含まれる。

## 紹介コード・URLの扱い

- コード・紹介URL・特典額・条件は `src/content/articles/*.md` のfrontmatterと本文に記載。変更するときは `~/workspace/*-referral-post.txt` と台帳 `~/workspace/site-migration-inventory.md` §4.1 で照合すること。
- **注意：ワラウの紹介URLは `https://www.warau.jp/friend/reg/bEs5`、コードは `bEs7`。公式バナーHTMLの `/boav` は別物で使わないこと。**
- ワラウのレートは公式確認で **1pt＝1円**（ワラウコインは別物で10コイン＝1pt）。
- Freecashの招待された側は約1,430円相当（「約1,500円分」は誤りで使わないこと）。
- 表示順は旧サイト通り（おすすめ順）。「特典額が大きい順」は円・ポイント換算できる特典を大きい順に並べる（サンポは110pt≒1円換算の目安で約36円相当。換算できない特典は末尾に表示）。

## 広告

- 忍者AdMaxの同期タグ2枠（SP ID 1239768・PC ID 1239769）を `src/components/AdSlot.astro` で3箇所（トップページ）・2箇所（記事ページ）に配置。同一タグの複数箇所流用は公式未確認のため、PCで表示されない場合は箇所ごとに枠を作り直すこと。

## GA4（未設定）

- 測定IDは `src/data/site.ts` の `gaMeasurementId` に入れる。空のままならGA4スクリプトは出力されない。GA4プロパティの作成はユーザーのGoogleアカウントでの操作が必要。

## 開発・ビルド

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 静的HTMLを dist/ に出力
npm run preview  # ビルド結果の確認
```

## デプロイ（Cloudflare Pages）

1. Cloudflareアカウントを作成する（ユーザー側作業。2026-11-20時点ではTurnstileのため未作成）。
2. Cloudflare Pagesでプロジェクト作成 → このGitHubリポジトリを接続。
3. ビルド設定：フレームワークプリセット `Astro`、ビルドコマンド `npm run build`、出力ディレクトリ `dist`。
4. デプロイ後、Search Consoleでサイトマップ（`/sitemap.xml`）を送信し、所有権確認（HTMLファイル／メタタグ方式）を行う。

## 画像について

- `public/images/` の6ファイル（ヒーロー、Freecash HQバナー、Muse紹介画像、公式細型バナー3枚）は旧サイトで表示されていたものと同一バイト（SHA256照合済み）。
- **注意：このリポジトリへの画像（バイナリ）アップロードは、MuseのGitHub連携（push_files）ではUTF-8テキストのみ対応のため行えない。** 画像はGitHub Web UIのドラッグ＆ドロップで `public/images/` にアップロードするか、gitコマンドで直接プッシュすること。アップロードが済むまで、デプロイ先では画像が表示されない。

## 旧サイトとの対応

- 旧URL：https://muse.ai/s/poihuo-kodojian-suo-hb6xcxsxg20qsxl/6jl8s6igC6cBHibzVwCEADiLunryhUT0jRZr_pVQrQE（v16・公開中）
- 旧サイトの301リダイレクトはmuse.ai共有URLでは不可のため、移行完了後は旧ページに移転案内と新URLへのリンクを掲示する。
- 旧サイトのインタラクティブな検索（検索フォーム＋カテゴリフィルター＋並び替え）は、トップページのクライアントサイド検索で再現した（JavaScriptなしでも全19カードのHTMLは表示される）。紹介文（原文）は各記事ページに全文を移行し、カードには記事ページへのリンクを載せている。
