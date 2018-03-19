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
exports.alias = {
	"checkbox_select_disabled_png": "D2Resource/assets/CheckBox/checkbox_select_disabled.png",
	"checkbox_select_down_png": "D2Resource/assets/CheckBox/checkbox_select_down.png",
	"checkbox_select_up_png": "D2Resource/assets/CheckBox/checkbox_select_up.png",
	"checkbox_unselect_png": "D2Resource/assets/CheckBox/checkbox_unselect.png",
	"selected_png": "D2Resource/assets/ItemRenderer/selected.png",
	"border_png": "D2Resource/assets/Panel/border.png",
	"header_png": "D2Resource/assets/Panel/header.png",
	"radiobutton_select_disabled_png": "D2Resource/assets/RadioButton/radiobutton_select_disabled.png",
	"radiobutton_select_down_png": "D2Resource/assets/RadioButton/radiobutton_select_down.png",
	"radiobutton_select_up_png": "D2Resource/assets/RadioButton/radiobutton_select_up.png",
	"radiobutton_unselect_png": "D2Resource/assets/RadioButton/radiobutton_unselect.png",
	"roundthumb_png": "D2Resource/assets/ScrollBar/roundthumb.png",
	"thumb_png": "D2Resource/assets/Slider/thumb.png",
	"track_png": "D2Resource/assets/Slider/track.png",
	"tracklight_png": "D2Resource/assets/Slider/tracklight.png",
	"handle_png": "D2Resource/assets/ToggleSwitch/handle.png",
	"off_png": "D2Resource/assets/ToggleSwitch/off.png",
	"on_png": "D2Resource/assets/ToggleSwitch/on.png",
	"button_down_png": "D2Resource/assets/Button/button_down.png",
	"button_up_png": "D2Resource/assets/Button/button_up.png",
	"thumb_pb_png": "D2Resource/assets/ProgressBar/thumb_pb.png",
	"track_pb_png": "D2Resource/assets/ProgressBar/track_pb.png",
	"track_sb_png": "D2Resource/assets/ScrollBar/track_sb.png"
};
exports.groups = {
	"preload": [
		"checkbox_select_disabled_png",
		"checkbox_select_down_png",
		"checkbox_select_up_png",
		"checkbox_unselect_png",
		"selected_png",
		"border_png",
		"header_png",
		"radiobutton_select_disabled_png",
		"radiobutton_select_down_png",
		"radiobutton_select_up_png",
		"radiobutton_unselect_png",
		"roundthumb_png",
		"thumb_png",
		"track_png",
		"tracklight_png",
		"handle_png",
		"off_png",
		"on_png",
		"button_down_png",
		"button_up_png",
		"thumb_pb_png",
		"track_pb_png",
		"track_sb_png"
	]
};
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
	"D2Resource": {
		"default.res.json": {
			"url": "D2Resource/default.res.json",
			"type": "json",
			"name": "D2Resource/default.res.json"
		},
		"default.thm.json": {
			"url": "D2Resource/default.thm.json",
			"type": "json",
			"name": "D2Resource/default.thm.json"
		},
		"logo.png": {
			"url": "D2Resource/logo.png",
			"type": "image",
			"name": "D2Resource/logo.png"
		},
		"assets": {
			"bg.jpg": {
				"url": "D2Resource/assets/bg.jpg",
				"type": "image",
				"name": "D2Resource/assets/bg.jpg"
			},
			"egret_icon.png": {
				"url": "D2Resource/assets/egret_icon.png",
				"type": "image",
				"name": "D2Resource/assets/egret_icon.png"
			},
			"Button": {
				"button_down.png": {
					"url": "D2Resource/assets/Button/button_down.png",
					"type": "image",
					"name": "D2Resource/assets/Button/button_down.png"
				},
				"button_up.png": {
					"url": "D2Resource/assets/Button/button_up.png",
					"type": "image",
					"name": "D2Resource/assets/Button/button_up.png"
				}
			},
			"CheckBox": {
				"checkbox_select_disabled.png": {
					"url": "D2Resource/assets/CheckBox/checkbox_select_disabled.png",
					"type": "image",
					"name": "D2Resource/assets/CheckBox/checkbox_select_disabled.png"
				},
				"checkbox_select_down.png": {
					"url": "D2Resource/assets/CheckBox/checkbox_select_down.png",
					"type": "image",
					"name": "D2Resource/assets/CheckBox/checkbox_select_down.png"
				},
				"checkbox_select_up.png": {
					"url": "D2Resource/assets/CheckBox/checkbox_select_up.png",
					"type": "image",
					"name": "D2Resource/assets/CheckBox/checkbox_select_up.png"
				},
				"checkbox_unselect.png": {
					"url": "D2Resource/assets/CheckBox/checkbox_unselect.png",
					"type": "image",
					"name": "D2Resource/assets/CheckBox/checkbox_unselect.png"
				}
			},
			"ItemRenderer": {
				"selected.png": {
					"url": "D2Resource/assets/ItemRenderer/selected.png",
					"type": "image",
					"name": "D2Resource/assets/ItemRenderer/selected.png"
				}
			},
			"Panel": {
				"border.png": {
					"url": "D2Resource/assets/Panel/border.png",
					"type": "image",
					"name": "D2Resource/assets/Panel/border.png"
				},
				"header.png": {
					"url": "D2Resource/assets/Panel/header.png",
					"type": "image",
					"name": "D2Resource/assets/Panel/header.png"
				}
			},
			"RadioButton": {
				"radiobutton_select_disabled.png": {
					"url": "D2Resource/assets/RadioButton/radiobutton_select_disabled.png",
					"type": "image",
					"name": "D2Resource/assets/RadioButton/radiobutton_select_disabled.png"
				},
				"radiobutton_select_down.png": {
					"url": "D2Resource/assets/RadioButton/radiobutton_select_down.png",
					"type": "image",
					"name": "D2Resource/assets/RadioButton/radiobutton_select_down.png"
				},
				"radiobutton_select_up.png": {
					"url": "D2Resource/assets/RadioButton/radiobutton_select_up.png",
					"type": "image",
					"name": "D2Resource/assets/RadioButton/radiobutton_select_up.png"
				},
				"radiobutton_unselect.png": {
					"url": "D2Resource/assets/RadioButton/radiobutton_unselect.png",
					"type": "image",
					"name": "D2Resource/assets/RadioButton/radiobutton_unselect.png"
				}
			},
			"ProgressBar": {
				"thumb_pb.png": {
					"url": "D2Resource/assets/ProgressBar/thumb_pb.png",
					"type": "image",
					"name": "D2Resource/assets/ProgressBar/thumb_pb.png"
				},
				"track_pb.png": {
					"url": "D2Resource/assets/ProgressBar/track_pb.png",
					"type": "image",
					"name": "D2Resource/assets/ProgressBar/track_pb.png"
				}
			},
			"ScrollBar": {
				"roundthumb.png": {
					"url": "D2Resource/assets/ScrollBar/roundthumb.png",
					"type": "image",
					"name": "D2Resource/assets/ScrollBar/roundthumb.png"
				},
				"track_sb.png": {
					"url": "D2Resource/assets/ScrollBar/track_sb.png",
					"type": "image",
					"name": "D2Resource/assets/ScrollBar/track_sb.png"
				}
			},
			"Slider": {
				"thumb.png": {
					"url": "D2Resource/assets/Slider/thumb.png",
					"type": "image",
					"name": "D2Resource/assets/Slider/thumb.png"
				},
				"track.png": {
					"url": "D2Resource/assets/Slider/track.png",
					"type": "image",
					"name": "D2Resource/assets/Slider/track.png"
				},
				"tracklight.png": {
					"url": "D2Resource/assets/Slider/tracklight.png",
					"type": "image",
					"name": "D2Resource/assets/Slider/tracklight.png"
				}
			},
			"ToggleSwitch": {
				"handle.png": {
					"url": "D2Resource/assets/ToggleSwitch/handle.png",
					"type": "image",
					"name": "D2Resource/assets/ToggleSwitch/handle.png"
				},
				"off.png": {
					"url": "D2Resource/assets/ToggleSwitch/off.png",
					"type": "image",
					"name": "D2Resource/assets/ToggleSwitch/off.png"
				},
				"on.png": {
					"url": "D2Resource/assets/ToggleSwitch/on.png",
					"type": "image",
					"name": "D2Resource/assets/ToggleSwitch/on.png"
				}
			}
		},
		"config": {
			"description.json": {
				"url": "D2Resource/config/description.json",
				"type": "json",
				"name": "D2Resource/config/description.json"
			}
		}
	},
	"fonts": {
		"STXINGKA.TTF.png": {
			"url": "fonts/STXINGKA.TTF.png",
			"type": "Texture",
			"name": "fonts/STXINGKA.TTF.png"
		},
		"STXINGKA.font.json": {
			"url": "fonts/STXINGKA.font.json",
			"type": "Font",
			"name": "fonts/STXINGKA.font.json"
		}
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
	},
	"sounds": {
		"358232_j_s_song.mp3": {
			"url": "sounds/358232_j_s_song.mp3",
			"type": "Sound",
			"name": "sounds/358232_j_s_song.mp3"
		},
		"358232_j_s_song.ogg": {
			"url": "sounds/358232_j_s_song.ogg",
			"type": "Sound",
			"name": "sounds/358232_j_s_song.ogg"
		},
		"376737_Skullbeatz___Bad_Cat_Maste.mp3": {
			"url": "sounds/376737_Skullbeatz___Bad_Cat_Maste.mp3",
			"type": "Sound",
			"name": "sounds/376737_Skullbeatz___Bad_Cat_Maste.mp3"
		},
		"376737_Skullbeatz___Bad_Cat_Maste.ogg": {
			"url": "sounds/376737_Skullbeatz___Bad_Cat_Maste.ogg",
			"type": "Sound",
			"name": "sounds/376737_Skullbeatz___Bad_Cat_Maste.ogg"
		},
		"Project_Utopia.ogg": {
			"url": "sounds/Project_Utopia.ogg",
			"type": "Sound",
			"name": "sounds/Project_Utopia.ogg"
		},
		"readme.txt": {
			"url": "sounds/readme.txt",
			"type": "TextAsset",
			"name": "sounds/readme.txt"
		}
	},
	"textures": {
		"1.atlas.json": {
			"url": "textures/1.atlas.json",
			"type": "Atlas",
			"name": "textures/1.atlas.json"
		},
		"1.png": {
			"url": "textures/1.png",
			"type": "Texture",
			"name": "textures/1.png"
		},
		"rock256.png": {
			"url": "textures/rock256.png",
			"type": "Texture",
			"name": "textures/rock256.png"
		},
		"rock_n256.png": {
			"url": "textures/rock_n256.png",
			"type": "Texture",
			"name": "textures/rock_n256.png"
		},
		"trailtest2.png": {
			"url": "textures/trailtest2.png",
			"type": "Texture",
			"name": "textures/trailtest2.png"
		},
		"uisprite.png": {
			"url": "textures/uisprite.png",
			"type": "Texture",
			"name": "textures/uisprite.png"
		},
		"uvSprite.png": {
			"url": "textures/uvSprite.png",
			"type": "Texture",
			"name": "textures/uvSprite.png"
		}
	},
	"effects": {
		"fx_ss_female@attack_04-": {
			"fx_ss_female@attack_04-.assetbundle.json": {
				"url": "effects/fx_ss_female@attack_04-/fx_ss_female@attack_04-.assetbundle.json",
				"type": "Bundle",
				"name": "effects/fx_ss_female@attack_04-/fx_ss_female@attack_04-.assetbundle.json"
			},
			"fx_ss_female@attack_04-.effect.json": {
				"url": "effects/fx_ss_female@attack_04-/fx_ss_female@attack_04-.effect.json",
				"type": "TextAsset",
				"name": "effects/fx_ss_female@attack_04-/fx_ss_female@attack_04-.effect.json"
			},
			"resources": {
				"E_noise_uv02.png": {
					"url": "effects/fx_ss_female@attack_04-/resources/E_noise_uv02.png",
					"type": "Texture",
					"name": "effects/fx_ss_female@attack_04-/resources/E_noise_uv02.png"
				},
				"GJ1.png": {
					"url": "effects/fx_ss_female@attack_04-/resources/GJ1.png",
					"type": "Texture",
					"name": "effects/fx_ss_female@attack_04-/resources/GJ1.png"
				},
				"gj.mesh.bin": {
					"url": "effects/fx_ss_female@attack_04-/resources/gj.mesh.bin",
					"type": "Mesh",
					"name": "effects/fx_ss_female@attack_04-/resources/gj.mesh.bin"
				},
				"qilang.mesh.bin": {
					"url": "effects/fx_ss_female@attack_04-/resources/qilang.mesh.bin",
					"type": "Mesh",
					"name": "effects/fx_ss_female@attack_04-/resources/qilang.mesh.bin"
				}
			}
		}
	},
	"prefabs": {
		"Magic_Pillar3": {
			"Magic_Pillar3.assetbundle.json": {
				"url": "prefabs/Magic_Pillar3/Magic_Pillar3.assetbundle.json",
				"type": "Bundle",
				"name": "prefabs/Magic_Pillar3/Magic_Pillar3.assetbundle.json"
			},
			"resources": {
				"Magic_Pillar3.fbx_polySurface1776.mesh.bin": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillar3.fbx_polySurface1776.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillar3.fbx_polySurface1776.mesh.bin"
				},
				"Magic_Pillar3.prefab.json": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillar3.prefab.json",
					"type": "Prefab",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillar3.prefab.json"
				},
				"Magic_Pillars.imgdesc.json": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillars.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillars.imgdesc.json"
				},
				"Magic_Pillars.jpg": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillars.jpg",
					"type": "Texture",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillars.jpg"
				},
				"Magic_Pillars.mat.json": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillars.mat.json",
					"type": "Material",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillars.mat.json"
				},
				"Magic_Pillars_1.mat.json": {
					"url": "prefabs/Magic_Pillar3/resources/Magic_Pillars_1.mat.json",
					"type": "Material",
					"name": "prefabs/Magic_Pillar3/resources/Magic_Pillars_1.mat.json"
				}
			}
		},
		"baihu": {
			"baihu.assetbundle.json": {
				"url": "prefabs/baihu/baihu.assetbundle.json",
				"type": "Bundle",
				"name": "prefabs/baihu/baihu.assetbundle.json"
			},
			"resources": {
				"_baihu_0.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_0.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_0.mesh.bin"
				},
				"_baihu_1.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_1.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_1.mesh.bin"
				},
				"_baihu_2.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_2.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_2.mesh.bin"
				},
				"_baihu_3.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_3.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_3.mesh.bin"
				},
				"_baihu_4.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_4.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_4.mesh.bin"
				},
				"_baihu_5.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_5.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_5.mesh.bin"
				},
				"_baihu_6.mesh.bin": {
					"url": "prefabs/baihu/resources/_baihu_6.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/baihu/resources/_baihu_6.mesh.bin"
				},
				"baihu.imgdesc.json": {
					"url": "prefabs/baihu/resources/baihu.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/baihu/resources/baihu.imgdesc.json"
				},
				"baihu.mat.json": {
					"url": "prefabs/baihu/resources/baihu.mat.json",
					"type": "Material",
					"name": "prefabs/baihu/resources/baihu.mat.json"
				},
				"baihu.png": {
					"url": "prefabs/baihu/resources/baihu.png",
					"type": "Texture",
					"name": "prefabs/baihu/resources/baihu.png"
				},
				"baihu.prefab.json": {
					"url": "prefabs/baihu/resources/baihu.prefab.json",
					"type": "Prefab",
					"name": "prefabs/baihu/resources/baihu.prefab.json"
				},
				"baihuan.imgdesc.json": {
					"url": "prefabs/baihu/resources/baihuan.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/baihu/resources/baihuan.imgdesc.json"
				},
				"baihuan.mat.json": {
					"url": "prefabs/baihu/resources/baihuan.mat.json",
					"type": "Material",
					"name": "prefabs/baihu/resources/baihuan.mat.json"
				},
				"baihuan.png": {
					"url": "prefabs/baihu/resources/baihuan.png",
					"type": "Texture",
					"name": "prefabs/baihu/resources/baihuan.png"
				},
				"baihumao.imgdesc.json": {
					"url": "prefabs/baihu/resources/baihumao.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/baihu/resources/baihumao.imgdesc.json"
				},
				"baihumao.mat.json": {
					"url": "prefabs/baihu/resources/baihumao.mat.json",
					"type": "Material",
					"name": "prefabs/baihu/resources/baihumao.mat.json"
				},
				"baihumao.png": {
					"url": "prefabs/baihu/resources/baihumao.png",
					"type": "Texture",
					"name": "prefabs/baihu/resources/baihumao.png"
				},
				"baihuya.imgdesc.json": {
					"url": "prefabs/baihu/resources/baihuya.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/baihu/resources/baihuya.imgdesc.json"
				},
				"baihuya.mat.json": {
					"url": "prefabs/baihu/resources/baihuya.mat.json",
					"type": "Material",
					"name": "prefabs/baihu/resources/baihuya.mat.json"
				},
				"baihuya.png": {
					"url": "prefabs/baihu/resources/baihuya.png",
					"type": "Texture",
					"name": "prefabs/baihu/resources/baihuya.png"
				}
			}
		},
		"elong": {
			"elong.assetbundle.json": {
				"url": "prefabs/elong/elong.assetbundle.json",
				"type": "Bundle",
				"name": "prefabs/elong/elong.assetbundle.json"
			},
			"resources": {
				"1525_firedragon02_d.imgdesc.json": {
					"url": "prefabs/elong/resources/1525_firedragon02_d.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/elong/resources/1525_firedragon02_d.imgdesc.json"
				},
				"1525_firedragon02_d.mat.json": {
					"url": "prefabs/elong/resources/1525_firedragon02_d.mat.json",
					"type": "Material",
					"name": "prefabs/elong/resources/1525_firedragon02_d.mat.json"
				},
				"1525_firedragon02_d.png": {
					"url": "prefabs/elong/resources/1525_firedragon02_d.png",
					"type": "Texture",
					"name": "prefabs/elong/resources/1525_firedragon02_d.png"
				},
				"Ready.FBAni.aniclip.bin": {
					"url": "prefabs/elong/resources/Ready.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/elong/resources/Ready.FBAni.aniclip.bin"
				},
				"Run.FBAni.aniclip.bin": {
					"url": "prefabs/elong/resources/Run.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/elong/resources/Run.FBAni.aniclip.bin"
				},
				"elong.prefab.json": {
					"url": "prefabs/elong/resources/elong.prefab.json",
					"type": "Prefab",
					"name": "prefabs/elong/resources/elong.prefab.json"
				},
				"res_elong_elong.FBX_Boss_Blackdragon.mesh.bin": {
					"url": "prefabs/elong/resources/res_elong_elong.FBX_Boss_Blackdragon.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong/resources/res_elong_elong.FBX_Boss_Blackdragon.mesh.bin"
				}
			}
		},
		"elong_old": {
			"elong.assetbundle.json": {
				"url": "prefabs/elong_old/elong.assetbundle.json",
				"type": "Bundle",
				"name": "prefabs/elong_old/elong.assetbundle.json"
			},
			"resources": {
				"1525_firedragon02_d.imgdesc.json": {
					"url": "prefabs/elong_old/resources/1525_firedragon02_d.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/elong_old/resources/1525_firedragon02_d.imgdesc.json"
				},
				"1525_firedragon02_d.mat.json": {
					"url": "prefabs/elong_old/resources/1525_firedragon02_d.mat.json",
					"type": "Material",
					"name": "prefabs/elong_old/resources/1525_firedragon02_d.mat.json"
				},
				"1525_firedragon02_d.png": {
					"url": "prefabs/elong_old/resources/1525_firedragon02_d.png",
					"type": "Texture",
					"name": "prefabs/elong_old/resources/1525_firedragon02_d.png"
				},
				"Ready.FBAni.aniclip.bin": {
					"url": "prefabs/elong_old/resources/Ready.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/elong_old/resources/Ready.FBAni.aniclip.bin"
				},
				"Run.FBAni.aniclip.bin": {
					"url": "prefabs/elong_old/resources/Run.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/elong_old/resources/Run.FBAni.aniclip.bin"
				},
				"_Boss_Blackdragon_0.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_0.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_0.mesh.bin"
				},
				"_Boss_Blackdragon_1.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_1.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_1.mesh.bin"
				},
				"_Boss_Blackdragon_2.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_2.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_2.mesh.bin"
				},
				"_Boss_Blackdragon_3.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_3.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_3.mesh.bin"
				},
				"_Boss_Blackdragon_4.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_4.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_4.mesh.bin"
				},
				"_Boss_Blackdragon_5.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_5.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_5.mesh.bin"
				},
				"_Boss_Blackdragon_6.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_6.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_6.mesh.bin"
				},
				"_Boss_Blackdragon_7.mesh.bin": {
					"url": "prefabs/elong_old/resources/_Boss_Blackdragon_7.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/elong_old/resources/_Boss_Blackdragon_7.mesh.bin"
				},
				"elong.prefab.json": {
					"url": "prefabs/elong_old/resources/elong.prefab.json",
					"type": "Prefab",
					"name": "prefabs/elong_old/resources/elong.prefab.json"
				}
			}
		},
		"simple": {
			"simple.assetbundle.json": {
				"url": "prefabs/simple/simple.assetbundle.json",
				"type": "Bundle",
				"name": "prefabs/simple/simple.assetbundle.json"
			},
			"resources": {
				"1443561359549886.imgdesc.json": {
					"url": "prefabs/simple/resources/1443561359549886.imgdesc.json",
					"type": "TextureDesc",
					"name": "prefabs/simple/resources/1443561359549886.imgdesc.json"
				},
				"1443561359549886.jpeg": {
					"url": "prefabs/simple/resources/1443561359549886.jpeg",
					"type": "Unknown",
					"name": "prefabs/simple/resources/1443561359549886.jpeg"
				},
				"ArmatureAction.FBAni.aniclip.bin": {
					"url": "prefabs/simple/resources/ArmatureAction.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/simple/resources/ArmatureAction.FBAni.aniclip.bin"
				},
				"DefaultTake.FBAni.aniclip.bin": {
					"url": "prefabs/simple/resources/DefaultTake.FBAni.aniclip.bin",
					"type": "Aniclip",
					"name": "prefabs/simple/resources/DefaultTake.FBAni.aniclip.bin"
				},
				"Material.mat.json": {
					"url": "prefabs/simple/resources/Material.mat.json",
					"type": "Material",
					"name": "prefabs/simple/resources/Material.mat.json"
				},
				"res_simple_simple.blend_Cube.mesh.bin": {
					"url": "prefabs/simple/resources/res_simple_simple.blend_Cube.mesh.bin",
					"type": "Mesh",
					"name": "prefabs/simple/resources/res_simple_simple.blend_Cube.mesh.bin"
				},
				"simple.prefab.json": {
					"url": "prefabs/simple/resources/simple.prefab.json",
					"type": "Prefab",
					"name": "prefabs/simple/resources/simple.prefab.json"
				}
			}
		},
		"static": {
			"baihu": {
				"baihu.assetbundle.json": {
					"url": "prefabs/static/baihu/baihu.assetbundle.json",
					"type": "Bundle",
					"name": "prefabs/static/baihu/baihu.assetbundle.json"
				},
				"resources": {
					"baihu.imgdesc.json": {
						"url": "prefabs/static/baihu/resources/baihu.imgdesc.json",
						"type": "TextureDesc",
						"name": "prefabs/static/baihu/resources/baihu.imgdesc.json"
					},
					"baihu.mat.json": {
						"url": "prefabs/static/baihu/resources/baihu.mat.json",
						"type": "Material",
						"name": "prefabs/static/baihu/resources/baihu.mat.json"
					},
					"baihu.png": {
						"url": "prefabs/static/baihu/resources/baihu.png",
						"type": "Texture",
						"name": "prefabs/static/baihu/resources/baihu.png"
					},
					"baihu.prefab.json": {
						"url": "prefabs/static/baihu/resources/baihu.prefab.json",
						"type": "Prefab",
						"name": "prefabs/static/baihu/resources/baihu.prefab.json"
					},
					"baihuan.imgdesc.json": {
						"url": "prefabs/static/baihu/resources/baihuan.imgdesc.json",
						"type": "TextureDesc",
						"name": "prefabs/static/baihu/resources/baihuan.imgdesc.json"
					},
					"baihuan.mat.json": {
						"url": "prefabs/static/baihu/resources/baihuan.mat.json",
						"type": "Material",
						"name": "prefabs/static/baihu/resources/baihuan.mat.json"
					},
					"baihuan.png": {
						"url": "prefabs/static/baihu/resources/baihuan.png",
						"type": "Texture",
						"name": "prefabs/static/baihu/resources/baihuan.png"
					},
					"baihumao.imgdesc.json": {
						"url": "prefabs/static/baihu/resources/baihumao.imgdesc.json",
						"type": "TextureDesc",
						"name": "prefabs/static/baihu/resources/baihumao.imgdesc.json"
					},
					"baihumao.mat.json": {
						"url": "prefabs/static/baihu/resources/baihumao.mat.json",
						"type": "Material",
						"name": "prefabs/static/baihu/resources/baihumao.mat.json"
					},
					"baihumao.png": {
						"url": "prefabs/static/baihu/resources/baihumao.png",
						"type": "Texture",
						"name": "prefabs/static/baihu/resources/baihumao.png"
					},
					"baihuya.imgdesc.json": {
						"url": "prefabs/static/baihu/resources/baihuya.imgdesc.json",
						"type": "TextureDesc",
						"name": "prefabs/static/baihu/resources/baihuya.imgdesc.json"
					},
					"baihuya.mat.json": {
						"url": "prefabs/static/baihu/resources/baihuya.mat.json",
						"type": "Material",
						"name": "prefabs/static/baihu/resources/baihuya.mat.json"
					},
					"baihuya.png": {
						"url": "prefabs/static/baihu/resources/baihuya.png",
						"type": "Texture",
						"name": "prefabs/static/baihu/resources/baihuya.png"
					},
					"res_baihu_baihu.FBX_baihu.mesh.bin": {
						"url": "prefabs/static/baihu/resources/res_baihu_baihu.FBX_baihu.mesh.bin",
						"type": "Mesh",
						"name": "prefabs/static/baihu/resources/res_baihu_baihu.FBX_baihu.mesh.bin"
					}
				}
			},
			"elong": {
				"elong.assetbundle.json": {
					"url": "prefabs/static/elong/elong.assetbundle.json",
					"type": "Bundle",
					"name": "prefabs/static/elong/elong.assetbundle.json"
				},
				"resources": {
					"1525_firedragon02_d.imgdesc.json": {
						"url": "prefabs/static/elong/resources/1525_firedragon02_d.imgdesc.json",
						"type": "TextureDesc",
						"name": "prefabs/static/elong/resources/1525_firedragon02_d.imgdesc.json"
					},
					"1525_firedragon02_d.mat.json": {
						"url": "prefabs/static/elong/resources/1525_firedragon02_d.mat.json",
						"type": "Material",
						"name": "prefabs/static/elong/resources/1525_firedragon02_d.mat.json"
					},
					"1525_firedragon02_d.png": {
						"url": "prefabs/static/elong/resources/1525_firedragon02_d.png",
						"type": "Texture",
						"name": "prefabs/static/elong/resources/1525_firedragon02_d.png"
					},
					"elong.prefab.json": {
						"url": "prefabs/static/elong/resources/elong.prefab.json",
						"type": "Prefab",
						"name": "prefabs/static/elong/resources/elong.prefab.json"
					},
					"res_elong_elong.FBX_Boss_Blackdragon.mesh.bin": {
						"url": "prefabs/static/elong/resources/res_elong_elong.FBX_Boss_Blackdragon.mesh.bin",
						"type": "Mesh",
						"name": "prefabs/static/elong/resources/res_elong_elong.FBX_Boss_Blackdragon.mesh.bin"
					}
				}
			}
		}
	},
	"scenes": {
		"demo1": {
			"demo1.assetbundle.json": {
				"url": "scenes/demo1/demo1.assetbundle.json",
				"type": "Bundle",
				"name": "scenes/demo1/demo1.assetbundle.json"
			},
			"resources": {
				"1443561359549886.imgdesc.json": {
					"url": "scenes/demo1/resources/1443561359549886.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/demo1/resources/1443561359549886.imgdesc.json"
				},
				"1443561359549886.jpeg": {
					"url": "scenes/demo1/resources/1443561359549886.jpeg",
					"type": "Unknown",
					"name": "scenes/demo1/resources/1443561359549886.jpeg"
				},
				"1443561359549886.mat.json": {
					"url": "scenes/demo1/resources/1443561359549886.mat.json",
					"type": "Material",
					"name": "scenes/demo1/resources/1443561359549886.mat.json"
				},
				"Library_unity_default_resources_Cube.mesh.bin": {
					"url": "scenes/demo1/resources/Library_unity_default_resources_Cube.mesh.bin",
					"type": "Mesh",
					"name": "scenes/demo1/resources/Library_unity_default_resources_Cube.mesh.bin"
				},
				"Library_unity_default_resources_Plane.mesh.bin": {
					"url": "scenes/demo1/resources/Library_unity_default_resources_Plane.mesh.bin",
					"type": "Mesh",
					"name": "scenes/demo1/resources/Library_unity_default_resources_Plane.mesh.bin"
				},
				"LightmapFar-0.imgdesc.json": {
					"url": "scenes/demo1/resources/LightmapFar-0.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/demo1/resources/LightmapFar-0.imgdesc.json"
				},
				"LightmapFar-0.png": {
					"url": "scenes/demo1/resources/LightmapFar-0.png",
					"type": "Texture",
					"name": "scenes/demo1/resources/LightmapFar-0.png"
				},
				"_LightmapFar-0.png": {
					"url": "scenes/demo1/resources/_LightmapFar-0.png",
					"type": "Texture",
					"name": "scenes/demo1/resources/_LightmapFar-0.png"
				},
				"____LightmapFar-0.png": {
					"url": "scenes/demo1/resources/____LightmapFar-0.png",
					"type": "Texture",
					"name": "scenes/demo1/resources/____LightmapFar-0.png"
				},
				"demo1.scene.json": {
					"url": "scenes/demo1/resources/demo1.scene.json",
					"type": "Scene",
					"name": "scenes/demo1/resources/demo1.scene.json"
				}
			}
		},
		"manhuang_senlin": {
			"manhuang_senlin.assetbundle.json": {
				"url": "scenes/manhuang_senlin/manhuang_senlin.assetbundle.json",
				"type": "Bundle",
				"name": "scenes/manhuang_senlin/manhuang_senlin.assetbundle.json"
			},
			"resources": {
				"Tree_bark.imgdesc.json": {
					"url": "scenes/manhuang_senlin/resources/Tree_bark.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/manhuang_senlin/resources/Tree_bark.imgdesc.json"
				},
				"Tree_bark.mat.json": {
					"url": "scenes/manhuang_senlin/resources/Tree_bark.mat.json",
					"type": "Material",
					"name": "scenes/manhuang_senlin/resources/Tree_bark.mat.json"
				},
				"Tree_bark.png": {
					"url": "scenes/manhuang_senlin/resources/Tree_bark.png",
					"type": "Texture",
					"name": "scenes/manhuang_senlin/resources/Tree_bark.png"
				},
				"Tree_leaves.imgdesc.json": {
					"url": "scenes/manhuang_senlin/resources/Tree_leaves.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/manhuang_senlin/resources/Tree_leaves.imgdesc.json"
				},
				"Tree_leaves.mat.json": {
					"url": "scenes/manhuang_senlin/resources/Tree_leaves.mat.json",
					"type": "Material",
					"name": "scenes/manhuang_senlin/resources/Tree_leaves.mat.json"
				},
				"Tree_leaves.png": {
					"url": "scenes/manhuang_senlin/resources/Tree_leaves.png",
					"type": "Texture",
					"name": "scenes/manhuang_senlin/resources/Tree_leaves.png"
				},
				"diwu_Prefabs_props_Models_Plant_03.fbx_polySurface400.mesh.bin": {
					"url": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Plant_03.fbx_polySurface400.mesh.bin",
					"type": "Mesh",
					"name": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Plant_03.fbx_polySurface400.mesh.bin"
				},
				"diwu_Prefabs_props_Models_Plant_05.fbx_polySurface418.mesh.bin": {
					"url": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Plant_05.fbx_polySurface418.mesh.bin",
					"type": "Mesh",
					"name": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Plant_05.fbx_polySurface418.mesh.bin"
				},
				"diwu_Prefabs_props_Models_Tree_Pine_1.fbx_polySurface212.mesh.bin": {
					"url": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Tree_Pine_1.fbx_polySurface212.mesh.bin",
					"type": "Mesh",
					"name": "scenes/manhuang_senlin/resources/diwu_Prefabs_props_Models_Tree_Pine_1.fbx_polySurface212.mesh.bin"
				},
				"manhuang_senlin.scene.json": {
					"url": "scenes/manhuang_senlin/resources/manhuang_senlin.scene.json",
					"type": "Scene",
					"name": "scenes/manhuang_senlin/resources/manhuang_senlin.scene.json"
				}
			}
		},
		"test": {
			"test.assetbundle.json": {
				"url": "scenes/test/test.assetbundle.json",
				"type": "Bundle",
				"name": "scenes/test/test.assetbundle.json"
			},
			"resources": {
				"Library_unity_default_resources_Cube.mesh.bin": {
					"url": "scenes/test/resources/Library_unity_default_resources_Cube.mesh.bin",
					"type": "Mesh",
					"name": "scenes/test/resources/Library_unity_default_resources_Cube.mesh.bin"
				},
				"Library_unity_default_resources_Plane.mesh.bin": {
					"url": "scenes/test/resources/Library_unity_default_resources_Plane.mesh.bin",
					"type": "Mesh",
					"name": "scenes/test/resources/Library_unity_default_resources_Plane.mesh.bin"
				},
				"Library_unity_default_resources_Sphere.mesh.bin": {
					"url": "scenes/test/resources/Library_unity_default_resources_Sphere.mesh.bin",
					"type": "Mesh",
					"name": "scenes/test/resources/Library_unity_default_resources_Sphere.mesh.bin"
				},
				"LightmapFar-0.imgdesc.json": {
					"url": "scenes/test/resources/LightmapFar-0.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/test/resources/LightmapFar-0.imgdesc.json"
				},
				"LightmapFar-0.png": {
					"url": "scenes/test/resources/LightmapFar-0.png",
					"type": "Texture",
					"name": "scenes/test/resources/LightmapFar-0.png"
				},
				"aaaa.mat.json": {
					"url": "scenes/test/resources/aaaa.mat.json",
					"type": "Material",
					"name": "scenes/test/resources/aaaa.mat.json"
				},
				"rock256.imgdesc.json": {
					"url": "scenes/test/resources/rock256.imgdesc.json",
					"type": "TextureDesc",
					"name": "scenes/test/resources/rock256.imgdesc.json"
				},
				"rock256.png": {
					"url": "scenes/test/resources/rock256.png",
					"type": "Texture",
					"name": "scenes/test/resources/rock256.png"
				},
				"test.scene.json": {
					"url": "scenes/test/resources/test.scene.json",
					"type": "Scene",
					"name": "scenes/test/resources/test.scene.json"
				}
			}
		}
	}
};
