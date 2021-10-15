const packages = [
    {
      "id": 1,
      "cultivo": "Arandano",
      "material": "Carton",
      "tamaño": "11oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Carton 11oz Conv",
      "unidades": 25
    },
    {
      "id": 2,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "11oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Clamshell 11oz Conv",
      "unidades": 400
    },
    {
      "id": 3,
      "cultivo": "Arandano",
      "material": "Carton",
      "tamaño": "11oz",
      "idioma": "Ingles",
      "tipo": "LE",
      "empaque": "BL Carton 11oz LE",
      "unidades": 25
    },
    {
      "id": 4,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "11oz",
      "idioma": "Ingles",
      "tipo": "LE",
      "empaque": "BL Clamshell 11oz LE",
      "unidades": 400
    },
    {
      "id": 5,
      "cultivo": "Arandano",
      "material": "Carton",
      "tamaño": "18oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Carton 18oz Conv",
      "unidades": 25
    },
    {
      "id": 6,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "18oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Clamshell 18oz Conv",
      "unidades": 180
    },
    {
      "id": 7,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "18oz",
      "idioma": "Español",
      "tipo": "Conv Esp",
      "empaque": "BL Clamshell 18oz Conv Esp",
      "unidades": 180
    },
    {
      "id": 8,
      "cultivo": "Arandano",
      "material": "Carton",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Carton 6oz Conv",
      "unidades": 25
    },
    {
      "id": 9,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BL Clamshell 6oz Conv",
      "unidades": 690
    },
    {
      "id": 10,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "6oz",
      "idioma": "Español",
      "tipo": "Conv Esp",
      "empaque": "BL Clamshell 6oz Conv Esp",
      "unidades": 690
    },
    {
      "id": 11,
      "cultivo": "Arandano",
      "material": "Carton",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Pintas",
      "empaque": "BL Carton 12oz Pintas",
      "unidades": 25
    },
    {
      "id": 12,
      "cultivo": "Arandano",
      "material": "Clamshell",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Pintas",
      "empaque": "BL Clamshell 12oz Pintas",
      "unidades": 660
    },
    {
      "id": 13,
      "cultivo": "Frambuesa",
      "material": "Carton",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Carton 12oz Conv",
      "unidades": 25
    },
    {
      "id": 14,
      "cultivo": "Frambuesa",
      "material": "Clamshell",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Clamshell 12oz Conv",
      "unidades": 360
    },
    {
      "id": 15,
      "cultivo": "Frambuesa",
      "material": "Carton",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Carton 6oz Conv",
      "unidades": 25
    },
    {
      "id": 16,
      "cultivo": "Frambuesa",
      "material": "Clamshell",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Clamshell 6oz Conv",
      "unidades": 600
    },
    {
      "id": 17,
      "cultivo": "Frambuesa",
      "material": "Carton",
      "tamaño": "9oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Carton 9oz Conv",
      "unidades": 25
    },
    {
      "id": 18,
      "cultivo": "Frambuesa",
      "material": "Clamshell",
      "tamaño": "9oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "RP Clamshell 9oz Conv",
      "unidades": 400
    },
    {
      "id": 19,
      "cultivo": "Fresa",
      "material": "Carton",
      "tamaño": "16oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "ST Carton 16oz Conv",
      "unidades": 25
    },
    {
      "id": 20,
      "cultivo": "Fresa",
      "material": "Clamshell",
      "tamaño": "16oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "ST Clamshell 16oz Conv",
      "unidades": 352
    },
    {
      "id": 21,
      "cultivo": "Fresa",
      "material": "Clamshell",
      "tamaño": "16oz",
      "idioma": "Español",
      "tipo": "Conv Esp",
      "empaque": "ST Clamshell 16oz Conv Esp",
      "unidades": 352
    },
    {
      "id": 22,
      "cultivo": "Fresa",
      "material": "Carton",
      "tamaño": "32oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "ST Carton 32oz Conv",
      "unidades": 25
    },
    {
      "id": 23,
      "cultivo": "Fresa",
      "material": "Clamshell",
      "tamaño": "32oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "ST Clamshell 32oz Conv",
      "unidades": 188
    },
    {
      "id": 24,
      "cultivo": "Fresa",
      "material": "Clamshell",
      "tamaño": "32oz",
      "idioma": "Español",
      "tipo": "Conv Esp",
      "empaque": "ST Clamshell 32oz Conv Esp",
      "unidades": 188
    },
    {
      "id": 25,
      "cultivo": "Zarzamora",
      "material": "Carton",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Carton 12oz Conv",
      "unidades": 25
    },
    {
      "id": 26,
      "cultivo": "Zarzamora",
      "material": "Clamshell",
      "tamaño": "12oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Clamshell 12oz Conv",
      "unidades": 320
    },
    {
      "id": 27,
      "cultivo": "Zarzamora",
      "material": "Carton",
      "tamaño": "18oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Carton 18oz Conv",
      "unidades": 25
    },
    {
      "id": 28,
      "cultivo": "Zarzamora",
      "material": "Clamshell",
      "tamaño": "18oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Clamshell 18oz Conv",
      "unidades": 270
    },
    {
      "id": 29,
      "cultivo": "Zarzamora",
      "material": "Clamshell",
      "tamaño": "18oz",
      "idioma": "Español",
      "tipo": "Conv Esp",
      "empaque": "BK Clamshell 18oz Conv Esp",
      "unidades": 270
    },
    {
      "id": 30,
      "cultivo": "Zarzamora",
      "material": "Carton",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Carton 6oz Conv",
      "unidades": 25
    },
    {
      "id": 31,
      "cultivo": "Zarzamora",
      "material": "Clamshell",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "Conv",
      "empaque": "BK Clamshell 6oz Conv",
      "unidades": 540
    },
    {
      "id": 32,
      "cultivo": "Zarzamora",
      "material": "Carton",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "LE",
      "empaque": "BK Carton 6oz LE",
      "unidades": 25
    },
    {
      "id": 33,
      "cultivo": "Zarzamora",
      "material": "Clamshell",
      "tamaño": "6oz",
      "idioma": "Ingles",
      "tipo": "LE",
      "empaque": "BK Clamshell 6oz LE",
      "unidades": 540
    }
]

export default packages;