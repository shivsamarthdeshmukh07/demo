import {ActivityIndicator, View} from 'react-native';
import styles from '../assets/styles/styles';

export default ActivityI = ({navigation}) => {
  return (
    <View style={styles.loderContainer}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};

export const Activity = ({navigation}) => {
  return (
    <View style={styles.loderContainer}>
      <ActivityIndicator size="small"></ActivityIndicator>
    </View>
  );
};

export const Activit = ({navigation}) => {
  return (
    <View style={styles.loderContainer}>
      <ActivityIndicator size="large" color="black"></ActivityIndicator>
    </View>
  );
};
