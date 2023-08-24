type PremiumMarkProps = {
  className: string;
}

function PremiumMark({ className, }: PremiumMarkProps): React.JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumMark;
