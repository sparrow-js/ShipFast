import * as React from 'react';
import { Input } from '@alifd/next';
import './index.scss';
import ImageSelector from '@/components/engine-ui/image-selector'
import {Button} from '@/components/ui/button';

interface IconsSetterProps {
  value: string;
  defaultValue: string;
  placeholder: string;
  onChange: (val: string) => void;
}

export default class IconsSetter extends React.PureComponent<IconsSetterProps, any> {
  static displayName = 'IconsSetter';

  render() {
    const { onChange, placeholder, value } = this.props;
    return (
      <div>
        <ImageSelector type='icon' imageUrl={value} onChange={onChange}>
          <Button variant="outline" size="sm" className="light sm icon gap-2 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" className="icon w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 16 4.58579-4.5858c.78104-.781 2.04741-.781 2.82841 0L16 16m-2-2 1.5858-1.5858c.781-.781 2.0474-.781 2.8284 0L20 14m-6-6h.01M6 20h12c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2H6c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2Z"></path>
              </svg>
              <span>Replace</span>
          </Button>
        </ImageSelector>
        <Input
          className='mt-2'
          size="small"
          value={value}
          placeholder={placeholder || ''}
          onChange={(val: any) => onChange(val)}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
