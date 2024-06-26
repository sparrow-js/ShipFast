import { EventEmitter } from 'events';
import { Node, Designer, Selection, SettingTopEntry } from '@/engine/designer';
import { Editor, obx, computed, makeObservable, action, globalContext } from '@/engine/editor-core';

function generateSessionId(nodes: Node[]) {
  return nodes
    .map((node) => node.id)
    .sort()
    .join(',');
}

export class SettingsMain {
  private emitter = new EventEmitter();

  private _sessionId = '';


  @obx.ref private _settings?: SettingTopEntry;
  @obx.ref private _visbleSubSettingView: boolean = false;
  @obx.ref subSettingView: any = null;

  @computed get visbleSubSettingView() {
    return this._visbleSubSettingView;
  }

  @computed get length(): number | undefined {
    return this._settings?.nodes.length;
  }

  @computed get componentMeta() {
    return this._settings?.componentMeta;
  }

  get settings() {
    return this._settings;
  }

  private disposeListener: () => void;

  private designer?: Designer;

  constructor(readonly editor: Editor) {
    makeObservable(this);
    globalContext.register(this, 'setting')
    this.init();
  }

  private async init() {
    const setupSelection = (selection?: Selection) => {
      if (selection) {
        this.setup(selection.getNodes());
      } else {
        this.setup([]);
      }
    };
    this.editor.on('designer.selection.change', setupSelection);
    this.disposeListener = () => {
      this.editor.removeListener('designer.selection.change', setupSelection);
    };
    const designer = await this.editor.onceGot(Designer);
    this.designer = designer;
    setupSelection(designer.currentSelection);
  }

  @action
  private setup(nodes: Node[]) {
    // check nodes change
    const sessionId = generateSessionId(nodes);
    if (sessionId === this._sessionId) {
      return;
    }
    this._sessionId = sessionId;
    if (nodes.length < 1) {
      this._settings = undefined;
      return;
    }

    if (!this.designer) {
      this.designer = nodes[0].document.designer;
    }
    // 当节点只有一个时，复用 node 上挂载的 settingEntry，不会产生平行的两个实例，这样在整个系统中对
    // 某个节点操作的 SettingTopEntry 只有一个实例，后续的 getProp() 也会拿到相同的 SettingField 实例
    if (nodes.length === 1) {
      this._settings = nodes[0].settingEntry;
    } else {
      this._settings = this.designer.createSettingEntry(nodes);
    }
  }

  showSubSettingView (view: any) {
    this.subSettingView = view;
    this._visbleSubSettingView = true;
  }

  hideSubSettingView () {
    this._visbleSubSettingView = false;
  }



  purge() {
    this.disposeListener();
    this.emitter.removeAllListeners();
  }
}
