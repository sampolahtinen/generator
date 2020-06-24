import React, { useRef, useEffect, useState } from 'react';
import styles from './BarGauge.module.scss';
import { BarGaugeProps } from './types';

const BarGauge = ({ value }: BarGaugeProps) => {
  const [pixelValue, setPixelValue] = useState(0);
  const gaugeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gaugeElement = gaugeRef.current;
    if (gaugeElement) {
      const gaugeWidth = gaugeElement?.offsetWidth;
      const pixels = (value / 100) * gaugeWidth;
      setPixelValue(pixels);
    }
  }, [value]);

  return (
    <div className={styles.percentageGauge} ref={gaugeRef}>
      <span style={{ width: pixelValue }} />
    </div>
  );
};

export default BarGauge;
