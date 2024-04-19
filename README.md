
# Portfolio Frontend

## Description

Ce projet est le frontend de mon portfolio personnel. Il est construit avec React et utilise EmailJS pour le formulaire de contact. Une police a été importée depuis google fonts.

Voici le lien vers le repo git du backend : https://github.com/Suzy-Lou/portfolio_backend


## Installation

Pour installer ce projet, suivez ces étapes :

1. Clonez le dépôt : `git clone https://github.com/Suzy-Lou/portfolio_backend.git`
2. Installez les dépendances : `pnpm install`
3. Lancez le serveur de développement : `pnpm run dev`

## Utilisation

Ouvrez votre navigateur et accédez à `http://localhost:5173/` pour voir le site en action.

ajoutez un utilisateur dans la base de donnée et utilisez es informations pour vous connecter à la partie admin

lors de la connexion (accessible sur l'icone bonhome) vous aurez accès à une partie administrative permettant d'ajouter des projets ainsi que de les modifier ou les supprimer de la base de donnée

## serveur EmailJs

il sera utile pour la page apropos afin que le formulaire d'envoi de mail fonctionne

https://dashboard.emailjs.com/sign-in

créer un compte
lier votre boîte mail

à ajouter dans le .env : 
VITE_EMAIL_TO= "l'email sur lequel vous voulez recevoir les mails"
VITE_EMAILJS= à retrouver dans Account API keys : Public Key
VITE_EMAILJS_SERVICE_ID= à retrouver après avoir connecté votre serveur de mail (pour gmail : service ID)
VITE_EMAILJS_TEMPLATE_ID= à retrouver dans email template (Template ID)


dans : Email Template : 
créer un template : My Default Template

ajouter dans Subject : {{subject}}
dans content : {{message}}
to email : {{to}}
from name : {{senderName}}
reply to : {{replyto}}

