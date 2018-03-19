declare namespace egret3d.reflect {
    function getPrototypes(): {
        [id: string]: any;
    };
    function getPrototype(name: string): any;
    function createInstance(prototype: any, matchTag: {
        [id: string]: string;
    }): any;
    function getClassName(prototype: any): any;
    function getClassTag(prototype: any, tag: string): any;
    function getMeta(prototype: any): any;
    function attr_Class(constructorObj: any): void;
    function attr_Field(customInfo?: {
        [id: string]: string;
    }): (target: Object, propertyKey: string) => void;
    function userCode(constructorObj: any): void;
    function editorCode(constructorObj: any): void;
    function selfClone(constructorObj: any): void;
    function nodeComponent(constructorObj: any): void;
    function nodeComponentInspector(constructorObj: any): void;
    function nodeRender(constructorObj: any): void;
    function nodeCamera(constructorObj: any): void;
    function nodeLight(constructorObj: any): void;
    function nodeBoxCollider(constructorObj: any): void;
    function nodeSphereCollider(constructorObj: any): void;
    function nodeEffectBatcher(constructorObj: any): void;
    function nodeMeshCollider(constructorObj: any): void;
    function nodeCanvasRendererCollider(constructorObj: any): void;
    function node2DComponent(constructorObj: any): void;
    function pluginMenuItem(constructorObj: any): void;
    function pluginWindow(constructorObj: any): void;
    function pluginExt(constructorObj: any): void;
    function compValue(integer?: boolean, defvalue?: number, min?: number, max?: number): (target: Object, propertyKey: string) => void;
    function SerializeType(constructorObj: any): void;
    function Field(valueType: string, defaultValue?: any, enumRealType?: string): (target: Object, propertyKey: string) => void;
    function UIComment(comment: string): (target: Object, propertyKey: string) => void;
    enum FieldUIStyle {
        None = 0,
        RangeFloat = 1,
        MultiLineString = 2,
        Enum = 3,
    }
    function UIStyle(style: string, min?: number, max?: number, defvalue?: any): (target: Object, propertyKey: string) => void;
}
declare namespace egret3d.framework {
    class EventDispatcher {
        private _eventMap;
        addEventListener(type: string, listener: Function, thisObject: any): void;
        removeEventListener(type: string, listener: Function, thisObject: any): void;
        dispatchEvent(event: any): void;
        private notifyListener(event);
    }
}
declare namespace egret3d.math {
    class Vector2 {
        constructor(x?: number, y?: number);
        x: number;
        y: number;
        toString(): string;
    }
    class Rect {
        constructor(x?: number, y?: number, w?: number, h?: number);
        x: number;
        y: number;
        w: number;
        h: number;
        toString(): string;
    }
    class Border {
        constructor(l?: number, t?: number, r?: number, b?: number);
        l: number;
        t: number;
        r: number;
        b: number;
    }
    class Color {
        constructor(r?: number, g?: number, b?: number, a?: number);
        r: number;
        g: number;
        b: number;
        a: number;
        toString(): string;
    }
    class Vector3 {
        constructor(x?: number, y?: number, z?: number);
        x: number;
        y: number;
        z: number;
        toString(): string;
    }
    class Vector4 {
        constructor(x?: number, y?: number, z?: number, w?: number);
        x: number;
        y: number;
        z: number;
        w: number;
        toString(): string;
    }
    class Quaternion {
        constructor(x?: number, y?: number, z?: number, w?: number);
        x: number;
        y: number;
        z: number;
        w: number;
        toString(): string;
    }
    class Matrix {
        rawData: Float32Array;
        constructor(datas?: Float32Array);
        toString(): string;
    }
    class Matrix3x2 {
        rawData: Float32Array;
        constructor(datas?: Float32Array);
        toString(): string;
    }
}
declare namespace egret3d.framework {
    abstract class Asset {
        defaultAsset: boolean;
        url: string;
        protected _name: string;
        getName(): string;
        protected static IDCount: number;
        protected _guid: number;
        getGUID(): number;
        constructor(name: string | undefined, defaultPrefix: string);
        use(): void;
        unuse(disposeNow?: boolean): void;
        abstract caclByteLength(): number;
        abstract dispose(): void;
    }
}
declare namespace egret3d.sound {
    class WebAudioChannel2D {
        protected source: AudioBufferSourceNode;
        protected gain: GainNode;
        constructor();
        protected _init(): void;
        buffer: AudioBuffer;
        volume: number;
        loop: boolean;
        start(offset?: number): void;
        stop(): void;
        dispose(): void;
    }
}
declare namespace egret3d.framework {
    interface IUserCode {
        onStart(app: egret3d.framework.Application): any;
        onUpdate(delta: number): any;
        isClosed(): boolean;
    }
    interface IEditorCode {
        onStart(app: egret3d.framework.Application): any;
        onUpdate(delta: number): any;
        isClosed(): boolean;
    }
    class Application extends EventDispatcher {
        private version;
        private build;
        webgl: WebGLRenderingContext;
        private stats;
        container: HTMLDivElement;
        private _resizeDirty;
        private _width;
        private _height;
        readonly height: number;
        readonly width: number;
        aspectRatio: number;
        private _aspectRatio;
        pixelRatio: number;
        private _pixelRatio;
        limitFrame: boolean;
        private _timeScale;
        timeScale: number;
        private _tar;
        private _standDeltaTime;
        targetFrame: number;
        private _scene;
        getScene(): Scene;
        private _inputManager;
        readonly inputManager: InputManager;
        start(div: HTMLDivElement, options?: {
            antialias: boolean;
        }): void;
        checkFilter(trans: any): boolean;
        showFps(): void;
        closeFps(): void;
        private update(delta);
        private _resize();
        private beginTimer;
        private lastTimer;
        private pretimer;
        private totalTime;
        getTotalTime(): number;
        private _deltaTime;
        readonly deltaTime: number;
        private updateTimer;
        getUpdateTimer(): any;
        getUserUpdateTimer(): number;
        private loop();
        be2dstate: boolean;
        curcameraindex: number;
        private _bePlay;
        bePlay: boolean;
        private _bePause;
        bePause: boolean;
        private _beStepForward;
        private beStepNumber;
        beStepForward: boolean;
        private _userCode;
        private _userCodeNew;
        addUserCodeDirect(program: IUserCode): void;
        addUserCode(classname: string): void;
        private updateUserCode(delta);
        private _editorCode;
        private _editorCodeNew;
        addEditorCode(classname: string): void;
        addEditorCodeDirect(program: IEditorCode): void;
        private updateEditorCode(delta);
    }
}
declare namespace egret3d {
    let licence: string;
}
declare namespace Stats {
    class Stats {
        constructor(app: egret3d.framework.Application);
        update(): void;
        app: egret3d.framework.Application;
        container: HTMLDivElement;
        private mode;
        private REVISION;
        private beginTime;
        private prevTime;
        private frames;
        private fpsPanel;
        private msPanel;
        private memPanel;
        private ratePanel;
        private userratePanel;
        private showPanel(id);
        private addPanel(panel);
        private begin();
        private end();
    }
}
declare namespace egret3d.framework {
    class Canvas {
        constructor();
        is2dUI: boolean;
        parentTrans: Transform;
        batcher: Batcher2D;
        webgl: WebGLRenderingContext;
        scene: Scene;
        addChild(node: Transform2D): void;
        removeChild(node: Transform2D): void;
        getChildren(): Transform2D[];
        getChildCount(): number;
        getChild(index: number): Transform2D;
        private pointDown;
        private pointSelect;
        private pointEvent;
        private pointX;
        private pointY;
        update(delta: number, touch: Boolean, XOnScreenSpace: number, YOnScreenSpace: number): void;
        afterRender: Function;
        render(context: RenderContext): void;
        private lastMat;
        pushRawData(mat: Material, data: number[]): void;
        private context;
        private drawScene(node, context);
        pixelWidth: number;
        pixelHeight: number;
        private rootNode;
        getRoot(): Transform2D;
    }
}
declare namespace egret3d.framework {
    class Batcher2D {
        private mesh;
        private drawMode;
        private vboCount;
        private curPass;
        private eboCount;
        private dataForVbo;
        private dataForEbo;
        initBuffer(webgl: WebGLRenderingContext, vf: render.VertexFormatMask, drawMode: render.DrawModeEnum): void;
        begin(webgl: WebGLRenderingContext, pass: render.GlDrawPass): void;
        push(webgl: WebGLRenderingContext, vbodata: number[], ebodata: number[]): void;
        end(webgl: WebGLRenderingContext): void;
    }
    class CanvasRenderer implements IRenderer, ICollider {
        frustumTest: boolean;
        constructor();
        gameObject: GameObject;
        subTran: Transform;
        getBound(): any;
        intersectsTransform(tran: Transform): boolean;
        layer: RenderLayerEnum;
        renderLayer: CullingMask;
        queue: number;
        canvas: Canvas;
        cameraTouch: Camera;
        setSize(width: number, height: number): void;
        start(): void;
        addChild(node: Transform2D): void;
        removeChild(node: Transform2D): void;
        getChildren(): Transform2D[];
        getChildCount(): number;
        getChild(index: number): Transform2D;
        update(delta: number): void;
        pick2d(ray: egret3d.framework.Ray): Transform2D;
        private dopick2d(outv, tran);
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        jsonToAttribute(json: any): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    enum PointEventEnum {
        PointNothing = 0,
        PointDown = 1,
        PointHold = 2,
        PointUp = 3,
    }
    class PointEvent {
        type: PointEventEnum;
        x: number;
        y: number;
        eated: boolean;
        selected: Transform2D;
    }
    class UIEvent {
        private funcs;
        addListener(func: Function): void;
        excute(): void;
        clear(): void;
    }
}
declare module egret.web {
    class Renderer {
        private context;
        private static _instance;
        static getInstance(context: WebGLRenderingContext, app: egret3d.framework.Application): Renderer;
        private projectionX;
        private projectionY;
        private drawCmdManager;
        private vao;
        private vertexBuffer;
        private indexBuffer;
        private egretWebGLRenderContext;
        private constructor();
        beforeRender(): void;
        activatedBuffer: WebGLRenderBuffer;
        $drawWebGL(): void;
        private drawData(data, offset);
        private currentProgram;
        private activeProgram(gl, program);
        private syncUniforms(program, filter, textureWidth, textureHeight);
        private drawTextureElements(data, offset);
        private bindIndices;
        private activateBuffer(buffer);
        onResize(width: number, height: number): void;
        private uploadVerticesArray(array);
        private uploadIndicesArray(array);
        private drawPushMaskElements(data, offset);
        private drawPopMaskElements(data, offset);
        private setBlendMode(value);
        static blendModesForGL: any;
        static initBlendMode(): void;
    }
}
declare namespace egret3d.framework {
    enum SCREEN_MATCH_MODE {
        CONSTANT = 0,
        SHRINK = 1,
        EXPAND = 2,
    }
    class Overlay2D implements IOverLay {
        constructor();
        init: boolean;
        private camera;
        private app;
        private _screenAdaptDirty;
        private _scaleFactor;
        scaleFactor: number;
        private _resolution;
        setResolutionSize(width: number, height: number): void;
        private _screenMatchMode;
        setScreenMatchMode(value: SCREEN_MATCH_MODE): void;
        private _renderViewport;
        setRenderViewport(x: number, y: number, width: number, height: number): void;
        private _viewport;
        private _calculateScreenAdapt();
        start(camera: Camera): void;
        canvas: Canvas;
        autoAsp: boolean;
        addChild(node: Transform2D): void;
        removeChild(node: Transform2D): void;
        getChildren(): Transform2D[];
        getChildCount(): number;
        getChild(index: number): Transform2D;
        render(context: RenderContext, camera: Camera): void;
        update(delta: number): void;
        pick2d(mx: number, my: number): Transform2D;
        private dopick2d(outv, tran);
        calScreenPosToCanvasPos(mousePos: egret3d.math.Vector2, canvasPos: egret3d.math.Vector2): void;
    }
}
declare namespace egret3d.framework {
    interface I2DComponent {
        transform: Transform2D;
        start(): any;
        update(delta: number): any;
        onPointEvent(canvas: Canvas, ev: PointEvent, oncap: boolean): any;
        remove(): any;
    }
    interface IRectRenderer extends I2DComponent {
        render(canvas: Canvas): any;
        updateTran(): any;
    }
    class C2DComponent {
        comp: I2DComponent;
        init: boolean;
        constructor(comp: I2DComponent, init?: boolean);
    }
    class Transform2D {
        private _canvas;
        canvas: Canvas;
        name: string;
        parent: Transform2D;
        children: Transform2D[];
        width: number;
        height: number;
        pivot: math.Vector2;
        hideFlags: HideFlags;
        private _visible;
        readonly visibleInScene: boolean;
        visible: boolean;
        readonly transform: this;
        insId: InsID;
        private dirty;
        private dirtyChild;
        private dirtyWorldDecompose;
        localTranslate: math.Vector2;
        localScale: math.Vector2;
        localRotate: number;
        private localMatrix;
        private worldMatrix;
        private worldRotate;
        private worldTranslate;
        private worldScale;
        addChild(node: Transform2D): void;
        addChildAt(node: Transform2D, index: number): void;
        removeChild(node: Transform2D): void;
        removeAllChild(): void;
        markDirty(): void;
        updateTran(parentChange: boolean): void;
        updateWorldTran(): void;
        getWorldTranslate(): math.Vector2;
        getWorldScale(): math.Vector2;
        getWorldRotate(): math.Angelref;
        getLocalMatrix(): egret3d.math.Matrix3x2;
        getWorldMatrix(): egret3d.math.Matrix3x2;
        setWorldPosition(pos: math.Vector2): void;
        dispose(): void;
        renderer: IRectRenderer;
        components: C2DComponent[];
        update(delta: number): void;
        addComponent<T extends I2DComponent>(type: string): T;
        addComponentDirect<T extends I2DComponent>(comp: T): T;
        removeComponent(comp: I2DComponent): void;
        removeComponentByTypeName(type: string): C2DComponent;
        removeAllComponents(): void;
        getComponent<T extends I2DComponent>(type: string): T;
        getComponents(): I2DComponent[];
        getComponentsInChildren<T extends I2DComponent>(type: string): T[];
        private getNodeCompoents(node, _type, comps);
        onCapturePointEvent(canvas: Canvas, ev: PointEvent): void;
        ContainsCanvasPoint(pworld: math.Vector2): boolean;
        onPointEvent(canvas: Canvas, ev: PointEvent): void;
    }
}
declare namespace egret3d.framework {
    enum TransitionType {
        None = 0,
        ColorTint = 1,
        SpriteSwap = 2,
    }
    class Button implements I2DComponent {
        private _transition;
        transition: TransitionType;
        private _originalColor;
        private _originalSprite;
        private _targetImage;
        targetImage: Image2D;
        private _pressedSprite;
        pressedGraphic: Sprite;
        private _normalColor;
        normalColor: math.Color;
        private _pressedColor;
        pressedColor: math.Color;
        private _fadeDuration;
        fadeDuration: number;
        start(): void;
        update(delta: number): void;
        transform: Transform2D;
        remove(): void;
        onPointEvent(canvas: Canvas, ev: PointEvent, oncap: boolean): void;
        onClick: UIEvent;
        private _downInThis;
        private _dragOut;
        private showNormal();
        private showPress();
        private changeColor(targetColor);
        private changeSprite(sprite);
    }
}
declare namespace egret3d.framework {
    enum ImageType {
        Simple = 0,
        Sliced = 1,
        Tiled = 2,
        Filled = 3,
    }
    enum FillMethod {
        Horizontal = 0,
        Vertical = 1,
        Radial_90 = 2,
        Radial_180 = 3,
        Radial_360 = 4,
    }
    class Image2D implements IRectRenderer {
        constructor();
        private datar;
        private _sprite;
        color: math.Color;
        mat: Material;
        private _imageType;
        imageType: ImageType;
        private _fillMethod;
        fillMethod: FillMethod;
        private _fillAmmount;
        fillAmmount: FillMethod;
        setTexture(texture: Texture, border?: math.Border, rect?: math.Rect): void;
        sprite: Sprite;
        render(canvas: Canvas): void;
        start(): void;
        update(delta: number): void;
        transform: Transform2D;
        remove(): void;
        onPointEvent(canvas: Canvas, ev: PointEvent, oncap: boolean): void;
        private prepareData();
        updateTran(): void;
        private updateQuadData(x0, y0, x1, y1, x2, y2, x3, y3, quadIndex?, mirror?);
        private updateSimpleData(x0, y0, x1, y1, x2, y2, x3, y3);
        private updateSlicedData(x0, y0, x1, y1, x2, y2, x3, y3);
        private updateFilledData(x0, y0, x1, y1, x2, y2, x3, y3);
        private updateTiledData(x0, y0, x1, y1, x2, y2, x3, y3);
    }
}
declare namespace egret3d.framework {
    enum HorizontalType {
        Center = 0,
        Left = 1,
        Right = 2,
    }
    enum VerticalType {
        Center = 0,
        Top = 1,
        Boom = 2,
    }
    class Label implements IRectRenderer {
        private _text;
        text: string;
        private _font;
        font: Font;
        private _fontsize;
        fontsize: number;
        linespace: number;
        horizontalType: HorizontalType;
        verticalType: VerticalType;
        private indexarr;
        private remainarrx;
        private updateData(_font);
        private data_begin;
        private datar;
        color: math.Color;
        color2: math.Color;
        mat: Material;
        private dirtyData;
        render(canvas: Canvas): void;
        updateTran(): void;
        start(): void;
        update(delta: number): void;
        transform: Transform2D;
        remove(): void;
        onPointEvent(canvas: Canvas, ev: PointEvent, oncap: boolean): void;
    }
}
declare namespace egret3d.framework {
    class RawImage2D implements IRectRenderer {
        private datar;
        private _image;
        image: Texture;
        color: math.Color;
        mat: Material;
        render(canvas: Canvas): void;
        updateTran(): void;
        start(): void;
        update(delta: number): void;
        transform: Transform2D;
        remove(): void;
        onPointEvent(canvas: Canvas, ev: PointEvent, oncap: boolean): void;
    }
}
declare namespace egret3d.framework {
    interface IScreenAdapter {
        $dirty: boolean;
        calculateScaler(canvasWidth: number, canvasHeight: number, out: {
            w: number;
            h: number;
            s: number;
        }): any;
    }
    class ConstantAdapter implements IScreenAdapter {
        $dirty: boolean;
        private _scaleFactor;
        scaleFactor: number;
        calculateScaler(canvasWidth: number, canvasHeight: number, out: {
            w: number;
            h: number;
            s: number;
        }): void;
    }
    class ExpandAdapter implements IScreenAdapter {
        $dirty: boolean;
        private _resolution;
        setResolution(width: number, height: number): void;
        calculateScaler(canvasWidth: number, canvasHeight: number, out: {
            w: number;
            h: number;
            s: number;
        }): void;
    }
    class ShrinkAdapter implements IScreenAdapter {
        $dirty: boolean;
        private _resolution;
        setResolution(width: number, height: number): void;
        calculateScaler(canvasWidth: number, canvasHeight: number, out: {
            w: number;
            h: number;
            s: number;
        }): void;
    }
    class MatchWidthOrHeightAdapter implements IScreenAdapter {
        $dirty: boolean;
        private _resolution;
        setResolution(width: number, height: number): void;
        private _matchFactor;
        matchFactor: number;
        calculateScaler(canvasWidth: number, canvasHeight: number, out: {
            w: number;
            h: number;
            s: number;
        }): void;
    }
}
declare namespace egret3d.framework {
    class AssetMap {
        private static _map;
        private static _nameMap;
        private static _bundleName;
        static register(asset: Asset): void;
        static unregister(asset: Asset): void;
        static find<T extends Asset>(name: string, bundleName?: string): T;
        static findById<T extends Asset>(id: number): T;
        static registerBundle(name: string, bundle: AssetBundle): void;
        static unregisterBundle(name: string): void;
        static findBundle(name: string): AssetBundle;
    }
}
declare namespace egret3d.framework {
    class DefaultMeshes {
        static Cube: Mesh;
        static Quad: Mesh;
        static QuadParticle: Mesh;
        static Plane: Mesh;
        static Sphere: Mesh;
        static Pyramid: Mesh;
        static Cylinder: Mesh;
        static CircleLine: Mesh;
        private static _inited;
        static readonly isInit: boolean;
        static init(gl: WebGLRenderingContext): void;
        private static createDefaultMesh(name, meshData, webgl);
    }
}
declare namespace egret3d.framework {
    class DefaultShaders {
        static Transparent: Shader;
        static TransparentAdditive: Shader;
        static TransparentBothSide: Shader;
        static Diffuse: Shader;
        static DiffuseTintColor: Shader;
        static DiffuseVertColor: Shader;
        static DiffuseBothSide: Shader;
        static UI: Shader;
        static UIFont: Shader;
        static Line: Shader;
        static MaterialColor: Shader;
        static Lambert: Shader;
        static LambertNormal: Shader;
        private static _inited;
        static readonly isInit: boolean;
        static init(gl: WebGLRenderingContext): void;
    }
}
declare namespace egret3d.framework {
    class DefaultTextures {
        static White: Texture;
        static Gray: Texture;
        static Grid: Texture;
        private static _inited;
        static readonly isInit: boolean;
        static init(gl: WebGLRenderingContext): void;
    }
}
declare namespace egret3d.framework.ShaderLib {
    const bone_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesBlendIndex4;\nattribute vec4 _glesBlendWeight4;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp mat4 glstate_matrix_bones[24];\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nvoid main()                                     \n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;  \n\t\n    int i = int(_glesBlendIndex4.x);  \n    int i2 =int(_glesBlendIndex4.y);\n\tint i3 =int(_glesBlendIndex4.z);\n\tint i4 =int(_glesBlendIndex4.w);\n\t\n    mat4 mat = glstate_matrix_bones[i]*_glesBlendWeight4.x \n\t\t\t + glstate_matrix_bones[i2]*_glesBlendWeight4.y \n\t\t\t + glstate_matrix_bones[i3]*_glesBlendWeight4.z \n\t\t\t + glstate_matrix_bones[i4]*_glesBlendWeight4.w;\n\t\t\t \n    gl_Position = (glstate_matrix_mvp * mat)* tmpvar_1;\n\txlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n}";
    const boneeff_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesBlendIndex4;\nattribute vec4 _glesBlendWeight4;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 glstate_vec4_bones[110];\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nmat4 buildMat4(int index)\n{\n\tvec4 quat = glstate_vec4_bones[index * 2 + 0];\n\tvec4 translation = glstate_vec4_bones[index * 2 + 1];\n\tfloat xy2 = 2.0 * quat.x * quat.y;\n\tfloat xz2 = 2.0 * quat.x * quat.z;\n\tfloat xw2 = 2.0 * quat.x * quat.w;\n\tfloat yz2 = 2.0 * quat.y * quat.z;\n\tfloat yw2 = 2.0 * quat.y * quat.w;\n\tfloat zw2 = 2.0 * quat.z * quat.w;\n\tfloat xx = quat.x * quat.x;\n\tfloat yy = quat.y * quat.y;\n\tfloat zz = quat.z * quat.z;\n\tfloat ww = quat.w * quat.w;\n\tmat4 matrix = mat4(\n\txx - yy - zz + ww, xy2 + zw2, xz2 - yw2, 0,\n\txy2 - zw2, -xx + yy - zz + ww, yz2 + xw2, 0,\n\txz2 + yw2, yz2 - xw2, -xx - yy + zz + ww, 0,\n\ttranslation.x, translation.y, translation.z, 1);\n\treturn matrix;\n}\nhighp vec4 calcVertex(highp vec4 srcVertex,highp vec4 blendIndex,highp vec4 blendWeight)\n{\n\tint i = int(blendIndex.x);  \n    int i2 =int(blendIndex.y);\n\tint i3 =int(blendIndex.z);\n\tint i4 =int(blendIndex.w);\n\t\n    mat4 mat = buildMat4(i)*blendWeight.x \n\t\t\t + buildMat4(i2)*blendWeight.y \n\t\t\t + buildMat4(i3)*blendWeight.z \n\t\t\t + buildMat4(i4)*blendWeight.w;\n\treturn mat* srcVertex;\n}\nvoid main()\n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = calcVertex(_glesVertex,_glesBlendIndex4,_glesBlendWeight4).xyz;  \n\t\t\t \n    gl_Position = glstate_matrix_mvp *  tmpvar_1;\n\txlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n}";
    const code2_frag = "void main() {\n    gl_FragData[0] = vec4(1.0, 1.0, 1.0, 1.0);\n}";
    const code_frag = "uniform sampler2D _MainTex;                                                 \nvarying lowp vec4 xlv_COLOR;                                                 \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main() {\n    lowp vec4 col_1;    \n    mediump vec4 prev_2;\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (xlv_COLOR * texture2D(_MainTex, xlv_TEXCOORD0));\n    prev_2 = tmpvar_3;\n    mediump vec4 tmpvar_4;\n    tmpvar_4 = mix(vec4(1.0, 1.0, 1.0, 1.0), prev_2, prev_2.wwww);\n    col_1 = tmpvar_4;\n    col_1.x =xlv_TEXCOORD0.x;\n    col_1.y =xlv_TEXCOORD0.y;\n    gl_FragData[0] = col_1;\n}";
    const code_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesColor;             \nattribute vec4 _glesMultiTexCoord0;    \nuniform highp mat4 glstate_matrix_mvp; \nvarying lowp vec4 xlv_COLOR;           \nvarying highp vec2 xlv_TEXCOORD0;      \nvoid main() {                                          \n    highp vec4 tmpvar_1;                   \n    tmpvar_1.w = 1.0;                      \n    tmpvar_1.xyz = _glesVertex.xyz;        \n    xlv_COLOR = _glesColor;                \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
    const diffuse_frag = "uniform sampler2D _MainTex;\nuniform lowp float _AlphaCut;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    lowp vec4 tmpvar_3 = texture2D(_MainTex, xlv_TEXCOORD0);\n    if(tmpvar_3.a < _AlphaCut)\n        discard;\n    gl_FragData[0] = tmpvar_3;\n}";
    const diffuse_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 _MainTex_ST;  \nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
    const diffuselightmap_frag = "uniform sampler2D _MainTex;\nuniform sampler2D _LightmapTex;\nuniform lowp float _AlphaCut;\nvarying highp vec2 xlv_TEXCOORD0;\nvarying highp vec2 xlv_TEXCOORD1;\nlowp vec3 decode_hdr(lowp vec4 data)\n{\n    highp float power =pow( 2.0 ,data.a * 255.0 - 128.0);\n    return data.rgb * power * 2.0 ;\n}\nvoid main() \n{\n    lowp vec4 outColor = texture2D(_MainTex, xlv_TEXCOORD0);\n    if(outColor.a < _AlphaCut)\n        discard;\n    lowp vec4 lightmap = texture2D(_LightmapTex, xlv_TEXCOORD1);\n    outColor.xyz *= decode_hdr(lightmap);\n    gl_FragData[0] = outColor;\n}";
    const diffuselightmap_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0;\nattribute vec4 _glesMultiTexCoord1;\nuniform highp mat4 glstate_matrix_mvp;\nuniform highp vec4 glstate_lightmapOffset;\nuniform lowp float glstate_lightmapUV;\nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;\nvarying highp vec2 xlv_TEXCOORD1;\nvoid main()\n{\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;  \n    highp vec2 beforelightUV = _glesMultiTexCoord1.xy;\n    if(glstate_lightmapUV == 0.0)\n    {\n        beforelightUV = _glesMultiTexCoord0.xy;\n    }\n    highp float u = beforelightUV.x * glstate_lightmapOffset.x + glstate_lightmapOffset.z;\n    highp float v = 1.0 - ((1.0 - beforelightUV.y) * glstate_lightmapOffset.y + glstate_lightmapOffset.w);\n    xlv_TEXCOORD1 = vec2(u,v);\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
    const lambert_frag = "uniform sampler2D _MainTex;                                                 \nvarying lowp vec4 xlv_COLOR;                                                 \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main() \n{\n    lowp vec4 tmpvar_3= (xlv_COLOR * texture2D(_MainTex, xlv_TEXCOORD0));\n    mediump vec4 tmpvar_4 = mix(vec4(1.0, 1.0, 1.0, 1.0), tmpvar_3, tmpvar_3.wwww);\n    gl_FragData[0] = tmpvar_4;\n}";
    const lambert_vert = "attribute vec3 _glesVertex;   \nattribute vec3 _glesNormal;   \nattribute vec4 _glesColor;                  \nattribute vec4 _glesMultiTexCoord0;        \nuniform highp mat4 glstate_matrix_mvp;      \nuniform highp mat4 glstate_matrix_model;\nuniform highp mat4 glstate_matrix_modelview;\nuniform highp vec4 glstate_vec4_lightposs[8];\nuniform highp vec4 glstate_vec4_lightdirs[8];\nuniform highp float glstate_float_spotangelcoss[8];\nuniform highp float glstate_lightcount;\nvarying lowp vec4 xlv_COLOR;                \nvarying highp vec2 xlv_TEXCOORD0;     \nhighp float calcDiffuse(highp vec3 N,highp vec3 worldpos,highp vec4 lightPos,highp vec4 lightDir,highp float cosspot)\n{\n    highp vec3 L = normalize(lightPos.xyz - worldpos); \n    highp vec3 L2 = -lightDir.xyz;\n    highp float dotSpot = dot(L,L2);\n    highp float diffuse =clamp(dot(N.xyz,L.xyz),0.0,1.0); \n    highp float diffuseD =clamp(dot(N.xyz,L2.xyz),0.0,1.0); \n    diffuse= mix(diffuse,diffuse*smoothstep(cosspot,1.0,dotSpot),lightDir.w);\n    diffuse= mix(diffuseD,diffuse,lightPos.w);\n    return diffuse;\n     \n}\nvoid main()                                     \n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;    \n    highp mat3 normalmat = mat3(glstate_matrix_model);\n    highp vec3 N =normalize(normalmat*_glesNormal);\n    highp vec3 worldpos =(glstate_matrix_model * vec4(_glesVertex.xyz, 1.0)).xyz;\n    highp float diff=0.0;\n    for(int i=0;i<8;i++)\n    {\n        int c =int(glstate_lightcount);\n        if(i>=c)break;\n        diff += calcDiffuse(N,worldpos,glstate_vec4_lightposs[i],glstate_vec4_lightdirs[i],glstate_float_spotangelcoss[i]);\n    }\n    xlv_COLOR = vec4(diff,diff,diff,1.0);         \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;     \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);  \n}";
    const lambertnormal_frag = "\nuniform sampler2D _MainTex;  \nuniform sampler2D _NormalTex;\nuniform highp mat4 glstate_matrix_model;\nuniform highp vec4 glstate_vec4_lightposs[8];\nuniform highp vec4 glstate_vec4_lightdirs[8];\nuniform highp float glstate_float_spotangelcoss[8];\nuniform highp float glstate_lightcount;\nvarying lowp vec4 xlv_COLOR;     \nvarying highp vec3 xlv_Position;                                             \nvarying highp vec2 xlv_TEXCOORD0; \nvarying highp mat3 TBNmat;\nvarying highp vec3 worldpos; \nhighp float calcDiffuse(highp vec3 N,highp vec3 worldpos,highp vec4 lightPos,highp vec4 lightDir,highp float cosspot);\nvoid main() \n{\n\t\n\thighp mat3 TBN = TBNmat;\n    highp mat3 normalmat = mat3(glstate_matrix_model);\n\thighp vec3 N = normalize(TBNmat[2]*normalmat);\n    highp float diff=0.0;\n    for(int i=0;i<8;i++)\n    {        \n        int c =int(glstate_lightcount);\n        if(i>=c)break;\n\t\thighp vec4 lpos=glstate_vec4_lightposs[i];\n\t\thighp vec4 ldir =glstate_vec4_lightdirs[i];\n\t\t\n\t\thighp vec3 normal;\t\tnormal =  texture2D(_NormalTex, xlv_TEXCOORD0).xyz *2.0 -1.0;\n        normal =normalize(normal);\n\t\tnormal =TBN*(normal);\n\t\t\n        diff += calcDiffuse(normal,worldpos,lpos,ldir,glstate_float_spotangelcoss[i]);\n    }\n\tlowp vec4 color = vec4(diff,diff,diff,1.0);       \n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (color * texture2D(_MainTex, xlv_TEXCOORD0));\n    gl_FragData[0] = tmpvar_3;\n}\nhighp float calcDiffuse(highp vec3 N,highp vec3 worldpos,highp vec4 lightPos,highp vec4 lightDir,highp float cosspot)\n{\n    highp vec3 L = normalize(lightPos.xyz - worldpos); \n    highp vec3 L2 = -lightDir.xyz;\n    highp float dotSpot = dot(L,L2);\n    highp float diffuse =clamp(dot(N.xyz,L.xyz),0.0,1.0); \n    highp float diffuseD =clamp(dot(N.xyz,L2.xyz),0.0,1.0); \n    diffuse= mix(diffuse,diffuse*smoothstep(cosspot,1.0,dotSpot),lightDir.w);\n    diffuse= mix(diffuseD,diffuse,lightPos.w);\n    return diffuse;\n     \n}\n";
    const lambertnormal_vert = "\nattribute vec3 _glesVertex;\nattribute vec2 _glesMultiTexCoord0;\nattribute vec4 _glesColor;\nattribute vec3 _glesNormal;\nattribute vec3 _glesTangent;  \nuniform highp mat4 glstate_matrix_mvp;\nuniform highp mat4 glstate_matrix_model;\nuniform highp mat4 glstate_matrix_modelview;\nuniform highp vec4 glstate_eyepos;\nuniform highp vec4 glstate_vec4_lightposs[8];\nuniform highp vec4 glstate_vec4_lightdirs[8];\nuniform highp float glstate_float_spotangelcoss[8];\nuniform highp float glstate_lightcount;\nvarying highp vec4 xlv_COLOR;\nvarying highp vec3 xlv_Position;      \nvarying highp vec2 xlv_TEXCOORD0;\nvarying highp mat3 TBNmat;\nvarying highp vec3 worldpos;\nhighp mat3 calBTNMatrix(highp mat3 NormalMatToWorld,highp vec3 _normal,highp vec3 _tangent)\n{\n    highp vec3 normal=normalize(NormalMatToWorld*_normal);\n    highp vec3 tangent=normalize(NormalMatToWorld*_tangent);\n    highp vec3 binormal=cross(normal,tangent);\n  \treturn (mat3(tangent,binormal,normal));\n}\nvoid main()\n{\n    mat3 normalmat = mat3(glstate_matrix_model);\n   \tTBNmat=calBTNMatrix(normalmat,_glesNormal,_glesTangent);\n    worldpos =(glstate_matrix_model * vec4(_glesVertex.xyz, 1.0)).xyz;\n\txlv_COLOR = _glesColor;\n\txlv_Position = _glesVertex.xyz;\n\txlv_TEXCOORD0 = _glesMultiTexCoord0.xy;\n\tgl_Position = (glstate_matrix_mvp * vec4(_glesVertex.xyz, 1.0));\n}\n";
    const line_frag = "varying lowp vec4 xlv_COLOR;\nvoid main() {\n    gl_FragData[0] = xlv_COLOR;\n}";
    const line_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesColor;\nuniform highp mat4 glstate_matrix_mvp;\nvarying lowp vec4 xlv_COLOR;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_COLOR = _glesColor;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
    const materialcolor_vert = "attribute vec4 _glesVertex;\nuniform vec4 _Color;\nuniform highp mat4 glstate_matrix_mvp;\nvarying lowp vec4 xlv_COLOR;\nvoid main() {\n    highp vec4 tmpvar_1;\n    tmpvar_1.w = 1.0;\n    tmpvar_1.xyz = _glesVertex.xyz;\n    xlv_COLOR = _Color;\n    gl_Position = (glstate_matrix_mvp * tmpvar_1);\n}";
    const postdepth_frag = "precision highp float;\nconst float PackUpscale = 256. / 255.; \nconst float UnpackDownscale = 255. / 256.; \nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) \n{\n    vec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) \n{\n    return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( const in float v ) \n{\n    vec2 r = vec2( fract( v * PackFactors.z ), v );\n\tr.y -= r.x * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGToDepth( const in vec2 v ) \n{\n    return dot( v.xy, UnpackFactors.zw );\n}\nvec3 packDepthToRGB( const in float v ) \n{\n    vec3 r = vec3( fract( v * PackFactors.yz ), v );\n\tr.yz -= r.xy * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBToDepth( const in vec3 v ) \n{\n    return dot( v.xyz, UnpackFactors.yzw );\n}\nvoid main() \n{\n    float z = gl_FragCoord.z;    gl_FragColor=packDepthToRGBA(z);\n}";
    const postdepth_vert = "precision highp float;\nattribute vec4 _glesVertex;    \nuniform highp mat4 glstate_matrix_mvp;      \n       \nvoid main()                                     \n{        \n    gl_Position = (glstate_matrix_mvp * _glesVertex);  \n}";
    const postquad_vert = "attribute vec4 _glesVertex;\nattribute vec4 _glesMultiTexCoord0; \nuniform highp vec4 _MainTex_ST; \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main()                     \n{ \n    gl_Position = _glesVertex;\n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw; \n}   ";
    const postquaddepth_frag = "precision mediump float;\nvarying highp vec2 xlv_TEXCOORD0;       \nuniform sampler2D _DepthTex;   \nuniform sampler2D _MainTex;  \nconst float PackUpscale = 256. / 255.; \nconst float UnpackDownscale = 255. / 256.; \nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) \n{\n    vec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n    return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) \n{\n    return dot( v, UnpackFactors );\n}\nfloat planeDistance(const in vec3 positionA, const in vec3 normalA, \n                    const in vec3 positionB, const in vec3 normalB) \n{\n  vec3 positionDelta = positionB-positionA;\n  float planeDistanceDelta = max(abs(dot(positionDelta, normalA)), abs(dot(positionDelta, normalB)));\n  return planeDistanceDelta;\n}\nvoid main()         \n{\n    lowp vec4 c1=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0.001,0));\n    lowp vec4 c2=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(-0.001,0));\n    lowp vec4 c3=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0,0.001));\n    lowp vec4 c4=texture2D(_DepthTex, xlv_TEXCOORD0+vec2(0,-0.001));\n    highp float z1 = unpackRGBAToDepth(c1);\n    highp float z2 = unpackRGBAToDepth(c2);\n    highp float z3 = unpackRGBAToDepth(c3);\n    highp float z4 = unpackRGBAToDepth(c4);\n    highp float d = clamp(  (abs(z2-z1)+abs(z4-z3))*10.0,0.0,1.0);\n    lowp vec4 c=texture2D(_MainTex, xlv_TEXCOORD0);\n    lowp float g = c.r*0.3+c.g*0.6+c.b*0.1;\n    gl_FragColor =mix(vec4(g,g,g,1.),vec4(1.0,1.0,0.0,1.0),d);}";
    const tintcolor_frag = "uniform sampler2D _MainTex;\nuniform lowp float _AlphaCut;\nuniform lowp vec4 _TintColor;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() \n{\n    lowp vec4 tmpvar_3 = _TintColor*texture2D(_MainTex, xlv_TEXCOORD0);\n    if(tmpvar_3.a < _AlphaCut)\n        discard;\n    gl_FragData[0] = tmpvar_3;\n}";
    const transparentdiffuse_vert = "";
    const ui_frag = "uniform sampler2D _MainTex;\nvarying lowp vec4 xlv_COLOR;\nvarying highp vec2 xlv_TEXCOORD0;\nvoid main() {\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (xlv_COLOR * texture2D(_MainTex, xlv_TEXCOORD0));\n    gl_FragData[0] = tmpvar_3;\n}";
    const uifont_frag = "precision mediump float;\nuniform sampler2D _MainTex;\nvarying lowp vec4 xlv_COLOR;\nvarying lowp vec4 xlv_COLOREx;\nvarying highp vec2 xlv_TEXCOORD0;  \nvoid main() {\n    float scale = 10.0;\n    float d = (texture2D(_MainTex, xlv_TEXCOORD0).r - 0.5) * scale;    float bd = (texture2D(_MainTex, xlv_TEXCOORD0).r - 0.34) * scale;\n    float c=xlv_COLOR.a * clamp ( d,0.0,1.0);\n    float bc=xlv_COLOREx.a * clamp ( bd,0.0,1.0);\n    bc =min(1.0-c,bc);\n    gl_FragData[0] =xlv_COLOR*c + xlv_COLOREx*bc;\n}";
    const uifont_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesColor;                  \nattribute vec4 _glesColorEx;                  \nattribute vec4 _glesMultiTexCoord0;         \nuniform highp mat4 glstate_matrix_mvp;      \nvarying lowp vec4 xlv_COLOR;                \nvarying lowp vec4 xlv_COLOREx;                                                 \nvarying highp vec2 xlv_TEXCOORD0;           \nvoid main() {                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;             \n    xlv_COLOR = _glesColor;                     \n    xlv_COLOREx = _glesColorEx;                     \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy;     \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);  \n}";
    const vertcolor_frag = "uniform sampler2D _MainTex;                                                 \nvarying lowp vec4 xlv_COLOR;                                                 \nvarying highp vec2 xlv_TEXCOORD0;   \nvoid main() \n{\n    lowp vec4 col_1;    \n    mediump vec4 prev_2;\n    lowp vec4 tmpvar_3;\n    tmpvar_3 = (texture2D(_MainTex, xlv_TEXCOORD0));\n    gl_FragData[0] = tmpvar_3;\n}";
    const vertcolor_vert = "attribute vec4 _glesVertex;   \nattribute vec4 _glesNormal;   \nattribute vec4 _glesColor;                  \nattribute vec4 _glesMultiTexCoord0;        \nuniform highp mat4 glstate_matrix_mvp;   \nvarying lowp vec4 xlv_COLOR;                \nvarying highp vec2 xlv_TEXCOORD0;   \nuniform highp vec4 _MainTex_ST;       \nvoid main()                                     \n{                                               \n    highp vec4 tmpvar_1;                        \n    tmpvar_1.w = 1.0;                           \n    tmpvar_1.xyz = _glesVertex.xyz;             \n    xlv_COLOR = _glesColor;                     \n    xlv_TEXCOORD0 = _glesMultiTexCoord0.xy * _MainTex_ST.xy + _MainTex_ST.zw;   \n    gl_Position = (glstate_matrix_mvp * tmpvar_1);  \n}\n";
}
declare namespace egret3d.framework {
    class SubClip {
        name: string;
        loop: boolean;
        startframe: number;
        endframe: number;
        static caclByteLength(): number;
    }
    class AnimationClip extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        Parse(buf: ArrayBuffer): void;
        fps: number;
        loop: boolean;
        boneCount: number;
        bones: string[];
        frameCount: number;
        frames: {
            [fid: string]: Float32Array;
        };
        subclipCount: number;
        subclips: SubClip[];
    }
    class PoseBoneMatrix {
        t: math.Vector3;
        r: math.Quaternion;
        static caclByteLength(): number;
        Clone(): PoseBoneMatrix;
        load(read: io.BinReader): void;
        static createDefault(): PoseBoneMatrix;
        copyFrom(src: PoseBoneMatrix): void;
        copyFromData(src: Float32Array, seek: number): void;
        invert(): void;
        lerpInWorld(_tpose: PoseBoneMatrix, from: PoseBoneMatrix, to: PoseBoneMatrix, v: number): void;
        lerpInWorldWithData(_tpose: PoseBoneMatrix, from: PoseBoneMatrix, todata: Float32Array, toseek: number, v: number): void;
        static sMultiply(left: PoseBoneMatrix, right: PoseBoneMatrix, target?: PoseBoneMatrix): PoseBoneMatrix;
        static sMultiplyDataAndMatrix(leftdata: Float32Array, leftseek: number, right: PoseBoneMatrix, target?: PoseBoneMatrix): PoseBoneMatrix;
        static sLerp(left: PoseBoneMatrix, right: PoseBoneMatrix, v: number, target?: PoseBoneMatrix): PoseBoneMatrix;
    }
}
declare namespace egret3d.framework {
    class AssetBundle extends Asset {
        files: {
            name: string;
            length: number;
            packes: number;
        }[];
        packages: string[];
        path: string;
        mapNamed: {
            [id: string]: number;
        };
        find<T extends Asset>(name: string): T;
        constructor(name: string);
        dispose(): void;
        caclByteLength(): number;
        parse(json: any): void;
    }
}
declare namespace egret3d.framework {
    class Atlas extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        texturewidth: number;
        textureheight: number;
        private _texture;
        texture: Texture;
        sprites: {
            [id: string]: Sprite;
        };
        Parse(jsonStr: string): void;
    }
}
declare namespace egret3d.framework {
    class Charinfo {
        x: number;
        y: number;
        w: number;
        h: number;
        xSize: number;
        ySize: number;
        xOffset: number;
        yOffset: number;
        xAddvance: number;
        static caclByteLength(): number;
    }
    class Font extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        private _texture;
        texture: Texture;
        cmap: {
            [id: string]: Charinfo;
        };
        fontname: string;
        pointSize: number;
        padding: number;
        lineHeight: number;
        baseline: number;
        atlasWidth: number;
        atlasHeight: number;
        Parse(jsonStr: string): void;
    }
}
declare namespace egret3d.framework {
    class UniformData {
        type: render.UniformTypeEnum;
        value: any;
        defaultValue: any;
        constructor(type: render.UniformTypeEnum, value: any, defaultValue?: any);
    }
    class Material extends Asset {
        version: number;
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        private initUniformData(passes);
        private shader;
        setShader(shader: Shader): void;
        getShader(): Shader;
        private _changeShaderMap;
        changeShader(shader: Shader): void;
        getLayer(): RenderLayerEnum;
        getQueue(): number;
        mapUniform: {
            [id: string]: UniformData;
        };
        mapUniformTemp: {
            [id: string]: UniformData;
        };
        setFloat(_id: string, _number: number): void;
        setFloatv(_id: string, _numbers: Float32Array): void;
        setVector4(_id: string, _vector4: math.Vector4): void;
        setVector4v(_id: string, _vector4v: Float32Array): void;
        setMatrix(_id: string, _matrix: math.Matrix): void;
        setMatrixv(_id: string, _matrixv: Float32Array): void;
        setTexture(_id: string, _texture: egret3d.framework.Texture): void;
        draw(context: RenderContext, mesh: Mesh, sm: SubMeshInfo, basetype?: string): void;
        Parse(json: any): void;
        clone(): Material;
    }
}
declare namespace egret3d.framework {
    class SubMeshInfo {
        matIndex: number;
        useVertexIndex: number;
        line: boolean;
        start: number;
        size: number;
    }
    class Mesh extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        glMesh: egret3d.render.GlMesh;
        data: egret3d.render.MeshData;
        submesh: SubMeshInfo[];
        Parse(buf: ArrayBuffer, webgl: WebGLRenderingContext): void;
        intersects(ray: Ray, matrix: egret3d.math.Matrix): Pickinfo;
        clone(): Mesh;
    }
}
declare namespace egret3d.framework {
    enum pathtype {
        once = 0,
        loop = 1,
        pingpong = 2,
    }
    class Pathasset extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        paths: egret3d.math.Vector3[];
        private type;
        private instertPointcount;
        private items;
        Parse(json: JSON): void;
        private lines;
        private getpaths();
        private getBezierPointAlongCurve(points, rate, clearflag?);
        private vec3Lerp(start, end, lerp, out);
    }
}
declare namespace egret3d.framework {
    class Prefab extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        assetbundle: string;
        private trans;
        getCloneTrans(): Transform;
        apply(trans: Transform): void;
        jsonstr: string;
        Parse(jsonStr: string): void;
    }
}
declare namespace egret3d.framework {
    class Rawscene extends Asset {
        constructor(name?: string);
        caclByteLength(): number;
        assetbundle: string;
        Parse(txt: string): void;
        getSceneRoot(): Transform;
        useLightMap(scene: Scene): void;
        dispose(): void;
        private rootNode;
        private lightmaps;
    }
}
declare namespace egret3d.framework {
    type ShaderInfo = {
        name: string;
        src: string;
        uniforms: {
            [id: string]: render.UniformTypeEnum;
        };
    };
    class Shader extends Asset {
        private static _vertShaderInfoMap;
        static registerVertShader(name: string, src: string): ShaderInfo;
        private static _fragShaderInfoMap;
        static registerFragShader(name: string, src: string): ShaderInfo;
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        passes: {
            [id: string]: egret3d.render.GlDrawPass[];
        };
        defaultValue: {
            [key: string]: {
                type: string;
                value?: any;
                defaultValue?: any;
                min?: number;
                max?: number;
            };
        };
        layer: RenderLayerEnum;
        queue: number;
        parse(json: any): void;
        private _parseProperties(properties);
        private _parsePass(json);
    }
}
declare namespace egret3d.framework {
    class Sound extends Asset {
        constructor(name?: string);
        dispose(): void;
        buffer: AudioBuffer;
        caclByteLength(): number;
    }
}
declare namespace egret3d.framework {
    class Sprite extends Asset {
        constructor(name?: string);
        dispose(): void;
        caclByteLength(): number;
        private _texture;
        texture: Texture;
        atlas: string;
        rect: math.Rect;
        border: math.Border;
        private _urange;
        private _vrange;
        readonly urange: math.Vector2;
        readonly vrange: math.Vector2;
    }
}
declare namespace egret3d.framework {
    class Textasset extends Asset {
        constructor(name?: string);
        dispose(): void;
        content: string;
        caclByteLength(): number;
    }
}
declare namespace egret3d.framework {
    class Texture extends Asset {
        constructor(name?: string);
        dispose(): void;
        glTexture: egret3d.render.ITexture;
        caclByteLength(): number;
        private _realName;
        realName: string;
    }
}
declare namespace egret3d.sound {
    class WebAudio {
        private static _instance;
        static readonly instance: WebAudio;
        private _audioContext;
        readonly audioContext: AudioContext;
        private constructor();
        readonly isSupported: boolean;
        active(): void;
        decodeAudioData(buffer: ArrayBuffer, onSuccess: (buf: AudioBuffer) => void, onError: () => void): void;
        private audioListener;
        getAudioListener(): WebAudioListener;
    }
}
declare namespace RES.processor {
    enum AssetTypeEnum {
        Unknown = 0,
        Auto = 1,
        Bundle = 2,
        CompressBundle = 3,
        GLVertexShader = 4,
        GLFragmentShader = 5,
        Shader = 6,
        Texture = 7,
        TextureDesc = 8,
        Mesh = 9,
        Prefab = 10,
        Material = 11,
        Aniclip = 12,
        Scene = 13,
        Atlas = 14,
        Font = 15,
        TextAsset = 16,
        PackBin = 17,
        PackTxt = 18,
        pathAsset = 19,
        PVR = 20,
        Sound = 21,
    }
    const BundleProcessor: RES.processor.Processor;
    const GLVertexShaderProcessor: RES.processor.Processor;
    const GLFragmentShaderProcessor: RES.processor.Processor;
    const ShaderProcessor: RES.processor.Processor;
    const D3PVRProcessor: RES.processor.Processor;
    const TextureDescProcessor: RES.processor.Processor;
    const TextureProcessor: RES.processor.Processor;
    const MaterialProcessor: RES.processor.Processor;
    const MeshProcessor: RES.processor.Processor;
    const AniclipProcessor: RES.processor.Processor;
    const AtlasProcessor: RES.processor.Processor;
    const PrefabProcessor: RES.processor.Processor;
    const SceneProcessor: RES.processor.Processor;
    const D3FontProcessor: RES.processor.Processor;
    const Sound3DProcessor: RES.processor.Processor;
    const TextAssetProcessor: RES.processor.Processor;
    const PathAssetProcessor: RES.processor.Processor;
}
declare namespace egret3d.sound {
    class WebAudioChannel3D extends WebAudioChannel2D {
        private panner;
        protected _init(): void;
        maxDistance: number;
        minDistance: number;
        rollOffFactor: number;
        distanceModel: string;
        private position;
        setPosition(x: number, y: number, z: number): void;
        getPosition(): math.Vector3;
        private velocity;
        setVelocity(x: number, y: number, z: number): void;
        getVelocity(): math.Vector3;
    }
}
declare namespace egret3d.sound {
    class WebAudioListener {
        private readonly listener;
        private position;
        private velocity;
        private orientation;
        constructor();
        setPosition(x: number, y: number, z: number): void;
        getPosition(): math.Vector3;
        setVelocity(x: number, y: number, z: number): void;
        getVelocity(): math.Vector3;
        setOrientation(orientation: math.Matrix): void;
        getOrientation(): math.Matrix;
    }
}
declare namespace egret3d.framework {
    class TPoseInfo {
        name: string;
        tposep: math.Vector3;
        tposeq: math.Quaternion;
    }
    enum PlayStyle {
        NormalPlay = 0,
        FramePlay = 1,
        PingPang = 2,
    }
    class AniPlayer implements INodeComponent {
        gameObject: GameObject;
        private _clipnameCount;
        private _clipnames;
        readonly clipnames: {
            [key: string]: number;
        };
        clips: AnimationClip[];
        autoplay: boolean;
        private playIndex;
        private _playClip;
        bones: TPoseInfo[];
        startPos: PoseBoneMatrix[];
        tpose: {
            [key: string]: PoseBoneMatrix;
        };
        nowpose: {
            [key: string]: PoseBoneMatrix;
        };
        lerppose: {
            [key: string]: PoseBoneMatrix;
        };
        carelist: {
            [id: string]: Transform;
        };
        private _playFrameid;
        private _playTimer;
        speed: number;
        private crossdelta;
        private crossspeed;
        private beRevert;
        private playStyle;
        private percent;
        mix: boolean;
        isCache: boolean;
        static playerCaches: {
            key: string;
            data: AniPlayer;
        }[];
        readonly cacheKey: string | number;
        private init();
        start(): void;
        update(delta: number): void;
        playByIndex(animIndex: number, speed?: number, beRevert?: boolean): void;
        playCrossByIndex(animIndex: number, crosstimer: number, speed?: number, beRevert?: boolean): void;
        play(animName: string, speed?: number, beRevert?: boolean): void;
        playCross(animName: string, crosstimer: number, speed?: number, beRevert?: boolean): void;
        private playAniamtion(index, speed?, beRevert?);
        stop(): void;
        isPlay(): boolean;
        isStop(): boolean;
        remove(): void;
        clone(): void;
        private finishCallBack;
        private thisObject;
        addFinishedEventListener(finishCallBack: Function, thisObject: any): void;
        private checkFrameId(delay);
        fillPoseData(data: Float32Array, bones: Transform[], efficient?: boolean): void;
        private care(node);
    }
}
declare namespace egret3d.framework {
    class Asbone implements INodeComponent {
        gameObject: GameObject;
        start(): void;
        update(delta: number): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class AudioListener implements INodeComponent {
        gameObject: GameObject;
        start(): void;
        update(deltaTime: number): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class AudioSource2D implements INodeComponent {
        gameObject: GameObject;
        start(): void;
        update(deltaTime: number): void;
        remove(): void;
        clone(): void;
        private _channel;
        private _sound;
        sound: Sound;
        private _volume;
        volume: number;
        private _loop;
        loop: boolean;
        private _playing;
        play(offset?: number): void;
        stop(): void;
    }
}
declare namespace egret3d.framework {
    class AudioSource3D implements INodeComponent {
        gameObject: GameObject;
        start(): void;
        update(deltaTime: number): void;
        remove(): void;
        clone(): void;
        private _channel;
        private _sound;
        sound: Sound;
        private _volume;
        volume: number;
        private _loop;
        loop: boolean;
        private _playing;
        play(offset?: number): void;
        stop(): void;
        maxDistance: number;
        minDistance: number;
        rollOffFactor: number;
        distanceModel: string;
        getVelocity(): math.Vector3;
        setVelocity(x: number, y: number, z: number): void;
    }
}
declare namespace egret3d.framework {
    class BoxCollider implements INodeComponent, ICollider {
        gameObject: GameObject;
        subTran: Transform;
        private filter;
        private obb;
        center: math.Vector3;
        size: math.Vector3;
        getBound(): Obb;
        readonly matrix: egret3d.math.Matrix;
        start(): void;
        update(delta: number): void;
        private _colliderVisible;
        colliderVisible: boolean;
        intersectsTransform(tran: Transform): boolean;
        private build();
        private buildMesh();
        private getColliderMesh();
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    enum CullingMask {
        Everything = 16777215,
        Nothing = 1,
        Default = 2,
        UI = 4,
        UserLayer1 = 8,
        UserLayer2 = 16,
        UserLayer3 = 32,
        UserLayer4 = 64,
        UserLayer5 = 128,
        UserLayer6 = 240,
        UserLayer7 = 256,
        UserLayer8 = 512,
        UserLayer9 = 1024,
        UserLayer10 = 2048,
        UserLayer11 = 3840,
    }
    class Camera implements INodeComponent {
        gameObject: GameObject;
        fov: number;
        size: number;
        opvalue: number;
        private _near;
        near: number;
        private _far;
        far: number;
        CullingMask: CullingMask;
        markDirty(): void;
        start(): void;
        update(delta: number): void;
        clearOption_Color: boolean;
        clearOption_Depth: boolean;
        backgroundColor: egret3d.math.Color;
        viewport: egret3d.math.Rect;
        renderTarget: egret3d.render.GlRenderTarget;
        order: number;
        private overlays;
        addOverLay(overLay: IOverLay): void;
        addOverLayAt(overLay: IOverLay, index: number): void;
        getOverLays(): IOverLay[];
        removeOverLay(overLay: IOverLay): void;
        calcViewMatrix(matrix: egret3d.math.Matrix): void;
        calcProjectMatrix(asp: number, matrix: egret3d.math.Matrix): void;
        calcViewPortPixel(app: Application, viewPortPixel: math.Rect): void;
        creatRayByScreen(screenpos: egret3d.math.Vector2, app: Application): Ray;
        calcWorldPosFromScreenPos(app: Application, screenPos: math.Vector3, outWorldPos: math.Vector3): void;
        calcScreenPosFromWorldPos(app: Application, worldPos: math.Vector3, outScreenPos: math.Vector2): void;
        private calcCameraFrame(app);
        private matView;
        private matProjP;
        private matProjO;
        private matProj;
        private frameVecs;
        getPosAtXPanelInViewCoordinateByScreenPos(screenPos: egret3d.math.Vector2, app: Application, z: number, out: egret3d.math.Vector2): void;
        private testFrustumCulling(scene, node);
        _targetAndViewport(target: render.GlRenderTarget, scene: Scene, context: RenderContext, withoutClear: boolean): void;
        _renderOnce(scene: Scene, context: RenderContext, drawtype: string): void;
        postQueues: ICameraPostQueue[];
        renderScene(scene: Scene, context: RenderContext): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    interface ICameraPostQueue {
        renderTarget: render.GlRenderTarget;
        render(scene: Scene, context: RenderContext, camera: Camera): any;
    }
    class CameraPostQueue_Depth implements ICameraPostQueue {
        renderTarget: render.GlRenderTarget;
        constructor();
        render(scene: Scene, context: RenderContext, camera: Camera): void;
    }
    class CameraPostQueue_Quad implements ICameraPostQueue {
        material: Material;
        renderTarget: render.GlRenderTarget;
        constructor();
        render(scene: Scene, context: RenderContext, camera: Camera): void;
    }
    class CameraPostQueue_Color implements ICameraPostQueue {
        renderTarget: render.GlRenderTarget;
        constructor();
        render(scene: Scene, context: RenderContext, camera: Camera): void;
    }
}
declare namespace egret3d.framework {
    class EffectSystem implements IRenderer {
        frustumTest: boolean;
        gameObject: GameObject;
        layer: RenderLayerEnum;
        renderLayer: egret3d.framework.CullingMask;
        queue: number;
        autoplay: boolean;
        beLoop: boolean;
        private state;
        private curFrameId;
        frameId: number;
        static fps: number;
        private playTimer;
        private speed;
        private parser;
        vf: number;
        particleVF: number;
        private effectBatchers;
        private particles;
        private matDataGroups;
        setEffect(effectConfig: string): void;
        jsonData: Textasset;
        setJsonData(_jsonData: Textasset): void;
        private _data;
        data: EffectSystemData;
        readonly totalFrameCount: number;
        start(): void;
        update(delta: number): void;
        private _update(delta);
        private mergeLerpAttribData(realUseCurFrameData, curFrameData);
        private updateEffectBatcher(effectBatcher, curAttrsData, initFrameData, vertexStartIndex);
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        clone(): EffectSystem;
        play(speed?: number): void;
        pause(): void;
        stop(): void;
        reset(restSinglemesh?: boolean, resetParticle?: boolean): void;
        private resetSingleMesh();
        private resetparticle();
        private addElements();
        private addInitFrame(elementData);
        setFrameId(id: number): void;
        private checkFrameId();
        remove(): void;
        readonly leftLifeTime: number;
    }
}
declare namespace egret3d.framework {
    class Guidpath implements INodeComponent {
        gameObject: GameObject;
        private paths;
        private _pathasset;
        pathasset: Pathasset;
        speed: number;
        private isactived;
        private loopCount;
        play(loopCount?: number): void;
        pause(): void;
        stop(): void;
        replay(loopCount?: number): void;
        isloop: boolean;
        private datasafe;
        private folowindex;
        lookforward: boolean;
        private oncomplete;
        private mystrans;
        setpathasset(pathasset: Pathasset, speed?: number, oncomplete?: () => void): void;
        start(): void;
        update(delta: number): void;
        private adjustDir;
        private followmove(delta);
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    interface ICollider {
        gameObject: GameObject;
        subTran: Transform;
        getBound(): any;
        intersectsTransform(tran: Transform): boolean;
    }
}
declare namespace egret3d.framework {
    interface IOverLay {
        init: boolean;
        start(camera: Camera): any;
        render(context: RenderContext, camera: Camera): any;
        update(delta: number): any;
    }
}
declare namespace egret3d.framework {
    enum LightTypeEnum {
        Direction = 0,
        Point = 1,
        Spot = 2,
    }
    class Light implements INodeComponent {
        gameObject: GameObject;
        isOpen: boolean;
        lightName: string;
        type: LightTypeEnum;
        spotAngelCos: number;
        start(): void;
        update(delta: number): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class MeshCollider implements INodeComponent, ICollider {
        gameObject: GameObject;
        subTran: Transform;
        private mesh;
        getBound(): Mesh;
        start(): void;
        update(delta: number): void;
        private _colliderVisible;
        colliderVisible: boolean;
        intersectsTransform(tran: Transform): boolean;
        private buildMesh();
        private getColliderMesh();
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class MeshFilter implements INodeComponent {
        gameObject: GameObject;
        start(): void;
        update(delta: number): void;
        private _mesh;
        mesh: Mesh;
        getMeshOutput(): Mesh;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class MeshRenderer implements IRenderer {
        frustumTest: boolean;
        gameObject: GameObject;
        layer: RenderLayerEnum;
        renderLayer: egret3d.framework.CullingMask;
        _queue: number;
        queue: number;
        private issetq;
        materials: Material[];
        lightmapIndex: number;
        lightmapScaleOffset: math.Vector4;
        filter: MeshFilter;
        start(): void;
        private refreshLayerAndQue();
        update(delta: number): void;
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class SkinnedMeshRenderer implements IRenderer {
        frustumTest: boolean;
        gameObject: GameObject;
        layer: RenderLayerEnum;
        renderLayer: egret3d.framework.CullingMask;
        _queue: number;
        queue: number;
        private issetq;
        materials: Material[];
        private _player;
        readonly player: AniPlayer;
        private _mesh;
        mesh: Mesh;
        bones: Transform[];
        rootBone: Transform;
        center: math.Vector3;
        size: math.Vector3;
        private maxBoneCount;
        private _skintype;
        private _skeletonMatrixData;
        static dataCaches: {
            key: string;
            data: Float32Array;
        }[];
        private cacheData;
        private _efficient;
        start(): void;
        private getMatByIndex(index);
        intersects(ray: Ray): Pickinfo;
        update(delta: number): void;
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        remove(): void;
        clone(): void;
        private useBoneShader(mat);
    }
}
declare namespace egret3d.framework {
    class Spherestruct {
        center: egret3d.math.Vector3;
        radius: number;
        srcradius: number;
        private tempScale;
        constructor(_center: math.Vector3, _r: number);
        update(worldmatrix: math.Matrix): void;
        intersects(bound: any): boolean;
    }
    class SphereCollider implements INodeComponent, ICollider {
        gameObject: GameObject;
        subTran: Transform;
        private filter;
        private spherestruct;
        center: math.Vector3;
        radius: number;
        private _worldCenter;
        readonly worldCenter: math.Vector3;
        getBound(): Spherestruct;
        readonly matrix: egret3d.math.Matrix;
        start(): void;
        update(delta: number): void;
        private _colliderVisible;
        colliderVisible: boolean;
        intersectsTransform(tran: Transform): boolean;
        private build();
        private buildMesh();
        private getColliderMesh();
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class TrailRender_recorde implements IRenderer {
        frustumTest: boolean;
        layer: RenderLayerEnum;
        renderLayer: egret3d.framework.CullingMask;
        queue: number;
        private _startWidth;
        private _endWidth;
        lifetime: number;
        minStickDistance: number;
        maxStickCout: number;
        private _material;
        private _startColor;
        private _endColor;
        private trailTrans;
        private nodes;
        private mesh;
        private dataForVbo;
        private dataForEbo;
        interpolate: boolean;
        interpNumber: number;
        interpPath: TrailNode[];
        private targetPath;
        material: egret3d.framework.Material;
        startColor: egret3d.math.Color;
        endColor: egret3d.math.Color;
        setWidth(startWidth: number, endWidth?: number): void;
        private activeMaxpointlimit;
        setMaxpointcontroll(value?: boolean): void;
        start(): void;
        private app;
        private webgl;
        update(delta: number): void;
        gameObject: GameObject;
        remove(): void;
        private refreshTrailNode(curTime);
        private notRender;
        private updateTrailData(curTime);
        private checkBufferSize();
        render(context: RenderContext, camera: Camera): void;
        clone(): void;
    }
    class TrailNode {
        location: egret3d.math.Vector3;
        updir: egret3d.math.Vector3;
        time: number;
        handle: egret3d.math.Vector3;
        trailNodes: TrailNode[];
        constructor(p: egret3d.math.Vector3, updir: egret3d.math.Vector3, t: number);
    }
}
declare namespace egret3d.framework {
    class Egret2DRenderer implements IRenderer, ICollider {
        private renderer;
        frustumTest: boolean;
        constructor();
        gameObject: GameObject;
        subTran: Transform;
        getBound(): any;
        intersectsTransform(tran: Transform): boolean;
        layer: RenderLayerEnum;
        renderLayer: CullingMask;
        queue: number;
        stage: egret.Stage;
        private _screenAdapter;
        screenAdapter: IScreenAdapter;
        root: egret.DisplayObjectContainer;
        private app;
        start(): void;
        checkEventThrough(x: number, y: number): boolean;
        private _catchedEvent;
        private _onTouchStart(event);
        private _onTouchMove(event);
        private _onTouchEnd(event);
        screenPosToUIPos(pos: math.Vector2, out?: math.Vector2): math.Vector2;
        private _stageWidth;
        private _stageHeight;
        private _scaler;
        readonly scaler: number;
        update(delta: number): void;
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    class InputManager {
        keyboard: input.KeyboardDevice;
        mouse: input.MouseDevice;
        touch: input.TouchDevice;
        constructor(app: Application);
        update(deltaTime: number): void;
        isPressed(): boolean;
        wasPressed(): boolean;
        wasReleased(): boolean;
        private _touchPoint;
        getTouchPoint(): math.Vector2;
    }
}
declare namespace egret3d.input {
    class KeyboardDevice {
        private _element;
        private preventDefault;
        private stopPropagation;
        private _keymap;
        private _lastmap;
        private _keyDownHandler;
        private _keyUpHandler;
        private _keyPressHandler;
        constructor(element: HTMLElement | Window, options?: {
            preventDefault: boolean;
            stopPropagation: boolean;
        });
        private attach(element);
        private detach();
        private _handleKeyDown(event);
        private _handleKeyPress(event);
        private _handleKeyUp(event);
        private _cacheKeyCodeMap;
        private _toKeyIdentifier(keyCode);
        update(): void;
        isPressed(key: number | string): boolean;
        wasPressed(key: number | string): boolean;
        wasReleased(key: number | string): boolean;
    }
}
declare namespace egret3d.input {
    class MouseDevice extends framework.EventDispatcher {
        private _offsetX;
        private _offsetY;
        private _scaler;
        updateOffsetAndScale(offsetX: number, offsetY: number, scaler: number): void;
        convertPosition(e: MouseEvent, out: math.Vector2): void;
        position: math.Vector2;
        wheel: number;
        private _buttons;
        private _lastbuttons;
        private _element;
        private _upHandler;
        private _moveHandler;
        private _downHandler;
        private _wheelHandler;
        private _contextMenuHandler;
        constructor(element: HTMLElement);
        disableContextMenu(): void;
        enableContextMenu(): void;
        private attach(element);
        private detach();
        update(): void;
        isPressed(button: number): boolean;
        wasPressed(button: number): boolean;
        wasReleased(button: number): boolean;
        private _handleUp(event);
        private _handleMove(event);
        private _handleDown(event);
        private _handleWheel(event);
    }
}
declare namespace egret3d.input {
    enum TouchPhase {
        BEGAN = 0,
        MOVED = 1,
        STATIONARY = 2,
        ENDED = 3,
        CANCELED = 4,
    }
    class TouchPoint {
        altitudeAngle: number;
        azimuthAngle: number;
        deltaPosition: math.Vector2;
        fingerId: number;
        maximumPossiblePressure: number;
        phase: TouchPhase;
        position: math.Vector2;
        pressure: number;
        radius: math.Vector2;
        type: string;
        set(touch: any, phase: TouchPhase, device: TouchDevice): void;
        private static _pointPool;
        static create(): TouchPoint;
        static release(touchPoint: TouchPoint): void;
    }
    class TouchDevice extends framework.EventDispatcher {
        private _offsetX;
        private _offsetY;
        private _scaler;
        updateOffsetAndScale(offsetX: number, offsetY: number, scaler: number): void;
        convertPosition(e: Touch, out: math.Vector2): void;
        private _touchesMap;
        private _touches;
        touchCount: number;
        private _startHandler;
        private _endHandler;
        private _moveHandler;
        private _cancelHandler;
        private _element;
        private preventDefault;
        private stopPropagation;
        constructor(element: HTMLElement, options?: {
            preventDefault: boolean;
            stopPropagation: boolean;
        });
        private attach(element);
        private detach();
        update(): void;
        getTouch(index: number): TouchPoint;
        private _getTouch(identifier);
        private _handleTouchStart(event);
        private _handleTouchEnd(event);
        private _handleTouchMove(event);
        private _handleTouchCancel(event);
    }
}
declare namespace egret3d.io {
    class BinBuffer {
        _buf: Uint8Array[];
        private _seekWritePos;
        private _seekWriteIndex;
        private _seekReadPos;
        private _bufSize;
        getLength(): number;
        getBufLength(): number;
        getBytesAvailable(): number;
        constructor(bufSize?: number);
        reset(): void;
        dispose(): void;
        read(target: Uint8Array | number[], offset?: number, length?: number): void;
        write(array: Uint8Array | number[], offset?: number, length?: number): void;
        getBuffer(): Uint8Array;
        getUint8Array(): Uint8Array;
    }
    class Converter {
        static getApplyFun(value: any): any;
        private static dataView;
        static ULongToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static LongToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Float64ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Float32ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Int32ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Int16ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Int8ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Uint32toArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Uint16ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static Uint8ToArray(value: number, target?: Uint8Array | number[], offset?: number): Uint8Array | number[];
        static StringToUtf8Array(str: string): Uint8Array | number[];
        static ArrayToLong(buf: Uint8Array, offset?: number): number;
        static ArrayToULong(buf: Uint8Array, offset?: number): number;
        static ArrayToFloat64(buf: Uint8Array, offset?: number): number;
        static ArrayToFloat32(buf: Uint8Array, offset?: number): number;
        static ArrayToInt32(buf: Uint8Array, offset?: number): number;
        static ArrayToInt16(buf: Uint8Array, offset?: number): number;
        static ArrayToInt8(buf: Uint8Array, offset?: number): number;
        static ArraytoUint32(buf: Uint8Array, offset?: number): number;
        static ArrayToUint16(buf: Uint8Array, offset?: number): number;
        static ArrayToUint8(buf: Uint8Array, offset?: number): number;
        static ArrayToString(buf: Uint8Array, offset?: number): string;
    }
    class BinTool extends BinBuffer {
        readSingle(): number;
        readLong(): number;
        readULong(): number;
        readDouble(): number;
        readInt8(): number;
        readUInt8(): number;
        readInt16(): number;
        readUInt16(): number;
        readInt32(): number;
        readUInt32(): number;
        readBoolean(): boolean;
        readByte(): number;
        readUnsignedShort(): number;
        readUnsignedInt(): number;
        readFloat(): number;
        readSymbolByte(): number;
        readShort(): number;
        readInt(): number;
        readBytes(length: number): Uint8Array;
        readStringUtf8(): string;
        readStringUtf8FixLength(length: number): string;
        readUTFBytes(length: number): string;
        readStringAnsi(): string;
        readonly length: number;
        writeInt8(num: number): void;
        writeUInt8(num: number): void;
        writeInt16(num: number): void;
        writeUInt16(num: number): void;
        writeInt32(num: number): void;
        writeUInt32(num: number): void;
        writeSingle(num: number): void;
        writeLong(num: number): void;
        writeULong(num: number): void;
        writeDouble(num: number): void;
        writeStringAnsi(str: string): void;
        writeStringUtf8(str: string): void;
        writeStringUtf8DataOnly(str: string): void;
        writeByte(num: number): void;
        writeBytes(array: Uint8Array | number[], offset?: number, length?: number): void;
        writeUint8Array(array: Uint8Array | number[], offset?: number, length?: number): void;
        writeUnsignedShort(num: number): void;
        writeUnsignedInt(num: number): void;
        writeFloat(num: number): void;
        writeUTFBytes(str: string): void;
        writeSymbolByte(num: number): void;
        writeShort(num: number): void;
        writeInt(num: number): void;
    }
}
declare namespace egret3d.io {
    function cloneObj<T>(instanceObj: T, clonedObj?: T): T;
}
declare namespace egret3d.io {
    function stringToBlob(content: string): Blob;
    function stringToUtf8Array(str: string): number[];
}
declare namespace egret3d.io {
    class SerializeDependent {
        static resoursePaths: string[];
        static GetAssetUrl(asset: any): void;
    }
    function SerializeForInspector(obj: any): string;
    function Serialize(obj: any): string;
    function serializeObj(instanceObj: any, serializedObj?: any): any;
    function deSerialize(serializedObj: string, instanceObj: any, bundlename?: string): void;
    function isAsset(type: string): boolean;
    function isAssetInspector(type: string): boolean;
    class ReferenceInfo {
        static oldmap: {
            [id: number]: any;
        };
        static regtypelist: string[];
        static regDefaultType(): void;
        static regType(type: string): void;
        static isRegType(type: string): boolean;
    }
    class EnumMgr {
        static enumMap: {
            [id: string]: any;
        };
    }
}
declare namespace egret3d.io {
    class BinReader {
        private _data;
        constructor(buf: ArrayBuffer, seek?: number);
        private _seek;
        seek(seek: number): void;
        peek(): number;
        length(): number;
        canread(): number;
        readStringAnsi(): string;
        static utf8ArrayToString(array: Uint8Array | number[]): string;
        readStringUtf8(): string;
        readStringUtf8FixLength(length: number): string;
        readSingle(): number;
        readDouble(): number;
        readInt8(): number;
        readUInt8(): number;
        readInt16(): number;
        readUInt16(): number;
        readInt32(): number;
        readUInt32(): number;
        readUint8Array(target?: Uint8Array, offset?: number, length?: number): Uint8Array;
        readUint8ArrayByOffset(target: Uint8Array, offset: number, length?: number): Uint8Array;
        position: number;
        readBoolean(): boolean;
        readByte(): number;
        readBytes(target?: Uint8Array, offset?: number, length?: number): Uint8Array;
        readUnsignedShort(): number;
        readUnsignedInt(): number;
        readFloat(): number;
        readUTFBytes(length: number): string;
        readSymbolByte(): number;
        readShort(): number;
        readInt(): number;
    }
    class BinWriter {
        _buf: Uint8Array;
        private _data;
        private _length;
        private _seek;
        constructor();
        private sureData(addlen);
        getLength(): number;
        getBuffer(): ArrayBuffer;
        seek(seek: number): void;
        peek(): number;
        writeInt8(num: number): void;
        writeUInt8(num: number): void;
        writeInt16(num: number): void;
        writeUInt16(num: number): void;
        writeInt32(num: number): void;
        writeUInt32(num: number): void;
        writeSingle(num: number): void;
        writeDouble(num: number): void;
        writeStringAnsi(str: string): void;
        writeStringUtf8(str: string): void;
        static stringToUtf8Array(str: string): number[];
        writeStringUtf8DataOnly(str: string): void;
        writeUint8Array(array: Uint8Array | number[], offset?: number, length?: number): void;
        readonly length: number;
        writeByte(num: number): void;
        writeBytes(array: Uint8Array | number[], offset?: number, length?: number): void;
        writeUnsignedShort(num: number): void;
        writeUnsignedInt(num: number): void;
        writeFloat(num: number): void;
        writeUTFBytes(str: string): void;
        writeSymbolByte(num: number): void;
        writeShort(num: number): void;
        writeInt(num: number): void;
    }
}
declare namespace egret3d.math {
    function colorSet_White(out: Color): void;
    function colorSet_Black(out: Color): void;
    function colorSet_Gray(out: Color): void;
    function colorMultiply(srca: Color, srcb: Color, out: Color): void;
    function scaleToRef(src: Color, scale: number, out: Color): void;
    function colorClone(src: Color, out: Color): void;
    function colorLerp(srca: Color, srcb: Color, t: number, out: Color): void;
}
declare namespace egret3d.math {
    function calPlaneLineIntersectPoint(planeVector: Vector3, planePoint: Vector3, lineVector: Vector3, linePoint: Vector3, out: Vector3): void;
    function isContain(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2, mp: Vector2): boolean;
    function Multiply(p1: Vector2, p2: Vector2, p0: Vector2): number;
}
declare namespace egret3d.math {
    function matrixGetTranslation(src: Matrix, out: Vector3): void;
    function matrixTranspose(src: Matrix, out: Matrix): void;
    function matrixDecompose(src: Matrix, scale: Vector3, rotation: Quaternion, translation: Vector3): boolean;
    class Angelref {
        v: number;
    }
    function matrix3x2Decompose(src: Matrix3x2, scale: Vector2, rotation: Angelref, translation: Vector2): boolean;
    function matrix2Quaternion(matrix: Matrix, result: Quaternion): void;
    function matrixClone(src: Matrix, out: Matrix): void;
    function matrix3x2Clone(src: Matrix3x2, out: Matrix3x2): void;
    function matrixMakeIdentity(out: Matrix): void;
    function matrix3x2MakeIdentity(out: Matrix3x2): void;
    function matrixInverse(src: Matrix, out: Matrix): void;
    function matrix3x2Inverse(src: Matrix3x2, out: Matrix3x2): void;
    function matrixMakeTransformRTS(pos: Vector3, scale: Vector3, rot: Quaternion, out: Matrix): void;
    function matrix3x2MakeTransformRTS(pos: Vector2, scale: Vector2, rot: number, out: Matrix3x2): void;
    function matrixMakeTranslate(x: number, y: number, z: number, out: Matrix): void;
    function matrix3x2MakeTranslate(x: number, y: number, out: Matrix3x2): void;
    function matrixGetScale(src: Matrix, scale: Vector3): void;
    function matrixMakeScale(xScale: number, yScale: number, zScale: number, out: Matrix): void;
    function matrix3x2TransformVector2(mat: Matrix, inp: Vector2, out: Vector2): void;
    function matrix3x2TransformNormal(mat: Matrix, inp: Vector2, out: Vector2): void;
    function matrix3x2MakeScale(xScale: number, yScale: number, out: Matrix3x2): void;
    function matrixMakeRotateAxisAngle(axis: Vector3, angle: number, out: Matrix): void;
    function matrix3x2MakeRotate(angle: number, out: Matrix3x2): void;
    function matrixMultiply(lhs: Matrix, rhs: Matrix, out: Matrix): void;
    function matrix3x2Multiply(lhs: Matrix3x2, rhs: Matrix3x2, out: Matrix3x2): void;
    function matrixProject_PerspectiveLH(fov: number, aspect: number, znear: number, zfar: number, out: Matrix): void;
    function matrixProject_OrthoLH(width: number, height: number, znear: number, zfar: number, out: Matrix): void;
    function matrixLookatLH(forward: Vector3, up: Vector3, out: Matrix): void;
    function matrixViewLookatLH(eye: Vector3, forward: Vector3, up: Vector3, out: Matrix): void;
    function matrixLerp(left: Matrix, right: Matrix, v: number, out: Matrix): void;
    function matrixTransformVector3(vector: Vector3, transformation: Matrix, result: Vector3): void;
    function matrixTransformNormal(vector: Vector3, transformation: Matrix, result: Vector3): void;
    function matrixGetVector3ByOffset(src: Matrix, offset: number, result: Vector3): void;
    function matrixReset(mat: Matrix): void;
    function matrixZero(mat: Matrix): void;
    function matrixScaleByNum(value: number, mat: Matrix): void;
    function matrixAdd(left: Matrix, right: Matrix, out: Matrix): void;
}
declare namespace egret3d.math {
    function floatClamp(v: number, min?: number, max?: number): number;
    function sign(value: number): number;
    function getKeyCodeByAscii(ev: KeyboardEvent): number;
    function numberLerp(fromV: number, toV: number, v: number): number;
    function x_AXIS(): Vector3;
    function y_AXIS(): Vector3;
    function z_AXIS(): Vector3;
    class CommonStatic {
        static x_axis: egret3d.math.Vector3;
        static y_axis: egret3d.math.Vector3;
        static z_axis: egret3d.math.Vector3;
    }
}
declare namespace egret3d.math {
    function quatNormalize(src: Quaternion, out: Quaternion): void;
    function quatTransformVector(src: Quaternion, vector: Vector3, out: Vector3): void;
    function quatTransformVectorDataAndQuat(src: Float32Array, srcseek: number, vector: Vector3, out: Vector3): void;
    function quatMagnitude(src: Quaternion): number;
    function quatClone(src: Quaternion, out: Quaternion): void;
    function quatToMatrix(src: Quaternion, out: Matrix): void;
    function quatInverse(src: Quaternion, out: Quaternion): void;
    function quatFromYawPitchRoll(yaw: number, pitch: number, roll: number, result: Quaternion): void;
    function quatMultiply(srca: Quaternion, srcb: Quaternion, out: Quaternion): void;
    function quatMultiplyDataAndQuat(srca: Float32Array, srcaseek: number, srcb: Quaternion, out: Quaternion): void;
    function quatMultiplyVector(vector: Vector3, scr: Quaternion, out: Quaternion): void;
    function quatLerp(srca: Quaternion, srcb: Quaternion, out: Quaternion, t: number): void;
    function quatFromAxisAngle(axis: Vector3, angle: number, out: Quaternion): void;
    function quatToAxisAngle(src: Quaternion, axis: Vector3): number;
    function quatFromEulerAngles(ax: number, ay: number, az: number, out: Quaternion): void;
    function quatToEulerAngles(src: Quaternion, out: Vector3): void;
    function quatReset(src: Quaternion): void;
    function quatLookat(pos: Vector3, targetpos: Vector3, out: Quaternion): void;
    function quat2Lookat(pos: Vector3, targetpos: Vector3, out: Quaternion, updir?: egret3d.math.Vector3): void;
    function quatYAxis(pos: Vector3, targetpos: Vector3, out: Quaternion): void;
    function setQuatFromMat4(matrix: Matrix, out: Quaternion): void;
    function setEulerAnglesFromMat4(matrix: Matrix, out: math.Vector3): void;
}
declare namespace egret3d.math {
    function rectSet_One(out: Rect): void;
    function rectSet_Zero(out: Rect): void;
    function rectEqul(src1: Rect, src2: Rect): boolean;
    function rectInner(x: number, y: number, src: Rect): boolean;
}
declare namespace egret3d.math {
    function caclStringByteLength(value: string): number;
}
declare namespace egret3d.math {
    function spriteAnimation(row: number, column: number, index: number, out: Vector4): void;
    function GetPointAlongCurve(curveStart: Vector3, curveStartHandle: Vector3, curveEnd: Vector3, curveEndHandle: Vector3, t: number, out: Vector3, crease?: number): void;
}
declare namespace egret3d.math {
    function vec2Subtract(a: Vector2, b: Vector2, out: Vector2): void;
    function vec2Add(a: Vector2, b: Vector2, out: Vector2): void;
    function vec2Clone(from: Vector2, to: Vector2): void;
    function vec2Distance(a: Vector2, b: Vector2): number;
    function vec2ScaleByNum(from: Vector2, scale: number, out: Vector2): void;
    function vec4Clone(from: Vector4, to: Vector4): void;
    function vec2Length(a: Vector2): number;
    function vec2SLerp(vector: Vector2, vector2: Vector2, v: number, out: Vector2): void;
    function vec2Normalize(from: Vector2, out: Vector2): void;
    function vec2Multiply(a: Vector2, b: Vector2): number;
    function vec2Equal(vector: Vector2, vector2: Vector2, threshold?: number): boolean;
}
declare namespace egret3d.math {
    function vec3Clone(from: Vector3, to: Vector3): void;
    function vec3ToString(result: string): void;
    function vec3Add(a: Vector3, b: Vector3, out: Vector3): void;
    function vec3Subtract(a: Vector3, b: Vector3, out: Vector3): void;
    function vec3Minus(a: Vector3, out: Vector3): void;
    function vec3Length(a: Vector3): number;
    function vec3SqrLength(value: Vector3): number;
    function vec3Set_One(value: Vector3): void;
    function vec3Set_Forward(value: Vector3): void;
    function vec3Set_Back(value: Vector3): void;
    function vec3Set_Up(value: Vector3): void;
    function vec3Set_Down(value: Vector3): void;
    function vec3Set_Left(value: Vector3): void;
    function vec3Set_Right(value: Vector3): void;
    function vec3Normalize(value: Vector3, out: Vector3): void;
    function vec3ScaleByVec3(from: Vector3, scale: Vector3, out: Vector3): void;
    function vec3ScaleByNum(from: Vector3, scale: number, out: Vector3): void;
    function vec3Product(a: Vector3, b: Vector3, out: Vector3): void;
    function vec3Cross(lhs: Vector3, rhs: Vector3, out: Vector3): void;
    function vec3Reflect(inDirection: Vector3, inNormal: Vector3, out: Vector3): void;
    function vec3Dot(lhs: Vector3, rhs: Vector3): number;
    function vec3Project(vector: Vector3, onNormal: Vector3, out: Vector3): void;
    function vec3ProjectOnPlane(vector: Vector3, planeNormal: Vector3, out: Vector3): void;
    function vec3Exclude(excludeThis: Vector3, fromThat: Vector3, out: Vector3): void;
    function vec3Angle(from: Vector3, to: Vector3): number;
    function vec3Distance(a: Vector3, b: Vector3): number;
    function vec3ClampLength(vector: Vector3, maxLength: number, out: Vector3): void;
    function vec3Min(lhs: Vector3, rhs: Vector3, out: Vector3): void;
    function vec3Max(lhs: Vector3, rhs: Vector3, out: Vector3): void;
    function vec3AngleBetween(from: Vector3, to: Vector3): number;
    function vec3Reset(val: Vector3): void;
    function vec3SLerp(vector: Vector3, vector2: Vector3, v: number, out: Vector3): void;
    function vec3SetByFloat(x: number, y: number, z: number, out: Vector3): void;
    function vec3Format(vector: Vector3, maxDot: number, out: Vector3): void;
    function quaternionFormat(vector: Quaternion, maxDot: number, out: Quaternion): void;
    function floatFormat(num: number, maxDot: number): number;
    function vec3Equal(vector: Vector3, vector2: Vector3, threshold?: number): boolean;
}
declare namespace egret3d.framework {
    class EffectSystemData {
        life: number;
        beLoop: boolean;
        elements: EffectElementData[];
        clone(): EffectSystemData;
        dispose(): void;
    }
    class EffectElement {
        private scene;
        transform: Transform;
        data: EffectElementData;
        name: string;
        timelineFrame: {
            [frameIndex: number]: EffectFrameData;
        };
        ref: string;
        actions: IEffectAction[];
        curAttrData: EffectAttrsData;
        effectBatcher: EffectBatcher;
        startIndex: number;
        actionActive: boolean;
        loopFrame: number;
        active: boolean;
        constructor(_data: EffectElementData, scene: Scene);
        private recordElementLerpAttributes();
        private recordLerpValues(effectFrameData);
        private recordLerp(effectFrameData, lerpData, key);
        initActions(): void;
        update(): void;
        private updateElementRotation();
        isActiveFrame(frameIndex: number): boolean;
        setActive(_active: boolean): void;
        dispose(): void;
    }
    class EffectElementData {
        name: string;
        type: EffectElementTypeEnum;
        timelineFrame: {
            [frameIndex: number]: EffectFrameData;
        };
        initFrameData: EffectFrameData;
        ref: string;
        beloop: boolean;
        actionData: EffectActionData[];
        emissionData: Emission;
        clone(): EffectElementData;
        dispose(): void;
    }
    class EffectAttrsData {
        pos: math.Vector3;
        euler: math.Vector3;
        color: math.Vector3;
        colorRate: number;
        scale: math.Vector3;
        uv: math.Vector2;
        alpha: number;
        mat: EffectMatData;
        renderModel: RenderModel;
        matrix: math.Matrix;
        tilling: math.Vector2;
        rotationByEuler: math.Quaternion;
        localRotation: math.Quaternion;
        mesh: Mesh;
        meshdataVbo: Float32Array;
        setLerpAttribute(attribute: string, val: any): void;
        getAttribute(attribute: string): any;
        initAttribute(attribute: string): void;
        resetMatrix(): void;
        copyandinit(): EffectAttrsData;
        clone(): EffectAttrsData;
    }
    class EffectFrameData {
        frameIndex: number;
        attrsData: EffectAttrsData;
        lerpDatas: EffectLerpData[];
        clone(): EffectFrameData;
        dispose(): void;
    }
    class EffectLerpData {
        type: EffectLerpTypeEnum;
        fromFrame: number;
        toFrame: ValueData;
        attrsData: EffectAttrsData;
        attrsList: any[];
        clone(): EffectLerpData;
    }
    class EffectActionData {
        actionType: string;
        startFrame: number;
        endFrame: number;
        params: any[];
        clone(): EffectActionData;
    }
    class EffectMatData {
        shader: Shader;
        diffuseTexture: Texture;
        alphaCut: number;
        static beEqual(data0: EffectMatData, data1: EffectMatData): boolean;
        clone(): EffectMatData;
    }
    class EffectBatcher {
        mesh: Mesh;
        mat: Material;
        beBufferInited: boolean;
        dataForVbo: Float32Array;
        dataForEbo: Uint16Array;
        effectElements: EffectElement[];
        private _totalVertexCount;
        curTotalVertexCount: number;
        private _indexStartIndex;
        indexStartIndex: number;
        private _vbosize;
        resizeVboSize(value: number): void;
        dispose(): void;
        vertexSize: number;
        constructor(formate: number);
    }
    enum EffectPlayStateEnum {
        None = 0,
        BeReady = 1,
        Play = 2,
        Pause = 3,
        Stop = 4,
        Dispose = 5,
    }
    enum EffectElementTypeEnum {
        SingleMeshType = 0,
        EmissionType = 1,
        MultiMeshType = 2,
    }
    enum EffectLerpTypeEnum {
        Linear = 0,
    }
    enum RenderModel {
        None = 0,
        BillBoard = 1,
        StretchedBillBoard = 2,
        HorizontalBillBoard = 3,
        VerticalBillBoard = 4,
        Mesh = 5,
    }
}
declare namespace egret3d.framework {
    enum ParticleEmissionType {
        burst = 0,
        continue = 1,
    }
    class EmissionData {
        type: ParticleEmissionType;
        emissionName: string;
        time: number;
        count: number;
        constructor();
    }
}
declare namespace egret3d.framework {
    class Emission {
        beLoop: boolean;
        paricleLoop: boolean;
        singleMeshLoop: boolean;
        emissionType: ParticleEmissionType;
        rootpos: egret3d.math.Vector3;
        rootRotAngle: egret3d.math.Vector3;
        rootScale: egret3d.math.Vector3;
        maxEmissionCount: number;
        emissionCount: number;
        time: number;
        pos: ParticleNode;
        moveSpeed: ParticleNode;
        gravity: number;
        euler: ParticleNode;
        eulerNodes: Array<ParticleNode>;
        eulerSpeed: ParticleNode;
        scale: ParticleNode;
        scaleNodes: Array<ParticleNodeNumber>;
        scaleSpeed: ParticleNode;
        color: ParticleNode;
        colorRate: number;
        colorNodes: Array<ParticleNode>;
        colorSpeed: ParticleNode;
        simulationSpeed: ParticleNodeNumber;
        alpha: ParticleNodeNumber;
        alphaNodes: Array<ParticleNodeNumber>;
        alphaSpeed: ParticleNodeNumber;
        uv: ParticleNodeVec2;
        uvType: UVTypeEnum;
        uvRoll: UVRoll;
        uvSprite: UVSprite;
        tilling: math.Vector2;
        mat: EffectMatData;
        life: ValueData;
        renderModel: RenderModel;
        mesh: Mesh;
        particleStartData: egret3d.framework.ParticleStartData;
        private dataForVbo;
        getVboData(vf: number): Float32Array;
        clone(): Emission;
        getworldRotation(): void;
        cloneParticleNodeArray(_array: Array<ParticleNode>): ParticleNode[];
        cloneParticleNodeNumberArray(_array: Array<ParticleNodeNumber>): ParticleNodeNumber[];
    }
    class UVSprite {
        row: number;
        column: number;
        totalCount: number;
        clone(): UVSprite;
    }
    class UVRoll {
        uvSpeed: UVSpeedNode;
        uvSpeedNodes: Array<UVSpeedNode>;
        clone(): UVRoll;
    }
    enum UVTypeEnum {
        NONE = 0,
        UVRoll = 1,
        UVSprite = 2,
    }
}
declare namespace egret3d.framework {
    class ParticleNode {
        x: ValueData;
        y: ValueData;
        z: ValueData;
        key: number;
        constructor();
        getValue(): egret3d.math.Vector3;
        getValueRandom(): egret3d.math.Vector3;
        clone(): ParticleNode;
    }
    class AlphaNode {
        alpha: ValueData;
        key: number;
        getValue(): number;
    }
    class UVSpeedNode {
        u: ValueData;
        v: ValueData;
        key: number;
        getValue(): egret3d.math.Vector2;
        getValueRandom(): egret3d.math.Vector2;
        clone(): UVSpeedNode;
    }
    class ParticleNodeVec2 {
        x: ValueData;
        y: ValueData;
        key: number;
        getValue(): egret3d.math.Vector2;
        getValueRandom(): egret3d.math.Vector2;
        clone(): ParticleNodeVec2;
    }
    class ParticleNodeNumber {
        num: ValueData;
        key: number;
        getValue(): number;
        getValueRandom(): number;
        clone(): ParticleNodeNumber;
    }
}
declare namespace egret3d.framework {
    enum ParticleSystemShape {
        NORMAL = 0,
        BOX = 1,
        SPHERE = 2,
        HEMISPHERE = 3,
        CONE = 4,
        EDGE = 5,
        CIRCLE = 6,
    }
    class ParticleStartData {
        shapeType: ParticleSystemShape;
        private _position;
        position: egret3d.math.Vector3;
        private _direction;
        direction: egret3d.math.Vector3;
        private _width;
        width: number;
        private _height;
        height: number;
        depth: number;
        private _radius;
        radius: number;
        private _angle;
        angle: number;
        readonly randomDirection: egret3d.math.Vector3;
        readonly boxDirection: egret3d.math.Vector3;
        readonly sphereDirection: egret3d.math.Vector3;
        readonly hemisphereDirection: egret3d.math.Vector3;
        emitFrom: emitfromenum;
        readonly coneDirection: egret3d.math.Vector3;
        readonly circleDirection: egret3d.math.Vector3;
        readonly edgeDirection: math.Vector3;
        private getposition(dir, length);
        clone(): ParticleStartData;
    }
    enum emitfromenum {
        base = 0,
        volume = 1,
    }
}
declare namespace egret3d.framework {
    class ValueData {
        isRandom: boolean;
        private _value;
        private _valueLimitMin;
        private _valueLimitMax;
        private beInited;
        value: number;
        valueLimitMin: number;
        valueLimitMax: number;
        clone(): ValueData;
        getValue(): number;
        getValueRandom(): number;
        constructor();
        static RandomRange(min: number, max: number, isInteger?: boolean): number;
    }
}
declare namespace egret3d.framework {
    class Curve3 {
        private _beizerPoints;
        private _bezierPointNum;
        beizerPoints: egret3d.math.Vector3[];
        bezierPointNum: number;
        static CreateLinearBezier(start: egret3d.math.Vector3, end: egret3d.math.Vector3, indices: number): Curve3;
        static GetLerpBezier(nodes: egret3d.framework.ParticleNode[]): Curve3;
        static CreateQuadraticBezier(v0: egret3d.math.Vector3, v1: egret3d.math.Vector3, v2: egret3d.math.Vector3, bezierPointNum: number): Curve3;
        static CreateCubicBezier(v0: egret3d.math.Vector3, v1: egret3d.math.Vector3, v2: egret3d.math.Vector3, v3: egret3d.math.Vector3, bezierPointNum: number): Curve3;
        constructor(points: egret3d.math.Vector3[], nbPoints: number);
        getPoints(): math.Vector3[];
    }
}
declare namespace egret3d.framework {
    interface IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): any;
        update(frameIndex: number): any;
    }
    class LinearAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        attriname: string;
        attrival: any;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class DestroyAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class LoopAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class UVRollAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        speedu: number;
        speedv: number;
        startu: number;
        startv: number;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class UVSpriteAnimationAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        fps: number;
        row: number;
        colum: number;
        private frameInternal;
        private spriteIndex;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class RotationAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        velocity: any;
        frameInternal: number;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class RoseCurveAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        radius: number;
        polar: any;
        level: number;
        frameInternal: number;
        speed: number;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class TrailAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        radius: number;
        position: any;
        eular: any;
        width: number;
        frameInternal: number;
        speed: number;
        transform: egret3d.framework.Transform;
        startRotation: egret3d.math.Quaternion;
        color: any;
        alpha: number;
        offsetTransalte: egret3d.math.Vector3;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        update(frameIndex: number): void;
    }
    class BreathAction implements IEffectAction {
        type: string;
        params: any;
        startFrame: number;
        endFrame: number;
        elements: EffectElement;
        attriname: string;
        startvalue: any;
        targetvalue: any;
        loopframe: number;
        halfloopframe: number;
        init(scene: Scene, _startFrame: number, _endFrame: number, _params: any, _elements: EffectElement): void;
        curTargetFrame: number;
        update(frameIndex: number): void;
        swap(): void;
        getLerpValue(frameIndex: number): any;
    }
}
declare namespace egret3d.framework {
    class EffectParser {
        Parse(str: string): EffectSystemData;
        _parseSingleMeshTypeData(elementData: any, element: EffectElementData): void;
        _parseEmissionTypeData(elementData: any, element: EffectElementData): void;
        _parseEmissionShape(_startdata: any, element: EffectElementData): void;
        _parseToObjData(attrib: string, content: any): any;
        _parseToParticleNode(content: string): ParticleNode;
        _parseToValueData(content: string): ValueData;
        _parseToNumberArray(content: string): number[];
    }
}
declare namespace egret3d.framework {
    class EffectUtil {
        static lookatbyXAxis(pos: egret3d.math.Vector3, xAxis: egret3d.math.Vector3, yAxis: egret3d.math.Vector3, zAxis: egret3d.math.Vector3, targetpos: egret3d.math.Vector3, quat: egret3d.math.Quaternion): void;
        static RandomRange(min: number, max: number, isInteger?: boolean): number;
        static vecMuliNum(vec: egret3d.math.Vector3, num: number): egret3d.math.Vector3;
        static parseVector3(value: any): egret3d.math.Vector3;
        static parseEffectVec3(value: any): ParticleNode;
        static parseEffectVec2(value: any): ParticleNodeVec2;
        static parseEffectNum(value: any): ParticleNodeNumber;
        static parseEffectNumNode(value: any): ParticleNodeNumber;
        static parseEffectValueData(value: any): ValueData;
        static parseEffectUVSpeed(value: any): UVSpeedNode;
        static lookat(eye: egret3d.math.Vector3, targetpos: egret3d.math.Vector3, out: egret3d.math.Quaternion, up?: egret3d.math.Vector3): void;
        static RotateVector3(source: egret3d.math.Vector3, direction: egret3d.math.Vector3, out: egret3d.math.Vector3): void;
        static bindAxisBillboard(localAxis: egret3d.math.Vector3, out: egret3d.math.Quaternion): void;
        static lookatVerticalBillboard(eye: egret3d.math.Vector3, targetpos: egret3d.math.Vector3, out: egret3d.math.Quaternion, up?: egret3d.math.Vector3): void;
        static quatLookatZ(eye: egret3d.math.Vector3, targetpos: egret3d.math.Vector3, out: egret3d.math.Quaternion, forward?: egret3d.math.Vector3): void;
        static quatLookatX(eye: egret3d.math.Vector3, targetpos: egret3d.math.Vector3, out: egret3d.math.Quaternion, right?: egret3d.math.Vector3): void;
    }
}
declare namespace egret3d.framework {
    class EmissionBatcher {
        private webgl;
        gameObject: GameObject;
        data: Emission;
        mesh: Mesh;
        mat: Material;
        dataForVbo: Float32Array;
        dataForEbo: Uint16Array;
        particles: Particle[];
        private vertexSize;
        formate: number;
        effectSys: EffectSystem;
        emissionElement: EmissionElement;
        constructor(_data: Emission, effectSys: EffectSystem, emissionElement: EmissionElement);
        initMesh(): void;
        curVerCount: number;
        curIndexCount: number;
        addParticle(): void;
        private refreshBuffer();
        update(delta: number): void;
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        dispose(): void;
    }
}
declare namespace egret3d.framework {
    class Particle {
        gameObject: GameObject;
        renderModel: RenderModel;
        localMatrix: math.Matrix;
        private startScale;
        startRotation: egret3d.math.Quaternion;
        rotationByShape: math.Quaternion;
        euler: math.Vector3;
        rotationByEuler: math.Quaternion;
        localTranslate: math.Vector3;
        localRotation: math.Quaternion;
        localScale: math.Vector3;
        color: math.Vector3;
        colorRate: number;
        uv: math.Vector2;
        alpha: number;
        tilling: math.Vector2;
        private totalLife;
        private curLife;
        private format;
        private speedDir;
        private movespeed;
        private simulationSpeed;
        startFrameId: number;
        data: Emission;
        private batcher;
        private emisson;
        private vertexSize;
        private vertexCount;
        sourceVbo: Float32Array;
        vertexStartIndex: number;
        dataForVbo: Float32Array;
        dataForEbo: Uint16Array;
        constructor(batcher: EmissionBatcher);
        uploadData(array: Float32Array): void;
        initByData(): void;
        actived: boolean;
        update(delta: number): void;
        private matToBatcher;
        private _updateLocalMatrix(delta);
        private _updateRotation(delta);
        private matToworld;
        private _updateElementRotation();
        private _updatePos(delta);
        private _updateEuler(delta);
        private _startNode;
        private endNode;
        private _updateScale(delta);
        private _updateColor(delta);
        private tempStartNode;
        private tempEndNode;
        private _updateNode(nodes, life, out, nodetype?);
        private _startNodeNum;
        private _curNodeNum;
        private _updateAlpha(delta);
        private _startUVSpeedNode;
        private _curUVSpeedNode;
        private spriteIndex;
        private _updateUV(delta);
        private tex_ST;
        private _updateVBO();
        dispose(): void;
    }
    enum nodeType {
        none = 0,
        alpha = 1,
        scale = 2,
    }
}
declare namespace egret3d.framework {
    class Particles {
        gameObject: GameObject;
        name: string;
        emissionElements: EmissionElement[];
        private vf;
        effectSys: EffectSystem;
        loopFrame: number;
        constructor(sys: EffectSystem);
        addEmission(_emissionNew: EffectElementData): void;
        update(delta: number): void;
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        dispose(): void;
    }
    class EmissionElement {
        webgl: WebGLRenderingContext;
        gameObject: GameObject;
        emissionBatchers: EmissionBatcher[];
        private curbatcher;
        deadParticles: Particle[];
        private beloop;
        active: boolean;
        emission: Emission;
        private vf;
        private curTime;
        private numcount;
        private isover;
        private _continueSpaceTime;
        effectSys: EffectSystem;
        perVertexCount: number;
        perIndexxCount: number;
        private maxVertexCount;
        private localtranslate;
        private localScale;
        private localrotate;
        private eluerAngle;
        constructor(_emission: EffectElementData, sys: EffectSystem);
        private worldRotation;
        getWorldRotation(): egret3d.math.Quaternion;
        matToBatcher: egret3d.math.Matrix;
        private matToWorld;
        getmatrixToWorld(): egret3d.math.Matrix;
        update(delta: number): void;
        updateBatcher(delta: number): void;
        updateEmission(delta: number): void;
        addParticle(count?: number): void;
        private addBatcher();
        render(context: RenderContext, camera: egret3d.framework.Camera): void;
        dispose(): void;
        isOver(): boolean;
    }
}
declare namespace egret3d.framework {
    class GameObject {
        getScene(): Scene;
        layer: number;
        hideFlags: HideFlags;
        transform: Transform;
        components: NodeComponent[];
        private componentsInit;
        renderer: IRenderer;
        rendererDirty: boolean;
        camera: Camera;
        light: Light;
        collider: ICollider;
        private _visible;
        readonly visibleInScene: boolean;
        visible: boolean;
        getName(): string;
        init(): void;
        update(delta: number): void;
        addComponentDirect<T extends INodeComponent>(comp: T): T;
        getComponent<T extends INodeComponent>(type: string): T;
        getComponents(): INodeComponent[];
        getComponentsInChildren<T extends INodeComponent>(type: string): T[];
        private _getComponentsInChildren(type, obj, array);
        getComponentInParent<T extends INodeComponent>(type: string): T;
        addComponent<T extends INodeComponent>(type: string): T;
        removeComponent(comp: INodeComponent): void;
        private _removeComponentReference(comp);
        removeComponentByTypeName(type: string): void;
        removeAllComponents(): void;
        dispose(): void;
    }
}
declare namespace egret3d.framework {
    enum HideFlags {
        None = 0,
        HideInHierarchy = 1,
        HideInInspector = 2,
        DontSaveInEditor = 4,
        NotEditable = 8,
        DontSaveInBuild = 16,
        DontUnloadUnusedAsset = 32,
        DontSave = 52,
        HideAndDontSave = 61,
    }
}
declare namespace egret3d.framework {
    interface INodeComponent {
        start(): void;
        update(delta: number): any;
        gameObject: GameObject;
        remove(): void;
        clone(): void;
    }
}
declare namespace egret3d.framework {
    enum RenderLayerEnum {
        Common = 0,
        Transparent = 1,
        UI = 2,
        Overlay = 3,
    }
    interface IRenderer extends INodeComponent {
        frustumTest: boolean;
        layer: RenderLayerEnum;
        renderLayer: CullingMask;
        queue: number;
        render(context: RenderContext, camera: egret3d.framework.Camera): any;
    }
}
declare namespace egret3d.framework {
    class NodeComponent {
        comp: INodeComponent;
        init: boolean;
        constructor(comp: INodeComponent, init?: boolean);
    }
}
declare namespace egret3d.framework {
    class RenderContext {
        webgl: WebGLRenderingContext;
        version: number;
        constructor(webgl: WebGLRenderingContext);
        drawtype: string;
        viewPortPixel: egret3d.math.Rect;
        eyePos: egret3d.math.Vector4;
        matrixView: egret3d.math.Matrix;
        matrixProject: egret3d.math.Matrix;
        matrixModel: egret3d.math.Matrix;
        matrixModelViewProject: egret3d.math.Matrix;
        matrixModelView: egret3d.math.Matrix;
        matrixViewProject: egret3d.math.Matrix;
        floatTimer: number;
        intLightCount: number;
        vec4LightPos: Float32Array;
        vec4LightDir: Float32Array;
        floatLightSpotAngleCos: Float32Array;
        lightmap: egret3d.framework.Texture;
        lightmapUV: number;
        lightmapOffset: egret3d.math.Vector4;
        updateLightmap(texture: Texture, uv: number, offset: math.Vector4): void;
        updateCamera(app: Application, camera: Camera): void;
        updateLights(lights: Light[]): void;
        updateOverlay(): void;
        updateModel(model: Transform): void;
        updateModeTrail(): void;
        boneData: Float32Array;
        updateBones(data: Float32Array): void;
    }
}
declare namespace egret3d.framework {
    class RenderLayer {
        needSort: boolean;
        list: IRenderer[];
        constructor(_sort?: boolean);
    }
    class RenderList {
        constructor();
        clear(): void;
        addRenderer(renderer: IRenderer): void;
        removeRenderer(renderer: IRenderer): void;
        renderLayers: RenderLayer[];
    }
}
declare namespace egret3d.framework {
    class Scene {
        name: string;
        app: Application;
        webgl: WebGLRenderingContext;
        renderList: RenderList;
        constructor(app: Application);
        private rootNode;
        private renderCameras;
        private _mainCamera;
        mainCamera: Camera;
        private renderContext;
        private renderLights;
        lightmaps: Texture[];
        update(delta: number): void;
        private _renderScene(cam, context);
        private _renderOverLay(cam, context);
        private _renderCamera(camindex);
        private updateGameObject(node, delta, forEditor?);
        private collectCameraAndLight(node);
        addChild(node: Transform): void;
        removeChild(node: Transform): void;
        getChildren(): Transform[];
        getChildCount(): number;
        getChild(index: number): Transform;
        getChildByName(name: string): Transform;
        getRoot(): Transform;
        pickAll(ray: Ray, isPickMesh?: boolean): Array<Pickinfo>;
        pick(ray: Ray, isPickMesh?: boolean): Pickinfo;
        private doPick(ray, pickall?, isPickMesh?);
        private pickMesh(ray, tran, pickedList);
        private pickCollider(ray, tran, pickedList);
    }
}
declare namespace egret3d.framework {
    class Aabb {
        minimum: math.Vector3;
        maximum: math.Vector3;
        private _dirtyCenter;
        private _dirtyRadius;
        private srcmin;
        private srcmax;
        constructor(_minimum?: math.Vector3, _maximum?: math.Vector3);
        update(worldmatrix: math.Matrix): void;
        addVector3(vec: math.Vector3): void;
        containsVector3(vec: math.Vector3): boolean;
        intersectAABB(aabb: Aabb): boolean;
        intersectPlane(v0: math.Vector3, v1: math.Vector3, v2: math.Vector3): boolean;
        addAABB(aabb: egret3d.framework.Aabb): void;
        private _center;
        readonly center: math.Vector3;
        readonly radius: number;
        clear(): void;
        clone(): Aabb;
        copy(aabb: Aabb): Aabb;
        getVec3(vecs: math.Vector3[]): void;
    }
}
declare namespace egret3d.framework {
    class Obb {
        center: egret3d.math.Vector3;
        halfsize: egret3d.math.Vector3;
        private directions;
        vectors: egret3d.math.Vector3[];
        buildByMaxMin(minimum: egret3d.math.Vector3, maximum: egret3d.math.Vector3): void;
        buildByCenterSize(center: egret3d.math.Vector3, size: egret3d.math.Vector3): void;
        update(worldmatrix: egret3d.math.Matrix): void;
        caclWorldVecs(vecs: egret3d.math.Vector3[], worldmatrix: egret3d.math.Matrix): void;
        intersects(obb: Obb): boolean;
        private computeBoxExtents(axis, box);
        private axisOverlap(axis, box0, box1);
        private extentsOverlap(min0, max0, min1, max1);
        clone(): Obb;
        dispose(): void;
    }
}
declare namespace egret3d.framework {
    class Pickinfo {
        pickedtran: Transform;
        distance: number;
        hitposition: egret3d.math.Vector3;
        bu: number;
        bv: number;
        faceId: number;
        subMeshId: number;
        constructor(_bu: number, _bv: number, _distance: number);
    }
}
declare namespace egret3d.framework {
    class Ray {
        origin: egret3d.math.Vector3;
        direction: egret3d.math.Vector3;
        constructor(origin: egret3d.math.Vector3, dir: egret3d.math.Vector3);
        intersectAABB(aabb: Aabb): boolean;
        intersectPlaneTransform(tran: Transform): Pickinfo;
        private intersectPlane(planePoint, planeNormal);
        intersectCollider(tran: Transform): Pickinfo;
        intersectBoxMinMax(minimum: egret3d.math.Vector3, maximum: egret3d.math.Vector3): boolean;
        intersectsSphere(center: egret3d.math.Vector3, radius: number): boolean;
        intersectsTriangle(vertex0: egret3d.math.Vector3, vertex1: egret3d.math.Vector3, vertex2: egret3d.math.Vector3): Pickinfo;
    }
}
declare namespace egret3d.framework {
    class InsID {
        private static idAll;
        private _id;
        constructor();
        getInsID(): number;
    }
}
declare namespace egret3d.framework {
    class Transform {
        insId: InsID;
        name: string;
        private _gameObject;
        readonly gameObject: GameObject;
        _scene: Scene;
        readonly scene: Scene;
        children: Transform[];
        private _parent;
        readonly parent: Transform;
        $setScene(scene: Scene | null): void;
        addChild(node: Transform): void;
        addChildAt(node: Transform, index: number): void;
        removeAllChild(): void;
        removeChild(node: Transform): void;
        find(name: string): Transform;
        checkImpactTran(tran: Transform): boolean;
        checkImpact(): Array<Transform>;
        private _doImpact(tran, impacted);
        clone(): Transform;
        private _beDispose;
        readonly beDispose: boolean;
        dispose(): void;
        private _dirtyAABB;
        private _aabb;
        readonly aabb: Aabb;
        private _buildAABB();
        private _dirtyLocal;
        private localMatrix;
        getLocalMatrix(): math.Matrix;
        private _dirtyWorld;
        private worldMatrix;
        getWorldMatrix(): math.Matrix;
        private _sync();
        private _dirtify(local?);
        private localPosition;
        getLocalPosition(): math.Vector3;
        setLocalPosition(v: math.Vector3): void;
        setLocalPosition(x: number, y: number, z: number): void;
        private localScale;
        getLocalScale(): math.Vector3;
        setLocalScale(v: math.Vector3): void;
        setLocalScale(x: number, y: number, z: number): void;
        private localRotation;
        getLocalRotation(): math.Quaternion;
        setLocalRotation(v: math.Quaternion): void;
        setLocalRotation(x: number, y: number, z: number, w: number): void;
        private localEulerAngles;
        getLocalEulerAngles(): math.Vector3;
        setLocalEulerAngles(v: math.Vector3): void;
        setLocalEulerAngles(x: number, y: number, z: number): void;
        private position;
        getPosition(): math.Vector3;
        setPosition(v: math.Vector3): void;
        setPosition(x: number, y: number, z: number): void;
        private scale;
        getScale(): math.Vector3;
        setScale(v: math.Vector3): void;
        setScale(x: number, y: number, z: number): void;
        private rotation;
        getRotation(): math.Quaternion;
        setRotation(v: math.Quaternion): void;
        setRotation(x: number, y: number, z: number, w: number): void;
        private eulerAngles;
        getEulerAngles(): math.Vector3;
        setEulerAngles(v: math.Vector3): void;
        setEulerAngles(x: number, y: number, z: number): void;
        lookAt(target: Transform | math.Vector3): void;
        getForward(out: math.Vector3): void;
        getRight(out: math.Vector3): void;
        getUp(out: math.Vector3): void;
        hasComponent: boolean;
        hasComponentChild: boolean;
        markHaveComponent(): void;
    }
}
declare namespace egret3d.framework {
    class EnumUtil {
        static getEnumObjByType(enumType: string): any;
    }
}
declare namespace egret3d.framework {
    class NumberUtil {
        static KEY_A: number;
        static KEY_D: number;
        static KEY_E: number;
        static KEY_Q: number;
        static KEY_R: number;
        static KEY_S: number;
        static KEY_W: number;
    }
}
declare namespace egret3d.framework {
    class RegexpUtil {
        static textureRegexp: RegExp;
        static vectorRegexp: RegExp;
        static floatRegexp: RegExp;
        static rangeRegexp: RegExp;
        static vector4Regexp: RegExp;
        static vector3FloatOrRangeRegexp: RegExp;
    }
}
declare namespace egret3d.framework {
    class StringUtil {
        static COMPONENT_CAMERA: string;
        static COMPONENT_BOXCOLLIDER: string;
        static COMPONENT_LIGHT: string;
        static COMPONENT_MESHFILTER: string;
        static COMPONENT_MESHRENDER: string;
        static COMPONENT_EFFECTSYSTEM: string;
        static COMPONENT_SKINMESHRENDER: string;
        static COMPONENT_CAMERACONTROLLER: string;
        static COMPONENT_CANVASRENDER: string;
        static COMPONENT_LABEL: string;
        static COMPONENT_IMAGE: string;
        static COMPONENT_RAWIMAGE: string;
        static COMPONENT_BUTTON: string;
        static UIStyle_RangeFloat: string;
        static UIStyle_Enum: string;
        static RESOURCES_MESH_CUBE: string;
        static replaceAll(srcStr: string, fromStr: string, toStr: string): string;
        static trimAll(str: string): string;
        static firstCharToLowerCase(str: string): string;
    }
}
declare namespace egret3d.framework {
    enum PrimitiveType {
        Sphere = 0,
        Capsule = 1,
        Cylinder = 2,
        Cube = 3,
        Plane = 4,
        Quad = 5,
        Pyramid = 6,
    }
    enum Primitive2DType {
        RawImage2D = 0,
        Image2D = 1,
        Label = 2,
        Button = 3,
    }
    class TransformUtil {
        static CreatePrimitive(type: PrimitiveType, app: Application): Transform;
        static Create2DPrimitive(type: Primitive2DType, app: Application): Transform2D;
        private static create2D_rawImage(img, app);
        private static create2D_image2D(img, app);
        private static create2D_label(label, app);
        private static create2D_button(btn, app);
    }
}
declare namespace egret3d.math {
    class Pool {
        static collect_all(): void;
        private static _vector4_one;
        static readonly vector4_one: Vector4;
        private static unused_vector4;
        static new_vector4(): Vector4;
        static clone_vector4(src: Vector4): Vector4;
        static delete_vector4(v: Vector4): void;
        static collect_vector4(): void;
        private static _color_one;
        static readonly color_one: Color;
        private static unused_color;
        static new_color(): Color;
        static delete_color(v: Color): void;
        static collect_color(): void;
        private static _vector3_up;
        static readonly vector3_up: Vector3;
        private static _vector3_right;
        static readonly vector3_right: Vector3;
        private static _vector3_forward;
        static readonly vector3_forward: Vector3;
        private static _vector3_zero;
        static readonly vector3_zero: Vector3;
        private static _vector3_one;
        static readonly vector3_one: Vector3;
        private static unused_vector3;
        static new_vector3(): Vector3;
        static clone_vector3(src: Vector3): Vector3;
        static delete_vector3(v: Vector3): void;
        static collect_vector3(): void;
        private static _vector2_up;
        static readonly vector2_up: Vector2;
        private static _vector2_right;
        static readonly vector2_right: Vector2;
        private static unused_vector2;
        static new_vector2(): Vector2;
        static clone_vector2(src: Vector2): Vector2;
        static delete_vector2(v: Vector2): void;
        static delete_vector2Array(vs: Vector2[]): void;
        static collect_vector2(): void;
        private static unused_matrix3x2;
        static new_matrix3x2(): Matrix3x2;
        static clone_matrix3x2(src: Matrix3x2): Matrix3x2;
        static delete_matrix3x2(v: Matrix3x2): void;
        static collect_matrix3x2(): void;
        private static unused_matrix;
        static new_matrix(): Matrix;
        static clone_matrix(src: Matrix): Matrix;
        static delete_matrix(v: Matrix): void;
        static collect_matrix(): void;
        private static unused_quaternion;
        static new_quaternion(): Quaternion;
        static clone_quaternion(src: Quaternion): Quaternion;
        static delete_quaternion(v: Quaternion): void;
        static collect_quaternion(): void;
    }
}
declare namespace egret3d.render {
    class Caps {
        maxTexturesImageUnits: number;
        maxTextureSize: number;
        maxCubemapTextureSize: number;
        maxRenderTextureSize: number;
        standardDerivatives: boolean;
        s3tc: WEBGL_compressed_texture_s3tc;
        textureFloat: boolean;
        textureAnisotropicFilterExtension: EXT_texture_filter_anisotropic;
        maxAnisotropy: number;
        instancedArrays: ANGLE_instanced_arrays;
        uintIndices: boolean;
        highPrecisionShaderSupported: boolean;
        fragmentDepthSupported: boolean;
        textureFloatLinearFiltering: boolean;
        textureLOD: boolean;
        drawBuffersExtension: any;
        pvrtcExtension: any;
        initialize(gl: WebGLRenderingContext): void;
    }
    class Webglkit {
        private static _maxVertexAttribArray;
        static SetMaxVertexAttribArray(webgl: WebGLRenderingContext, count: number): void;
        private static _texNumber;
        private static _activeTextureIndex;
        static activeTexture(index: number): void;
        private static _showFace;
        static showFace(value: ShowFaceStateEnum): void;
        private static _zWrite;
        static zWrite(value: boolean): void;
        private static _zTest;
        static zTest(value: boolean): void;
        private static _zTestMethod;
        static zTestMethod(value: number): void;
        private static _blend;
        static blend(value: boolean, equation: number, srcRGB: number, destRGB: number, srcAlpha: number, destAlpha: number): void;
        private static _program;
        static useProgram(program: WebGLProgram): boolean;
        static drawArrayTris(webgl: WebGLRenderingContext, start: number, count: number): void;
        static drawArrayLines(webgl: WebGLRenderingContext, start: number, count: number): void;
        static drawElementTris(webgl: WebGLRenderingContext, start: number, count: number): void;
        static drawElementLines(webgl: WebGLRenderingContext, start: number, count: number): void;
        static resetState(): void;
        static webgl: WebGLRenderingContext;
        static FUNC_ADD: number;
        static FUNC_SUBTRACT: number;
        static FUNC_REVERSE_SUBTRACT: number;
        static ONE: number;
        static ZERO: number;
        static SRC_ALPHA: number;
        static SRC_COLOR: number;
        static ONE_MINUS_SRC_ALPHA: number;
        static ONE_MINUS_SRC_COLOR: number;
        static ONE_MINUS_DST_ALPHA: number;
        static ONE_MINUS_DST_COLOR: number;
        static LEQUAL: number;
        static EQUAL: number;
        static GEQUAL: number;
        static NOTEQUAL: number;
        static LESS: number;
        static GREATER: number;
        static ALWAYS: number;
        static NEVER: number;
        static caps: Caps;
        static initConst(webgl: WebGLRenderingContext): void;
    }
}
declare namespace egret3d.render {
    enum ShowFaceStateEnum {
        ALL = 0,
        CCW = 1,
        CW = 2,
    }
    enum DrawModeEnum {
        VboTri = 0,
        VboLine = 1,
        EboTri = 2,
        EboLine = 3,
    }
    enum BlendModeEnum {
        Close = 0,
        Blend = 1,
        Blend_PreMultiply = 2,
        Add = 3,
        Add_PreMultiply = 4,
    }
    class GlDrawPass {
        private _program;
        readonly program: GlProgram;
        readonly uniforms: {
            [key: string]: UniformTypeEnum;
        };
        state_showface: ShowFaceStateEnum;
        state_zwrite: boolean;
        state_ztest: boolean;
        state_ztest_method: number;
        state_blend: boolean;
        state_blendEquation: number;
        state_blendSrcRGB: number;
        state_blendDestRGB: number;
        state_blendSrcAlpha: number;
        state_blendDestALpha: number;
        private vShaderInfo;
        private fShaderInfo;
        constructor(vShaderInfo: framework.ShaderInfo, fShaderInfo: framework.ShaderInfo);
        setAlphaBlend(mode: BlendModeEnum): void;
        use(webgl: WebGLRenderingContext): boolean;
    }
}
declare namespace egret3d.render {
    enum VertexFormatMask {
        Position = 1,
        Normal = 2,
        Tangent = 4,
        Color = 8,
        UV0 = 16,
        UV1 = 32,
        BlendIndex4 = 64,
        BlendWeight4 = 128,
        ColorEX = 256,
    }
    class Number4 {
        v0: number;
        v1: number;
        v2: number;
        v3: number;
    }
    enum MeshTypeEnum {
        Static = 0,
        Dynamic = 1,
        Stream = 2,
    }
    class DrawInfo {
        private static _ins;
        static readonly ins: DrawInfo;
        triCount: number;
        vboCount: number;
        renderCount: number;
    }
    class GlMesh {
        initBuffer(webgl: WebGLRenderingContext, vf: VertexFormatMask, vertexCount: number, mode?: MeshTypeEnum): void;
        addIndex(webgl: WebGLRenderingContext, indexcount: number): number;
        resetVboSize(webgl: WebGLRenderingContext, vertexCount: number): void;
        resetEboSize(webgl: WebGLRenderingContext, eboindex: number, indexcount: number): void;
        dispose(webgl: WebGLRenderingContext): void;
        caclByteLength(): number;
        mode: number;
        vbo: WebGLBuffer;
        vertexCount: number;
        vertexByteSize: number;
        ebos: WebGLBuffer[];
        indexCounts: number[];
        vertexFormat: VertexFormatMask;
        version: number;
        uploadVertexSubData(webgl: WebGLRenderingContext, letray: Float32Array, offset?: number): void;
        uploadIndexSubData(webgl: WebGLRenderingContext, eboindex: number, data: Uint16Array, offset?: number): void;
    }
}
declare namespace egret3d.render {
    class MeshData {
        pos: egret3d.math.Vector3[];
        color: egret3d.math.Color[];
        colorex: egret3d.math.Color[];
        uv: egret3d.math.Vector2[];
        uv2: egret3d.math.Vector2[];
        normal: egret3d.math.Vector3[];
        tangent: egret3d.math.Vector3[];
        blendIndex: Number4[];
        blendWeight: Number4[];
        trisindex: number[];
        static addQuadPos(data: MeshData, quad: egret3d.math.Vector3[]): void;
        static addQuadPos_Quad(data: MeshData, quad: egret3d.math.Vector3[]): void;
        static addQuadVec3ByValue(array: egret3d.math.Vector3[], value: egret3d.math.Vector3): void;
        static addQuadVec3(array: egret3d.math.Vector3[], quad: egret3d.math.Vector3[]): void;
        static addQuadVec2(array: egret3d.math.Vector2[], quad: egret3d.math.Vector2[]): void;
        static genQuad(size: number): MeshData;
        static genQuad_forparticle(size: number): MeshData;
        static genPlaneCCW(size: number): MeshData;
        static genCylinderCCW(height: number, radius: number, segment?: number): MeshData;
        static genPyramid(height: number, halfsize: number): MeshData;
        static genSphereCCW(radius?: number, widthSegments?: number, heightSegments?: number): MeshData;
        static genBoxCCW(size: number): MeshData;
        static genBoxByArray(array: egret3d.math.Vector3[]): MeshData;
        static genBoxByArray_Quad(array: egret3d.math.Vector3[]): MeshData;
        static genCircleLineCCW(radius: number, segment?: number, wide?: number): MeshData;
        caclByteLength(): number;
        static calcByteSize(vf: VertexFormatMask): number;
        genVertexDataArray(vf: VertexFormatMask): Float32Array;
        genIndexDataArray(): Uint16Array;
        genIndexDataArrayTri2Line(): Uint16Array;
        genIndexDataArrayQuad2Line(): Uint16Array;
    }
}
declare namespace egret3d.render {
    class StaticMeshRenderer {
        material: GlDrawPass;
        mesh: GlMesh;
        eboIndex: number;
        drawMode: DrawModeEnum;
        drawbegin: number;
        drawcount: number;
        draw(webgl: WebGLRenderingContext): void;
    }
    class BatchRenderer {
        curmaterial: GlDrawPass;
        mesh: GlMesh;
        drawMode: DrawModeEnum;
        vboCount: number;
        eboCount: number;
        dataForVbo: Float32Array;
        dataForEbo: Uint16Array;
        initBuffer(webgl: WebGLRenderingContext, vf: VertexFormatMask, drawMode: DrawModeEnum): void;
        begin(webgl: WebGLRenderingContext, mat: GlDrawPass): void;
        push(webgl: WebGLRenderingContext, vbodata: number[], ebodata: number[]): void;
        end(webgl: WebGLRenderingContext): void;
    }
}
declare namespace egret3d.render {
    class GlWindow {
        renderTarget: egret3d.render.GlRenderTarget;
        clearop_Color: boolean;
        backColor: egret3d.math.Color;
        clearop_Depth: boolean;
        clearop_Stencil: boolean;
        viewport: egret3d.math.Rect;
        use(webgl: WebGLRenderingContext): void;
    }
}
declare namespace egret3d.render {
    enum UniformTypeEnum {
        Texture = 0,
        Float = 1,
        Floatv = 2,
        Float4 = 3,
        Float4v = 4,
        Float4x4 = 5,
        Float4x4v = 6,
    }
    class GlProgram {
        private static _programMap;
        static get(vShaderInfo: framework.ShaderInfo, fShaderInfo: framework.ShaderInfo): GlProgram;
        program: WebGLProgram;
        private gl;
        private uniforms;
        private _cacheContext;
        private _cacheContextVer;
        private _cacheMesh;
        private _cacheMeshVer;
        private _cacheMeshEbo;
        private _cacheMaterial;
        private _cacheMaterialVer;
        private _vertexAttributeFormat;
        private constructor();
        bindAttributes(mesh: GlMesh, bindEbo?: number, forceUpdate?: boolean): void;
        private _updateRenderContextUniforms(context);
        private setMatrix(key, value);
        private setVector4v(key, value);
        private setFloat(key, value);
        private setFloatv(key, value);
        private setVector4(key, value);
        private setTexture(key, value);
        private _updateUniforms(unifroms);
        private _textureLocations;
        private _cacheTextureUniforms;
        uploadUniforms(material: framework.Material, context: framework.RenderContext, forceUpdate?: boolean): void;
    }
}
declare namespace egret3d.render {
    enum TextureFormatEnum {
        RGBA = 1,
        RGB = 2,
        Gray = 3,
        PVRTC4_RGB = 4,
        PVRTC4_RGBA = 4,
        PVRTC2_RGB = 4,
        PVRTC2_RGBA = 4,
    }
    class TextureReader {
        constructor(webgl: WebGLRenderingContext, texRGBA: WebGLTexture, width: number, height: number, gray?: boolean);
        width: number;
        height: number;
        data: Uint8Array;
        gray: boolean;
        getPixel(u: number, v: number): any;
    }
    interface ITexture {
        texture: WebGLTexture;
        width: number;
        height: number;
        isFrameBuffer(): boolean;
        dispose(webgl: WebGLRenderingContext): any;
        caclByteLength(): number;
    }
    class GlRenderTarget implements ITexture {
        width: number;
        height: number;
        constructor(webgl: WebGLRenderingContext, width: number, height: number, depth?: boolean, stencil?: boolean);
        fbo: WebGLFramebuffer;
        renderbuffer: WebGLRenderbuffer;
        texture: WebGLTexture;
        use(webgl: WebGLRenderingContext): void;
        static useNull(webgl: WebGLRenderingContext): void;
        dispose(webgl: WebGLRenderingContext): void;
        caclByteLength(): number;
        isFrameBuffer(): boolean;
    }
    class GlTexture2D implements ITexture {
        constructor(webgl: WebGLRenderingContext, format?: TextureFormatEnum, mipmap?: boolean, linear?: boolean);
        uploadImage(img: HTMLImageElement, mipmap: boolean, linear: boolean, premultiply?: boolean, repeat?: boolean, mirroredU?: boolean, mirroredV?: boolean): void;
        uploadByteArray(mipmap: boolean, linear: boolean, width: number, height: number, data: Uint8Array, repeat?: boolean, mirroredU?: boolean, mirroredV?: boolean): void;
        webgl: WebGLRenderingContext;
        loaded: boolean;
        texture: WebGLTexture;
        format: TextureFormatEnum;
        width: number;
        height: number;
        mipmap: boolean;
        caclByteLength(): number;
        reader: TextureReader;
        getReader(redOnly?: boolean): TextureReader;
        dispose(webgl: WebGLRenderingContext): void;
        isFrameBuffer(): boolean;
        private static mapTexture;
        static formGrayArray(webgl: WebGLRenderingContext, array: number[] | Float32Array | Float64Array, width: number, height: number): GlTexture2D;
        static staticTexture(webgl: WebGLRenderingContext, name: string): GlTexture2D;
    }
    class WriteableTexture2D implements ITexture {
        constructor(webgl: WebGLRenderingContext, format: TextureFormatEnum, width: number, height: number, linear: boolean, premultiply?: boolean, repeat?: boolean, mirroredU?: boolean, mirroredV?: boolean);
        linear: boolean;
        premultiply: boolean;
        repeat: boolean;
        mirroredU: boolean;
        mirroredV: boolean;
        updateRect(data: Uint8Array, x: number, y: number, width: number, height: number): void;
        updateRectImg(data: ImageData | HTMLVideoElement | HTMLImageElement | HTMLCanvasElement, x: number, y: number): void;
        isFrameBuffer(): boolean;
        webgl: WebGLRenderingContext;
        texture: WebGLTexture;
        format: TextureFormatEnum;
        formatGL: number;
        width: number;
        height: number;
        dispose(webgl: WebGLRenderingContext): void;
        caclByteLength(): number;
    }
}
declare namespace egret3d.framework {
    class TrailRender implements IRenderer {
        frustumTest: boolean;
        gameObject: GameObject;
        layer: RenderLayerEnum;
        renderLayer: egret3d.framework.CullingMask;
        queue: number;
        private mesh;
        private vertexcount;
        private dataForVbo;
        private dataForEbo;
        private sticks;
        private active;
        private reInit;
        start(): void;
        private app;
        private webgl;
        private camerapositon;
        extenedOneSide: boolean;
        update(delta: number): void;
        private _material;
        material: egret3d.framework.Material;
        private _color;
        color: egret3d.math.Color;
        private speed;
        setspeed(upspeed: number): void;
        private width;
        setWidth(Width: number): void;
        play(): void;
        stop(): void;
        lookAtCamera: boolean;
        private initmesh();
        private intidata();
        private updateTrailData();
        render(context: RenderContext, camera: Camera): void;
        clone(): void;
        remove(): void;
    }
}
