import axios from "axios";

const API_URL = "https://proweb.leoproti.com.br/produtos";

const listar = async () => {
  const response = await axios.get(API_URL);
  const produtos = response.data.data || response.data;
  return Array.isArray(produtos) ? produtos : [];
};

const obter = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

const criar = async (produto) => {
  const { data } = await axios.post(API_URL, produto);
  return data;
};

const atualizar = async (id, produto) => {
  const { data } = await axios.put(`${API_URL}/${id}`, produto);
  return data;
};

const excluir = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};