import PropTypes from 'prop-types';

import { Line, WrapperStatistics } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <WrapperStatistics>
      <Line>Good: {good}</Line>
      <Line>Neutral: {neutral}</Line>
      <Line>Bad: {bad}</Line>
      <Line>Total: {total} </Line>
      <Line>Positive feedback: {positivePercentage}% </Line>
    </WrapperStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};