const userInfo = {
  userName: "Sicília Pierre",
  pollenBalance: 10000,
  orderHistory: [
    {
      id: 1,
      dateOrder: "17/04/2023",
      products: [{ id: 3, name: "Copo térmico de inox 500ml", src: "/Produtos/Copo_Termico_Inox.png", pollen: 70, quantity: 1, subTotal: 70 }, { "id": 1, name: "Agenda com caneta Polén", src: "/Produtos/agenda.jpg", pollen: 70, quantity: 1, subTotal: 70 }],
      total: 140,
      status: "Entregue - Retirada no BEES"
    },
    {
      id: 2,
      dateOrder: "03/05/2023",
      products: [{ id: 5, name: "Abelhinha BEES de pelúcia", src: "/Produtos/pelucia.webp", pollen: 60, quantity: 1, subTotal: 60 }, { id: 7, name: "Power Bank 10000mAh Polén", src: "/Produtos/power.jpeg", pollen: 70, quantity: 1, subTotal: 70 }],
      total: 130,
      status: "Entregue - Retirada no BEES"
    }
    
  ]
};

export default userInfo;