import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './Buttons';
import '../../assets/css/calculator.css';

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
    <div className="main-calculator">
      <h1 className="title">
        Let&apos;s do some maths!
      </h1>
      <div className="container-calculator">
        <div className="calculator">
          <CalculatorScreen next={store.next} operation={store.operation} total={store.total} />
          <CalculatorButtons onClickHandler={onClickHandler} />
        </div>
      </div>

    </div>

  );
}

export default Calculator;
