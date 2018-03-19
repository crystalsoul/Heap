var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param compFunc 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param errorFunc 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, compFunc, errorFunc, thisObject) {
        function onGetRes(e) {
            compFunc.call(thisObject, e);
        }
        function onError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
                errorFunc.call(thisObject);
            }
        }
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
        RES.getResByUrl(url, onGetRes, this, RES.ResourceItem.TYPE_TEXT);
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        var data = RES.getRes(source);
        if (data) {
            onGetRes(data);
        }
        else {
            RES.getResAsync(source, onGetRes, this);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Main = (function () {
    function Main() {
        this.timer = 0;
        this.screenPos = new egret3d.math.Vector2();
    }
    Main.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.app = app;
                        app.aspectRatio = 640 / 1136;
                        app.pixelRatio = window.devicePixelRatio || 1;
                        this.scene = this.app.getScene();
                        RES.setConfigURL("resource/config.res.js");
                        return [4 /*yield*/, RES.loadConfig()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync("logo.png")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync("D2Resource/assets/egret_icon.png")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync("D2Resource/assets/bg.jpg")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload")];
                    case 5:
                        _a.sent();
                        this.createBgUI();
                        this.create3DScene();
                        this.createMaskUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.createBgUI = function () {
        //添加一个摄像机
        var objCam = new egret3d.framework.Transform();
        objCam.name = "mainCamera";
        this.scene.addChild(objCam);
        var camera = objCam.gameObject.addComponent("Camera");
        camera.CullingMask = egret3d.framework.CullingMask.UserLayer1;
        camera.order = 0;
        camera.backgroundColor = new egret3d.math.Color(0.0, 0.0, 0.0, 1.0);
        var transform = new egret3d.framework.Transform();
        transform.name = "TransformForEgret2D";
        var renderer = transform.gameObject.addComponent("Egret2DRenderer");
        renderer.renderLayer = egret3d.framework.CullingMask.UserLayer1;
        var adapter = new egret3d.framework.MatchWidthOrHeightAdapter();
        renderer.screenAdapter = adapter;
        this.renderer1 = renderer;
        this.scene.addChild(transform);
        var bg = this.createBitmapByName("D2Resource/assets/bg.jpg");
        bg.width = 640;
        bg.height = 1136;
        renderer.root.addChild(bg);
    };
    Main.prototype.create3DScene = function () {
        //添加一个摄像机
        var objCam = new egret3d.framework.Transform();
        objCam.name = "mainCamera";
        this.scene.addChild(objCam);
        this.camera = objCam.gameObject.addComponent("Camera");
        this.camera.CullingMask = egret3d.framework.CullingMask.UserLayer2;
        this.camera.near = 0.01;
        this.camera.far = 100;
        this.camera.order = 1;
        this.camera.backgroundColor = new egret3d.math.Color(0.0, 0.0, 0.0, 1.0);
        this.camera.clearOption_Color = false; // 渲染前不清除颜色缓冲，保证上一个相机的绘制结果不会被清除
        this.camera.clearOption_Depth = true; // 清除深度缓冲，避免深度缓冲冲突
        // objCam.localTranslate = new egret3d.math.Vector3(0, 2.25, 5);
        objCam.setLocalPosition(0, 2.25, 5);
        objCam.lookAt(new egret3d.math.Vector3());
        // 显示内置cube
        var cube = this.cube = new egret3d.framework.Transform(); //创建一个transform
        cube.name = "cube"; //设定名字（可以不设定）
        var mesh = cube.gameObject.addComponent(egret3d.framework.StringUtil.COMPONENT_MESHFILTER); // 为其添加一个meshFilter组件
        var smesh = egret3d.framework.DefaultMeshes.Cube; //获取引擎内置的cube模型
        mesh.mesh = smesh; //赋值给meshFilter组件
        var _renderer = cube.gameObject.addComponent(egret3d.framework.StringUtil.COMPONENT_MESHRENDER); // 添加meshRender组件，用来渲染盒子
        cube.gameObject.addComponent("BoxCollider");
        // cube.localEulerAngles = new egret3d.math.Vector3(45, 45, 0); //给盒子一定的旋转角度
        cube.setLocalEulerAngles(45, 45, 0);
        // cube.markDirty(); //标记dirty，这样引擎就会去去更新一次这个cube
        this.scene.addChild(cube); // 将盒子添加到场景中去
        // 挂载材质贴图
        var texture = RES.getRes("logo.png");
        var mat = new egret3d.framework.Material();
        mat.setShader(egret3d.framework.DefaultShaders.Diffuse);
        mat.setTexture("_MainTex", texture);
        _renderer.materials = [];
        _renderer.materials[0] = mat;
        _renderer.renderLayer = egret3d.framework.CullingMask.UserLayer2;
    };
    Main.prototype.createMaskUI = function () {
        var _this = this;
        var transform = new egret3d.framework.Transform();
        transform.name = "TransformForEgret2D";
        var renderer = transform.gameObject.addComponent("Egret2DRenderer");
        renderer.renderLayer = egret3d.framework.CullingMask.UserLayer2;
        var adapter = new egret3d.framework.MatchWidthOrHeightAdapter();
        adapter.matchFactor = 0;
        renderer.screenAdapter = adapter;
        this.renderer2 = renderer;
        this.scene.addChild(transform);
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, 640, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        renderer.root.addChild(topMask);
        var icon = this.createBitmapByName("D2Resource/assets/egret_icon.png");
        renderer.root.addChild(icon);
        icon.x = 26;
        icon.y = 33;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        renderer.root.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = 640 - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret & Egret3D";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        renderer.root.addChild(colorLabel);
        var textfield = new egret.TextField();
        renderer.root.addChild(textfield);
        textfield.alpha = 1;
        textfield.width = 640 - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        this.startAnimation();
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000, 0.5);
        mask.graphics.drawRect(0, 0, 100, 100);
        mask.graphics.endFill();
        renderer.root.addChild(mask);
        mask.touchEnabled = true;
        this.mask = mask;
        mask.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            _this.showPannel("mask Click!");
        }, this);
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        var theme = new eui.Theme("resource/D2Resource/default.thm.json", renderer.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    };
    Main.prototype.onThemeLoadComplete = function () {
        var renderer = this.renderer2;
        this.uiLayer = new eui.UILayer();
        this.uiLayer.touchEnabled = false;
        renderer.root.addChild(this.uiLayer);
        var button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.uiLayer.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    Main.prototype.onButtonClick = function (e) {
        this.showPannel("Button Click!");
    };
    Main.prototype.showPannel = function (title) {
        var renderer = this.renderer2;
        var panel = new eui.Panel();
        panel.title = title;
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.uiLayer.addChild(panel);
    };
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.startAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, parser, textflowArr, textfield, count, change;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.getResAsync("D2Resource/config/description.json")];
                    case 1:
                        result = _a.sent();
                        parser = new egret.HtmlTextParser();
                        textflowArr = result.map(function (text) { return parser.parse(text); });
                        textfield = this.textfield;
                        count = -1;
                        change = function () {
                            count++;
                            if (count >= textflowArr.length) {
                                count = 0;
                            }
                            var textFlow = textflowArr[count];
                            // 切换描述内容
                            // Switch to described content
                            textfield.textFlow = textFlow;
                            var tw = egret.Tween.get(textfield);
                            tw.to({ "alpha": 1 }, 200);
                            tw.wait(2000);
                            tw.to({ "alpha": 0 }, 200);
                            tw.call(change, _this);
                        };
                        change();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onUpdate = function (delta) {
        this.timer += delta;
        var _sin = Math.sin(this.timer * 0.5);
        var _cos = -Math.cos(this.timer * 0.5);
        if (this.camera) {
            var renderer = this.renderer2;
            this.cube.setLocalEulerAngles(_sin * 45, _cos * 45, 0);
            this.camera.calcScreenPosFromWorldPos(this.app, this.cube.getPosition(), this.screenPos);
            renderer.screenPosToUIPos(this.screenPos, this.screenPos);
            // console.log(this.screenPos.x, this.screenPos.y);
            // mask 跟随
            this.mask.x = this.screenPos.x;
            this.mask.y = this.screenPos.y;
            if (this.app.inputManager.wasReleased()) {
                var touch = this.app.inputManager.getTouchPoint();
                if (!renderer.checkEventThrough(touch.x, touch.y)) {
                    var ray = this.camera.creatRayByScreen(touch, this.app);
                    var pickInfo = this.scene.pick(ray);
                    if (pickInfo && pickInfo.pickedtran == this.cube) {
                        this.showPannel("Cube Click!");
                    }
                }
            }
        }
    };
    Main.prototype.isClosed = function () {
        return false;
    };
    Main = __decorate([
        egret3d.reflect.userCode
    ], Main);
    return Main;
}());
__reflect(Main.prototype, "Main", ["egret3d.framework.IUserCode"]);
var egret_native = {};
var egret;
(function (egret) {
    egret.RuntimeType = {};
})(egret || (egret = {}));
var app = new egret3d.framework.Application();
var div = document.getElementsByClassName("egret-player")[0];
app.start(div);
app.showFps();
app.bePlay = true;
app.addUserCode("Main");
