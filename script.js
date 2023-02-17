//Script Exercice 2


function Calculer_Produit()
            {
            var Champ_nombre_1 ;
            var Champ_nombre_2 ;
            var Prix_TTC ;
            Champ_nombre_1= document.getElementById('N1') ;
            Champ_nombre_2 = document.getElementById('N2') ;
            Champ_produit = document.getElementById('Produit') ;
            Nombre_1 = parseFloat(Champ_nombre_1.value);
            Nombre_2 = parseFloat(Champ_nombre_2.value);
            Produit = (Nombre_1)*(Nombre_2);
            Champ_produit.value = Produit ;
            }