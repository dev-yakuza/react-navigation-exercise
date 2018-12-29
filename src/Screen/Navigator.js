import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthLoading from './AuthLoading';
import Auth from './Auth';

import FullDetail from './FullDetail';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

import Detail from './Detail';

const FirstTabStack = createStackNavigator({
  FirstTab,
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
