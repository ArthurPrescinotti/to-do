import React from "react";
import { View, Text, Button, Alert, StyleSheet, Platform } from "react-native";

export default function TarefaDetalheScreen({ route, navigation }) {
  const { tarefaId, tarefas, onSalvar, onExcluir } = route.params;

  const tarefa = tarefas.find((t) => t.id === tarefaId);

  if (!tarefa) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Tarefa não encontrada</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const confirmarExclusao = () => {
    console.log("clicou para excluir");

    if (Platform.OS === "web") {
      const confirm = window.confirm("Deseja realmente excluir esta tarefa?");
      if (confirm) {
        onExcluir(tarefa.id);
        navigation.navigate("Home");
      }
    } else {
      Alert.alert("Excluir tarefa", "Deseja realmente excluir esta tarefa?", [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            onExcluir(tarefa.id);
            navigation.navigate("Home");
          },
        },
      ]);
    }

    console.log("depois do alert");
  };
  const editarTarefa = () => {
    navigation.navigate("Form", {
      tarefa,
      onSalvar,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{tarefa.titulo}</Text>
      <Text style={styles.id}>ID: {tarefa.id}</Text>

      <View style={styles.botoes}>
        <Button title="Editar" onPress={editarTarefa} />
        <Button title="Excluir" color="red" onPress={confirmarExclusao} />
      </View>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  id: { fontSize: 16, marginBottom: 20 },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
