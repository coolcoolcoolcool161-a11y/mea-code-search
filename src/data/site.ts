// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'コードサーチ',
  operator: 'メア',
  siteUrl: 'https://mea-poikatsu.github.io/mea-code-search',
  description:
    'ワラウ・ハピタス・モッピー・Freecash・TikTok・PayPay・楽天モバイルなど全19サービスの紹介コード・招待コードを検索してすぐコピー。サービス名・コード・特典で絞り込めます。',
  dateModified: '2026-11-25',
  gaMeasurementId: 'G-8BB8V3DRW8',
  xAccount: 'https://x.com/pppppuririn',
  hubUrl:
    'https://mea-poikatsu.github.io/mea-poikatsu-media/',
} as const;

// Astro 5ではcontent collectionのentry.idに拡張子（.md）が付くため、URL用スラッグに変換する
export const slugOf = (id: string) => id.replace(/\.md$/, '');

// 旧サイトのカテゴリ分け（4部門。件数は旧サイト通り：ポイントサイト4／SNS・動画2／決済・銀行・通信5／その他8）
export const CATEGORIES = [
  { slug: 'point-sites', name: 'ポイントサイト' },
  { slug: 'sns-video', name: 'SNS・動画' },
  { slug: 'payment-bank', name: '決済・銀行・通信' },
  { slug: 'others', name: 'その他' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name]),
);

// 旧サイトの表示順（おすすめ順）。トップページの初期表示と「おすすめ順」の並びに使う。
export const DEFAULT_ORDER = [
  'freecash',
  'warau',
  'tiktok',
  'tiktok-lite',
  'moppy',
  'hapitas',
  'rakuten-mobile',
  'olive',
  'pokekatsu',
  'mercari',
  'paypay',
  'airwallet',
  'orikuji',
  'muse',
  'sampo',
  'butamaru',
  'mirapoi',
  'tokueru',
  'dips',
] as const;

// 姉妹ブログ（旧muse.ai URL。2026-11-21にGitHub Pagesの新URLへ更新済み）
export const SISTER_BLOGS = [
  {
    name: 'ポイ活レビュー帖・総合',
    note: '全サービスをカテゴリ別カードで紹介する総合版。まず全体を見たい人に。',
    url: 'https://mea-poikatsu.github.io/mea-poikatsu-blog/',
  },
  {
    name: 'ポイランク',
    note: 'メアのおすすめ順に並べた紹介コード案内。おすすめから選びたい人に。',
    url: 'https://mea-poikatsu.github.io/mea-ranking/',
  },
  {
    name: 'ポイレーダー',
    note: '読み物スタイルでサービスを特集。じっくり読みながら選びたい人に。',
    url: 'https://mea-poikatsu.github.io/mea-poikatsu-magazine/',
  },
  {
    name: 'ポイ活のトリセツ',
    note: '大きな文字とシンプルな案内で、初めての人でも迷わない初心者向け版。',
    url: 'https://mea-poikatsu.github.io/mea-kantan-guide/',
  },
  {
    name: 'ポイゲークエスト',
    note: 'Freecashなど、ゲームを遊んで貯めるサービスに特化した版。',
    url: 'https://mea-poikatsu.github.io/mea-game-poikatsu/',
  },
] as const;

export const FAQS = [
  {
    q: '紹介コードはどこで入力すればいいですか？',
    a: 'サービスによって異なります。リンク型の紹介（ワラウ・ハピタス・Freecash・楽天モバイルなど）は紹介リンクから登録するだけで自動で適用されます。コード入力型（モッピー・PayPay・メルカリ・SMBC Oliveなど）は登録画面やアプリ内の紹介コード欄にコードを入力してください。各カードに手順を記載しています。',
  },
  {
    q: 'ポイ活の紹介特典は本当に無料でもらえますか？',
    a: '登録自体は全サービス無料です。特典には条件（広告利用・支払い・口座残高など）がある場合があり、各カードの条件欄に明記しています。条件を満たせば追加費用なしで特典がもらえるサービスがほとんどです。',
  },
  {
    q: '紹介者に個人情報や契約情報は伝わりますか？',
    a: '伝わらないよ。楽天モバイルをはじめ、紹介を受けた方の契約情報が紹介者のメアに伝わることはありません。無言利用OKです♪',
  },
  {
    q: 'このページから登録すると、メアに紹介報酬は発生しますか？',
    a: 'はい、発生します。このページの紹介リンク・招待コードから登録し、各サービスの条件を達成すると、紹介者のメアにも各サービスの紹介プログラムに基づく報酬（ポイント・現金相当額など）が付与されます。あなたが受け取る特典額が減ることはなく、追加費用もかかりません。詳しくは「広告・紹介報酬に関する表記」をご覧ください。',
  },
  {
    q: '一番おすすめの紹介コードはどれですか？',
    a: '特典額では楽天モバイル（最大13,000ポイント）とモッピー（最大7,000P）が大きく、ゲームで気軽に稼ぎたい方にはFreecash（初回DLで1,430円分）がメアのおすすめだよ💖 まずは無料登録できるポイントサイト（ワラウ・ハピタス・モッピー・Freecash）から始めるのが定番です。',
  },
  {
    q: '登録した後から紹介コードを使うことはできますか？',
    a: 'ほとんどのサービスで、紹介特典は新規登録時のみ対象で、後からの入力はできません。まだ登録していないサービスから優先して、このページ経由で登録するのがおすすめです。',
  },
  {
    q: 'TikTokの招待がうまくいかないときは？',
    a: 'Wi-FiをOFFにしてモバイル通信でアクセスし、招待URLを直接開いて進んでください。「ダウンロードを開く」経由だと招待が反映されないことがあります。',
  },
] as const;
