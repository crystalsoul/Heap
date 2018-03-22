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
                        this.create3DScene();
                        return [2 /*return*/];
                }
            });
        });
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
        //cube.setLocalEulerAngles(45, 45, 0);
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
    Main.prototype.onUpdate = function (delta) {
        // this.timer += delta;
        // let _sin = Math.sin(this.timer * 0.5);
        // let _cos = -Math.cos(this.timer * 0.5);
        // if (this.camera) {
        //     let renderer = this.renderer2;
        //     this.cube.setLocalEulerAngles(_sin * 45, _cos * 45, 0);
        //     this.camera.calcScreenPosFromWorldPos(this.app, this.cube.getPosition(), this.screenPos);
        //     renderer.screenPosToUIPos(this.screenPos, this.screenPos);
        // }
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
//# sourceMappingURL=Main.js.map