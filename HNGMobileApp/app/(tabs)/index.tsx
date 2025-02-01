import { View, Text, Button, Linking, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to HNG Stage 0 Task</Text>
    <Button 
      title="Visit GitHub Repo" 
      onPress={() => Linking.openURL('https://github.com/your-username/react-native-hng-task')} 
    />
    <Button 
      title="HNG Hire (React Native Developers)" 
      onPress={() => Linking.openURL('http://hng.tech/hire/react-native-developers')} 
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
