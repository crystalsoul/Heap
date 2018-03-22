class ThemeAdapter implements eui.IThemeAdapter {

    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param compFunc 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param errorFunc 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    public getTheme(url: string, compFunc: Function, errorFunc: Function, thisObject: any): void {
        function onGetRes(e: string): void {
            compFunc.call(thisObject, e);
        }
        function onError(e: RES.ResourceEvent): void {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
                errorFunc.call(thisObject);
            }
        }
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onError, null);
        RES.getResByUrl(url, onGetRes, this, RES.ResourceItem.TYPE_TEXT);
    }
}

class AssetAdapter implements eui.IAssetAdapter {
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    public getAsset(source: string, compFunc: Function, thisObject: any): void {
        function onGetRes(data: any): void {
            compFunc.call(thisObject, data, source);
        }
        let data = RES.getRes(source);
        if (data) {
            onGetRes(data);
        }
        else {
            RES.getResAsync(source, onGetRes, this);
        }
    }
}

@egret3d.reflect.userCode
class Main implements egret3d.framework.IUserCode {
    app: egret3d.framework.Application;
    scene: egret3d.framework.Scene;

    private camera: egret3d.framework.Camera;

    private cube: egret3d.framework.Transform;

    private renderer1: egret3d.framework.Egret2DRenderer;
    private renderer2: egret3d.framework.Egret2DRenderer;

    async onStart(app: egret3d.framework.Application) {
        this.app = app;
        app.aspectRatio = 640 / 1136;
        app.pixelRatio = window.devicePixelRatio || 1;

        this.scene = this.app.getScene();

        RES.setConfigURL("resource/config.res.js");
        await RES.loadConfig();
        await RES.getResAsync("logo.png");

        this.create3DScene();
    }   

    private create3DScene() {
        //添加一个摄像机
        let objCam = new egret3d.framework.Transform();
        objCam.name = "mainCamera";
        this.scene.addChild(objCam);
        this.camera = objCam.gameObject.addComponent("Camera") as egret3d.framework.Camera;
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
        let cube = this.cube = new egret3d.framework.Transform(); //创建一个transform
        cube.name = "cube"; //设定名字（可以不设定）
        let mesh = cube.gameObject.addComponent(egret3d.framework.StringUtil.COMPONENT_MESHFILTER) as egret3d.framework.MeshFilter; // 为其添加一个meshFilter组件
        let smesh = egret3d.framework.DefaultMeshes.Cube; //获取引擎内置的cube模型
        mesh.mesh = smesh; //赋值给meshFilter组件
        let _renderer = cube.gameObject.addComponent(egret3d.framework.StringUtil.COMPONENT_MESHRENDER) as egret3d.framework.MeshRenderer;// 添加meshRender组件，用来渲染盒子
        cube.gameObject.addComponent("BoxCollider");
        //cube.setLocalEulerAngles(45, 45, 0);
        this.scene.addChild(cube); // 将盒子添加到场景中去
        // 挂载材质贴图
        let texture = RES.getRes("logo.png") as egret3d.framework.Texture;
        let mat = new egret3d.framework.Material();
        mat.setShader(egret3d.framework.DefaultShaders.Diffuse);
        mat.setTexture("_MainTex", texture);
        _renderer.materials = [];
        _renderer.materials[0] = mat;
        _renderer.renderLayer = egret3d.framework.CullingMask.UserLayer2;
    }

    private timer: number = 0;
    private screenPos: egret3d.math.Vector2 = new egret3d.math.Vector2();
    onUpdate(delta: number) {
        // this.timer += delta;
        // let _sin = Math.sin(this.timer * 0.5);
        // let _cos = -Math.cos(this.timer * 0.5);

        // if (this.camera) {
        //     let renderer = this.renderer2;

        //     this.cube.setLocalEulerAngles(_sin * 45, _cos * 45, 0);
        //     this.camera.calcScreenPosFromWorldPos(this.app, this.cube.getPosition(), this.screenPos);
        //     renderer.screenPosToUIPos(this.screenPos, this.screenPos);
        // }

    }

    isClosed(): boolean {
        return false;
    }
}

let egret_native = {};
module egret {
    export let RuntimeType = {};
}

var app = new egret3d.framework.Application();
var div = <HTMLDivElement>document.getElementsByClassName("egret-player")[0];
app.start(div);
app.showFps();
app.bePlay = true;
app.addUserCode("Main");