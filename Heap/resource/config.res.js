exports.typeSelector = function (path) {
        if (path.indexOf("D2Resource") >= 0) {
            var ext = path.substr(path.lastIndexOf(".") + 1);
            var typeMap = {
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
            };
            var type = typeMap[ext];
            if (type == "json") {
                if (path.indexOf("sheet") >= 0) {
                    type = "sheet";
                }
                else if (path.indexOf("movieclip") >= 0) {
                    type = "movieclip";
                }
                ;
            }
            return type;
        }
        else {
            var filei = path.lastIndexOf("/");
            var file = path.substr(filei + 1);
            var i = file.indexOf(".", 0);
            var extname = null;
            while (i >= 0) {
                extname = file.substr(i);
                if (extname == ".vs.glsl") {
                    return 'GLVertexShader';
                }
                else if (extname == ".assetbundle.json") {
                    return 'Bundle';
                }
                else if (extname == ".fs.glsl") {
                    return 'GLFragmentShader';
                }
                else if (extname == ".shader.json") {
                    return 'Shader';
                }
                else if (extname == ".png" || extname == ".jpg") {
                    return 'Texture';
                }
                else if (extname == ".pvr.bin" || extname == ".pvr") {
                    return 'PVR';
                }
                else if (extname == ".imgdesc.json") {
                    return 'TextureDesc';
                }
                else if (extname == ".mat.json") {
                    return 'Material';
                }
                else if (extname == ".mesh.bin") {
                    return 'Mesh';
                }
                else if (extname == ".aniclip.bin") {
                    return 'Aniclip';
                }
                else if (extname == ".prefab.json") {
                    return 'Prefab';
                }
                else if (extname == ".scene.json") {
                    return 'Scene';
                }
                else if (extname == ".atlas.json") {
                    return 'Atlas';
                }
                else if (extname == ".font.json") {
                    return 'Font';
                }
                else if (extname == ".json" || extname == ".txt" || extname == ".effect.json") {
                    return 'TextAsset';
                }
                else if (extname == ".packs.bin") {
                    return 'PackBin';
                }
                else if (extname == ".packs.txt") {
                    return 'PackTxt';
                }
                else if (extname == ".path.json") {
                    return 'pathAsset';
                }
                else if (extname == ".mp3" || extname == ".ogg") {
                    return 'Sound';
                }
                i = file.indexOf(".", i + 1);
            }
            return 'Unknown';
        }
    };
exports.resourceRoot = "resource";
exports.alias = {};
exports.groups = {};
exports.resources = {
	"config.res.js": {
		"url": "config.res.js",
		"type": "Unknown",
		"name": "config.res.js"
	},
	"default.res.json": {
		"url": "default.res.json",
		"type": "TextAsset",
		"name": "default.res.json"
	},
	"default.thm.json": {
		"url": "default.thm.json",
		"type": "TextAsset",
		"name": "default.thm.json"
	},
	"logo.png": {
		"url": "logo.png",
		"type": "Texture",
		"name": "logo.png"
	},
	"wing.res.json": {
		"url": "wing.res.json",
		"type": "TextAsset",
		"name": "wing.res.json"
	},
	"shader": {
		"shader.assetbundle.json": {
			"url": "shader/shader.assetbundle.json",
			"type": "Bundle",
			"name": "shader/shader.assetbundle.json"
		},
		"shader.assetbundle.readme": {
			"url": "shader/shader.assetbundle.readme",
			"type": "Unknown",
			"name": "shader/shader.assetbundle.readme"
		},
		"resources": {
			"example": {
				"sample_uvsprite.fs.glsl": {
					"url": "shader/resources/example/sample_uvsprite.fs.glsl",
					"type": "GLFragmentShader",
					"name": "shader/resources/example/sample_uvsprite.fs.glsl"
				},
				"sample_uvsprite.shader.json": {
					"url": "shader/resources/example/sample_uvsprite.shader.json",
					"type": "Shader",
					"name": "shader/resources/example/sample_uvsprite.shader.json"
				},
				"sample_uvsprite.vs.glsl": {
					"url": "shader/resources/example/sample_uvsprite.vs.glsl",
					"type": "GLVertexShader",
					"name": "shader/resources/example/sample_uvsprite.vs.glsl"
				},
				"selftimer_uvroll.fs.glsl": {
					"url": "shader/resources/example/selftimer_uvroll.fs.glsl",
					"type": "GLFragmentShader",
					"name": "shader/resources/example/selftimer_uvroll.fs.glsl"
				},
				"selftimer_uvroll.shader.json": {
					"url": "shader/resources/example/selftimer_uvroll.shader.json",
					"type": "Shader",
					"name": "shader/resources/example/selftimer_uvroll.shader.json"
				},
				"selftimer_uvroll.vs.glsl": {
					"url": "shader/resources/example/selftimer_uvroll.vs.glsl",
					"type": "GLVertexShader",
					"name": "shader/resources/example/selftimer_uvroll.vs.glsl"
				}
			},
			"particle": {
				"particles_additive.shader.json": {
					"url": "shader/resources/particle/particles_additive.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_additive.shader.json"
				},
				"particles_additive_premultiply.shader.json": {
					"url": "shader/resources/particle/particles_additive_premultiply.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_additive_premultiply.shader.json"
				},
				"particles_additive_renderall.shader.json": {
					"url": "shader/resources/particle/particles_additive_renderall.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_additive_renderall.shader.json"
				},
				"particles_additive_zwriteon.shader.json": {
					"url": "shader/resources/particle/particles_additive_zwriteon.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_additive_zwriteon.shader.json"
				},
				"particles_blend.shader.json": {
					"url": "shader/resources/particle/particles_blend.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_blend.shader.json"
				},
				"particles_blend_premultiply.shader.json": {
					"url": "shader/resources/particle/particles_blend_premultiply.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_blend_premultiply.shader.json"
				},
				"particles_blend_renderall.shader.json": {
					"url": "shader/resources/particle/particles_blend_renderall.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_blend_renderall.shader.json"
				},
				"particles_blend_zwriteon.shader.json": {
					"url": "shader/resources/particle/particles_blend_zwriteon.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_blend_zwriteon.shader.json"
				},
				"particles_diffuse.fs.glsl": {
					"url": "shader/resources/particle/particles_diffuse.fs.glsl",
					"type": "GLFragmentShader",
					"name": "shader/resources/particle/particles_diffuse.fs.glsl"
				},
				"particles_diffuse.shader.json": {
					"url": "shader/resources/particle/particles_diffuse.shader.json",
					"type": "Shader",
					"name": "shader/resources/particle/particles_diffuse.shader.json"
				},
				"particles_diffuse.vs.glsl": {
					"url": "shader/resources/particle/particles_diffuse.vs.glsl",
					"type": "GLVertexShader",
					"name": "shader/resources/particle/particles_diffuse.vs.glsl"
				},
				"particles_transparent.fs.glsl": {
					"url": "shader/resources/particle/particles_transparent.fs.glsl",
					"type": "GLFragmentShader",
					"name": "shader/resources/particle/particles_transparent.fs.glsl"
				},
				"particles_transparent.vs.glsl": {
					"url": "shader/resources/particle/particles_transparent.vs.glsl",
					"type": "GLVertexShader",
					"name": "shader/resources/particle/particles_transparent.vs.glsl"
				}
			}
		}
	}
};
