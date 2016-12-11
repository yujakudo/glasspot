#セキュリティ・チェック・リスト
このドキュメントには、このプロジェクトのセキュリティ・チェック・リストを示します。
このチェック・リストは、他のElectronプロジェクトでも使うことができます。

##仕様
* 基本的にHTTPSプロトコルのみ許可。
* HTTPプロトコルを使うときには、ユーザーが同意したことを確実にする。
* FILEプロトコルは、ユーザーが操作した時と、そのファイルが参照するリンクのみ有効。

##実装
* windows.html: DOM操作を行う場所はwebviewでサンドボックス化する。
* windows.html: 'Content-Security-Policy'を記述する。
* window.js: eval() を無効にする。
* window.js: リモート・テキストのエスケープを確実にする。
* preload.js,header.js: eval()とBufferを無効にする。
* BrowserWindowsとwebviewにはセキュアでないオプションは追加しない。
    * allowDisplayingInsecureContent, allowRunningInsecureContentをtrueにしない。
    * experimentalFeatures, experimentalCanvasFeatures, 
    blinkFeaturesを有効にしない。(熟知していないので)
* webviewタグでは、nodeintegration, 
disablewebsecurity, allowpopups, insertCSS, executeJavaScriptを追加しない。
* 仕様に記したプロトコルのみ許可することを、確実にする。

##このチェック・リスト
* このチェック・リストは適切に更新する。
    * 基盤となるNode.js, Electronなどをアップデートしたとき。
    * 新たなセキュリティの問題が明らかになったとき。
