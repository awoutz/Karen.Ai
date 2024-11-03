// KarenDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Wifi, Phone, AlertTriangle, Trophy, UserCheck, Clock, Award, Star, Flame,
  Mail, PlugZap, Euro, BookOpen, Scale, Share2, TrendingUp, Users, ThumbsUp,
  Snail, Zap, MessageSquare, Video, Gamepad2, Mic2, Hammer,
} from 'lucide-react';

// Header avec Avatar Karen
const Header = () => (
  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <defs>
          <linearGradient id="hairColor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FFD700' }} />
            <stop offset="100%" style={{ stopColor: '#FFA500' }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#FFE5D9" />
        <path d="M20 40 Q50 20 80 40 Q50 60 20 40" fill="url(#hairColor)" />
        <rect x="30" y="35" width="40" height="5" rx="2" fill="#333" />
        <path d="M40 60 Q50 65 60 60" stroke="#FF69B4" fill="none" strokeWidth="2" />
      </svg>
      <div>
        <h1 className="text-3xl font-bold">Karen.AI™ - Service Client Metrics Escalator</h1>
        <p className="text-sm">Client depuis le 29/08/2011</p>
      </div>
    </div>
  </div>
);

// Section 1 : Timeline Interactive
const Timeline = () => (
  <Card className="bg-white/50 backdrop-blur-sm shadow-lg p-4 mb-6">
    <CardContent>
      <h2 className="text-xl font-semibold mb-4">Historique des Événements Clés</h2>
      {[
        { date: '29/08/2011', label: 'Première Freebox Revolution', icon: <Wifi />, price: '39€/mois' },
        { date: '06/08/2017', label: 'Forfait mobile 2', icon: <Phone />, price: '15.99€/mois' },
        { date: '10/01/2019', label: 'Forfait mobile 3', icon: <Phone />, price: '2€/mois' },
        { date: '25/11/2020', label: 'Incident technicien emportant le Freeplug', icon: <AlertTriangle /> },
        { date: '01/02/2023', label: 'Passage à la Freebox Pop', icon: <Wifi />, price: '30€/mois' },
      ].map((event, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-violet-500 text-white">{event.icon}</div>
          <div>
            <p className="font-bold">{event.date}</p>
            <p>{event.label}</p>
            {event.price && <p className="text-sm text-gray-600">{event.price}</p>}
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

// Section 2 : KPIs Principaux
const KPIs = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {[{ label: 'CA Total généré', value: '9348€', icon: <Euro /> },
      { label: 'Marge Free', value: '2337€', icon: <Euro /> },
      { label: 'Score Client', value: '93%', icon: <Star /> },
      { label: "Niveau d'indignation Karen", value: "It's Over 9000!", icon: <AlertTriangle />, color: 'red-700' },
      { label: 'Freeplug Rebellious', value: 'Comment 20€ ont réveillé Karen', icon: <PlugZap />, color: 'pink-600' }
    ].map((kpi, i) => (
      <Card key={i} className={`bg-${kpi.color || 'green'}-100`}>
        <CardContent className="flex items-center gap-2">
          {kpi.icon}
          <div>
            <p className="text-sm font-semibold">{kpi.label}</p>
            <p className="text-lg font-bold">{kpi.value}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

// Section 3 : Analyse Client
const ClientAnalysis = ({ metrics }) => (
  <Card className="bg-gradient-to-br from-gray-50 to-blue-50 mb-6">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Users className="text-blue-500" />
        Analyse Client
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Nombre total de factures payées</p>
          <p className="text-2xl font-bold text-blue-600">{metrics.totalBillsPaid}</p>
          <p className="text-xs text-gray-500">0 retard, 100% ponctualité</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Réductions et gestes commerciaux</p>
          <p className="text-2xl font-bold text-blue-600">0€</p>
          <p className="text-xs text-gray-500">"Un merci ? C'est trop demander"</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-sm text-gray-600">Jours de fidélité</p>
          <p className="text-2xl font-bold text-blue-600">{metrics.daysAsClient} jours</p>
          <p className="text-xs text-gray-500">"Sans la moindre considération"</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Section 4 : Service Dégradé
const ServiceDegrade = () => {
  const metrics = {
    installDate: '01/07/2021',
    downloadSpeed: '8,64 Mbps',
    uploadSpeed: '0,85 Mbps',
    ping: '59 ms',
    maxPing: '478 ms',
    jitter: '141 ms',
    fibrePotential: '1000 Mbps',
    timeLost: '450 heures',
    droppedCalls: 32,
    gameDeaths: 15,
    lostWords: 750,
  };

  return (
    <Card className="bg-gradient-to-br from-red-50 to-orange-50 mb-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Snail className="text-red-500" />
          Service Dégradé
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Date d’installation', value: metrics.installDate, comment: 'Ligne instable depuis.' },
            { label: 'Débit Descendant', value: metrics.downloadSpeed, comment: 'Parfait pour le streaming... en basse qualité.' },
            { label: 'Débit Ascendant', value: metrics.uploadSpeed, comment: 'Envoyer un fichier ? À vos risques et périls.' },
            { label: 'Ping moyen', value: metrics.ping, comment: `Max : ${metrics.maxPing}, Gigue : ${metrics.jitter}` },
            { label: 'Comparatif Fibre', value: metrics.fibrePotential, comment: 'Pourquoi un vélo quand on peut avoir un TGV ?' },
            { label: 'Temps perdu en chargement', value: metrics.timeLost, comment: 'Un temps précieux gaspillé.' },
            { icon: <Video />, label: 'Visio coupées', value: metrics.droppedCalls },
            { icon: <Gamepad2 />, label: 'Décès en jeu vidéo', value: metrics.gameDeaths },
            { icon: <Mic2 />, label: 'Mots perdus en conf call', value: metrics.lostWords }
          ].map((m, i) => (
            <div key={i} className="bg-white p-4 rounded-lg"> {m.icon && m.icon} <p className="text-sm text-gray-600">{m.label}</p> <p className="text-2xl font-bold text-red-600">{m.value}</p> {m.comment && <p className="text-xs text-gray-500">{m.comment}</p>} </div> ))} </div> </CardContent> </Card> ); };

// Section 5 : Freeplug Central const FreeplugCentral = () => ( <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 mb-6"> <CardContent className="p-6"> <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"> <PlugZap className="text-yellow-500" /> Freeplug Central </h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="bg-white p-4 rounded-lg"> <p className="text-sm text-gray-600">Valeur Initiale</p> <p className="text-2xl font-bold text-yellow-600">20€</p> <p className="text-xs text-gray-500">Valeur d'achat en 2011.</p> </div> <div className="bg-white p-4 rounded-lg"> <p className="text-sm text-gray-600">Valeur Amortie</p> <p className="text-2xl font-bold text-gray-400">0€</p> <p className="text-xs text-gray-500">Amorti sur 13 ans.</p> </div> <div className="bg-white p-4 rounded-lg col-span-2"> <p className="italic text-yellow-600">Comment 20€ ont réveillé Karen après 13 ans de fidélité.</p> <p className="text-xs text-gray-500">Réclamer 20€ après tant d'années ? Un geste commercial inversé.</p> </div> </div> </CardContent> </Card> );

// Section 6 : Karen Legal Corner™ const KarenLegalCorner = () => ( <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 mb-6"> <CardContent className="p-6"> <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"> <BookOpen className="text-blue-500" /> Karen Legal Corner™ </h3> {[ { article: "Incident du technicien (25/11/2020)", description: "Remplacement du Freeplug par un bloc standard, le technicien repartant avec l'original.", note: "Freeplug : une relique de 2011 ?" }, { article: "Pénalité non-restitution", description: "Free réclame une pénalité pour non-restitution alors que le technicien l'a pris.", note: "Logique de collectionneur." }, { article: "Responsabilité & preuve", description: "La charge de la preuve incombe à l'opérateur.", note: "Karen 1 - Free 0" } ].map((item, i) => ( <div key={i} className="bg-white p-4 rounded-lg mb-4"> <h4 className="font-semibold text-gray-800">{item.article}</h4> <p className="text-sm text-gray-600">{item.description}</p> <p className="italic text-xs text-blue-500 mt-2">{item.note}</p> </div> ))} </CardContent> </Card> );

// Section 7 : Impact Social const SocialImpact = () => ( <Card className="bg-gradient-to-br from-purple-50 to-pink-50 mb-6"> <CardContent className="p-6"> <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"> <Share2 className="text-purple-500" /> Impact Social </h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {[ { label: "Portée potentielle LinkedIn", value: "450,000+ vues" }, { label: "Indice viralité", value: "87/100" }, { label: "Portée estimée Twitter", value: "120,000+ vues" }, { label: "Réactions potentielles", value: "25,000+ likes" }, { label: "Partages estimés", value: "15,000+" }, { label: "Impact sur l'image", value: "Dommage significatif" } ].map((metric, i) => ( <div key={i} className="bg-white p-4 rounded-lg"> <p className="text-sm text-gray-600">{metric.label}</p> <p className="text-2xl font-bold text-purple-600">{metric.value}</p> </div> ))} </div> <div className="mt-4 bg-white p-4 rounded-lg"> <p className="text-sm text-gray-700">Hashtags suggérés :</p> <p className="text-lg font-bold text-purple-500">#FreeboxGate #ServiceClient #KarenRevenge</p> </div> </CardContent> </Card> );

// Section 8 : Manager Escalation Metrics™ const ManagerEscalationMetrics = () => ( <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 mb-6"> <CardContent className="p-6"> <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"> <UserCheck className="text-yellow-500" /> Manager Escalation Metrics™ </h3> {[ { label: "Temps avant intervention du manager", value: "48h" }, { label: "Niveau de 'sass'", value: "Maximal" }, { label: "Probabilité d'escalade à Xavier Niel", value: "75%" }, { label: "Nombre de managers vaincus", value: "III 🐱 🤖 🦉" }, { label: "Taux de succès de Karen", value: "100% 🌈" }, { label: "Compte à rebours mode Beast", value: "7 jours" }, { label: "Nombre de mails & appels", value: "10 mails, 4 appels" }, { label: "Estimation coût de traitement", value: "150€" } ].map((m, i) => ( <div key={i} className="bg-white p-4 rounded-lg mb-4"> <p className="text-sm text-gray-600">{m.label}</p> <p className="text-2xl font-bold text-yellow-600">{m.value}</p> </div> ))} </CardContent> </Card> );

// Section 9 : Call-to-Action const CallToAction = () => ( <Card className="bg-gradient-to-br from-pink-50 to-red-50 mb-6"> <CardContent className="p-6"> <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"> <Zap className="text-pink-500" /> Call-to-Action </h3> <div className="bg-white p-4 rounded-lg mb-4"> <p className="italic text-gray-600"> "Cher Free, après 13 ans de fidélité et des milliers d'euros dépensés, je trouve fascinant que vous me réclamiez 20€ pour un Freeplug datant de 2011. Ce dashboard sera partagé avec vos 450,000 amis potentiels sur LinkedIn si besoin. #FreeboxGate #ServiceClient #KarenRevenge" </p> </div> <div className="flex items-center gap-2 bg-red-100 p-4 rounded-lg"> <MessageSquare className="w-5 h-5 text-red-500" /> <p className="text-sm text-red-600"> "Attention : Passage en mode Karen Beast imminent. La mèche argentée est prête." </p> </div> <p className="text-sm mt-4 text-gray-700"> Il est encore temps de corriger la situation et de préserver une relation client de plus de 13 ans. Je vous invite à reconsidérer votre position et à clore ce dossier avec bienveillance. </p> </CardContent> </Card> );

// Composant Principal const KarenDashboard = () => (

  <div>
    <Header />
    <Timeline />
    <KPIs />
    <ClientAnalysis metrics={{ totalBillsPaid: 156, daysAsClient: 4860 }} />
    <ServiceDegrade />
    <FreeplugCentral />
    <KarenLegalCorner />
    <SocialImpact />
    <ManagerEscalationMetrics />
    <CallToAction />
  </div>
);export default KarenDashboard;
