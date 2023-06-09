db.orders.insertMany([
    {
      dataPedido: new Date(),
      account: {
        accountId: ObjectId("648378d012b228ee3e7c46bf"),
        nomeCliente: "esmirna",
      },
      enderecoEntrega: {
          bairro: "taruma",
          rua: "Rua nova",
          numero: "6589",
          complemento: "apto 14",
          cep: "75814502",
          cidade: "Rio de Janeiro",
          uf: "RJ",
        },
      itens: [
        {
          productId: ObjectId("6483678612b228ee3e7c46ab"),
          quantidade: 1,
          desconto: 36.50,
          precoUnitario: 3523.00,
        },
        {
          productId: ObjectId("6483678612b228ee3e7c46ad"),
          quantidade: 1,
          desconto: 88.50,
          precoUnitario: 102.90,
        },
      ],
    },
    {
      dataPedido: new Date(),
      account: {
        accountId: ObjectId("648378d012b228ee3e7c46c0"),
        nomeCliente: "selene",
      },
      enderecoEntrega: {
          bairro: "caroni",
          rua: "5",
          numero: "4587",
          complemento: "apto 2",
          cep: "87508142",
          cidade: "maringa",
          uf: "PR",
        },
      itens: [
        {
          productId: ObjectId("6483678612b228ee3e7c46b4"),
          quantidade: 1,
          desconto: 150.00,
          precoUnitario: 8549.10,
        },
      ],
    },
  ]);