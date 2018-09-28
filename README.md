# npm-scripts scss build

only npm scripts  

## feature
 - scss build 
 - css autoprefix  

## コマンド

### パッケージのインストール
`npm install`  

### 立ち上げ
`npm run dev`  

## 構成
```
src<開発ディレクトリ>
├── assets
│   ├── images
│   └── stylesheets
│       ├── scss
│       │   ├── common
│       │   │   ├── _format.scss
│       │   │   └── _settings.scss
│       │   ├── componets
│       │   │   └── _example.scss
│       │   ├── mixins
│       │   │   ├── _example.scss
│       │   │   └── _mixins.scss
│       │   └── style.scss
│       ├── style.css
│       └── style.css.map
└── index.html
docs<公開ディレクトリ>
├── assets
│   ├── images
│   └── stylesheets
│       └── style.css
└── index.html
```

## 公開
### 公開用ディレクトリにファイル群をコピーする
`npm run build`
