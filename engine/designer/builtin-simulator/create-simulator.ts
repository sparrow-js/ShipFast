// NOTE: 仅用作类型标注，切勿作为实体使用
import { BuiltinSimulatorHost } from './host';
import {
  AssetLevel,
  AssetLevels,
  AssetList,
  isAssetBundle,
  isAssetItem,
  AssetType,
  assetItem,
  isCSSUrl,
} from '@/engine/utils';

import { BuiltinSimulatorRenderer } from './renderer';

export function createSimulator(
  host: BuiltinSimulatorHost,
  iframe: HTMLIFrameElement,
  vendors: AssetList = [],
): Promise<BuiltinSimulatorRenderer> {
  const win: any = iframe.contentWindow;
  const doc = iframe.contentDocument!;

  win.LCSimulatorHost = host;

  const styles: any = {};
  const scripts: any = {};
  AssetLevels.forEach((lv) => {
    styles[lv] = [];
    scripts[lv] = [];
  });

  function parseAssetList(assets: AssetList, level?: AssetLevel) {
    for (let asset of assets) {
      if (!asset) {
        continue;
      }
      if (isAssetBundle(asset)) {
        if (asset.assets) {
          parseAssetList(
            Array.isArray(asset.assets) ? asset.assets : [asset.assets],
            asset.level || level,
          );
        }
        continue;
      }
      if (Array.isArray(asset)) {
        parseAssetList(asset, level);
        continue;
      }
      if (!isAssetItem(asset)) {
        asset = assetItem(isCSSUrl(asset) ? AssetType.CSSUrl : AssetType.JSUrl, asset, level)!;
      }
      const id = asset.id ? ` data-id="${asset.id}"` : '';
      const lv = asset.level || level || AssetLevel.Environment;
      if (asset.type === AssetType.JSUrl) {
        (scripts[lv] || scripts[AssetLevel.App]).push(
          `<script src="${asset.content + '?time=' + new Date().getTime()}"${id}></script>`,
        );
      } else if (asset.type === AssetType.JSText) {
        (scripts[lv] || scripts[AssetLevel.App]).push(`<script${id}>${asset.content}</script>`);
      } else if (asset.type === AssetType.CSSUrl) {
        (styles[lv] || styles[AssetLevel.App]).push(
          `<link rel="stylesheet" href="${asset.content}"${id} />`,
        );
      } else if (asset.type === AssetType.CSSText) {
        (styles[lv] || styles[AssetLevel.App]).push(
          `<style type="text/css"${id}>${asset.content}</style>`,
        );
      }
    }
  }

  parseAssetList(vendors);

  const styleFrags = Object.keys(styles)
    .map((key) => {
      return `${styles[key].join('\n')}<meta level="${key}" />`;
    })
    .join('');
  const scriptFrags = Object.keys(scripts)
    .map((key) => {
      return scripts[key].join('\n');
    })
    .join('');
  const style = host.currentDocument?.rootSchema?.style;
  let mode = '';
  let theme = '';
  if (style) {
    mode = style.mode;
    theme = style.theme;
  }
  const htmlContent = `
  <!doctype html>
  <html class="engine-design-mode ${mode}">
    <head><meta charset="utf-8"/>
      ${styleFrags}
      <style>
        .engine-page a{
          pointer-events: none;
        }
        .engine-page button{
          pointer-events: none;
        }
      </style>
    </head>
    <body class="theme-${theme}">
      ${scriptFrags}
    </body>
  </html>`;
  doc.open();
  doc.write(htmlContent);
  doc.close();

  return new Promise((resolve) => {
    if (win.SimulatorRenderer || host.renderer) {
      return resolve(win.SimulatorRenderer || host.renderer);
    }
    const loaded = () => {
      resolve(win.SimulatorRenderer || host.renderer);
      win.removeEventListener('load', loaded);
    };
    win.addEventListener('load', loaded);
  });
}
