export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      global: {
          name: "Nuxt frontend template",
          disconnect: "Déconnexion",
          home: "Accueil",
          legal_notices: "Mentions légales",
          login: "Connexion",
          register: "Inscription",
      },
      legal_notices: {
        "title": "Mentions Légales",
        "name": "Author name",
        "fields": {
          "name": "Nom",
          "address": "Adresse",
          "siren": "SIRET",
          "website": "Site web",
          "contact": "Contact",
          "hosting": "Hébergement"
        },
        "texts": {
          "name": "Author name",
          "address1": "Address 1",
          "address2": "Address 2",
          "address3": "Address 3",
          "siren": "SIREN",
          "website": "hnuxt-frontend-template.traefik.me",
          "contact": "contact[at]domain[dot]fr",
          "hosting": "Home",
          "hosting_address": "Home address",
          "hosting_website": "nuxt-frontend-template.traefik.me",
          "hosting_name": "Home"
        }
      },
      articles: {
        title: 'Articles'
      }
    }
  }
}))