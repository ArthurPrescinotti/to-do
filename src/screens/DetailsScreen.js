import { View, Text, Button } from "react-native";
export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params || {};
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text style={{ fontSize: 22 }}>Detalhes do item: {id}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
