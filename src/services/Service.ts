import api from "./Api";

// Get
export const buscar = async (url: string, setData: Function) => {
  const response = await api.get(url);
  setData(response.data);
};

// Post
export const cadastrar = async (url: string, data: any, setData: Function) => {
  const response = await api.post(url, data);
  setData(response.data);
};

// Put
export const atualizar = async (url: string, data: any, setData: Function) => {
  const response = await api.put(url, data);
  setData(response.data);
};

// Delete
export const deletar = async (url: string) => {
  await api.delete(url);
};
