import { useTheme } from '@material-ui/core/styles';

const Home = () => {
  const theme = useTheme();
  const hello = "Hello"
  return <div style={{ color: theme.palette.primary.main }}>{hello}</div>
}

export default Home;
