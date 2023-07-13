// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function QuoteList(props) {
  const { data } = props;
  return (
    <ul className="quote">
      {
        data.map((q) => (
          <li key={q}>
            <h3>{q.quote}</h3>
            <p>
              {q.author}
              {' '}
              -
              {' '}
              <span>{q.category}</span>
            </p>
          </li>
        ))
      }
    </ul>
  );
}

QuoteList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

QuoteList.defaultProps = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default QuoteList;
