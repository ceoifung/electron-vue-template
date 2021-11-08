module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                "appId": "com.xiaor.wifirobot",
                "productName": "WifiRobot V3.0",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright": "Copyright © 2021, Powered by ceoifung.",//版权信息
                "directories": {
                    "output": "./dist"//输出文件路径，之前编译的默认是dist_electron
                },
                // "win": {
                //     "icon": "./build/logo.ico",//图标路径
                // },
                // "linux": {
                //     "target": "deb"
                // },
                // "extraResources": { // 拷贝dll等静态文件到指定位置
                //     "from": "./static/conf.ini",
                //     "to": "conf.ini"
                // },
                // options placed here will be merged with default configuration and passed to electron-builder
            }
        }
    }
}