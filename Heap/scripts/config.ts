
/// 阅读 config.d.ts 查看文档
///<reference path="config.d.ts"/>

const config: ResourceManagerConfig = {

    configPath: 'config.res.js',

    resourceRoot: () => "resource",

    userConfigs: {

        build: {
            outputDir: "resource",

            plugin: [
                "emitConfigFile",
                "incrementCompile"
            ]
        },

        publish: {

            outputDir: "bin-release",

            plugin: [
                "compile",
                "zip",
                "spritesheet",
                "convertFileName",
                "emitConfigFile",
                "manifest"
            ]
        }
    },

    mergeSelector: (path) => {
        if (path.indexOf("assets/bitmap/") >= 0) {
            return "assets/bitmap/sheet.sheet"
        }
        else if (path.indexOf("armature") >= 0 && path.indexOf(".json") >= 0) {
            return "assets/armature/1.zip";
        }
    },

    typeSelector: (path) => {
        if(path.indexOf("D2Resource") >= 0) {
            const ext = path.substr(path.lastIndexOf(".") + 1);
            const typeMap = {
                "jpg": "image",
                "png": "image",
                "webp": "image",
                "json": "json",
                "fnt": "font",
                "pvr": "pvr",
                "mp3": "sound",
                "zip": "zip",
                "mergeJson": "mergeJson",
                "sheet": "sheet"
            }
            let type = typeMap[ext];
            if (type == "json") {
                if (path.indexOf("sheet") >= 0) {
                    type = "sheet";
                } else if (path.indexOf("movieclip") >= 0) {
                    type = "movieclip";
                };
            }
            return type;
        } else {
            let filei = path.lastIndexOf("/");
            let file = path.substr(filei + 1);

            let i = file.indexOf(".", 0);
            let extname = null;
            while (i >= 0) {
                extname = file.substr(i);
                if (extname == ".vs.glsl") {
                    return 'GLVertexShader';
                } else if (extname == ".assetbundle.json") {
                    return 'Bundle';
                } else if (extname == ".fs.glsl") {
                    return 'GLFragmentShader';
                } else if (extname == ".shader.json") {
                    return 'Shader';
                } else if (extname == ".png" || extname == ".jpg") {
                    return 'Texture';
                } else if (extname == ".pvr.bin" || extname == ".pvr") {
                    return 'PVR';
                } else if (extname == ".imgdesc.json") {
                    return 'TextureDesc';
                } else if (extname == ".mat.json") {
                    return 'Material';
                } else if (extname == ".mesh.bin") {
                    return 'Mesh';
                } else if (extname == ".aniclip.bin") {
                    return 'Aniclip';
                } else if (extname == ".prefab.json") {
                    return 'Prefab';
                } else if (extname == ".scene.json") {
                    return 'Scene';
                } else if (extname == ".atlas.json") {
                    return 'Atlas';
                } else if (extname == ".font.json") {
                    return 'Font';
                } else if (extname == ".json" || extname == ".txt" || extname == ".effect.json") {
                    return 'TextAsset';
                } else if (extname == ".packs.bin") {
                    return 'PackBin';
                } else if (extname == ".packs.txt") {
                    return 'PackTxt';
                } else if (extname == ".path.json") {
                    return 'pathAsset';
                } else if (extname == ".mp3" || extname == ".ogg") {
                    return 'Sound';
                }
                i = file.indexOf(".", i + 1);
            }
            return 'Unknown';
        }
    }
}


export = config;
