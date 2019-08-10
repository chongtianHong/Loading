import React from 'react';
import * as styles from './index.module.less';
class Loading extends React.Component<any> {
  render () {
    return (
      <div className={styles.loading}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
    );
  }
}

export default Loading;
