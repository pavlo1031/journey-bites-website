
function Header(props) {
  const { className, style } = props;
  return (<header className={className} style={style}  {...props}>
    header
  </header>);
}

export { Header };