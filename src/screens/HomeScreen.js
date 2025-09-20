import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  const salvarTarefa = (nova) => {
    if (nova.id) {
      setTarefas((old) => old.map((t) => (t.id === nova.id ? nova : t)));
    } else {
      setTarefas((old) => [...old, { ...nova, id: Date.now().toString() }]);
    }
  };

  const removerTarefa = (id) => {
    setTarefas((old) => old.filter((t) => t.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Button
        title="Detalhes"
        onPress={() =>
          navigation.navigate("Detalhe", {
            tarefaId: item.id,
            tarefas,
            onExcluir: removerTarefa,
            onSalvar: salvarTarefa,
          })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        title="Adicionar Nova Tarefa"
        onPress={() =>
          navigation.navigate("Form", {
            onSalvar: salvarTarefa,
          })
        }
      />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhuma tarefa cadastrada.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: "#e3e3e3",
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  vazio: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
});
