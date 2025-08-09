import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 2, className = '' }) => {
  const style = {
    animationDuration: `${speed}s`,
  };
  return (
    <span
      className={`shiny-text${disabled ? ' disabled' : ''} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
};

export default ShinyText;