import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthLoading from './AuthLoading';
import Auth from './Auth';

import FullDetail from './FullDetail';

import TopTabFirst from './TopTabFirst';
import TopTabSecond from './TopTabSecond';
import TopTabThird from './TopTabThird';

import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

import Detail from './Detail';

const TopTab = createMaterialTopTabNavigator({
  TopTabFirst,
  TopTabSecond,
  TopTabThird,
});

const FirstTabStack = createStackNavigator({
  TopTab,
  Detail,
});

const MainTab = createBottomTabNavigator({
  FirstTabStack,
  SecondTab,
  ThirdTab,
});

const MainNavi = createStackNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  FullDetail,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth,
      MainNavi,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
