import styled from 'styled-components';

type Props = JSX.IntrinsicElements["button"] & {
  onIncrementClick: onClick<HTMLButtonElement>;
  onDecrementClick: onClick<HTMLButtonElement>;
};

const CountControls: React.FC<Props> = ({ onIncrementClick, onDecrementClick }) => (
  <div className="count-controls">
    <BigButton id="increment" onClick={onIncrementClick}>+</BigButton>
    <BigButton id="increment" onClick={onDecrementClick}>-</BigButton>
  </div>
);

const BigButton = styled.button`
  width: 50px;
  height: 30px;
`;

export default CountControls;
