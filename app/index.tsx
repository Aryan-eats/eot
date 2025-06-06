import { Redirect } from "expo-router";
import './globals.css';
import { useAuth } from "@clerk/clerk-expo";


const Home = () => {
  const { isSignedIn } = useAuth()
  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(root)/(tabs)/Cart" />;
};
export default Home;
