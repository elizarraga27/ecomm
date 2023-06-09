db.runCommand({
    collMod: "accounts",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nome_user",
          "email",
          "senha",
          "dataCriacao",
          "cpf",
          "telefone",
          "endereco",
        ],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId"
          },
          nome_user: {
            bsonType: "string",
            minLength: 5
          },
          email: {
            bsonType: "string",
            pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$"
          },
          senha: {
            bsonType: "string",
            minLength: 5
          },
          dataCriacao: {
            bsonType: "date"
          },
          cpf: {
            bsonType: "string",
            pattern: "^[0-9]{11}$"
          },
          telefone: {
            bsonType: "string",
            pattern: "^[0-9]{11}$"
          },
          endereco: {
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
                bsonType: ["number","string"],
                pattern: "^d{1}|[S/N]"
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
                'enum': [
                    'AC',
                    'AL',
                    'AM',
                    'AP',
                    'BA',
                    'CE',
                    'DF',
                    'ES',
                    'GO',
                    'MA',
                    'MG',
                    'MS',
                    'MT',
                    'PA',
                    'PB',
                    'PE',
                    'PI',
                    'PR',
                    'RJ',
                    'RN',
                    'RO',
                    'RR',
                    'RS',
                    'SC',
                    'SE',
                    'SP',
                    'TO'
                ]
              }
            }
          }
        }
      }
    }
  });