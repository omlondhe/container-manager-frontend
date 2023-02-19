interface SpaceProps {
  height?: number;
  width?: number;
}

function Space({ height = 0, width = 0 }: SpaceProps) {
  return <div style={{ height, width }}></div>;
}

export default Space;
