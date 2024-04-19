import { Component, Fragment } from 'react';
import classNames from 'classnames';
import { observer } from '@/engine/editor-core';
import Area from '../area';
import Panel from '../widget/panel';

@observer
export default class RightArea extends Component<{ area: Area<any, Panel> }> {
  render() {
    const { area } = this.props;
    return (
      <div className={classNames('lc-right-area overflow-hidden shadow-xl md:rounded-lg  engine-tabpane', {
        'lc-area-visible': area.visible,
      })}
      style={{
        maxHeight: 'calc(-90px + 100vh)'
      }}
      >
        <Contents area={area} />
      </div>
    );
  }
}


@observer
class Contents extends Component<{ area: Area<any, Panel> }> {
  render() {
    const { area } = this.props;
    return (
      <Fragment>
        {area.container.items.map((item) => item.content)}
      </Fragment>
    );
  }
}
