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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

QuoteList.defaultProps = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

export default QuoteList;
