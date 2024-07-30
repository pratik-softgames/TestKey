import * as PIXI from "pixi.js";
import { App } from "@capacitor/app";
import { Viewport } from "pixi-viewport";

export class ExampleComponent {
  private app: PIXI.Application;
  private viewport: Viewport;

  constructor() {
    window.addEventListener("load", this.initializePixi.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
  }

  async initializePixi() {
    this.app = new PIXI.Application();
    await this.app.init({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });
    //document.body.appendChild(this.app.canvas as HTMLCanvasElement);
    document.body.appendChild(this.app.canvas);

    // create viewport
    this.viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 1000,
      worldHeight: 1000,
      events: this.app.renderer.events, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    });

    // add the viewport to the stage
    this.app.stage.addChild(this.viewport);

    // activate plugins
    this.viewport.drag().pinch().wheel().decelerate();

    const sprite = this.viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
    sprite.tint = 0xff0000;
    sprite.width = sprite.height = 100;
    sprite.position.set(100, 100);

    this.appStateChangeListner();
  }

  onResize() {
    // Handle window resize
    console.log("resizeing");
    if (this.app && this.viewport) {
        console.log('resizeing-applied');
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.viewport.resize(window.innerWidth, window.innerHeight);
    }
  }

  private isAppActive: boolean = false;
  private appStateChangeListner(): void {
    App.addListener("appStateChange", (state) => {
      this.isAppActive = state.isActive;
      if (state.isActive) {
        //this.viewport.pause = false;
        this.onResize();
        //this.app.renderer.render(this.app.stage); // Force a render to update        
      }
    });
  }
}
