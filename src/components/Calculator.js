import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './Buttons';

function Calculator() {
  const [store, setStore] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onClickHandler = (value) => {
    setStore(calculate(store, value));
  };

  return (
    <div className="calculator">
      <CalculatorScreen next={store.next} operation={store.operation} total={store.total} />
      <CalculatorButtons onClickHandler={onClickHandler} />
    </div>
  );
}

export default Calculator;
