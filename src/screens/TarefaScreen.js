import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function TarefaScreen({ route, navigation }) {
  const { tarefa, onSalvar } = route.params;
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
    }
  }, [tarefa]);

  const handleSalvar = () => {
    if (!titulo.trim()) {
      Alert.alert("Erro", "O título é obrigatório.");
      return;
    }

    const novaTarefa = tarefa ? { ...tarefa, titulo } : { titulo };
    onSalvar(novaTarefa);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título"
      />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
});
