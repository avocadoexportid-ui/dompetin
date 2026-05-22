import { apiRequest } from "./api.js";

const saldoEl = document.getElementById("saldo");
const pemasukanEl = document.getElementById("pemasukan");
const pengeluaranEl = document.getElementById("pengeluaran");

const loadDashboard = async () => {
  const data = await apiRequest("/reports/dashboard");

  saldoEl.innerText = `Rp ${data.saldo}`;
  pemasukanEl.innerText = `Rp ${data.totalPemasukan}`;
  pengeluaranEl.innerText = `Rp ${data.totalPengeluaran}`;
};

loadDashboard();
