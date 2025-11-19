import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import { Card, Button, Text, FAB, useTheme, Dialog, Portal } from "react-native-paper";
import { useRouter } from "expo-router";
import produtoService, { Produto } from "../../script/produtoService";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const theme = useTheme(); 

  const [dialogVisible, setDialogVisible] = useState(false);
  const [produtoParaExcluir, setProdutoParaExcluir] = useState<number | null>(null);

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const showDialog = (id: number) => {
    setProdutoParaExcluir(id);
    setDialogVisible(true);
  };
  const hideDialog = () => setDialogVisible(false);

  const handleConfirmDelete = async () => {
    if (produtoParaExcluir !== null) {
      hideDialog();
      setLoading(true);
      try {
        await produtoService.excluir(produtoParaExcluir);
        await carregarProdutos();
      } catch (error) {
        Alert.alert("Erro", "Falha ao excluir produto.");
      } finally {
        setLoading(false);
        setProdutoParaExcluir(null);
      }
    }
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>

      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={hideDialog}
          style={{ backgroundColor: theme.colors.surface }}
        >
          <Dialog.Title>Confirmar Exclusão</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Deseja realmente excluir este produto?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancelar</Button>
            <Button
              onPress={handleConfirmDelete}
              textColor={theme.colors.onSurface}
            >
              Excluir
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <Card
            style={{
              marginBottom: 12,
              // 🛠️ Usa a cor de superfície do tema para o Card
              backgroundColor: theme.colors.surface
            }}
          >
            {/* Card.Title já usa cores do tema */}
            <Card.Title
              title={item.nome}
              subtitle={`R$ ${item.preco.toFixed(2)}`}
            />
            <Card.Actions>
              <Button
                mode="outlined"
                // 🛠️ Usa a cor de texto/destaque (onSurface)
                textColor={theme.colors.onSurface}
                onPress={() => router.replace(`/produtos/${item.id}`)}
                style={{
                  marginRight: 8,
                  backgroundColor: theme.colors.background
                }}
              >
                Editar
              </Button>
              <Button
                mode="contained"
                // 🛠️ Usa a cor de texto do tema (onSurface)
                textColor={theme.colors.onSurface}
                // 💡 CHAMA O DIÁLOGO (showDialog)
                onPress={() => showDialog(item.id!)}
                style={{
                  // 🛠️ Usa a cor secundária (laranja) para o fundo
                  backgroundColor: theme.colors.secondary
                }}
              >
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhum produto cadastrado.
          </Text>
        }
      />
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          backgroundColor: theme.colors.secondary,
          pointerEvents: "auto",
        }}
        onPress={() => router.replace("/produtos/novo")}
        color={theme.colors.onSurface}
      />
    </View>
  );
}