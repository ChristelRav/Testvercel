db.voitures.insertMany([
    { marque: "Toyota", modele: "Corolla", annee: 2020, prix: 15000 },
    { marque: "Peugeot", modele: "208", annee: 2019, prix: 13000 },
    { marque: "Tesla", modele: "Model 3", annee: 2022, prix: 40000 }
])

db.profil.insertMany([
    { nomprofil: "Client"},
    { nomprofil: "Mécanicien" },
    { nomprofil: "Manager" }
])

{ 
    "_id": ObjectId("..."), 
    "service": "service1",  
    "sous_service": {  
        "id": ObjectId("..."), 
        "nom": "client"  
        } 
    } 
// mécanicien
    {
        "nom": "Jean Dupont",
        "email": "jean.dupont@mail.com",
        "motdepasse": "motdepasse456!",
        "phone": "0341234567",
        "dateNaissance": "1990-05-12T00:00:00Z"
      }
      {
        "nom": "Alice Martin",
        "email": "alice.martin@mail.com",
        "motdepasse": "alicepwd2025!",
        "phone": "0456789012",
        "dateNaissance": "1988-07-05T00:00:00Z"
      }

      // manager
      {
        "nom": "Admin René",
        "email": "admin.rene@mail.com",
        "motdepasse": "motdepasse789",
        "phone": "0344568293",
        "dateNaissance": "1997-08-12T00:00:00Z"
      }


      {
        "email": "john@example.com",
        "motdepasse": "motdepasse123"
      }

      {
        "email": "admin.rene@mail.com",
        "motdepasse": "motdepasse789"
      }
      
      db.marque.insertMany([
        { nommarque: "Toyota" },
        { nommarque: "Ford" },
        { nommarque: "Mercedes-Benz" },
        { nommarque: "BMW" },
        { nommarque: "Honda" },
        { nommarque: "Yamaha" },
        { nommarque: "Kawasaki" },
        { nommarque: "Ducati" },
        { nommarque: "Scania" },
        { nommarque: "Volvo Trucks" },
        { nommarque: "MAN" }
      ])
      

      db.categorie.insertMany([
        { nomcategorie: "Moto" },
        { nomcategorie: "SUV" },
        { nomcategorie: "4x4" },
        { nomcategorie: "Camion léger" },
        { nomcategorie: "Camion lourd" },
        { nomcategorie: "Berline" }
    ])


    {
      "nomvoiture": "Peugeot 208",
      "immatriculation": "1234ABC",
      "idmarque": "67d3e211849e3bcb9cb71236", 
      "idcategorie": "67d3e4d9849e3bcb9cb7124e"
    }

    {
      "nomvoiture": "Peugeot 308",
      "immatriculation": "4567DEF",
      "idmarque": "67d3e211849e3bcb9cb71236", 
      "idcategorie": "67d3e4d9849e3bcb9cb7124e"
    }

    {
      "nomvoiture": "Toyota rush",
      "immatriculation": "3645TDB",
      "idmarque": "67d3e211849e3bcb9cb71236", 
      "idcategorie": "67d3e4d9849e3bcb9cb7124e"
    } 

    db.etat.insertMany([
      { etat: "en attente" },
      { etat: "présence" },
      { etat: "absence" },
      { etat: "terminé" }
    ]);

    db.blocheure.insertMany([
      { bloc: "7h-8h", ordre: 1 },
      { bloc: "8h-9h", ordre: 2 },
      { bloc: "9h-10h", ordre: 3 },
      { bloc: "10h-11h", ordre: 4 },
      { bloc: "11h-12h", ordre: 5 },
      { bloc: "12h-13h", ordre: 6 },
      { bloc: "13h-14h", ordre: 7 },
      { bloc: "14h-15h", ordre: 8 },
      { bloc: "15h-16h", ordre: 9 },
      { bloc: "16h-17h", ordre: 10 }
  ]);
  
    {
      "idbloc": "67d9270f9d5ca7574cb71250",
      "idetat": "67d6847f2c3402b23cb71237",
      "daterdv": "2024-03-19T10:00:00.000Z",
      "voitureIds": [
        "67d92a68c961cba91434598a"
      ]
    }
    
    
    Angular 
    ok 200
    exception 500
    erreur 400

    http://localhost:5000/api/rdv/admin/listRdv?datetri=2024-03-19

    {
      "nom": "SERVICE ENTRETIEN ET CHANGement DES CONSOMMABLES"
  }
  

  {
    "idService": "67da427814355db78255e224",
    "nomSousService": "Vidange",
    "description": "Huile moteur, boîte de vitesse..."
}

{
  "idService": "67da427814355db78255e224",
  "nomSousService": "Remplacement des essuie-glaces",
  "description": "Installation de nouveaux balais d'essuie-glaces"
}


{
  "nomService": "SERVICE ENTRETIEN ET CHANGEMENT DES CONSOMMABLES",
  "nomSousService": "Vidange",
  "categorieID": "67d3e4d9849e3bcb9cb7124c",  
  "prix": 20000
}

{
  "idService": "67da427814355db78255e224",
  "idSousService": "67dbc48647f65b7fbb972297",
  "categorieID": "67d3e4d9849e3bcb9cb7124c",  
  "prix": 20000
}


{
  "idService": "67da427814355db78255e224",
  "idSousService": "67dbc48647f65b7fbb972297"
}

{
  "idbloc": "67d9270f9d5ca7574cb71250",
  "daterdv": "2025-03-22T10:00:00.000Z",
  "voitureIds": [
    "67d679753dcd603a5d0160c3",
    "67d798459e99b8bf0b218b32"
  ]
}
http://localhost:5000/api/rdv/listBlocDispo?date=2025-03-19

{
  "idbloc": "67d9270f9d5ca7574cb7124e",
  "daterdv": "2025-03-22T10:00:00.000Z",
  "voitureIds": [
    "67d92a68c961cba91434598a"
  ]
}

