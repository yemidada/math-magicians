// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalculatorButtons(props) {
  const { onClickHandler } = props;
  return (

    <>
      <div className="calculator-buttons">
        <button onClick={() => onClickHandler('AC')} className="action" type="button">AC</button>
        <button onClick={() => onClickHandler('+/-')} className="action" type="button">+/-</button>
        <button onClick={() => onClickHandler('%')} className="action" type="button">%</button>
        <button onClick={() => onClickHandler('÷')} className="effect" type="button">÷</button>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => onClickHandler('7')} className="action" type="button">7</button>
        <button onClick={() => onClickHandler('8')} className="action" type="button">8</button>
        <button onClick={() => onClickHandler('9')} className="action" type="button">9</button>
        <button onClick={() => onClickHandler('x')} className="effect" type="button">×</button>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => onClickHandler('4')} className="action" type="button">4</button>
        <button onClick={() => onClickHandler('5')} className="action" type="button">5</button>
        <button onClick={() => onClickHandler('6')} className="action" type="button">6</button>
        <button onClick={() => onClickHandler('-')} className="effect" type="button">-</button>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => onClickHandler('1')} className="action" type="button">1</button>
        <button onClick={() => onClickHandler('2')} className="action" type="button">2</button>
        <button onClick={() => onClickHandler('3')} className="action" type="button">3</button>
        <button onClick={() => onClickHandler('+')} className="effect" type="button">+</button>
      </div>
      <div className="calculator-buttons-bottom">
        <button onClick={() => onClickHandler('0')} className="action" type="button">0</button>
        <button onClick={() => onClickHandler('=')} className="effect" type="button">=</button>
      </div>

    </>

  );
}

CalculatorButtons.propTypes = {
  onClickHandler: PropTypes.func,
};

CalculatorButtons.defaultProps = {
  onClickHandler: PropTypes.func,
};
export default CalculatorButtons;
