# 株式会社CRAFT コーポレートサイト

> Corporate website for CRAFT Co., Ltd.

---

## 概要

株式会社CRAFTのコーポレートサイトです。

衛生設備工事・水まわりリフォーム・公共工事を中心とした事業内容や施工事例、会社情報を分かりやすく伝え、地域のお客様からのご相談・お問い合わせにつなげることを目的として制作しています。

現在はHTML / CSS / JavaScriptによる静的サイトとして構築し、今後WordPress化を予定しています。

---

## サイト構成

| ページ | ファイル | 内容 |
|--------|----------|------|
| TOP | `index.html` | 事業概要・施工事例・強み・代表挨拶・会社情報 |
| WORKS | `works.html` | 施工事例・Before / After |
| SERVICE | `service.html` | 衛生設備工事・水まわりリフォーム・公共工事 |
| COMPANY | `company.html` | 代表挨拶・CRAFTに込めた想い・会社情報・対応エリア |
| CONTACT | `contact.html` | お問い合わせフォーム・FAQ |

---

## 主な特徴

- 衛生設備工事・水まわりリフォーム・公共工事の3事業を分かりやすく紹介
- PC・タブレット・スマートフォンに対応したレスポンシブデザイン
- 施工事例を掲載するWORKSページ
- Before / Afterによる施工事例の紹介
- お問い合わせフォームとFAQ
- スクロールに合わせたRevealアニメーション
- TOPページのHeroスライド
- Marqueeアニメーション
- モバイル用ハンバーガーメニュー
- SEOを意識したHTML構造とmeta情報
- OGP・X Card対応
- Favicon・Apple Touch Icon対応
- アクセシビリティを考慮したalt・aria-labelの設定

---

## ファイル構成

```text
craft-corporate-site/
├── index.html
├── works.html
├── service.html
├── company.html
├── contact.html
│
├── css/
│   ├── reset.min.css
│   ├── style.css
│   └── pages.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── logo.webp
│   ├── favicon.ico
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── ...
│
└── README.md
