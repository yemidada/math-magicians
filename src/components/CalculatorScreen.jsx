// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalculatorScreen(props) {
  const { next, total, operation } = props;
  return (
    <div className="calculator-screen">
      <div className="text">{next || total || operation || 0 }</div>
    </div>
  );
}

CalculatorScreen.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};

CalculatorScreen.defaultProps = {
  next: PropTypes.null,
  total: PropTypes.null,
  operation: PropTypes.null,
};
export default CalculatorScreen;
