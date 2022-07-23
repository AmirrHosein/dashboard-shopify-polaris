import { useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useQuery } from "@apollo/client";
import { Frame, Icon, Navigation, TopBar } from "@shopify/polaris";
import { HomeMajor, JobsMajor, LogOutMinor } from "@shopify/polaris-icons";
import { SHOWTOKENS_QUERY } from "../../graphql/queries";
import Jobs from "../Jobs/Jobs";
import Home from "../Home/Home";
import Root from "../Root/Root";

export default function Dashboard() {
  const { loading, data } = useQuery(SHOWTOKENS_QUERY);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !data.showtokens.status) {
      navigate("/login");
    }
  }, [navigate, data, loading]);

  const hanleOnClickLogout = useCallback(() => {
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  const secondaryMenuMarkup = (
    <TopBar.Menu
      open={false}
      onOpen={hanleOnClickLogout}
      onClose={() => {}}
      actions={[]}
      activatorContent={
        <span>
          <Icon source={LogOutMinor} />
        </span>
      }
    />
  );

  const TopBarMarkup = <TopBar secondaryMenu={secondaryMenuMarkup} />;

  const NavigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section items={items} />
    </Navigation>
  );

  return (
    <Frame topBar={TopBarMarkup} navigation={NavigationMarkup}>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/jobs/*" element={<Jobs />}></Route>
      </Routes>
    </Frame>
  );
}
const items = [
  {
    url: "/home",
    label: "Home",
    icon: HomeMajor,
  },
  {
    url: "/jobs",
    label: "Jobs",
    icon: JobsMajor,
  },
];
