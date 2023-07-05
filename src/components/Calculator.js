function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-screen">
        <div className="text">0</div>
      </div>
      <div className="calculator-buttons">
        <button className="action" type="button">AC</button>
        <button className="action" type="button">+/-</button>
        <button className="action" type="button">%</button>
        <button className="effect" type="button">÷</button>
      </div>
      <div className="calculator-buttons">
        <button className="action" type="button">7</button>
        <button className="action" type="button">8</button>
        <button className="action" type="button">9</button>
        <button className="effect" type="button">×</button>
      </div>
      <div className="calculator-buttons">
        <button className="action" type="button">4</button>
        <button className="action" type="button">5</button>
        <button className="action" type="button">6</button>
        <button className="effect" type="button">-</button>
      </div>
      <div className="calculator-buttons">
        <button className="action" type="button">1</button>
        <button className="action" type="button">2</button>
        <button className="action" type="button">3</button>
        <button className="effect" type="button">+</button>
      </div>
      <div className="calculator-buttons-bottom">
        <button className="action" type="button">0</button>
        <button className="effect" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
