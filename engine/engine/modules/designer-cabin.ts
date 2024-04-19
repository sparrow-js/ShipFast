import {
  SettingField,
  isSettingField,
  Designer,
  TransformStage,
  LiveEditing,
  isDragNodeDataObject,
  DragObjectType,
  isNode,
} from '@/engine/designer';
import { Editor } from '@/engine/editor-core';
import { Dragon } from '@/engine/shell';

export default function getDesignerCabin(editor: Editor) {
  const designer = editor.get('designer') as Designer;

  return {
    SettingField,
    isSettingField,
    dragon: Dragon.create(designer.dragon),
    TransformStage,
    LiveEditing,
    DragObjectType,
    isDragNodeDataObject,
    isNode,
  };
}