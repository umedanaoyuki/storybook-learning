# Storybook-Learning

勉強用に独自に作成したReactのUIコンポーネントをStorybookで管理しています

## フロントエンド初心者向けのこのPJの立ち上げ方法

```shell
   git clone git@github.com:umedanaoyuki/storybook-learning.git
```

```shell
   npm install
```
↑のコマンドで node_modulesというフォルダが作成されます

```shell
   npm run dev
```
↑のコマンドでReact+Viteのプロジェクトが立ち上がります(http://localhost:5173/)

```shell
   npm run storybook
```
↑のコマンドでStorybookが立ち上がります(http://localhost:6006/)


ディレクトリーの構成はこのようになっています。

これはStorybookの練習用なのでApp.tsxは特に何も変更していません。
`Accordion`や`RadioGroup`のサンプルファイルを作ってみました。
Storybookの雰囲気を見て皆さんもCSSとReactの練習のために、独自でUIを作ってみてください。

参考にするサイトはたくさんありますが、以下のようなサイトで作られている代表的なコンポーネントを真似して、自己流で作ってみることをお勧めします。AIも使いながら調べて実装するとhtml/CSSの知識が非常につきます。

- https://www.w3schools.com/howto/howto_js_accordion.asp

- https://mui.com/material-ui/react-accordion/?srsltid=AfmBOoqfYM-i6OAEenkls-KgT945X2t-f1Rs5-DH6KKyFVjzDFcDlNeM

- https://ui.shadcn.com/docs/components/accordion



```shell
Storybook-learning/
├── src/
│   └── stories/
│       ├── Configure.tsx
│       ├── Accordion/
│       │   ├── accordion.css
│       │   ├── Accordion.stories.ts
│       │   └── Accordion.tsx
│       ├── RadioGroup/
│       │   ├── radioGroup.css
│       │   ├── RadioGroup.stories.ts
│       │   └── RadioGroup.tsx  
│       └── Button
└── App.tsx
```
