db.createCollection("accounts", 
    {
    validator:{
        $jsonSchema:{
            bsonType: "object",
            "additionalProperties": false,
            "required": [
                "_id",
                "nome_user",
                "email",
                "senha",
                "dataCriacao",
                "cpf",
                "telefone", 
                "endereco"
              ],
              "properties": {
                "_id": {
                  "bsonType": "objectId"
                },
                "nome_user": {
                  "bsonType": "string",
                  "minLength": 5,
                  "description": "informe corretamente o nome de usuario, tem que ter minimo 5 careteres"
                },
                "email": {
                    "bsonType": "string",
                    "minLength": 5,
                    "description": "informe corretamente o email, tem que ter minimo 5 careteres"
                  },
                  "senha": {
                    "bsonType": "string",
                    "minLength": 5,
                    "description": "informe corretamente a senha, tem que ter minimo 5 careteres"
                  },
                  "dataCriacao": {
                    "bsonType": "date",
                  },
                  "cpf": {
                    "bsonType": "string",
                    "minLength": 11,
                    "maxLength": 11,
                    "description": "informe corretamente o cpf"
                  },
                  "telefone": {
                    "bsonType": "string",
                    "minLength": 10,
                    "description": "infrome corretamente o numero de telefone "
                },
                endereco: {
          bsonType: "object",
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            complemento: {
              bsonType: "string",
              description: "Must be a string",
            },
            cep: {
              bsonType: "string",
              pattern: "^[0-9]{8}$",
              description: "Must be a string of exactly 8 digits and is required",
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "Must be a string of at least 5 characters and is required",
            },
            uf: {
              bsonType: "string",
              pattern: "^[A-Z]{2}$",
              description: "Must be a string of exactly 2 uppercase letters and is required",
            }
          }
                    
                }
              }
        }
    }

})
