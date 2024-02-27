/*

2.2.1 コールバック

*/

'use strict'

/**
 * コールバックを利用した非同期関数の例。
 * 
 * 1000ms 待たずに console.log が発生する
 * 
 */
function p46_timeOut() {
    setTimeout(
        () => console.log('1000ms'),
        1000
    )
    console.log('ran setTimeout() successfully.')
}

/**
 * コールバックを利用しているからと言って非同期関数になるわけではない。
 * 
 * 配列の map() メゾットは引数のコールバックを使って配列内の要素を変換するが、
 * 同期的に実行される。
 */
function p46_arrayProcess() {
    const array1 = [0, 1, 2, 3]
    const array2 = array1.map((element) => {
        console.log(`Convert ${element} ...`)
        return element * 10
    })
    console.log(`New Array: ${array2}`)
}

/**
 * fs.readdir を利用してディレクトリのファイル一覧を返すコード。
 *
 * fs.readdir() 自体には戻り値はなく、処理の結果はコールバックに引数として渡される。
 *  
 */
function p47_readdir(dir = '.') {
    fs.readdir(
        dir,
        (err, files) => {
            console.log('Results of fs.readdir() ===')
            console.log('err', err)
            console.log('files', files)
        }
    )
}

/*

2.2.2 エラーハンドリング

*/


/**
 * JSON をパースする関数
 * 
 * 関数内で発生したエラーは、try ... catch で捕まえられる
 * 
 * @param {JSON} json パースしたい JSON リテラルを入力
 */
function p49_parseJSONSync(json) {
    try {
        return JSON.parse(json)
    } catch (e) {
        console.log(`ERROR: ${e}`)
    }
}

/**
 * このコードは正しく動作しない
 * 
 * コールバック内で起きたエラーは try ... catch では捕まえられない
 * 
 * @param {JSON} json
 * @param {*} callback 
 * 
 */
function p49_Fault_parseJSONASync(json, callback) {
    try {
        setTimeout(
            () => {
                callback(JSON.parse(json))
            }, 1000
        )
    } catch (e) {
        console.log(`ERROR: ${e}`)
    }
}

/**
 * 上の関数を Node.js の規約に沿ってコールバックエラーを正しく受け取りつつ書く
 * 
 * 例: p51_parseJSONAsync('不正な JSON', (err, result) =>
 *  console.log('Result: ', err, result)
 * )
 */

function p51_parseJSONASync(json, callback) {
    setTimeout(() => {
        try {
            callback(null, JSON.parse(json))
        } catch (e) {
            callback(e)
        }
    }, 1000)
}


/*

 モジュールのエクスポート

*/

module.exports = {
    p46_timeOut,
    p46_arrayProcess,
    p47_readdir,
    p49_Fault_parseJSONASync,
    p49_parseJSONSync,
    p51_parseJSONASync
}
