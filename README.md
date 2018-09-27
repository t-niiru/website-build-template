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
│   └── stylesheets
│       ├── scss
│       │   ├── common
│       │   │   ├── _format.scss
│       │   │   └── _settings.scss
│       │   ├── componets
│       │   │   └── _index.scss
│       │   ├── mixins
│       │   │   ├── _example.scss
│       │   │   └── _mixins.scss
│       │   └── style.scss
│       ├── style.css
│       └── style.css.map
└── index.html
docs<公開ディレクトリ>
├── assets
│   └── stylesheets
│       └── style.css
├── contents.html
├── footer.html
├── header.html
└── index.html
```

## 公開
### あらかじめdocsディレクトリの中をクリーンアップ  
`$ rm -rf docs/*`

### assetsの静的ファイルを設置  
`$ cp -R src/assets/images/ docs/assets/images`  
`$ cp -R src/assets/stylesheets/style.css docs/assets/stylesheets/`

### index.htmlを設置  
`$ cp -R src/index.html docs`
