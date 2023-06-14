db.createCollection("orders", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["dataPedido", "account", "enderecoEntrega", "itens"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId"
          },
          dataPedido: {
            bsonType: "date"
          },
          account: {
            bsonType: "object",
            required: ["accountId", "nomeCliente"],
            additionalProperties: false,
            properties: {
              accountId: {
                bsonType: "objectId",
              },
              nomeCliente: {
                bsonType: "string"
              },
            },
          },
          enderecoEntrega: {
            bsonType: "object",
            required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
            additionalProperties: false,
            properties: {
              bairro: {
                bsonType: "string",
                minLength: 1
              },
              rua: {
                bsonType: "string",
                minLength: 1
              },
              numero: {
                bsonType: "string",
                minLength: 1              
              },
              complemento: {
                bsonType: "string"
              },
              cep: {
                bsonType: "string",
                pattern: "^[0-9]{8}$"
              },
              cidade: {
                bsonType: "string",
                minLength: 5
              },
              uf: {
                bsonType: "string",
                pattern: "[A-Z]{2}$"
              },
            },
          },
          itens: {
            bsonType: "array",
            minItems: 1,
            items: {
              bsonType: "object",
              required: ["productId", "quantidade", "precoUnitario"],
              additionalProperties: false,
              properties: {
                productId: {
                  bsonType: "objectId"
                },
                quantidade: {
                  bsonType: "int",
                  minimum: 1
                },
                desconto: {
                  bsonType: ["double", "int"],
                  minimum: 0,
                  exclusiveMinimum: true
                },
                precoUnitario: {
                  bsonType: ["double", "int"],
                  minimum: 0,
                  exclusiveMinimum: true
                },
              },
            },
          },
        },
      },
    },
  });