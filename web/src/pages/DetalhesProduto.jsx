// src/pages/DetalhesProduto.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Paper, Typography, CircularProgress, Button, Box } from "@mui/material";
import productAPI from "../services/prodService"; // Certifique-se de que o nome está correto

export default function DetalhesProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarDetalhes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await productAPI.obter(id);
        setProduto(data);
      } catch (err) {
        console.error("Erro ao carregar detalhes:", err);
        setError("Não foi possível carregar os detalhes do produto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      carregarDetalhes();
    } else {
      setLoading(false);
      setError("ID do produto não fornecido.");
    }
  }, [id]);

  if (loading) {
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;
  }

  if (error) {
    return <Typography color="error" align="center" sx={{ my: 4 }}>{error}</Typography>;
  }

  if (!produto) {
    return <Typography align="center" sx={{ my: 4, color: 'text.primary' }}>Produto não encontrado.</Typography>;
  }

  // Usando a cor 'warning' para o título (conforme seu tema)
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(produto.preco);

  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 600,
        mx: "auto",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom color="warning" fontWeight="bold" align="center">
        Detalhes do Produto
      </Typography>

      <Box sx={{ mt: 3, textAlign: 'left' }}>
        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
          Nome: <span style={{ color: '#e0e1dd', fontWeight: 'normal' }}>{produto.nome}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
          Preço: <span style={{ color: '#e0e1dd', fontWeight: 'normal' }}>{precoFormatado}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
          ID: <span style={{ color: '#e0e1dd', fontWeight: 'normal' }}>{produto.id}</span>
        </Typography>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/editar/${produto.id}`)}
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
        >
          Voltar à Lista
        </Button>
      </Box>
    </Paper>
  );
}