interface VerticalSpaceProps {
  height: number;
}

function VerticalSpace({ height }: VerticalSpaceProps) {
  return <div style={{ height }}></div>;
}

export default VerticalSpace;
