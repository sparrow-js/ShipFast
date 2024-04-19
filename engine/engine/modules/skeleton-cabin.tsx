import {
  Skeleton as InnerSkeleton,
  createSettingFieldView,
  PopupContext,
  PopupPipe,
  Workbench as InnerWorkbench,
} from '@/engine/editor-skeleton';

export default function getSkeletonCabin(skeleton: InnerSkeleton) {
  return {
    createSettingFieldView,
    PopupContext,
    PopupPipe,
    Workbench: (props: any) => <InnerWorkbench {...props} skeleton={skeleton} />, // hijack skeleton
  };
}