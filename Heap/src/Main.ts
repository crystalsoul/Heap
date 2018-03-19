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
        await RES.getResAsync("D2Resource/assets/egret_icon.png");
        await RES.getResAsync("D2Resource/assets/bg.jpg");
        await RES.loadGroup("preload");

        this.createBgUI();
        this.create3DScene();
        this.createMaskUI();
    }

    private createBgUI() {
        //添加一个摄像机
        let objCam = new egret3d.framework.Transform();
        objCam.name = "mainCamera";
        this.scene.addChild(objCam);
        let camera = objCam.gameObject.addComponent("Camera") as egret3d.framework.Camera;
        camera.CullingMask = egret3d.framework.CullingMask.UserLayer1;
        camera.order = 0;
        camera.backgroundColor = new egret3d.math.Color(0.0, 0.0, 0.0, 1.0);

        let transform = new egret3d.framework.Transform();
        transform.name = "TransformForEgret2D";
        let renderer = transform.gameObject.addComponent<egret3d.framework.Egret2DRenderer>("Egret2DRenderer");
        renderer.renderLayer = egret3d.framework.CullingMask.UserLayer1;
        let adapter = new egret3d.framework.MatchWidthOrHeightAdapter();
        renderer.screenAdapter = adapter;
        this.renderer1 = renderer;
        this.scene.addChild(transform);

        let bg = this.createBitmapByName("D2Resource/assets/bg.jpg");
        bg.width = 640;
        bg.height = 1136;
        renderer.root.addChild(bg);
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
        // objCam.localTranslate = new egret3d.math.Vector3(0, 2.25, 5);
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
        // cube.localEulerAngles = new egret3d.math.Vector3(45, 45, 0); //给盒子一定的旋转角度
        cube.setLocalEulerAngles(45, 45, 0);
        // cube.markDirty(); //标记dirty，这样引擎就会去去更新一次这个cube
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

    private createMaskUI() {
        let transform = new egret3d.framework.Transform();
        transform.name = "TransformForEgret2D";
        let renderer = transform.gameObject.addComponent<egret3d.framework.Egret2DRenderer>("Egret2DRenderer");
        renderer.renderLayer = egret3d.framework.CullingMask.UserLayer2;
        let adapter = new egret3d.framework.MatchWidthOrHeightAdapter();
        adapter.matchFactor = 0;
        renderer.screenAdapter = adapter;
        this.renderer2 = renderer;

        this.scene.addChild(transform);

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, 640, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        renderer.root.addChild(topMask);

        let icon = this.createBitmapByName("D2Resource/assets/egret_icon.png");
        renderer.root.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        renderer.root.addChild(line);

        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = 640 - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret & Egret3D";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        renderer.root.addChild(colorLabel);

        let textfield = new egret.TextField();
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

        let mask = new egret.Shape();
        mask.graphics.beginFill(0x000000, 0.5);
        mask.graphics.drawRect(0, 0, 100, 100);
        mask.graphics.endFill();
        renderer.root.addChild(mask);
        mask.touchEnabled = true;
        this.mask = mask;
        mask.addEventListener(egret.TouchEvent.TOUCH_END, () => {
            this.showPannel("mask Click!");
        }, this);

        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        let theme = new eui.Theme("resource/D2Resource/default.thm.json", renderer.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    }

    private uiLayer: eui.UILayer;

    private onThemeLoadComplete() {
        let renderer = this.renderer2;

        this.uiLayer = new eui.UILayer();
        this.uiLayer.touchEnabled = false;
        renderer.root.addChild(this.uiLayer);

        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.uiLayer.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }

    private onButtonClick(e: egret.TouchEvent) {
        this.showPannel("Button Click!");
    }

    private showPannel(title: string) {
        let renderer = this.renderer2;

        let panel = new eui.Panel();
        panel.title = title;
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.uiLayer.addChild(panel);
    }

    private textfield: egret.TextField;
    private mask: egret.Shape;

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private async startAnimation() {

        const result: string[] = await RES.getResAsync("D2Resource/config/description.json");
        let parser = new egret.HtmlTextParser();
        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    private timer: number = 0;
    private screenPos: egret3d.math.Vector2 = new egret3d.math.Vector2();
    onUpdate(delta: number) {
        this.timer += delta;
        let _sin = Math.sin(this.timer * 0.5);
        let _cos = -Math.cos(this.timer * 0.5);

        if (this.camera) {
            let renderer = this.renderer2;

            this.cube.setLocalEulerAngles(_sin * 45, _cos * 45, 0);
            this.camera.calcScreenPosFromWorldPos(this.app, this.cube.getPosition(), this.screenPos);
            renderer.screenPosToUIPos(this.screenPos, this.screenPos);

            // console.log(this.screenPos.x, this.screenPos.y);

            // mask 跟随
            this.mask.x = this.screenPos.x;
            this.mask.y = this.screenPos.y;

            if (this.app.inputManager.wasReleased()) {
                let touch = this.app.inputManager.getTouchPoint();

                if (!renderer.checkEventThrough(touch.x, touch.y)) {
                    let ray = this.camera.creatRayByScreen(touch, this.app);
                    let pickInfo = this.scene.pick(ray);
                    if (pickInfo && pickInfo.pickedtran == this.cube) {
                        this.showPannel("Cube Click!");
                    }
                }
            }

        }

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